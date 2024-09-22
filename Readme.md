# The spending app guide
This guide should cover the steps needed to setup the **postgresql database**, the **backend rest api**, the **react app** and the **svelte app**.

## PostgreSQL db Setup
- Ensure you have **postgres** installed in your machine with `psql --version`, if not get it from [here](https://www.postgresql.org/download/) based on your os.
- Connect to postgresql with `psql -U your_user` (replace your_user with your actual postgresql username - the defaut username should be `postgres` mine is `jihed`)
- Create a db with `CREATE DATABASE spending_db;`
- Create a new user and grant it privileges (for better security) with `CREATE USER spending_user WITH PASSWORD 'secure_password';` and then `GRANT ALL PRIVILEGES ON DATABASE spending_db TO spending_user;`
- Exit the postgres gui with `\q`

## Backend rest api
- Access /api with `cd api/`
- Run `npm install` to install dependencies
- Run `node index.js` to start the server

# React app
- Access /react-spending-app with `cd react-spending-app/`
- Run `npm install` to install dependencies
- Start the react app with `npm run start`

# Svelte app
- Access /svelte-spending-app with `cd svelte-spending-app/`
- Run `npm install` to install dependencies
- Start the svelte app with `npm run dev`