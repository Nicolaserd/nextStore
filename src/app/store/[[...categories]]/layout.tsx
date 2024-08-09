import Link from "next/link"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div >
        <header>
          <nav className=" w-full h-9 fixed ">
            <ul className=" flex w-full h-full gap-3 bg-gray-800 items-center px-5">
              <Link href="/">
                <li className=" block hover:text-blue-700 text-gray-400  cursor-pointer transition-all ease-in-out duration-1000">
                    HOME
                </li>
              </Link>
              <Link href="/store">
                <li className=" block hover:text-blue-700 text-gray-400  cursor-pointer transition-all ease-in-out duration-1000">
                    CATEGORIAS
                </li>
              </Link>
            </ul>
            
          </nav>
        </header>
        {children}
      </div>
  
  );
}