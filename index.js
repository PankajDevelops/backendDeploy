require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const github = {
  login: "PankajDevelops",
  id: 103552227,
  node_id: "U_kgDOBiwU4w",
  avatar_url: "https://avatars.githubusercontent.com/u/103552227?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/PankajDevelops",
  html_url: "https://github.com/PankajDevelops",
  followers_url: "https://api.github.com/users/PankajDevelops/followers",
  following_url:
    "https://api.github.com/users/PankajDevelops/following{/other_user}",
  gists_url: "https://api.github.com/users/PankajDevelops/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/PankajDevelops/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/PankajDevelops/subscriptions",
  organizations_url: "https://api.github.com/users/PankajDevelops/orgs",
  repos_url: "https://api.github.com/users/PankajDevelops/repos",
  events_url: "https://api.github.com/users/PankajDevelops/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/PankajDevelops/received_events",
  type: "User",
  site_admin: false,
  name: "Pankaj Kumar",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 11,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: "2022-04-13T03:44:35Z",
  updated_at: "2024-05-14T08:10:13Z",
};

app.get('/github',(req,res) => {
    res.json(github);
});

app.get("/motionhitech", (req, res) => {
  res.send("10M+ Visitors !!! On Motion Hi-Tech");
});

app.get("/login", (req, res) => {
  res.send("Login to continue");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
