module.exports = {
  apps : [
    {
      "name" : "Alchemy Front-end",
      "script" : "npm start",
      /* "env" : {
        "NODE_ENV" : "production"
      } */
    }
  ],
  deploy: {
    production: {
      user: "root",
      host: "197.81.132.15",
      path: "~/alchemy/",
      repo
    }
  }
}