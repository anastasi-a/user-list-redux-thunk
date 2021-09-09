import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/contacts",
  headers: {
    "Content-Type": "application/json"
  }
});

// const getUserList = () => {
//   return fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json());
// }
//
// const create = (user) => {
//   return fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json());
// }
//
// const update = (user, id) => {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(user),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json());
// }
//
// const deleteUser = (id) => {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     method: 'DELETE',
//   });
// }
//
//
// export {
//   getUserList,
//   create,
//   update,
//   deleteUser
// }
