// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from './qcomps/state.js'
import Profile from './components/profile_props.js'
import MyComp from './qcomps/firstcomp.js'
import Bio from './qcomps/bios.js'
import TodoList from './qcomps/todos.js'
import List from './qcomps/artistsRemoveArr.js'
import RecipeList from './qcomps/recipes.js'
import Form from './components/updObjects.js'
import FeedbackForm from './qcomps/thankYouCrash.js'
import RequestTracker from './qcomps/shoppingCart.js'
import Scoreboard from './qcomps/updObjectsForm.js'
import BucketList from './qcomps/arrObj.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <BucketList />
    </div>
  )
}
