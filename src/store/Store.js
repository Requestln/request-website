import { reactive, watch } from "vue";
import axios from "axios";
import router from "../router";

if (!localStorage.getItem("user")) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      isLoggedIn: false,
      id: ""
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
        this.userState.isLoggedIn = true;
        this.userState.id = response.data.id;
        router.push("/");
        console.log(`New user logged in: ${JSON.stringifyr(esponse.data)}`);
      })
      .catch((e) => {
        if (e.response) {
          const res = e.response;
          if (res.status == 400) {
            console.error("Invalid request");
          } else if (res.status == 404) {
            console.error(`email ${email} doesn't corespond to any account`);
          }
        }
      });
  },

  doSignUp(signUpPayload) {
    axios
      .post("register", {
        firstname: signUpPayload.firstname,
        lastname: signUpPayload.lastname,
        email: signUpPayload.email,
      })
      .then((response) => {
        router.push({
          name: "CheckYourEmail",
          params: {
            email: response.data.email,
          },
        });
        console.log(response);
      })
      .then((error) => {});
  },
  async doClaimAccount(token) {
    var isSuccess = true;
    const res = await axios
      .get("confirmRegistration", {
        params: { token: token },
      })
      .catch((e) => {
        isSuccess = false;
      });
    return isSuccess;
  },
};

export { store };
