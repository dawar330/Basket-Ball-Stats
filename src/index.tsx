import { createRoot } from "react-dom/client";
// Axios
import axios from "axios";
import { Chart, registerables } from "chart.js";
// Apps
import { MetronicI18nProvider } from "./_metronic/i18n/Metronici18n";
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import "./_metronic/assets/sass/plugins.scss";
import "./_metronic/assets/sass/style.scss";
import "./_metronic/assets/sass/style.react.scss";

import { AppRoutes } from "./app/routing/AppRoutes";
import { AuthProvider, getAuth, setupAxios } from "./app/modules/auth";
import { ThemeModeProvider } from "./_metronic/partials/layout/theme-mode/ThemeModeProvider";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  DefaultOptions,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import { Provider } from "react-redux";
import store from "./Redux/store";
const auth = getAuth();

const httpLink = new HttpLink({ uri: "http://18.215.147.3:4000/graphql" });
const authMiddleware = new ApolloLink((operation, forward) => {
  const auth = getAuth();
  const token = auth ? auth?.api_token : "";
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      bearer: token,
    },
  }));
  return forward(operation);
});
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache({
    dataIdFromObject: () => false,
  }),

  defaultOptions: defaultOptions,
});

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic CourtIntel mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject CourtIntel interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios);
Chart.register(...registerables);

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <MetronicI18nProvider>
      <Provider store={store}>
        <ThemeModeProvider>
          <AuthProvider>
            <ApolloProvider client={client}>
              <AppRoutes />
            </ApolloProvider>
          </AuthProvider>
        </ThemeModeProvider>
      </Provider>
    </MetronicI18nProvider>
  );
}
