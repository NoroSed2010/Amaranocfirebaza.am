import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <div>
      <div>
        <div>
          <h2>Մուտք գործել</h2>
          {error && <div>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Էլ. հասցե</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
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
                onChange={handlePasswordChange}
                required
                placeholder="********"
              />
            </div>

            <button type="submit">Մուտք գործել</button>

            <button type="button">
              Չունե՞ս հաշիվ։ <Link to="/register">Գրանցվել</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
