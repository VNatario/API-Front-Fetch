const url = "http://localhost:5500/api";

// GET ALL USERS
function getUsers() {
  fetch(url)
    .then((users) => users.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((e) => console.error(e));
}

// GET USER
function getUser(id) {
  fetch(`${url}/${id}`)
    .then((user) => user.json())
    .then((data) => {
      Username.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch((e) => console.error(e));
}

//POST - NEW USER
const newUser = {
  name: "Vitor Natario",
  avatar: "https://avatars.githubusercontent.com/u/68490412?v=4",
  city: "São Paulo",
};

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => (alertAPI.textContent = data))
    .catch((e) => console.error(e));
}

//PUT - UPDATE USER
const updatedUser = {
  avatar: "https://pbs.twimg.com/media/EWx3e1PWAAcJ1G0?format=jpg&name=large",
  city: "Suzano",
};

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => (alertAPI.textContent = data))
    .catch((e) => console.error(e));
}

//DELETE - DELETE USERS BY ID
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertAPI.textContent = data))
    .catch((e) => console.error(e));
}

getUsers();
getUser(2);
//addUser(newUser);
// updateUser(updatedUser, 2);
deleteUser(3);
