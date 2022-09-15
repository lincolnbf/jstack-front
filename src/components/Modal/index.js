import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import Button from "../Button";
import { Container, Footer, Overlay } from "./styles";

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Título do modal</h1>
        <p>Corpo do modal</p>
        <Footer>
          <button type="button" className="can cel-button">
            Cancelar
          </button>
          <Button danger={danger} type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById("modal-root"),
    null
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
