import Link from 'next/link';
export default function Topbar() {
    return (
        <>

            <header>
                     <nav>
                    <div className="left-section">
                        <Link  href="/" className="logo">
                                Travel<span>Buddies</span>
                        </Link>
                    </div>
                    <div className="center-section">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="right-section">
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/profile">
                           Profile
                        </Link>
                        <Link href="/chat">
                            Chat
                        </Link>
                        <Link href="/logout">
                           Logout
                        </Link>
                    </div>
                </nav>
            
               
            </header>
        </>
    )
}
