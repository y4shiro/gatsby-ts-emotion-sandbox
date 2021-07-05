import Layout from '../components/layout';
import Header from '../components/Header';
import MainVisual from '../components/Mainvisual';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <MainVisual />
      </main>
    </Layout>
  );
};

export default IndexPage;
