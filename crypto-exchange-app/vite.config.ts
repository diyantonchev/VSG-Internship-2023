import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v3': {
        target: 'https://api.binance.com',
        changeOrigin: true
      },
      '/v2': {
        target: 'https://api-pub.bitfinex.com',
        changeOrigin: true
      },
      '/market/history': {
        target: 'https://api.huobi.pro',
        changeOrigin: true   
      },
      '/0/public': {
        target: 'https://api.kraken.com',
        changeOrigin: true
      },
    }
  }
});
