import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCommands } from '../../Redux/commandSlice';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const dispatch = useDispatch();
  const commands = useSelector((state) => state.commandes.commands);
  React.useEffect(() => {
    dispatch(fetchCommands());
  }, [dispatch]);

  const totalPrice = commands.reduce((total, command) => Number(total) + Number(command.totalAmount), 0);
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $ {totalPrice}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}