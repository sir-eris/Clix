import React from "react";
import { Link } from "react-router-dom";

class Subscription extends React.Component {
  render() {
    return (
      <div className="w-full mt-20 pl-32 pr-64">
        {/* header */}
        <div className="w-full flex justify-between mb-8">
          <div className="flex flex-col">
            <p className="text-sm text-gray-400 font-medium mb-3">
              Your plan renews in
            </p>
            <p className="text-5xl font-black text-[#002147] mb-2">14 Days</p>
            <Link className="text-[#00BFFF] text-sm">Set up auto pay</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-400 font-medium mb-3">
              Trial ends in
            </p>
            <p className="text-5xl font-black text-[#002147] mb-2">51 Days</p>
            <Link className="text-[#FF8B1F] text-sm">Upgrade</Link>
          </div>
        </div>
        <hr className="mb-8" />
        {/* content */}
        <div className="w-full p-6">
          <table className="w-full table-fixed text-left text-[10px]">
            <thead>
              <tr className="border-b select-none">
                <th className="p-2 w-24">Status</th>
                <th
                  className="p-2 cursor-pointer"
                  //   onClick={() => this.setSortBy("name")}
                >
                  <div className="flex justify-between items-center">
                    <span className="block">Name</span>
                    <span className="block"></span>
                  </div>
                </th>
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => this.setSortBy("method")}
                >
                  <div className="flex justify-between items-center">
                    <span className="block">Method</span>
                    <span className="block"></span>
                  </div>
                </th>
                <th className="p-2">Path</th>
                <th className="p-2">Params</th>
                <th className="p-2">Headers</th>
                <th className="border-b w-[50px] whitespace-nowrap"></th>
                <th className="border-b w-[50px] whitespace-nowrap"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                // key={endpoint.id}
                className={`border-b hover:bg-gray-100`}
                // onClick={(e) => this.selectItem(e, endpoint.id)}
              >
                <td className="p-2">
                  {/* TODO */}
                  <button
                    name="__name__"
                    className="signal ok relative h-4 w-4 flex justify-center items-center ml-2 rounded-full text-white hover:bg-[#4BFB80]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#4BFB80"
                      className="w-4 h-4 border-[#4BFB80] border rounded-full"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
                <td className="p-2">none</td>
                <td className="p-2">none</td>
                <td className="p-2">none</td>
                <td className="p-2">none</td>
                <td className="p-2">auth</td>
                <td className="p-2">
                  <Link
                    to={{
                      pathname: "/endpoints/edit",
                    }}
                    // state={{ id: endpoint.id }}
                    className="signal edit relative h-4 w-4 flex justify-center items-center rounded-full hover:bg-[#00bfff]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#00bfff"
                      className="w-4 h-4 rounded-full"
                    >
                      <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 17.25v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22a.75.75 0 011.06 1.06L4.56 16.5h2.69a.75.75 0 010 1.5h-4.5a.747.747 0 01-.75-.75zM12.22 13.28l3.22 3.22h-2.69a.75.75 0 000 1.5h4.5a.747.747 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v2.69l-3.22-3.22a.75.75 0 10-1.06 1.06zM3.5 4.56l3.22 3.22a.75.75 0 001.06-1.06L4.56 3.5h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V4.56z" />
                    </svg>
                  </Link>
                </td>
                <td className="p-2">
                  <button
                    name="__name__"
                    // onClick={() => this.removeEndpoint(endpoint.id)}
                    className="signal del relative transition-all h-4 w-4 flex justify-center items-center rounded-full hover:bg-[#d63230]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#d63230"
                      className="w-4 h-4 border-[#d63230] border rounded-full"
                    >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Subscription;
