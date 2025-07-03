import './App.css'
import AutoCompleteSearchBar from './AutoCompleteSearchBar';
// import InfiniteScroll from './infiniteScroll';
// import VirtualisedList from './VirtualisedList';
// import StarRating from './StarRating';
// import ProgressBar from './Progressbar';

function App() {
  // const LIST = Array.from({ length: 10000 }, (_, index)=> index +1);
  // const bars = [0, 5, 10, 30, 50, 70, 90, 100];
  return (
    <>
      <div>
      {/* <InfiniteScroll /> */}
      {/* <VirtualisedList
      list={LIST}
      height={400}
      width={300}
      itemHeight={35}
      /> */}
      {/* <h1>Progress Bar </h1>
      <StarRating />
          {bars.map((value) => (
            <ProgressBar key={value} progress={value} />
          ))} */}
          <AutoCompleteSearchBar />
      </div>

    </>
  )
}

export default App
