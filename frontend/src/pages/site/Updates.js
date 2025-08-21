import React from 'react';

export default function Updates(props) {
    return (
      <>
        {props.helmet}

        <main className="mt-40 w-3/4 mx-auto mb-14">
          <ol className="updates">
            <li className="bg-gray-100 h-full rounded-lg flex flex-col justify-center items-center shadow min-h-[200px]">
              <h1 className="text-2xl font-bold text-[#002147] mb-1">
                Updates
              </h1>
              <p className="text-xs mb-4 mx-12 text-center">
                Explore our journey, become apart of it, and get inspired.
              </p>
              <button
                name="__name__"
                className="h-4 w-4 block mx-auto bg-[#4BFB80] rounded-full text-white shadow-md border-color-white hover:border"
              ></button>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Aug, 04</h2>
              <ul className="text-lg font-normal">
                <li>- Clix.dev launched!</li>
                <li>- API.Clix.dev launched!</li>
                <li> - clixdev (pip) launched!</li>
                <li>- Endpoints: create | modify | manage</li>
                <li>- Data Models: create | modify | manage</li>
                <li>- Settings: create | modify</li>
                <li>- Projects: create | modify | manage</li>
                <li>- Account: modify</li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Aug, 06</h2>
              <ul className="text-lg font-normal">
                <li>- clixdev (pip): fixed type error</li>
                <li>- api.clix.dev (server): fixed empty value persistance</li>
                <li>- Account: click to copy terminal token</li>
                <li>- Endpoints: cleared redundancy errors</li>
                <li>- Settings: fixed ordering issue</li>
                <li>- Auth: removed a bug forcing logout</li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Aug, 07</h2>
              <ul className="text-lg font-normal">
                <li>- Endpoints: fixed agility bug</li>
                <li>- Data Models: fixed agility bug</li>
                <li>- Projects: now simpler to create</li>
                <li>- Account: you can reset your password</li>
                <li> - clixdev (pip): fixed type error</li>
                <li>- Updates to home page</li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Aug, 08</h2>
              <ul className="text-lg font-normal">
                <li>- clixdev (pip): version control</li>
                <li>
                  - api.clix.dev (server): updated terminal token generator
                </li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Aug, 18</h2>
              <ul className="text-lg font-normal">
                <li>- clixdev (pip): now generate comments for functions</li>
                <li>
                  - Projects: click project tokens to copy | enhanced
                  interaction
                </li>
                <li>- Account: click terminal token to copy</li>
                <li>
                  - Data Models: added more field types | fixed error with
                  deleting
                </li>
                <li>- Endpoints: removed some GET restrictions</li>
                <li>- api.clix.dev (server): improved data structures</li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Aug, 20</h2>
              <ul className="text-lg font-normal">
                <li>
                  - clixdev (pip): faster code generation | added foreign key
                  field
                </li>
                <li>- Projects: switch between active projects</li>
                <li>- Endpoints: refactored tables | enhanced interaction</li>
                <li>
                  - Data Models: refactored tables | added more field types |
                  enhanced interaction
                </li>
                <li>
                  - Settings: fixed remove button bug | enhanced interaction
                </li>
                <li>- api.clix.dev (server): fixed login bug</li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Aug, 28</h2>
              <ul className="text-lg font-normal">
                <li>
                  - Data Models: name validation | field validation | more field
                  types
                </li>
                <li>
                  - Endpoint: Request method, host, uri validation | response
                  code validation | fixed response code and message bug
                </li>
                <li>
                  - Endpoints: name and request method, host, uri validations |
                  smarter interaction
                </li>
                <li>- Account: get default profile pic | modify profile pic</li>
                <li>- Better email and password validations</li>
                <li>
                  - clixdev (pip): now available on main pip index | now
                  available for Windows | renamed sync to generate | now
                  generate automatic csrf status
                </li>
                <li>- api.clix.dev (server): enforced more validations</li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Aug, 29</h2>
              <ul className="text-lg font-normal">
                <li>
                  - Data Models: introduced dynamic fields | primary key
                  validation
                </li>
                <li>
                  - Settings: fixed ordering issue | now everything dynamic |
                  enhanced interaction
                </li>
                <li>- Projects: smoother active project switching</li>
                <li>
                  - clixdev (pip): added default and verbose parameters | added
                  more field types
                </li>
                <li>- Dynamic screen size</li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Aug, 30</h2>
              <ul className="text-lg font-normal">
                <li>- Added documentation</li>
                <li>- Data Models: fixed a bug with image field constraint</li>
              </ul>
            </li>

            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Sep, 09</h2>
              <ul className="text-lg font-normal">
                <li>- Major updates to the Endpoint section</li>
                <li>
                  - Removed the "Request Host" from Endpoint's request section
                </li>
                <li>- Added filtration to the "Request URI/Path"</li>
                <li>
                  - Due to some confusion, replaced the "Authorization header"
                  format
                </li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Sep, 13</h2>
              <ul className="text-lg font-normal">
                <li>- Major bug fixes and performance improvements</li>
                <li>- Empty selections will not register anymore</li>
                <li>
                  - Added more user friendly responses on the sign up form
                </li>
                <li>- Moved Project selection section to the Projects page</li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Sep, 19</h2>
              <ul className="text-lg font-normal">
                <li>- Introduced The BadgeBanner</li>
                <li>- You can now click the "i" icons next to each form field to see more information and visit helpful links</li>
                <li>- When you hover over the colored icons you can easily see what they do</li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Sep, 25</h2>
              <ul className="text-lg font-normal">
                <li>- Major Bug fixes and performance improvements</li>
                <li>- First time users are now prompted to create or activate a project if haven't already</li>
                <li>- Revamped the icons for simpler access</li>
              </ul>
            </li>
            <li className="ml-4 mb-4">
              <h2 className="text-sm font-medium text-[gray]">Oct, 10</h2>
              <ul className="text-lg font-normal">
                <li>- Revamped the dashboard with more dynamic features</li>
                <li>- You can now sort the Endpoints table by clicking the column header</li>
                <li>- The response section of the Endpoint is now more comprehensive</li>
                <li>- Switching between projects is now moved to the Projects page</li>
              </ul>
            </li>
          </ol>
        </main>
      </>
    );
}