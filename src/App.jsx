
import Blogs from './components/Blogs/Blogs'
import Nav from './components/Nav/Nav'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {


  return (
    <>
      <Nav></Nav>
      <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
