import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { motion } from 'framer-motion';
import Account from './Account';

const Navbar = () => {
  return (
    <nav className='backdrop-blur z-10'>
        <Toolbar>
          <motion.button
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1.3 }}
            animate={{ x: [0, 20, -20, 10, -10, 0] }}
            transition={{
              x: { duration: 0.5 },
              default: { ease: 'linear' },
            }}
          >
            <Image src='/digest.svg' alt='digest' width={150} height={100} />
          </motion.button>
          <Typography sx={{ flexGrow: 1 }} />
          <div className='space-x-5'>
            {/* <IconButton color='inherit' href='/home'>
              <HomeIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton color='inherit'>
              <MoreHorizIcon sx={{ fontSize: 30 }} />
            </IconButton> */}
            <Account />
          </div>
        </Toolbar>
      </nav>
  );
}

export default Navbar;