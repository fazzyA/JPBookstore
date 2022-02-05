import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers:{
      "Access-Control-Allow-Origin": "*",
    }
  });
const Base = window.location.origin;
console.log("🚀 ~ file: api.js ~ line 10 ~ Base", Base)

export function getPosts(){
    return instance.get(`/posts`)
}
export function getBooks() {
  return instance.get(`/books`)
  // axios.get('http://localhost:5000/books')
}