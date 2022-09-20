import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import FirebaseAuth from '../components/auth/FireBaseAuth'

const auth: NextPage = () => {
  return (
    <main className='grid h-screen place-items-center'>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: .8 }}
          transition={{ duration: .5 }}
        >
          <h1 className="text-7xl font-bold text-center">
            signing page!
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: .2 }}
        >
          <FirebaseAuth />
        </motion.div>
      </div>
    </main>
  )
}

export default auth;
