module.exports = {
  apps: [{
    name: "DEMO Next with MySQL",
    script: "npm",
    args: "run start",
    instances: 3,
    exec_mode: "cluster",
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
    interpreter: "/bin/bash",
    env: {
      NODE_ENV: "development",
      DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
      HELLO: process.env.HELLO,
    },
    env_production: {
      NODE_ENV: "production",
      DB_CONNECTION_URL: process.env.DB_CONNECTION_URL,
      HELLO: process.env.HELLO,
    },
  }, ],
};