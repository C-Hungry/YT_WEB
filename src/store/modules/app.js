import { getLanguage } from "@/lang/index";

const state = {
  language: getLanguage() || "zh"
};
const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language || "zh";
    localStorage.setItem("language", state.language);
  }
};

const actions = {
  setLanguage({ commit }, language) {
    commit("SET_LANGUAGE", language);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
