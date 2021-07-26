import { useEffect, useState } from 'react'

import { useUser } from '../../../hooks/useUser'

import api from '../../../services/api'

import { AcessLayout as Container } from '../index'
import { Grid, GridRow, HeaderContent } from '../styles'

import { DeleteUpload } from './Modal/DeleteUpload'
import { EditUpload } from './Modal/EditUpload'
import { NewFigures } from './Modal/NewFigures'

export function AcessFigures() {
  const { token, host } = useUser()

  const [figures, setFigures] = useState([])
  const [asset, setAsset] = useState({})

  async function loadFigures(){
    const response = await api.get("/assets/figure")

    setFigures(response.data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadFigures();
  }, [token])

  const [isNewFiguresOpen, setIsNewFiguresOpen] = useState(false)
  const [isUpdateFiguresOpen, setIsUpdateFiguresOpen] = useState(false)
  const [isDeleteFiguresOpen, setIsDeleteFiguresOpen] = useState(false)

  const handleOpenNewFiguresModal = () => setIsNewFiguresOpen(true)
  const handleCloseNewFiguresModal = () => setIsNewFiguresOpen(false)
  const handleOpenUpdateFiguresModal = (figures) => {
    setIsUpdateFiguresOpen(true)
    setAsset(figures)
  }
  const handleCloseUpdateFiguresModal = () => setIsUpdateFiguresOpen(false)
  const handleOpenDeleteFiguresModal = (figures) => {
    setIsDeleteFiguresOpen(true)
    setAsset(figures)
  }
  const handleCloseDeleteFiguresModal = () => setIsDeleteFiguresOpen(false)

  return (
    <Container>
      <HeaderContent>
        <span>Figurinhas</span>

        <button type="button" onClick={() => handleOpenNewFiguresModal()}>
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
          figures.map(figure => {
            return (
              <GridRow key={figure.id}>
                <span>{figure.id}</span>
                <img src={`${host}/files/${figure.image}`} alt={figure.name} />
                <span>{figure.name}</span>
                <div>
                  <button type="button" onClick={() => handleOpenUpdateFiguresModal(figure)}>
                    <label>Editar</label>
                  </button>

                  <button type="button" onClick={() => handleOpenDeleteFiguresModal(figure)}>
                    <label>Apagar</label>
                  </button>
                </div>
                
              </GridRow>
            )
          })
        }
      </Grid>

      <NewFigures isOpen={isNewFiguresOpen} onRequestClose={handleCloseNewFiguresModal}/>
      <DeleteUpload isOpen={isDeleteFiguresOpen} onRequestClose={handleCloseDeleteFiguresModal}  asset={asset} />
      <EditUpload isOpen={isUpdateFiguresOpen} onRequestClose={handleCloseUpdateFiguresModal}  asset={asset} />
    </Container>
  );
}