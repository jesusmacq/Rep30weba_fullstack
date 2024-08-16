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
import{
    Container, SimpleGrid, Flex, Image, Heading, Stack, 
    Text, Box, Button, useColorModeValue, 
    Center} from '@chakra-ui/react'
const ProductPage = () => {
    const router = useRouter() //es un hook de next
    const { id } = router.query //es un objeto que contiene la información de la ruta actual
    const product = data.products.find((product) => product.id === parseInt(id))
    if (!product) {
        return <div> 404 | Product not Found </div>
    }
    return (
        <Container maxW={'container.xl'} mt={2}>
            <SimpleGrid columns={[1,2]} spacing={2}>
                <Flex>
                    <Image 
                    src={`/images/${product.image}`} 
                    fit={'cover'}
                    alt={product.title}
                    align={'center'}
                    h={'100%'}
                    w={{base: '100%', sm: '400px', lg: '500px'}}
                    rounded={'md'}
                    />
                </Flex>
                <Stack spacing={{base: 6, md: 10}}>
                    <Box>
                        <Heading
                        fontWeight={600}
                        fontSize={{base: '2xl', sm: '4xl', lg: '4xl'}}
                        >{product.title}</Heading>
                        <Text
                        color={useColorModeValue('gray.900', 'gray.400')}
                        fontWeight={350}
                        fontSize={'2xl'}
                        >
                            {`$${product.price} USD`}
                        </Text>
                    </Box>
                        <Text
                        color={useColorModeValue('gray.500', 'gray.700')}
                        fontSize={'lg'}
                        >
                            {product.description}
                        </Text>
                        <Flex alignItems={'end'}>
                            <Button
                            rounded={'md'} w={'full'} mt={8} size={'md'} py={'7'}
                            bg={useColorModeValue('gray.900', 'gray.50')}
                            color={useColorModeValue('white', 'gray.900')}
                            textTransform={'uppercase'}
                            >
                                Add to Cart
                            </Button>
                        </Flex>


                </Stack>
            </SimpleGrid>
        </Container>
    )
}

export default ProductPage