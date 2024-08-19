import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NavbarPage from './Navbar.tsx';
import './index.css';
import Search from './components/Search.tsx';
import Gallery from './components/Gallery.tsx';
import Pages from './components/Pages.tsx';
import ReactDOM from 'react-dom/client';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

createRoot(document.getElementById('navbar')!).render(
  <StrictMode>
    <NavbarPage />
  </StrictMode>
);
createRoot(document.getElementById('search')!).render(
  <StrictMode>
    <Search />
  </StrictMode>
);
createRoot(document.getElementById('pages')!).render(
  <StrictMode>
    <Pages />
  </StrictMode>
);

const queryClient = new QueryClient()

export default function Gallery_data() {
  return (
    <QueryClientProvider client={queryClient}>
      <Gallery />
    </QueryClientProvider>
  )
}

const rootElement = document.getElementById('gallery_block') as HTMLElement
ReactDOM.createRoot(rootElement).render(<Gallery_data />)