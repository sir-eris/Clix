import React from 'react';


export default function Http404(props) {
    return (
      <main id="http404" className="select-none">
        {props.helmet}
        <a href="/" className="block w-fit mx-auto pt-12">
          <img
            src="https://clix-public-assets.s3.us-west-1.amazonaws.com/site/logo.png"
            width={"23px"}
            height={"23px"}
            className="mx-auto mb-24"
            alt="Clix.dev official logo"
          />
        </a>
        <div title="404">404</div>
        <span className="text-[#00bfff] text-sm cursor-pointer underline">
          <a href="/">Let's go back home</a>
        </span>
      </main>
    );
}
