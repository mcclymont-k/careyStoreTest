import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let usersAPI = 'http://localhost:8081/users'

const state = {
  products: []
}

const actions = {
  LOAD_PRODUCTS ({ commit }) {
    axios.get(usersAPI).then((response) => {
      commit('SET_PRODUCTS', { products: response.products })
    }, (err) => {
      console.log(err)
    })
  },
}

const mutations = {
  SET_PRODUCTS: (state, { products }) => {
    state.products = products
  },

  ADD_PRODUCT: (state, newProduct) => {
    state.products.push({
      'id': newProduct.id,
      'title': newProduct.title,
      'price': newProduct.price,
      'description': newProduct.description,
      'image': newProduct.image
    })
  }

}

const getters = {
  products: state => state.products
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
