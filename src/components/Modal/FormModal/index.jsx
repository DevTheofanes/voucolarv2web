import Modal from 'react-modal'
import { MdClose } from "react-icons/md";
import { Container, HeaderModal } from './styles';

export function FormModal({isOpen, onRequestClose, title, subTitle, children}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <MdClose color="#111" size={20}/>
      </button>
        
      <Container>
        <HeaderModal statusColor={subTitle ? subTitle === "Pagamento efetuado" ? "#00a400" : "#ffba00" : null}>
          <h2>{title}</h2>
          {
            subTitle ? <h4>{subTitle}</h4> : null
          }
        </HeaderModal>

        {children}
      </Container>
    </Modal>
  );
}
      
      