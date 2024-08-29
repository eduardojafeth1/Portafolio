import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,  // Permite que el servidor sea accesible en la red local
    port: 3000,  // Puedes cambiar el puerto si lo necesitas
  },
});
