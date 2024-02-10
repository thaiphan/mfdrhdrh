import Link from "next/link";
import React from "react";

export default function DefaultLayout(props: React.PropsWithChildren) {
  return (
    <div className="grid grid-cols-12 h-full">
      <aside className="bg-red-700 col-span-2 p-4">
        <ul className="flex flex-col gap-y-2">
          <li>
            <Link
              href="/"
              className="p-4 block text-white bg-red-900 rounded-lg"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="p-4 block text-white hover:bg-red-900 rounded-lg"
            >
              Settings
            </Link>
          </li>
        </ul>
      </aside>
      <div className="col-span-10">
        <header className="bg-yellow-400 h-20">Home</header>
        <main className="">{props.children}</main>
      </div>
    </div>
  );
}
