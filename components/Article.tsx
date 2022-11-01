import * as React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const Article = (props: any) => {
    return (
        <>
        <h1 className='text-5xl mb-5'>[Placeholder]{}</h1>
        <div className="snap-mandatory snap-x flex flex-row space-x-4">
          <div className="snap-center ...">
            <Image width={320} height={160} src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
          </div>
          <div className="snap-center ...">
            <Image width={320} height={160} src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
          </div>
          <div className="snap-center ...">
            <Image width={320} height={160} src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
          </div>
          <div className="snap-center ...">
            <Image width={320} height={160} src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
          </div>
          <div className="snap-center ...">
            <Image width={320} height={160} src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
          </div>
          <div className="snap-center ...">
            <Image width={320} height={160} src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
          </div>
        </div>
        </>
      );
}

export default Article;