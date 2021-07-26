import { useEffect, useState } from 'react'

import api from '../../../services/api'
import { useUser } from '../../../hooks/useUser'

import { AcessLayout as Container } from '../index'
import { Grid, GridRow, HeaderContent } from '../styles'

import { DeleteUpload } from './Modal/DeleteUpload'
import { EditUpload } from './Modal/EditUpload'
import { NewBackground } from './Modal/NewBackground'

export function AcessBackground() {
  const { token, host } = useUser();

  const [background, setBackground] = useState([])
  const [asset, setAsset] = useState({})

  async function loadBackground(){
    const response = await api.get("/assets")

    setBackground(response.data)
  }

  useEffect(() => {
    // api.defaults.headers.authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWFuYWdlciI6dHJ1ZSwiaWF0IjoxNjE3Mzg2OTcwLCJleHAiOjE2MTc5OTE3NzB9.7mgIVGLdY16EYXFEu6rrx1-ciBEFjmxBvqAUTJlWThs`;
    loadBackground();
  }, [token])

  const [isNewBackgroundOpen, setIsNewBackgroundOpen] = useState(false)
  const [isUpdateBackgroundOpen, setIsUpdateBackgroundOpen] = useState(false)
  const [isDeleteBackgroundOpen, setIsDeleteBackgroundOpen] = useState(false)

  const handleOpenNewBackgroundModal = () => setIsNewBackgroundOpen(true)
  const handleCloseNewBackgroundModal = () => setIsNewBackgroundOpen(false)
  const handleOpenUpdateBackgroundModal = (background) => {
    setIsUpdateBackgroundOpen(true)
    setAsset(background)
  }
  const handleCloseUpdateBackgroundModal = () => setIsUpdateBackgroundOpen(false)
  const handleOpenDeleteBackgroundModal = (background) => {
    setIsDeleteBackgroundOpen(true)
    setAsset(background)
  }
  const handleCloseDeleteBackgroundModal = () => setIsDeleteBackgroundOpen(false)

  return (
    <Container>
      <HeaderContent>
        <span>Fundos</span>

        <button type="button" onClick={() => handleOpenNewBackgroundModal()}>
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
          background.map(figure => {
            return (
              <GridRow key={figure.id}>
                <span>{figure.id}</span>
                <img src={`${host}/files/${figure.image}`} alt={figure.name} />
                <span>{figure.name}</span>
                <div>
                  <button type="button" onClick={() => handleOpenUpdateBackgroundModal(figure)}>
                    <label>Editar</label>
                  </button>

                  <button type="button" onClick={() => handleOpenDeleteBackgroundModal(figure)}>
                    <label>Apagar</label>
                  </button>
                </div>
                
              </GridRow>
            )
          })
        }
      </Grid>

      <NewBackground isOpen={isNewBackgroundOpen} onRequestClose={handleCloseNewBackgroundModal}/>
      <DeleteUpload isOpen={isDeleteBackgroundOpen} onRequestClose={handleCloseDeleteBackgroundModal}  asset={asset} />
      <EditUpload isOpen={isUpdateBackgroundOpen} onRequestClose={handleCloseUpdateBackgroundModal}  asset={asset} />
    </Container>
  );
}