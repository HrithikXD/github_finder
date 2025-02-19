import axios from "axios";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers:{Authorization: `token ${GITHUB_TOKEN}`}

})

//Search a user by name
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`)
  return response.data.items;
};

//Get user and repos
export const getUserAndRepos = async(login)=>{
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user,repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`)
  ])
  return {user: user.data, repos:repos.data}
}



//Get single user
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;
  }
};

//get user repos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};

//Get initial users(for testing)
export const fetchUsers = async () => {
  const response = await fetch(`${GITHUB_URL}/users`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};
