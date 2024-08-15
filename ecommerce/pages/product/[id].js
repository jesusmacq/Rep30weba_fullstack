//Nombrar un archivo con corchetes [id].js 
//Es una conveción de nomenclatura que generalmente se eutiliza para identificar
// de manera única un archivo en un proyecto.
//Aquí hay una razon la que se podría adpotar esta convención:
//1. Identificación única: 
// Al utilizar corchetes [id], se puede identificar de manera única un archivo en un proyecto.
// que no haya conflictos con otros archivos en el mismo directorio o proyecto.
import React from 'react'
import { useRouter } from 'next/router'
import { data } from '../../utils/data'
const ProductPage = () => {
  const router = useRouter() //es un hook de next
  const { id } = router.query //es un objeto que contiene la información de la ruta actual
  const product = data.products.find((product) => product.id === parseInt(id))
  if (!product) {
        return <div> 404 | Product not Found </div>
    }
  return (
    <div>
      {`Product: id - ${id}`}	
    </div>
  )
}

export default ProductPage