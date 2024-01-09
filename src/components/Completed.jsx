import CheckIcon from "./../assets/images/icon-check.svg";

const Completed = ({ setCompleted }) => {
  return (
    <div className="bg-white p-8 md:p-10 rounded-lg w-[350px] md:w-[500px] z-20 fixed top-32 md:top-28 left-[50%] translate-x-[-50%] flex flex-col justify-center items-center gap-4 md:gap-6">
      <img src={CheckIcon} alt="check icon"></img>
      <h2 className="font-bold text-lg">Thanks for your support!</h2>
      <p className="text-gray-500 text-sm leading-6 text-center">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        onClick={() => setCompleted(false)}
        className="bg-[#3CB4AB] w-fit m-auto px-8  text-white font-medium  rounded-full py-3 lg:hover:bg-[#157A74] lg:hover:shadow-lg duration-200"
      >
        Got it!
      </button>
    </div>
  );
};

export default Completed;
