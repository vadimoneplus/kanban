import { ReactNode } from "react"
import { Header } from "../header/header"
import { Sidebar } from "../sidebar/sidebar"


type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Sidebar />
    </>

  )
};

