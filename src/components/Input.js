import React from "react";
import { codes } from "../data/codes";

function Input({ currency, title, setCurrency }) {
  const { value, name } = currency;

  return (
    <div className="bg-stone-200 w-full rounded-lg px-6 py-4 text-stone-800">
      <div className="flex w-full justify-center font-bold">
        <span>{title}</span>
      </div>
      <div className="w-full flex flex-col mt-4 gap-4">
        <select
          className="px-4 py-3 bg-stone-400 rounded-lg"
          onChange={(e) => setCurrency({ ...currency, name: e.target.value })}
          value={name}>
          {codes.map((code) => (
            <option value={code} key={Math.random() * 1000}>
              {code.toUpperCase()}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="rounded-lg px-4 py-2 text-stone-800"
          value={value}
          onChange={(e) => setCurrency({ ...currency, value: e.target.value })}
          disabled={title === "To"}
          required
        />
      </div>
    </div>
  );
}

export default Input;
