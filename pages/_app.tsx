import { AppProps } from 'next/app';

import { IntlProvider } from 'react-intl';

import PageLayout from '../components/PageLayout';

import it from '../locale/it.json';

const messages = { it };

function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale="en" messages={messages['it']}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </IntlProvider>
  );
}

export default App