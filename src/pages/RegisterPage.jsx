const RegisterPage = () => {
  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Email:</p>
        <input type="text" placeholder="John Doe" required name="userName" />
      </label>

      <label>
        <p>Email:</p>
        <input
          type="text"
          placeholder="hotmail@some.com"
          required
          name="userEmail"
        />
      </label>

      <label>
        <p>Password:</p>
        <input
          type="password"
          placeholder="********"
          required
          name="userPassword"
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default RegisterPage;
