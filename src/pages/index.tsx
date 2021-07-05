import Layout from '../components/styles/layout';
import Header from '../components/Header';
import MainVisual from '../components/Mainvisual';
import About from '../components/About';
import Works from '../components/Works';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <MainVisual />
        <About />
        <Works />
      </main>
    </Layout>
  );
};

export default IndexPage;
