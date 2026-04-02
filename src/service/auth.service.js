export async function loginService(req) {
    const { email, password } = req;
  const user = {
    email: email,
    password: password,
  };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auths/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const loggedUser = await res.json();
    if (loggedUser.error == "Unauthorized") {
      throw new Error("User does not exit!");
    }
    return loggedUser;
  } catch (error) {
    console.log("something Error", error);
  }
}
