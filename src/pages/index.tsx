import Layout from '../components/styles/layout';
import Header from '../components/Header';
import MainVisual from '../components/Mainvisual';
import About from '../components/About';
import Works from '../components/Works';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <MainVisual />
        <About />
        <Works />
      </main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
