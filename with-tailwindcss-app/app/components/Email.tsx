import React from "react";

const Email: React.FC = () => {
  return (
    <div className="flex justify-center w-full mx-auto">
      <form
        className="w-full"
        action="https://getform.io/f/f0b8d807-73a4-4d90-af94-fa134e93610c"
        method="POST"
      >
        <input
          required
          className="my-8 mx-auto"
          placeholder="Name"
          type="text"
          name="name"
        />
        <br />
        <input
          required
          className="my-4 mx-auto"
          placeholder="E-mail"
          type="email"
          name="email"
        />
        <br />
        <input
          required
          className="my-4 w-1/2 h-280px"
          placeholder="Message"
          type="text"
          name="message"
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Email;
