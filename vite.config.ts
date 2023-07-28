import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from "vite";

export default defineConfig((configEnv) => {
	const isDevelopment = configEnv.mode === "development";

	return {
		plugins: [
			react(), 
			VitePWA({
				manifest: {
					"icons":[{
						src:"bg-x.png",
						type:"image.png",
						purpose:"imagen no encontrada"
					}]
				},
				workbox: {
					runtimeCaching: [{
						urlPattern:({url})=>{
							return url.pathname.startsWith('/blogs')
						},
						handler: "CacheFirst" as const,
						options: {
							cacheName: "api-cache",
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
					}]
				}
			})],
		css: {
			modules: {
				generateScopedName: isDevelopment ? "[name]__[local]__[hash:base64:5]" : "[hash:base64:5]",
			},
		},
	};
});
