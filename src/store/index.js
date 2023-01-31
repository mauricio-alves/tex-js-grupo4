import { createStore } from 'vuex'
import dbAccommodations from './db/dbAccommodations';
import dbServices from './db/dbServices';
import { getDateInput } from './functions/getDate';
// import { overview } from './reservations';
// import sorteio from './home';

export default createStore({
  state: {
    produtos: {
      pratosQuentes: [{ nome: 'lazanha', preco: 180 }, { nome: 'salmão', preco: 230 }],
      sobremesas: [{ nome: 'bomba de chocolate', preco: 18 }, { nome: 'quindim', preco: 35 }]
    },

    reservation: {
      id: 0,
      accommodation: dbAccommodations[0].accommodation,
      checkin: `${getDateInput().year}-${getDateInput().month}-${getDateInput().day}`,
      checkout: `${getDateInput().year}-${getDateInput().month}-${getDateInput().day+1}`,
      qty: 1,
      rates: 1,
      services: [],
      total: dbAccommodations[0].price
    },

    login: {
      email: '',
      user: ''
    },

    modalServices: false,

    modalDetails: false,

    modal: {
      showServices: 'none',
      showDetails: 'none'
    }
  },

  getters: {
    loja: (state) => tipo => {
      const loja = state.produtos[tipo].map(
        item => { return { nome: item.nome, preco: item.preco }
      });

      return loja;
    },

    // reservation(state) {
    //   return state.reservation
    // },

    getStorage: () => storage => {
      return JSON.parse(localStorage.getItem(storage));
    },

    dbServices: () => {
      return dbServices
    },

    dbAccommodations: () => {
      return dbAccommodations
    }
  },

  mutations: {
    aplicaDesconto: (state, payload) => {
      state.produtos[payload].forEach(
        item => { item.preco = (item.preco * .9).toFixed(2) }
      )
    },

    // reservationUpdate: (state, payload) => {
    //   console.log(state.reservation[payload]);
    // }
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
    },

    // loadReservations: () => {
    //   // get all changeable form components
    //   const form = document.querySelectorAll('input[name="quarto"], input[type="date"], input[type="number"]');

    //   // initial values
    //   // init();

    //   form.forEach((item) => {
    //     item.addEventListener("change", () => {
    //       if (item.id === 'checkout') {
    //         const checkin = document.getElementById('checkin').value;

    //         if (item.value <= checkin) {
    //           item.value = `${sliceDate(checkin).year}-${sliceDate(checkin).month}-${parseInt(sliceDate(checkin).day) + 1}`;
    //           alert('Atenção! A data de Check out não pode ser menor ou igual à data de Check in.');
    //         };
    //       };

    //       overview();
    //     });
    //   });
    // }
  },

  modules: { }
});
