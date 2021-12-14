import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Posts from './components/Pages/Posts/Posts';
import PostLists from './components/Pages/Posts/PostLists';
import useLocalStorage from './components/Custom/useLocalStorage';
import useUpdateLogger from './components/Custom/useUpdateLogger';
import NavBar from './components/NavBar/NavBar';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import ContactUs from './components/Pages/ContactUs/ContactUs';

function App() {
  const [name, setName] = useLocalStorage('name', '');
  useUpdateLogger(name);

  const BlogPosts = [
    {
      id: 1,
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adip.',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      description: 'Hello React Router v6',
    },
  ];

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/Posts" element={<Posts />}>
          <Route
            path="/Posts/PostLists"
            element={<PostLists BlogPosts={BlogPosts} />}
          />
        </Route>
        <Route
          path="/input"
          element={
            <div className="container mt-3">
              <input
                name="name"
                type="text"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
