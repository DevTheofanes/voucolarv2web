import { useEffect, useState } from 'react';
import api from '../../../services/api';

import { useUser } from '../../../hooks/useUser'

import { AcessLayout as Container } from '../index'
import { HeaderContent, Grid, GridRow } from '../styles'
import { DeleteProduct } from './Modal/DeleteProduct';
import { EditProduct } from './Modal/EditProduct';
import { NewProduct } from './Modal/NewProduct';



export const AcessProducts = (props) => {
  const { token, host } = useUser()

  const [products, setProducts] = useState([])
  const [productData, setProductData] = useState([])
  const id = props.match.params.id;  

  async function loadProducts(){
    const response = await api.get(`category/${id}/products`)

    setProducts(response.data.products)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadProducts();
  }, [ token ])

  const [isNewProductOpen, setIsNewProductOpen] = useState(false)
  const handleOpenNewProductModal = () => setIsNewProductOpen(true)
  const handleCloseNewProductModal = () => setIsNewProductOpen(false)

  const [isEditProductOpen, setIsEditProductOpen] = useState(false)
  const handleOpenEditProductModal = (product) => {
    setProductData(product)
    setIsEditProductOpen(true)
  }
  const handleCloseEditProductModal = () => setIsEditProductOpen(false)

  const [isDeleteProductOpen, setIsDeleteProductOpen] = useState(false)
  const handleOpenDeleteProductModal = (product) => {
    setProductData(product)
    setIsDeleteProductOpen(true)
  }
  const handleCloseDeleteProductModal = () => setIsDeleteProductOpen(false)

  return (
    <Container>
      <HeaderContent>
        <span>Produtos</span>
        
        <button type="button" onClick={() => handleOpenNewProductModal()}>
          <label>Adicionar</label>
        </button>   
      </HeaderContent>

      <Grid>
        <GridRow>
          <h3>Id</h3>
          <h3>Imagem</h3>
          <h3>Nome</h3>
          <h3>Ações</h3>
        </GridRow>
        {
          products.map(product => {
            return (
              <GridRow key={product.id}>
                <span>{product.id}</span>
                <img src={`${host}/files/${product.image}`} alt={product.name} />
                <span>{product.name}</span>
                <div>
                  <button type="button" onClick={() => handleOpenEditProductModal(product)}>
                    <label>Editar</label>
                  </button>

                  <button type="button" onClick={() => handleOpenDeleteProductModal(product)}>
                    <label>Apagar</label>
                  </button>
                </div>
                
              </GridRow>
            )
          })
        }
      </Grid>

      <NewProduct isOpen={isNewProductOpen} onRequestClose={handleCloseNewProductModal} id={id}/>
      <EditProduct isOpen={isEditProductOpen} onRequestClose={handleCloseEditProductModal} product={productData}/>
      <DeleteProduct isOpen={isDeleteProductOpen} onRequestClose={handleCloseDeleteProductModal} product={productData}/>
    </Container>
  );
}

