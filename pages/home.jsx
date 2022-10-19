import * as React from 'react';
import Head from 'next/head';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../components/Navbar';
import { useUser } from '../firebase/useUser';
import Topic from '../components/Topic';
import Image from 'next/image';
import db from '../firebase/initFirebase';

const home = () => {
  const date = new Date().getHours();
  const greeting = date < 12 ? 'Morning' : date < 18 ? 'Afternoon' : 'Evening';
  const { user, logout } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const colRef = collections(db, 'topics');
    await addDoc(colRef, {})
    const searchValue = search.value;
    const searchResult = await db
      .collection('topics')
      .where('title', '==', searchValue)
      .get();
    console.log(searchResult);
  }

  const Topics = [
    'Sports',
    'Politics',
    'Entertainment',
    'Technology',
    'Science',
    'Health',
    'Business',
    'World',
    // 'National',
    // 'Politics',
    // 'Opinion',
    // 'Arts',
    // 'Fashion',
    // 'Food',
    // 'Travel',
    // 'Magazine',
    // 'Real Estate',
    // 'T Magazine',
    // 'Video',
  ]

  if (user) {
    { console.log(user) }
    return (
      <div className='container mx-auto'>
        <Head>
          <title>Digest</title>
          <meta name='digest' content='Generated by create next app' />
          <link rel='icon' href='./public/favicon.ico' />
        </Head>
        <Navbar />
        <div className='mx-32 flex flex-col z-0'>
          <div className='sticky top-5 mb-20'>
            <h1 className='absolute left-0 text-3xl font-bold'>{greeting} {user.name}</h1>
            <div className='absolute right-20 border p-1 rounded-lg'>
              <SearchIcon sx={{ fontSize: 20 }} />
              <input type='text' className='bg-inherit btn ml-1' placeholder='Search' />
            </div>
          </div>
          <div className='grid content-evenly ml-10 mb-32'>
            <h1 className='text-5xl'>[Placeholder]</h1>
          </div>
          <h1 className='text-2xl font-bold'>Topics</h1>
          <div className='flex flex-row flex-wrap space-x-4 content-evenly mb-5 mt-5'>
            {Topics.map((topic) => <Topic label={topic} />)}
          </div>
          <div className='sticky top-20 mb-10'>
            <h1 className='text-2xl font-bold'>Trending</h1>
          </div>
          <div className='grid content-evenly ml-10 mb-32'>
            <h1 className='text-5xl mb-5'>[Placeholder]</h1>
            <div class="snap-mandatory snap-x flex flex-row space-x-4">
              <div class="snap-center ...">
                <Image width={320} height={160} src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
              <div class="snap-center ...">
                <Image width={320} height={160} src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
              <div class="snap-center ...">
                <Image width={320} height={160} src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
              <div class="snap-center ...">
                <Image width={320} height={160} src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
              <div class="snap-center ...">
                <Image width={320} height={160} src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
              <div class="snap-center ...">
                <Image width={320} height={160} src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
              </div>
            </div>
          </div>
          <div className='sticky top-5 mb-10'>
            <h1 className='text-2xl font-bold'>New</h1>
          </div>
          <div className='grid content-evenly ml-10 mb-32'>
            <h1 className='text-5xl'>[Placeholder]</h1>
          </div>
        </div>
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </div>
    );
  }
}

export default home;
