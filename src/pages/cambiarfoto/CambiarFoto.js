import TextPerfil from "../../components/textperfil/TextPerfil";
import Footer from "../../components/footer/Footer";
import noImagen from "../perfil/img/Foto-sin-imagen.svg";
import {Button, Modal} from 'react-bootstrap';
import {useState} from "react";

let CambiarFoto=()=>{

    // Constantes del componente primer modal bootstrap

    const [showM1, setShowM1] = useState(false);
    const handleCloseM1 = () => setShowM1(false);
    const handleShowM1 = () => setShowM1(true);

    // Constantes del componente segundo modal bootstrap
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <TextPerfil/>

        <section className="">
            <h2>Cambiar foto</h2>

            <img src={noImagen} alt="No imagen"/>

            <div>
                <Button variant="primary" onClick={handleShowM1}>
                    Tomar foto
                </Button>
                <Button variant="primary" onClick={handleShow}>
        Subir foto
      </Button>
            </div>

            <Modal show={showM1} onHide={handleCloseM1}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseM1}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseM1}>
                    Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        </section>

        <Footer/>
        </>
    )
}

export default CambiarFoto;