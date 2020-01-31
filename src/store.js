import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_CONTACTS = 'SET_CONTACTS'
const ADD_CONTACT = 'ADD_CONTACT'
const REMOVE_CONTACT = 'REMOVE_CONTACT'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    [SET_CONTACTS](state, contacts){
      state.contacts = contacts.sort((a, b) => b.id < a.id).slice();
    },
    [ADD_CONTACT](state, item){
      state.contacts.push(item);
    },
    [REMOVE_CONTACT](state, id){
      var rowIndex = state.contacts.findIndex((p)=> {
        return p.id == id
      });
      state.contacts.splice(rowIndex,1);
    },
    [UPDATE_CONTACT](state, param){
      state.contacts = [
        ...state.contacts.filter(element => element.id !== param.id),
        param
      ]
    },
  },
  actions: {

  }
})
