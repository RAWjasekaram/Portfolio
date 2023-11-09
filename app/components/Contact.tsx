import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-800 py-10">
      <div className="container mx-auto">
        <h2 id="4" className="text-3xl underline font-bold text-yellow-700">
          Contact
        </h2>
        <p className="text-white text-xl">
          If you would like to get in touch, feel free to reach out to me using
          the form below which will send me a direct e-mail! Would love to hear
          from anyone looking to work with me or even if you're in the industry
          and have some constructive feedback!
          <br />
          <br />
          Thank you for visiting my portfolio I really appreciate it!
        </p>
        {/* Add a contact form or contact details here */}
      </div>
    </section>
  );
};

export default Contact;
