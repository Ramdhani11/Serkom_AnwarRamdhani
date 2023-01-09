const Auth = {
  signIn() {
    if (localStorage.getItem("email") && localStorage.getItem("password"))
      return true;
    return false;
  },
  signOut({ navigate }) {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/");
  },
};

export default Auth;
