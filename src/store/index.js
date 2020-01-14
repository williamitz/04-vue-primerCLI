import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fruits: [
      {
        name: 'Manzana',
        quantity: 2
      }
    ]
  },
  mutations: {
    onAddFruits(state, fruit) {

      // console.log(quantity );
      if (!state.fruits.find(iterator => iterator.name === fruit.name)) {
        state.fruits.push({
          name: fruit.name,
          quantity: fruit.quantity
        });
        console.log('insertando fruta...', state.fruits);
        return { ok: true, message: 'Se insertó con éxito' };
      }
      return { ok: false, message: 'Ya existe una fruta con este nombre' };

    },

    onDeleteFruit( state, index ) {
      state.fruits[index] = null;
      state.fruits = state.fruits.filter( fruit => fruit !== null );

      return { ok: false, message: 'Se eliminó con éxito' };
    }
  },
  actions: {
    
  },
  modules: {
  }
})
