import "./Signin.css";
import logo from "./logo.svg";

export const Signin = (props) => {
	return (
		<div className="card">
			<img src={logo} alt="" />
			<h2>Sign In</h2>
			<form className="form">
				<input
					name="email"
					type="email"
					className="control"
					placeholder="Email"
				/>
				<input
					name="password"
					className="control"
					placeholder="Password"
					type="password"
				></input>
				<button className="control" type="button">
					SIGN IN
				</button>
				<button className="control" type="button" onClick={props.onclick}>
					CREATE NEW ACCOUNT
				</button>
			</form>
		</div>
	);
};
