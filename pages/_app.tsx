import { ReduxProvider } from '@/redux/provider';
import '../styles/global.css';

export default function App({ Component, pageProps }: {
  Component: any;
  pageProps: any;
}) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  )
}
