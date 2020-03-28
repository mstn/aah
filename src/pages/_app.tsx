import { AppProps } from 'next/app';

import { IntlProvider } from 'react-intl';
import { ApolloProvider } from '@apollo/react-hooks';

import PageLayout from '../components/PageLayout';

import it from '../locale/it.json';
import initApolloClient from '../lib/apolloClient';

const messages = { it };

function App({ Component, pageProps }: AppProps) {
  const client = initApolloClient();
  return (
    <ApolloProvider client={client}>
      <IntlProvider locale="en" messages={messages['it']}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </IntlProvider>
    </ApolloProvider>
  );
}

export default App