import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';

const ButtonWrapper = (props) => {
  return (
    <>
      {props.type === 'button' ? (
        <IconButton {...props} style={{ background: 'gray', opacity: '0.5' }}>
          {props.children}
        </IconButton>
      ) : (
        <Button {...props}>{props.children}</Button>
      )}
    </>
  );
};

export default ButtonWrapper;
