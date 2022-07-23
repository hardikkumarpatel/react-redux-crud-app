import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteProfileDetails } from '../../redux/Actions/DeleteAction';
import DialogWrapper from '../DialogWrapper/DialogWrapper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';

const openDialog = ({ isOpen }) => {
  return (
    <DialogWrapper
      disableBackdropClick
      disableEscapeKeyDown
      open={isOpen}
      maxWidth='md'
      aria-labelledby='form-dialog-title'
    />
  );
};

const TableWrapper = (props) => {
  const profileDetailsList = useSelector(
    (state) => state.Reducer.profileDetailsList
  );
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm('are you sure want to delete?')) {
      dispatch(DeleteProfileDetails(id));
    }
  };

  const handleEdit = (id) => {
    const filterData = profileDetailsList.find((res) => res.id === id);
    props.onOpen();
    props.OnParentCallBack(id);
  };


  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              {props.headerRows &&
              props.headerRows.length &&
              props.headerRows.length > 0 ? (
                props.headerRows.map((ele) => (
                  <TableCell key={Math.random()} scope='none'>
                    {ele.label}
                  </TableCell>
                ))
              ) : (
                <></>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.bodyRows.map((ele) => (
              <TableRow key={ele.id}>
                <TableCell component='th' scope='row'>
                  {ele.id}
                </TableCell>
                <TableCell align='right'>{ele.firstname}</TableCell>
                <TableCell align='right'>{ele.lastname}</TableCell>
                <TableCell align='right'>{ele.desigination}</TableCell>
                <TableCell align='right'>
                  <ButtonWrapper
                    color='primary'
                    variant='contained'
                    onClick={() => handleEdit(ele.id)}>
                    Edit
                  </ButtonWrapper>
                  &nbsp;&nbsp;
                  <ButtonWrapper
                    color='primary'
                    variant='contained'
                    onClick={() => handleDelete(ele.id)}>
                    Delete
                  </ButtonWrapper>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableWrapper;
