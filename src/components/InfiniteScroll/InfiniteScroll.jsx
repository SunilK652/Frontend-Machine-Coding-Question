import { useEffect, useState } from 'react'

const InfiniteScroll = () => {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 30) {
        setCount(prev => prev + 50);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  },[]);
  const element = [];
  for (let i=0; i<count; i++) {
    element.push(<div key={i}>{i + 1}</div>)
  }
  return (
    <>
      <div>
       <p>Front End Machine Coding</p>
       <p>{element}</p>
      </div>

    </>
  )
}

export default InfiniteScroll
