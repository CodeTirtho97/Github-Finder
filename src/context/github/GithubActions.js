import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Axios instance for GitHub API
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// Search GitHub users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// Get a single user and their repositories
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?sort=created&per_page=10`),
  ]);
  return { user: user.data, repos: repos.data };
};

