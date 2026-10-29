import { useState } from "react";
import { profile } from "../data";
import Reveal from "./Reveal";

const LetsConnect = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const accessKey = import.meta.env.VITE_APP_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setStatus("sending");
    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4500);
  };

  return (
    <section className="block" id="connect" aria-label="Contact">
      <Reveal>
        <h2 className="block__title">Get In Touch</h2>
        <p className="lead">
          I'm looking for roles in AI / ML, data science and GenAI. If you have an idea or an opening, my inbox
          is always open: <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>

        <form className="form" onSubmit={onSubmit}>
          <div className="form__row">
            <input type="text" name="first_name" placeholder="First name" aria-label="First name" required />
            <input type="text" name="last_name" placeholder="Last name" aria-label="Last name" required />
          </div>
          <input type="email" name="email" placeholder="Email" aria-label="Email" required />
          <textarea name="message" rows="5" placeholder="Message" aria-label="Message" required />
          <button className="btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : status === "sent" ? "Sent! ✔" : "Send"}
          </button>
          <p className={`form__status form__status--${status}`} role="status">
            {status === "sent" && "✔ Email Sent Successfully! 😍"}
            {status === "error" && "Failed 😢 Please try again or email me directly."}
          </p>
        </form>
      </Reveal>
    </section>
  );
};

export default LetsConnect;
