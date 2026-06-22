import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://127.0.0.1:8000/register",
                {
                    name: username,
                    email,
                    password,
                }
            );

            setMessage("Registration Successful 🚀");

            setTimeout(() => {
                navigate("/login");
            }, 1500);

        } catch (error) {
            console.log(error);
            setMessage("Registration Failed");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8">

                <h1 className="text-4xl font-bold text-center mb-8">
                    Register
                </h1>

                <form
                    onSubmit={handleRegister}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-xl font-semibold"
                    >
                        Register
                    </button>

                </form>

                {message && (
                    <p className="text-center mt-4 text-blue-400">
                        {message}
                    </p>
                )}

                <div className="text-center mt-6">
                    <Link
                        to="/login"
                        className="text-gray-400 hover:text-white"
                    >
                        Already have an account? Login
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Register;