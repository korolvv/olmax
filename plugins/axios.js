export default ({ $axios, store, app }) => {

      $axios.interceptors.request.use(request => {
        const a = app.i18n.locale;
        request.baseURL = process.env.apiUrl;
        request.params = {language: a};

        return request
      })
    }