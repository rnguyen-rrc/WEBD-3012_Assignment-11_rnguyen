import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: 
 		{
 		  	  host: '0.0.0.0', // allow Vite to listen on all container network interfaces so Docker-forwarded requests can be accepted
 			    port: 7775, // Vite will listen on port 7775 inside the container
 			    strictPort: true // force Vite to use port 7775 and fail to start if the port is already in use			
 		}
})
