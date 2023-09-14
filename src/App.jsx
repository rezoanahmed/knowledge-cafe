
import Blogs from './components/Blogs/Blogs'
import Nav from './components/Nav/Nav'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  // bookmark button handler
  const [bookmarks, setBookmarks] = useState([])
  const handleAddToBookmark = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <div className='mx-auto max-w-7xl'>
      <Nav></Nav>
      <main className='md:flex'>
        <Blogs addToBookmark = {handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
      </div>
    </>
  )
}

export default App
