import React from 'react'
import { Menu } from '@headlessui/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { initFirebase } from '../firebase/initFirebase';

const Account = () => {
    return (
        <Menu>
            <Menu.Button className='focus:outline-none'>
                <AccountCircleIcon sx={{ fontSize: 30 }} />
            </Menu.Button>
            <Menu.Items className='absolute space-y-2 border bg-inherit p-2 shadow-md rounded-lg flex flex-col focus:outline-none w-36s divide-gray-100 origin-top-left mt-2'>
                <Menu.Item>
                    {({ active }) => (
                        <a className={`${active && ''}`} href='/account-settings'>
                            Account
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && ''}`}
                            href='/account-settings'
                        >
                            Documentation
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && ''}`}
                        >
                            <button onClick={()=>{}}>
                                Log Out
                            </button>
                        </a>
                    )}
                </Menu.Item>
                {/* <Menu.Item disabled>
                    <span className='opacity-75'>Invite a friend (coming soon!)</span>
                </Menu.Item> */}
            </Menu.Items>
        </Menu>
    )
}

export default Account;
