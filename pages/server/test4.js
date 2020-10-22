const Test4 = () => <h1>Server Test 4</h1>

export async function getStaticProps() {
  const doAsyncWork = () => Promise.reject(new Error('Server Test 3'))

  doAsyncWork()

  return { props: {}, revalidate: 1 }
}

export default Test4
