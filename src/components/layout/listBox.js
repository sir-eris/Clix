import React from "react";
import { Fragment, useState } from "react";
import { SelectorIcon } from "@heroicons/react/solid";
import { Listbox, Transition } from "@headlessui/react";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export default function Example() {
  const [selected, setSelected] = useState([people[0], people[1]]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected} multiple>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                {selected.map((el) => (
                  <span className="block truncate">
                    {el.name}, {open ? "yes" : "no"}
                  </span>
                ))}
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options static={true}>
                  <div className="flex flex-wrap">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ selected, active }) =>
                          `relative mb-4 mx-1 border cursor-pointer rounded-full px-5 py- shadow-md focus:outline-none ${
                            selected ? "bg-[lightgreen] text-white" : "bg-white"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`text-xs ${
                                selected ? "text-white" : ""
                              }`}
                            >
                              {person.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </div>
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
