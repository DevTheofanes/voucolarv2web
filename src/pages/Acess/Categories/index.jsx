import { useState, useEffect } from 'react';

import { useUser } from '../../../hooks/useUser'

import { AcessLayout as Container } from '../index'
import { HeaderContent } from '../styles'

import api from '../../../services/api';
import { CategoriesContainer, CategoryItem } from './styles';
import { NewCategory } from './Modal/NewCategory';

export function AcessCategories() {
  const { token, host } = useUser()

  const [categories, setCategories] = useState([])
  const [isNewCategoryOpen, setIsNewCategoryOpen] = useState(false)

  const handleOpenNewCategoryModal = () => setIsNewCategoryOpen(true)
  const handleCloseNewCategoryModal = () => setIsNewCategoryOpen(false)

  async function loadCategories(){
    const response = await api.get("categories")
    setCategories(response.data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadCategories();
  }, [token])

  return (
    <Container>
      <HeaderContent>
        <span>Categorias</span>
        
        <button type="button" onClick={() => handleOpenNewCategoryModal()}>
          <label>Adicionar</label>
        </button>   
      </HeaderContent>

      <CategoriesContainer>
        { categories.map(category => {
          return (
            <CategoryItem key={category.id} to={`/acess/category/${category.id}`}>
              <img src={`${host}/files/${category.image}`} alt={category.name}/>
              <span>{category.name}</span>
            </CategoryItem>
          )
        }) }
      
        <NewCategory isOpen={isNewCategoryOpen} onRequestClose={handleCloseNewCategoryModal}/>
      </CategoriesContainer>
    </Container>
  );
}