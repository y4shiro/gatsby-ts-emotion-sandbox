import Layout from '../components/styles/layout';
import Header from '../components/Header';
import MainVisual from '../components/Mainvisual';
import About from '../components/About';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <MainVisual />
        <About />
      </main>
    </Layout>
  );
};

export default IndexPage;
