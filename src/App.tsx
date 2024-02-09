import Appbar from './components/Appbar/Appbar';
import {Route, Routes} from 'react-router-dom';
import Posts from './components/cointainers/posts/Posts';
import NewPost from './components/cointainers/NewPost/NewPost';
import About from './components/cointainers/About/About';
import Contacts from './components/cointainers/Contacts/contacts';
import Post from './components/cointainers/Post/Post';


const App = () => (
  <>
    <header>
      <Appbar/>
    </header>
    <main className="container-fluid">
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="/new-post" element={<NewPost/>} />
        <Route path="/info" element={<About/>} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/posts/:id" element={<Post/>} />
        <Route path="/posts/:id/edit" element={<NewPost/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </main>
  </>
);

export default App;
