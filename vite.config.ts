import { defineConfig } from 'vite'

export default defineConfig({
  server: { host: '127.0.0.1' },
  plugins: [{
    name: 'refresh-deck-click-state',
    // Slidev caches click contexts by slide number. Rebuild them after deck edits.
    handleHotUpdate({ file, server }) {
      if (file.endsWith('/slides.md')) {
        setTimeout(() => server.ws.send({ type: 'full-reload' }), 250)
      }
    },
  }],
})
