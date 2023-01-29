import { createStore } from 'vuex'
// import sorteio from './home';

export default createStore({
  state: {
    produtos: {
      pratosQuentes: [{ nome: 'lazanha', preco: 180 }, { nome: 'salmão', preco: 230 }],
      sobremesas: [{ nome: 'bomba de chocolate', preco: 18 }, { nome: 'quindim', preco: 35 }]
    },
  },

  getters: {
    loja: (state) => tipo => {
      const loja = state.produtos[tipo].map(
        item => { return { nome: item.nome, preco: item.preco }
      });

      return loja;
    }
  },

  mutations: {
    aplicaDesconto: (state, payload) => {
      state.produtos[payload].forEach(
        item => { item.preco = (item.preco * .9).toFixed(2) }
      )
    }
  },

  actions: {
    aplicaDesconto: (context, payload) => {
      context.commit('aplicaDesconto', payload)
    },

    navMenu: () => {
      const navMenu = document.querySelector('.nav_menu')
      // Alterar comportamento da navbar após certa altura
      window.addEventListener('scroll', function (event) {
        event.preventDefault();
    
        if (window.scrollY > 880) {
          navMenu.classList.add('nav-colorida')
        } else {
          navMenu.classList.remove('nav-colorida')
        }
      }); 
    }
  },

  modules: {
    // sorteio: sorteio()
  }
});
