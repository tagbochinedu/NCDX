import { useState, ChangeEvent } from "react";

const ComingSoon = () => {
  const [email, setEmail] = useState<string>("");
  const submitHandler = (e: any) => {
    e.preventDefault();
  };
  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>): any => {
    return setEmail(event.target.value);
  };

  return (
    <section className="min-h-[78vh] flex flex-col justify-center items-center">
      <h4 className="text-logo text-3xl ">We are launching soon 🚀</h4>
      <p className="text-lg text-lgr mt-2">
        Our website is opening soon. Please register to get notified when it′s
        ready!
      </p>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          className="px-3 py-1.5 text-lg border-lgr2 hover:border-lgr border-2 rounded-lg outline-2 focus:outline-green"
          placeholder="Enter email here"
        />
        <button
          type="submit"
          className="bg-green py-2 rounded-lg ml-3 px-3 text-lg text-white"
          onChange={emailChangeHandler}
        >
          NOTIFY
        </button>
      </form>
    </section>
  );
};

export default ComingSoon;
