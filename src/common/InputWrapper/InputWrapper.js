import { FormControl, TextField } from '@material-ui/core';

const InputWrapper = (props) => {
  return (
    <FormControl style={{ width: '100%'}}>
      <TextField {...props}></TextField>
    </FormControl>
  );
};

export default InputWrapper;
