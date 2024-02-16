// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from './qcomps/state.js'
import Profile from './components/profile_props.js'
import MyComp from './qcomps/firstcomp.js'
import Bio from './qcomps/bios.js'
import TodoList from './qcomps/todos.js'
import List from './qcomps/list_keys_id.js'
import RecipeList from './qcomps/recipes.js'
import Form from './qcomps/stuckForm.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <Form />
    </div>
  )
}
