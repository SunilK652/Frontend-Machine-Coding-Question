import './App.css'
// import InfiniteScroll from './infiniteScroll';
import VirtualisedList from './VirtualisedList';

function App() {
  const LIST = Array.from({ length: 10000 }, (_, index)=> index +1);
  return (
    <>
      <div>
      {/* <InfiniteScroll /> */}
      <VirtualisedList
      list={LIST}
      height={400}
      width={300}
      itemHeight={35}
      />
      </div>

    </>
  )
}

export default App
