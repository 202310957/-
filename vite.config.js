import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // 프로젝트의 루트 폴더가 기본 루트가 되도록 설정
  build: {
    outDir: 'dist', // 빌드 출력 경로
    rollupOptions: {
      input: './index.html', // index.html 경로를 루트로 설정
    },
  },
});