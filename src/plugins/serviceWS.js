import axios from 'axios'

export default {
  install: function(Vue) {

    //hardcode
    localStorage.setItem('urlApi', 'https://reqres.in/api');
    const HTTP = axios.create({
      baseURL: ``+localStorage.getItem("urlApi"),
      headers: {
        Authorization:""
      }
    })

    Vue.prototype.Get = function(token,urlMetodo, parmetros) {
      HTTP.defaults.headers.Authorization = token;
      HTTP.defaults.baseURL = localStorage.getItem("urlApi");
      if(parmetros)
        return HTTP.get(urlMetodo + parmetros)
      return HTTP.get(urlMetodo)
    }


    Vue.prototype.Post = function(token,urlMetodo, parmetros) {
      HTTP.defaults.headers.Authorization = token;
      HTTP.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
      HTTP.defaults.baseURL = localStorage.getItem("urlApi");
      return HTTP.post(urlMetodo, parmetros)
    }

    Vue.prototype.$ServiceWSPostLog = function(urlMetodo, parmetros) {
      HTTP.defaults.baseURL = localStorage.getItem("urlApi");
      return HTTP.post(urlMetodo, parmetros)
    }

    Vue.prototype.$ServiceWSPut = function(token,urlMetodo, parmetros) {
      HTTP.defaults.headers.Authorization = token;
      HTTP.defaults.baseURL = localStorage.getItem("urlApi");
      return HTTP.put(urlMetodo, parmetros)
    }
    Vue.prototype.$ServiceWSPatch = function(token,urlMetodo, parmetros) {
      HTTP.defaults.headers.Authorization = token;
      HTTP.defaults.baseURL = localStorage.getItem("urlApi");
      return HTTP.patch(urlMetodo, parmetros)
    }
    Vue.prototype.$ServiceWSDelete = function(token,urlMetodo, parmetros) {
      HTTP.defaults.headers.Authorization = token;
      HTTP.defaults.baseURL = localStorage.getItem("urlApi");
      return HTTP.delete(urlMetodo + parmetros)
    }

  }
}
