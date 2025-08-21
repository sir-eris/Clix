import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function ComboBox({ name, defaultValue, onChange, options, ...props }) {
  const [selected, setSelected] = useState(
    defaultValue !== undefined ||
      defaultValue !== null ||
      (typeof defaultValue === "string" && defaultValue.trim() !== "")
      ? defaultValue
      : options[0]
  );
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setSelected(e);
    onChange({ target: { name: name, value: e } });
  };

  const filteredoptions =
    query === ""
      ? options
      : options.filter((option) =>
          option
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox
      name={name}
      value={selected}
      onChange={(e) => handleInputChange(e)}
    >
      <div className="relative">
        <div
          className="relative text-xs w-full h-full cursor-default overflow-hidden rounded-lg border bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[deepskyblue]"
          {...props}
        >
          <Combobox.Input
            className="w-full border-none py-2 pl-3 pr-10 text-gray-900 focus:ring-0"
            displayValue={(option) => option}
            onChange={(event) => setQuery(event.target.value)}
            name={name}
          />
          <Combobox.Button
            name="__name__"
            className="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <SelectorIcon
              className="h-4 w-4 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredoptions.length === 0 && query !== "" ? (
              <Combobox.Option
                key={name}
                name={name}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-[deepskyblue] text-white" : "text-gray-900"
                  }`
                }
                value={query}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {query}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? "text-white" : "text-[deepskyblue]"
                        }`}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ) : (
              filteredoptions.map((option) =>
                option ? (
                  <Combobox.Option
                    key={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-[deepskyblue] text-white" : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-[deepskyblue]"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ) : null
              )
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
