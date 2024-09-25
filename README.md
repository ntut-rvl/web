# Introduction

This is robot vision lab github page repository.
If you're interset in our research, welcome to [here](https://ntut-rvl.github.io/NTUT-RVL/) to take a look.

# Development

Our github page is build by vite & react in a docker enviroment.

## How to join us to maintain this page?
1. Fork this repo to your github.
2. Clone the repo you forked from your github to your local.
3. Run run_docker.sh with the following commands. Then you can get into a development docker container.
```
chmod +x run_docker.sh
bash run_docker.sh
```
4. Replact the the following configuration with vite.config.ts
```
import { defineConfig } from 'vite'
import alias from "@rollup/plugin-alias"
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    base: "/NTUT-RVL",
    plugins: [
        alias(),
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            manifest: {
                "name": "Robust Vision Lab",
                "short_name": "RV Lab",
                "description": "「機器人視覺實驗室」隸屬於國立臺北科技大學資訊工程研究所，歡迎具電機、資訊相關背景的同學加入我們的研究行列。",
                "start_url": "/",
                "display": "standalone",
                "background_color": "#FFFFFF",
                "theme_color": "#FFFFFF",
                "icons": [
                    {
                        "src": "/assets/favicon/apple-touch-icon.png",
                        "sizes": "180x180",
                        "type": "image/png"
                    },
                    {
                        "src": "/assets/favicon/favicon-32x32.png",
                        "sizes": "32x32",
                        "type": "image/png"
                    },
                    {
                        "src": "/assets/favicon/favicon-16x16.png",
                        "sizes": "16x16",
                        "type": "image/png"
                    },
                    {
                        "src": "/assets/favicon/safari-pinned-tab.svg",
                        "sizes": "any",
                        "type": "image/svg+xml",
                        "purpose": "maskable"
                    },
                    {
                        "src": "/assets/favicon/favicon.ico",
                        "sizes": "48x48",
                        "type": "image/x-icon"
                    }
                ]
            },
            includeAssets: ['**/*.{png|jpg|jpeg|svg}', 'favicon.ico'],
        })
    ],
    build: {
        manifest: true,
        rollupOptions: {
            external: ['react-helmet'],
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5173,
    }
})

```
5. In this docker container, you can build this app with the following commands for development.
```
npm install
npm run build
npm run dev
```

