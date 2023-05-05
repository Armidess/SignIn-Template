import "./Signup.css";
import logo from "./logo.svg";

export const Signup = (props) => {
	return (
		<div className="card">
			<img src={logo} alt="" />
			<h2>Sign Up</h2>
			<form className="form">
				<input
					name="full name"
					type="text"
					className="control"
					placeholder="Full Name"
				/>
				<input
					name="username"
					type="text"
					className="control"
					placeholder="Username"
				/>
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
					JOIN NOW
				</button>
				<button className="control" type="button" onClick={props.onclick}>
					SIGN IN
				</button>
			</form>
		</div>
	);
};
