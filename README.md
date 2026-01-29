# WEBD-3012_Assignment-11_rnguyen
Create a development environment that displays a h1 tag with the text “Codin 1” website using React + Vite
Create a container with the name “nguyen_roline_coding_assignment11”
Host the site files in a workdir called “nguyen_roline_site”
Get the web application running on localhost:7775 (127.0.0.1:7775)

1. **Make sure we have Node.js installed**
   
	a. Opening WSL window
	b. Type following commands

		node -v
		(Mine returned v24.12.0)

		npm -v
		***********************
		(Mine returned 11.7.0)
   Confirm that Node.js has been already installed, then proceed to next step

2. **Create a React app using vite in VS Studio Code**
   
	a. For ease of organization, create a folder name 'WEBD-3012_Assignment-11_rnguyen'

	b. Push this folder to git using Git Desktop by following these steps
	
	i. File -> Add local repository
   	ii. Under Local path, browse to the created folder 'WEBD-3012_Assignment-11_rnguyen'
   iii. Click 'Add repository'
   iv. Click 'create a repository'
   v.  Fill in the fields and select your preferred options, at minimum, assign a name & description and select 'Initialize this repository with a README' to create an initial commit with a README.md file to the new repository
   vi. Click 'Create repository'
   vii. At this step, the new repository only exists on our local computer and we are the only one who can access the repository
   viii. In the repository bar at top, click Publish repository.
   ix. Code is set to Private by default, switch to public to instructor can access and do assessment, then click Publish Repository
   Now you've created and published your repository
   
	c. Inside VS Studio Code, click on icon '><' at bottom left to connect to WSL
	d. File -> Open folder -> copy the following command to open the folder

		/mnt/c/Users/roline/OneDrive/Documents/TERM 3/WEBD-3012 Business Systems Build and Testing/Coding Assignments/WEBD-3012_Assignment-11_rnguyen

	e. From VS Studio Code, Terminal window, type the following command to create a subfolder name `rnguyen-a11`:

    	mkdir rnguyen-a11

	f. From VS Studio Code, Terminal window, type the following command to move to folder 'rnguyen-a11'

		cd rnguyen-a11

	g. From VS Studio Code, Terminal window, type the following command to create a react project using vite

		npm create vite@latest .

		Select framework: React
		Select variant: JavaScript
		Use Rolldown-vite: No
		Install with nmp and start now? Yes
		Click Enter, and wait for the installation to finish.

	h. Once installation is finished, the terminal window returned the following info:

  		➜  Local:   http://localhost:5173/
 		  ➜  Network: use --host to expose
  		➜  press h + enter to show help

	i. Go to your browser, open http://localhost:5173/, it will load the default Vite + React page to confirm the app runs successfully
	
	Now we will update source code to meet the assignment's requirement which is to create a development environment that displays a h1 tag with the text “Codin 1”
	
	j. In VS Studio Code, from the left panel, open app_a11 -> src -> App.jsx
	k. Update the React application to display an h1 element with the text Codin 1 (see App.jsx for implementation details)
		
	l. Refresh the page http://localhost:5173/. If it doesn't show updates, from VS Studio Code, Terminal window, type the following command to stop the app and run it again

		Ctrl + C

		npm run dev
   
	m. Go to http://localhost:5173/, and refresh the page to ensure the update takes effect.
	   This confirms that the application works correctly on the local host machine before being containerized with Docker.

4. **Create a docker container with the name “nguyen_roline_coding_assignment11”**

   3A. **Update vite.config.js so Docker can forward the port**
   
	a. In VS Studio Code, from the left panel, root folder -> open 'vite.config.js'
   
	b. Replace current content with

		import { defineConfig } from 'vite'
			import react from '@vitejs/plugin-react'

			export default defineConfig({
  				plugins: [react()],
  				server: 
				{
    			  	  host: '0.0.0.0', // allow Vite to listen on all container network interfaces so Docker-forwarded requests can be accepted
    				    port: 7775, // Vite will listen on port 7775 inside the container
    				    strictPort: true // force Vite to use port 7775 and fail to start if the port is already in use			
				}
			})
	c. Save the file
   
	3B. **Create Dockerfile**

	a. In VS Studio Code, create a new file 'Dockerfile' (no file extension) in the app root folder

	b. Prepare the Dockerfile (refer to the Dockerfile included in the project for full command details).
	In general, the Dockerfile performs the following tasks:
	
		Uses Node.js 20 on Alpine Linux as the base image (required by Vite)
		Sets "/nguyen_roline_site" as the working directory inside the container
		Installs all project dependencies
		Copies the application source code into the container
		Exposes port 7775 for the Vite development server
		Automatically starts the application using "npm run dev" when the container runs

   3C. **Create Docker Image**

   a. In VS Studio Code -> Terminal, from inside 'app_a11' folder, type the following command to create docker image with name 'nguyen_roline_assignment11_img'

			docker build -t nguyen_roline_assignment11_img .

	b. Type the following command to confirm the image has been created

			docker images

   3D. **Create Docker Container**

   a. From inside 'app_a11', type the following command to create docker container with name 'nguyen_roline_coding_assignment11'

			docker run -p 7775:7775 --name nguyen_roline_coding_assignment11 nguyen_roline_assignment11_img
			
   b. Type the following command to verify docker container is running

			docker ps
   3E. **Confirm the app runs successfully using Docker**

   a. Go to browser, type the following URL to verify that the app can be run

			http://localhost:7775/

   b. In VS Studio Code -> Terminal, type the following command to verify that all site files are copied into /nguyen_roline_site, and all commands (npm install, npm run dev) run from there
   
			docker exec -it nguyen_roline_coding_assignment11 pwd

	c. **Additional Notes**:

	Commands to start/stop container manually if needed

		docker start nguyen_roline_coding_assignment11
		docker stop nguyen_roline_coding_assignment11
