import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PublishIcon from '@material-ui/icons/Publish';
import { DingtalkOutlined } from '@ant-design/icons';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{ backgroundColor: '#41bedd', color: 'white', marginBottom: '10px', borderRadius: '0px', border: '1px solid darkgray' }}>
        <DingtalkOutlined
          cursor="pointer"
          variant="outlined"
          display="inline-block"
          onClick={handleClickOpen}
        />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Steganographic message</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select cover image and write your message.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Message"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Secret"
            type="password"
            fullWidth
          />
          <br />
          <br />
          <Button autoFocus margin="dense" id="image" type="file" fullwidth>
            <label htmlFor="upload-button">
              <span className="image-button">
                <PublishIcon />
                Upload Image
              </span>
            </label>
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
