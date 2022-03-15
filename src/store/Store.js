import { reactive, watch } from "vue";
import axios from "axios";
import router from "../router";

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
        this.userState.isLoggedIn = true;
        router.push("/");
        console.log(response);
      })
      .catch((e) => {
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
