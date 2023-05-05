import { Signup } from "./components/Signup/Signup";
import { Signin } from "./components/Signin/Signin";
import { useState } from "react";
function App() {
	const [isLoggingIn, setLoggingIn] = useState(true);
	const setlogginginHandler = () => {
		setLoggingIn(true);
	};
	const setSigningUp = () => {
		setLoggingIn(false);
	};
	return (
		<div className="App">
			{!isLoggingIn && <Signup onclick={setlogginginHandler} />}
			{isLoggingIn && <Signin onclick={setSigningUp} />}
		</div>
	);
}

export default App;
