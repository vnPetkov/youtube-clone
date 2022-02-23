import React from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import styles from './UploadModal.module.scss';
import CloseIcon from '@mui/icons-material/Close';
Modal.setAppElement('#root');

const customStyles = {
    content: {
        position: 'relative',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '350px',
        height: '250px',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'center',
        textAlign: 'center',
    },

};




export default function UploadModal({ uploadVideo, modalIsOpen, setIsOpen }) {

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                onRequestClose={closeModal}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >

                <h2 className={styles.uploadVideoTitle}>Upload you video:</h2>
                <button onClick={closeModal} className={styles.closeModalBtn}><CloseIcon /></button>

                <input type="file" accept="video/*" id="videoFileInput" />
                <Button variant="contained" onClick={uploadVideo} className={styles.uploadBtn}>Upload</Button>


            </Modal>
        </div>
    );
}