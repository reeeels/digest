import * as React from 'react';
import Typography from '@mui/material/Typography';

const Copyright = (props: any) => {
    return (
        <Typography variant='body2' align='center' {...props} className='mb-2'>
          {'Copyright © '}
          {new Date().getFullYear()}
          {'. '}
          {'Powered by Firebase'}
        </Typography>
      );
}

export default Copyright;