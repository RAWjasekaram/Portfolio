import React from "react";

const Email: React.FC = () => {
  return (
    <div className="mx-auto">
      <form
        className=""
        action="https://getform.io/f/f0b8d807-73a4-4d90-af94-fa134e93610c"
        method="POST"
      >
        <div className=" flex flex-col">
          <input
            required
            className=""
            placeholder="Name"
            type="text"
            name="name"
          />

          <input
            required
            className=""
            placeholder="E-mail"
            type="email"
            name="email"
          />

          <input
            required
            className=""
            placeholder="Message"
            type="text"
            name="message"
          />
          <br />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Email;
