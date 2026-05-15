import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length > 0) return;
    // Simulate a submit
    console.log("Contact form submitted:", form);
    setStatus("Message sent — thank you!");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        <div className="checkout-container">
          <div className="checkout-items">
            <h2 className="checkout-section-title">Get in Touch</h2>
            <p>If you have any questions or need assistance, please feel free to contact us:</p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </label>

              <label>
                Email
                <input name="email" value={form.email} onChange={handleChange} />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </label>

              <label>
                Message
                <textarea name="message" value={form.message} onChange={handleChange} rows={6} />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </label>

              <div style={{ marginTop: 12 }}>
                <button type="submit" className="btn">Send Message</button>
                {status && <span style={{ marginLeft: 12 }}>{status}</span>}
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}