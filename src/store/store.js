import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "#2b2b2b", //Change Sidebar Color || 'white', | "#2b2b2b" | "rgb(44, 59, 164)" | "rgb(96, 44, 164)" | "rgb(151, 210, 219)" | "rgb(77, 86, 100)"
    SidebarBg: "",
    navbarColor: "rgb(33, 193, 214)",
    setHorizontalLayout: true, // Horizontal layout
  },
  mutations: {
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      console.log('sidebar', payload, state)
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },
    SET_NAVBAR_COLOR(state, payload) {
      state.navbarColor = payload;
    },
    SET_LAYOUT(state, payload) {
      state.setHorizontalLayout = payload;
    },
  },
  actions: {},
  getters: {},
});
