//Conexxion a la base de datos
import mongoose from 'mongoose' 

const connection = {}

async function connect() {
    if(connection.isConnected){ //Si ya está conectado poner return
        console.log("Conexión Exitosa 🚀")
        return
    }
    if(mongoose.connections.length > 0){ //Si ya hay coneciones
        connection.isConnected = mongoose.connections[0].readyState; //Si la conexión es 1
        if(connection.isConnected === 1){
            console.log("Usando ya conectado 💻");
            return
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URI)
    console.log("Nueva Conexión 😉");
    connection.isConnected = db.connections[0].readyState
}
async function disconnect() {
    if(connection.isConnected){
        if(process.env.NODE_ENV === "production") {
            await mongoose.disconnect()
            connection.isConnected = false
        }else{
            console.log("No se desconectó 💻")
        }
    }
}
function convertDocToObj() {

}

const db = { connect, disconnect, convertDocToObj } 

export default db