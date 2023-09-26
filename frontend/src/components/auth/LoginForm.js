import React from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();

  const [isPending, setIsPending] = React.useState(false);
  const __BaseURL = "http://localhost:8000";

  const initiateLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const { email, password } = form;

    const requestBody = {
      email: email.value,
      password: password.value,
    };

    console.log(requestBody);

    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    setIsPending(true);
    try {
      const res = await fetch(`${__BaseURL}/login`, requestOptions);
      if (!res.ok) {
        throw new Error("❌ Login failed...");
      }

      const data = res.json();
      console.log("✅ Login successful...");
      console.log("Data: ", data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsPending(false);
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="container-fluid">
      <div className="posstyle">
        <span>
          Don't have an account?
          <span className="loginbtn" onClick={() => navigate("/auth/sign-up", { replace: true })}>
            Get started
          </span>
        </span>
      </div>
      <div className="row align-items-center">
        <div className="col img_container">
          <div className="imgbox">
            <div>
              <img
                src="https://img.freepik.com/free-vector/green-leaves-logo_78370-2096.jpg?w=1380&t=st=1695488195~exp=1695488795~hmac=18288d285197931110e5601c86588b8569d214ec32a7f1e0c22448ebf90777f2"
                alt="logo"
                className="logo"
                width="100"
                height="100"
              />
              <span className="heading">Hi,Welcome Back</span>
            </div>
            <img
              src="https://www.apsnet.org/edcenter/disandpath/oomycete/pdlessons/Article%20Images/LateBlight03.jpg"
              height="318"
              width="400"
              alt="signup.png"
              style={{
                boxShadow: "0px 0px 12px green",
                left: "50%",
                position: "absolute",
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>
        <div className="col form_container">
          <div className="headingpos">
            <span className="headingform">Sign in to Manthan</span>
          </div>
          <form onSubmit={initiateLogin}>
            <div className="form-group w-75">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control p-2 w-100"
                id="email"
                name="email"
                required
                aria-describedby="emailHelp"
                placeholder="Enter email"
                autoComplete="off"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group w-75">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control p-2"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button
              disabled={isPending}
              type="submit"
              className="btn btn-success btn-lg btn-block my-2 w-75"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
