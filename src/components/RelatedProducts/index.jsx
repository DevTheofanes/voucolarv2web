import { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'

import { Product, ImagesPhone, Container, ContainerToPhone } from "./styles";

import api from '../../services/api'
import { useUser } from "../../hooks/useUser";
import history from "../../services/history";

export function RelatedProducts() {
  const { host, token } = useUser()

  const [products, setProducts] = useState([])
  const [imageBackground, setImageBackground] = useState(0)

  async function loadMarks(){
    const response = await api.get(`/models`)
    const { data } = await api.get(`/products`)

    setProducts(data)
    setImageBackground(response.data[response.data.length - 1].image)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadMarks();
  }, [token])

  function handleTo(product){
    history.push(`/category/${product.category.name}/product/${product.id}`)
    history.go(`/category/${product.category.name}/product/${product.id}`)
  }

  console.log("ROI")
  console.log(products)

  return (
    <>
      <Container>
      <h3>Produtos Relacionados</h3>
      <Carousel itemsToShow={4}>
      {
        products.map(product => {
          return (
            <Product key={product.id} onClick={() => handleTo(product)}>
              <ImagesPhone>
                <div>
                  <img src={`${host}/files/${product.image}`} alt={product.name} style={{ objectFit: "cover"}}/>
                  <img src={`${host}/files/${imageBackground}`} alt="" />
                </div>
              </ImagesPhone>

              <h3>{product.name}</h3>
              <span>{product.category.name}</span>
              <strong>{
                  new Intl.NumberFormat('pt-BR',{
                    style: "currency",
                    currency:"BRL"
                  }).format(product.value)
                }</strong>
            </Product>
          )
        })
      }
    </Carousel>
    </Container>

    <ContainerToPhone>
      <h3>Produtos Relacionados</h3>
      <Carousel itemsToShow={2}>
      {
        products.map(product => {
          return (
            <Product key={product.id} onClick={() => handleTo(product)}>
              <ImagesPhone>
                <div>
                  <img src={`${host}/files/${product.image}`} alt={product.name} style={{ objectFit: "cover"}}/>
                  <img src={`${host}/files/${imageBackground}`} alt="" />
                </div>
              </ImagesPhone>

              <h3>{product.name}</h3>
              <span>{product.category.name}</span>
              <strong>{
                  new Intl.NumberFormat('pt-BR',{
                    style: "currency",
                    currency:"BRL"
                  }).format(product.value)
                }</strong>
            </Product>
          )
        })
      }
    </Carousel>
    </ContainerToPhone>
    </>
  );
}
      
      



