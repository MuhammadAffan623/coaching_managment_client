import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


export default function ModalPopup({ modal, setModal, children}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 'fit-content',
    maxWidth: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '20px',
    maxHeight: '700px',
    overflow: 'auto'
  };
  
//   const [open, setOpen] = React.useState(false);
  const handleClose = () => setModal({open:false});

  return (
      <Modal
        open={modal.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style} className="shadow-lg">
            {children}
          </Box>
      </Modal>
  );
}
