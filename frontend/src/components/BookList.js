import axios from "axios";
import React, { useEffect } from "react";
import  { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { getBooks } from "../store/actions";

const BookList = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getBooks())
  }, [])
  const books = useSelector((state) => state.books);
  return (
    <div>
       { books && books.map((item, index) => (
        <div key={item.id}>
          <h1><Link to={`/books/${item.id}`} >{item.title}</Link></h1>
          <h3>by {item.author}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
