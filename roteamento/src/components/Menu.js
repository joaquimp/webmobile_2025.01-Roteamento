import Link from "next/link";

export default function Menu() {
    return (
      <nav>
        <div className="logo">
            <Link href="/">
                Logo
            </Link>
        </div>
        <ul>
          <li>
            <Link href="/fci">
                FCI
            </Link>
            </li>
          <li>
          <Link href="/ee">
                EE
            </Link>
          </li>
        </ul>
      </nav>
    )
  }