# Starts a new container based on Linux (Alpine), comes with Node.js 20 preinstalled, Vite requires Node 20+
# This is like 'Give me a small Linux (alpine) computer with Node already installed'
FROM node:20-alpine

# Create and set working directory
# Inside the container, all project files are stored at nguyen_roline_site folder
WORKDIR /nguyen_roline_site

# First, copies only dependency files to working folder
# If our app code changes but dependencies don’t: Docker reuses this step, builds are much faster
COPY package*.json ./

# Then, Installs all dependencies listed in package.json
# Creates node_modules/ inside the container, makes our container self-contained
RUN npm install

# Copies everything else to /nguyen_roline_site folder
    #src/
    #vite.config.js
    #index.html
    #etc.
COPY . .

# Documents that the app listens on port 7775 inside the container
EXPOSE 7775

# Start the dev server (run command: npm run dev) after the container is created to launch the Vite server
CMD ["npm", "run", "dev"]