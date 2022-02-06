import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import ShowPosts from "./components/ShowPosts";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Link to={`/add`}>Add</Link>
        <Link to={`/list`}>List</Link>
        <Link to={`/posts`}>Posts</Link>
        <Link to={`/register`}>register</Link>
        <Link to={`/login`}>login</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/add" element={<AddBook />} />
        <Route path="/list" element={<BookList />} />
        <Route path="/posts" element={<ShowPosts />} />
        <Route path="/books/:id" element={<ShowPosts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
