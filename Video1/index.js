import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const githubApi = {
  login: "va4unsingh",
  id: 199179719,
  node_id: "U_kgDOC989xw",
  avatar_url: "https://avatars.githubusercontent.com/u/199179719?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/va4unsingh",
  html_url: "https://github.com/va4unsingh",
  followers_url: "https://api.github.com/users/va4unsingh/followers",
  following_url:
    "https://api.github.com/users/va4unsingh/following{/other_user}",
  gists_url: "https://api.github.com/users/va4unsingh/gists{/gist_id}",
  starred_url: "https://api.github.com/users/va4unsingh/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/va4unsingh/subscriptions",
  organizations_url: "https://api.github.com/users/va4unsingh/orgs",
  repos_url: "https://api.github.com/users/va4unsingh/repos",
  events_url: "https://api.github.com/users/va4unsingh/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/va4unsingh/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Varun",
  company: null,
  blog: "va4unsingh.com",
  location: "Delhi",
  email: null,
  hireable: null,
  bio: "19 | Learning by Building  ",
  twitter_username: "va4unsingh",
  public_repos: 6,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2025-02-14T02:33:16Z",
  updated_at: "2025-05-14T04:15:34Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1 style='color:red'>Please Login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2 style='color:green'>Youtube</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubApi);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
