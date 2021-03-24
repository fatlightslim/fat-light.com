import Link from "next/link"

const Name = ({ name, href }) => (
  <li className="text-6 md:text-xl">
    <span className="mr-2">{name}</span> 
    <Link href={href}>
      <a className="block md:inline-block"  target="_blank" rel="noopener">
        <span className="text-blue-300">{href}</span>
      </a>
    </Link>
  </li>
)

export default function Thanks({
  data = {
    // prompt: "computer:~$",
    prompt: "fatlightslim:~$",
    title: "FatLightSlim loves open source \u2665",
    links: [
      { name: "Node.js", href: "https://nodejs.org/" },
      { name: "React.js", href: "https://reactjs.org/" },
      { name: "Next.js", href: "https://nextjs.org/" },
      { name: "Tailwind CSS", href: "https://tailwindcss.com/" },
      { name: "Vim", href: "https://www.vim.org/" },
      { name: "Git", href: "https://git-scm.com/" },
      { name: "Homebrew", href: "https://brew.sh/" },
      {
        name: "Karabiner-Elements",
        href: "https://karabiner-elements.pqrs.org/",
      },
    ],
  },
}) {
  return (
    <div className="bg-yellow-100 p-2 md:px-40 md:py-12 min-h-screen">
      <h3 className="dosis text-6xl leading-tight text-center font-bold mb-8">Thank you, Open Source!</h3>

      <div className="w-full">
        <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono  bg-gray-800 pb-6  rounded-lg leading-normal overflow-hidden">
          <div className="top mb-2 flex">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="mt-4 flex">
            <span className="text-green-400 hidden md:block">{data.prompt}</span>
            <p className="flex-1 typing items-center pl-2">{data.title}</p>
          </div>
          <ul className="leading-9 mt-4">
            {data.links.map((value) => (
              <Name key={value.name} {...value} />
            ))}

            <li className="mt-2 flex">
              <span className="text-green-400 hidden md:block">{data.prompt}</span>

               <span className="md:px-2">Our GitHub
                <Link href="https://github.com/fatlightslim/">
                  <a target="_blank" className="text-red-400 pl-2 underline block md:inline-block" rel="noopener">
                    https://github.com/fatlightslim/
                  </a>
                </Link>
              </span>
            </li>
            <li className="flex">
              <span className="text-green-400 hidden md:block">{data.prompt}</span>
              <span className="flex-1 typing items-center pl-2">
              Pull requests are always welcome!
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
