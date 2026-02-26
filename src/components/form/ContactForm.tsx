"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      setStatus("success");
      alert("Message envoyé avec succès !");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form text-center mx-auto">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Nom complet *"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Adresse e-mail *"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="form-group mb-0">
            <textarea
              name="message"
              className="form-control"
              placeholder="Écrivez votre message *"
              required
            />
          </div>
        </div>
      </div>

      <button
        className="default-btn"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
}
