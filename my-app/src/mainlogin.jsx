import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div>
                <div>
                    <h2>Մուտք գործել</h2>

                    {error && (
                        <div>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Էլ. հասցե</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="example@mail.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Գաղտնաբառ</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="********"
                            />
                        </div>

                        <button type="submit">Մուտք գործել</button>

                        <p>
                            Չունե՞ս հաշիվ։ <Link to="/register">Գրանցվել</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
