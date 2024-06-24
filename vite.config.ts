import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
<<<<<<< HEAD
    base: '/'
=======
    base: '/tg-tap-app/'
    // server: {
    //   port: 443,
    //   host: "0.0.0.0",
    //   hmr: {
    //     host: 'tg-mini-app.local',
    //     port: 443,
    //   },
    //   https: {
    //     key: './.cert/localhost-key.pem',
    //     cert: './.cert/localhost.pem',
    //   },
    // },
>>>>>>> c924c8cb0a83de1cf849922efc1d39519dc5443d
})
