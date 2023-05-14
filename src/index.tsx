import { createRoot } from "react-dom/client";
// Axios
import axios from "axios";
import { Chart, registerables } from "chart.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
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
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "./Redux/store";
const auth = getAuth();
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    dataIdFromObject: () => false,
  }),
  headers: {
    bearer: auth ? auth?.api_token : "",
  },
});
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios);
Chart.register(...registerables);

const queryClient = new QueryClient();
const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
