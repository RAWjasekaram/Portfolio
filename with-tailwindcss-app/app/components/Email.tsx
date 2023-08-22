import React from "react";

const Email: React.FC = () => {
  return (
    <div className="flex flex-col text-xl mx-4 lg:mx-80">
      <form
        className=""
        action="https://getform.io/f/f0b8d807-73a4-4d90-af94-fa134e93610c"
        method="POST"
      >
        <div className=" flex flex-col mx-24 space-y-8">
          <input
            required
            className="w-1/3 mx-auto"
            placeholder="Name"
            type="text"
            name="name"
          />

          <input
            required
            className=" w-1/3 mx-auto"
            placeholder="E-mail"
            type="email"
            name="email"
          />

          <textarea
            required
            className="w-4/5 mx-auto h-40" //Message box extends infinitely despite size? just acts as one line like notepad and extends 4ever//
            placeholder="Message"
            name="message"
          />
          <br />
          <div className="flex mx-auto w-1/2 justify-end">
            <button
              type="submit"
              className="bg-blue-500 flex justify-center hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md w-full"
            >
              Send
            </button>
          </div>
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default Email;
