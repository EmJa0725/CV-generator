import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Layout from '../components/Layout'
import MyProfile from '../components/MyProfile'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

const Home = () => (
  <Layout>
    {/* Header card */}
    <header>
      <div className="col-md-12">
        <MyProfile />
      </div>
    </header>
    {/* Second section */}
    <div className="row py-2">
      <div className="col-md-4">
        <Skills />
      </div>
      <div className="col-md-8">
        <Experience />
      </div>
    </div>
    {/* Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <Projects />
      </div>
    </div>
  </Layout>
)

export default Home;