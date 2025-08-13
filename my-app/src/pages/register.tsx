import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register(){
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Գաղտնաբառերը չեն համընկնում");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

  return (
    <div>
      <div>
        <h2>Գրանցվել</h2>

        {error && <div>{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
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

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-semibold">
              Կրկնել գաղտնաբառը
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              placeholder="********"
            />
          </div>

          <button type="submit">Գրանցվել</button>

          <p>
            Ունե՞ս հաշիվ։ <Link to="/login">Մուտք գործել</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
