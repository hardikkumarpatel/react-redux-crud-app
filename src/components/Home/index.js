import { styled } from '@material-ui/styles';
import ButtonWrapper from '../../common/ButtonWrapper/ButtonWrapper';
import AddIcon from '@material-ui/icons/Add';
import TableWrapper from '../../common/TableWrapper/TableWrapper';
import DialogWrapper from '../../common/DialogWrapper/DialogWrapper';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const RootDivComponent = styled('div')(({ theme }) => ({
  margin: '10px',
  padding: '1px',
}));

const DivCompoennt = styled('div')({
  fontFamily: 'none',
  fontSize: '20px',
  fontWeight: '700',
});

const ButtonWrapperComponent = styled('div')({
  float: 'right',
  marginRight: '3%',
  marginTop: '-1%',
});

const TableDivComponent = styled('div')({
  marginTop: '6%',
});

const rows = [
  { id: 'Id', numeric: false, disablePadding: true, label: 'Id' },
  { id: 'FirstName', numeric: false, disablePadding: false, label: 'FirstName' },
  { id: 'LastName', numeric: false, disablePadding: false, label: 'LastName' },
  { id: 'Desigination', numeric: false, disablePadding: false, label: 'Desigination' },
  { id: 'Action', numeric: false, disablePadding: false, label: 'Action' }
]

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profileDetailsList = useSelector(
    (state) => state.Reducer.profileDetailsList
  );

  const handleCloseDeleteDialog = () => {
    setIsOpen(false);
  };
  return (
    <RootDivComponent>
      <DivCompoennt>Made in Redux with ❤️ React.</DivCompoennt>
      <ButtonWrapperComponent>
        <ButtonWrapper
          type='button'
          onClick={() => {
            setIsOpen(true);
          }}>
          <AddIcon style={{ color: 'black' }} />
        </ButtonWrapper>
      </ButtonWrapperComponent>
      <TableDivComponent>
        <TableWrapper
        headerRows={rows}
        bodyRows={profileDetailsList}
         />
      </TableDivComponent>
      <DialogWrapper
        disableBackdropClick
        disableEscapeKeyDown
        open={isOpen}
        onClose={handleCloseDeleteDialog}
        maxWidth='md'
        aria-labelledby='form-dialog-title'
      />
    </RootDivComponent>
  );
};

export default Home;
