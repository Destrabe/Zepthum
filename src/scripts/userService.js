const userService = {
  login: async (email, password) => {
    const user = await fetch("http://localhost:3005/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    if (user.status === 201) {
      console.log("login correcto");
      window.location.href = "/";
    } else {
      console.log("login fallido");
    }
  },
  register: async (email, password) => {
    const user = await fetch("http://localhost:3005/usuarios/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (user.status === 200) {
      console.log("registro correcto");
    } else {
      console.log("registro fallido");
    }
  },
};

export default userService;
