"use client";

const Daisy = () => {
  const array = [...Array(20).keys()];
  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />

      <select className="select select-bordered w-full max-w-xs">
        {array.map((item) => (
          <option value="option1" key={item}>
            Option {item}
          </option>
        ))}
      </select>

      <input
        type="range"
        min={0}
        max="100"
        value="40"
        className="range range-primary"
      />
      <button className="btn">Button</button>
    </>
  );
};

export default Daisy;
