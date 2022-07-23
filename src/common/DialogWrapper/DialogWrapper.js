import { TextField } from '@material-ui/core';
import { FormControl, Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import InputWrapper from '../InputWrapper/InputWrapper';
import { useDispatch  } from 'react-redux';
import { AddProfileDetails } from '../../redux/Actions/AddAction';

const DialogWrapper = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [desigination, setDesigination] = useState('');
  const dispatch = useDispatch();

  const saveProfileDetails = () => {
    const saveProfile = {
      id: Math.random(),
      firstname: firstName,
      lastname: lastName,
      desigination: desigination,
    };
    dispatch(AddProfileDetails(saveProfile));
    setFirstName('');
    setLastName('');
    setDesigination('');
    props.onClose();
  };

  return (
    <>
      <Dialog {...props}>
        <DialogTitle id='form-dialog-title'>
          Add your details here ✌🏻
        </DialogTitle>
        <DialogContent style={{ width: '60vh' }}>
          <DialogContentText>
            <Grid container>
              <Grid item md={12}>
                <InputWrapper
                  autoFocus={false}
                  margin='dense'
                  id='FirstName'
                  name='FirstName'
                  label='FirstName'
                  type='text'
                  fullWidth
                  value={firstName || props.OnFilteredData.firstname}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
                <br />
                <InputWrapper
                  autoFocus={false}
                  margin='dense'
                  id='LastName'
                  name='LastName'
                  label='LastName'
                  type='text'
                  fullWidth
                  value={lastName || props.OnFilteredData.lastname}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
                <br />
                <InputWrapper
                  autoFocus={false}
                  margin='dense'
                  id='Desigination'
                  name='Desigination'
                  label='Desigination'
                  type='text'
                  fullWidth
                  value={desigination || props.OnFilteredData.desigination}
                  onChange={(event) => {
                    setDesigination(event.target.value);
                  }}
                />
                <br />
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonWrapper
            color='primary'
            variant='contained'
            onClick={props.onClose}>
            Cancel
          </ButtonWrapper>
          <ButtonWrapper
            color='primary'
            variant='contained'
            onClick={saveProfileDetails}>
            Save
          </ButtonWrapper>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogWrapper;
