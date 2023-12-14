import Topbar from "./Topbar"

export default function Layout({children}) {
  return (
    <div>
        <Topbar/>
            {children}
    </div>
  )
}
