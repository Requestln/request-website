import { reactive } from "vue";

export const store = {
  userState: reactive({
    isLoggedIn: false,
    firstname: "",
    lastname: "",
    email: "",
  }),

  async doLogin(email, password) {
    console.log(`${email}, ${password}`)
  },
};
