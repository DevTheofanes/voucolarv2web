import { useState, useEffect } from 'react';
import { MdModeEdit, MdDelete } from "react-icons/md";

import { useUser } from '../../../hooks/useUser'

import { AcessLayout as Container } from '../index'
import { HeaderContent } from '../styles'

import api from '../../../services/api';
import { CategoriesContainer, CategoryItem, CategoryItemActions } from './styles';
import { NewCategory } from './Modal/NewCategory';
import { Link } from 'react-router-dom';
import { EditCategory } from './Modal/EditCategorie';
import { DeleteCategory } from './Modal/DeleteCategorie';

export function AcessCategories() {
  const { token, host } = useUser()

  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState({})

  const [isNewCategoryOpen, setIsNewCategoryOpen] = useState(false)

  const handleOpenNewCategoryModal = () => setIsNewCategoryOpen(true)
  const handleCloseNewCategoryModal = () => setIsNewCategoryOpen(false)

  const [isEditCategoryOpen, setIsEditCategoryOpen] = useState(false)

  const handleOpenEditCategoryModal = (category) => {
    setIsEditCategoryOpen(true)
    setCategory(category)
  }
  const handleCloseEditCategoryModal = () => setIsEditCategoryOpen(false)

  const [isDeleteCategoryOpen, setIsDeleteCategoryOpen] = useState(false)

  const handleOpenDeleteCategoryModal = (category) => {
    setIsDeleteCategoryOpen(true)
    setCategory(category)
  }
  const handleCloseDeleteCategoryModal = () => setIsDeleteCategoryOpen(false)

  async function loadCategories(){
    const response = await api.get("categories")
    setCategories(response.data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadCategories();

    if(token){
      api.defaults.headers.authorization = token
    }
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
            <CategoryItem key={category.id}>
              <CategoryItemActions>
                <button type="button" onClick={() => handleOpenEditCategoryModal(category)}>
                  <MdModeEdit color="rgb(35, 40, 45)" size={24}/>
                </button>
                <button type="button" onClick={() => handleOpenDeleteCategoryModal(category)}>
                  <MdDelete color="#E52E4D" size={24}/>
                </button>
              </CategoryItemActions>

              <Link to={`/acess/category/${category.id}`}>
                <img src={`${host}/files/${category.image}`} alt={category.name}/>
                <span>{category.name}</span>
              </Link>
            </CategoryItem>
          )
        }) }
      
        <NewCategory isOpen={isNewCategoryOpen} onRequestClose={handleCloseNewCategoryModal}/>
        <EditCategory isOpen={isEditCategoryOpen} onRequestClose={handleCloseEditCategoryModal} category={category}/>
        <DeleteCategory isOpen={isDeleteCategoryOpen} onRequestClose={handleCloseDeleteCategoryModal} category={category}/>
      </CategoriesContainer>
    </Container>
  );
}