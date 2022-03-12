import { reactive, watch } from "vue";
import axios from "axios";
import router from "../router";
console.log("abcd");

if (!localStorage.getItem("user")) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      isLoggedIn: false,
      firstname: "",
      lastname: "",
      email: "",
    })
  );
}

const store = {
  userState: reactive(JSON.parse(localStorage.getItem("user"))),
  doLogin(email, password) {
    axios
      .post("login", {
        email: email,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        this.userState.isLoggedIn = true;
        router.push("/");
        if (e.response) {
          const res = e.response;
          if (res.status == 400) {
            console.error("Invalid request, verify your input");
          } else if (res.status == 404) {
            console.error("User is not registered");
          }
        }
      });
    console.log(`${email}, ${password}`);
  },
};

export { store };
