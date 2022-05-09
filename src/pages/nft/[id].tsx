import NFTItem from '../../components/components-ui/NFTItem';

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  const paths = data.map(({ id }: any) => ({
    params: {
      id: id.toString()
    }
  }));

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if(!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      nft: data
    }
  }
};

const NFTSinglePage = ({nft}: any) => {
  return (
    <>
      <div className='container'>
          <div className='row'>
              <NFTItem isSinglePage={true} nft={nft} />
          </div>
      </div>
    </>
  );
};

export default NFTSinglePage;