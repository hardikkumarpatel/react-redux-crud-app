import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper';

const TableWrapper = (props) => {
  console.log(props.headerRows);
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
                  <ButtonWrapper color='primary' variant='contained'>
                    Edit
                  </ButtonWrapper>&nbsp;&nbsp;
                  <ButtonWrapper color='primary' variant='contained'>
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
