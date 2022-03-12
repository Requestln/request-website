import { reactive } from "vue";
import axios from "axios";
import router from "../router"
console.log("abcd")
export const store = {
  userState: reactive({
    isLoggedIn: false,
    firstname: "",
    lastname: "",
    email: "",
  }),

  doLogin(em, password) {
    axios
      .post("http://localhost:9555/api/v1/login", {
        email: em,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        this.userState.isLoggedIn = true;
        router.push("/")
        if (e.response) {
          const res = e.response;
          if (res.status == 400) {
            console.error("Invalid request, verify your input");
          } else if (res.status == 404) {
            console.error("User is not registered");
          }
        }
      });
    console.log(`${em}, ${password}`);
  },
};
