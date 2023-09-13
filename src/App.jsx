
import Blogs from './components/Blogs/Blogs'
import Nav from './components/Nav/Nav'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {


  return (
    <>
      <div className='mx-auto max-w-7xl'>
      <Nav></Nav>
      <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
      </div>
    </>
  )
}

export default App
