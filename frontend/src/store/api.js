import axios from 'axios'

const Base = window.location.origin;
export const instance = axios.create({
    baseURL: Base,
    headers:{
      "Access-Control-Allow-Origin": "*",
    }
  });
console.log("🚀 ~ file: api.js ~ line 10 ~ Base", Base)

export function getPosts(){
    return instance.get(`/posts`)
}
export function getBooks() {
  return instance.get(`/books`)
  // axios.get('http://localhost:5000/books')
}