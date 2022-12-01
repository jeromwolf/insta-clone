import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

function Home({ randomUsersResults }) {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed randomUsers={randomUsersResults} />
      <Modal />
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  console.log("getServerSideProps  step1 ");
  let randomUsersResults = [];

  try {
    const res = await fetch(
      "https://randomuser.me/api/?results=30&inc=name,login,picture"
    );
    randomUsersResults = await res.json();

    console.log(randomUsersResults);

  } catch (e) {
    randomUsersResults = [];
  }

  return {
    props: {
      randomUsersResults,
    },
  };
}