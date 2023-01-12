import '../styles/globals.css'
import Layouts from "../componets/Layouts";

import '../i18n/config'
import {useEffect, useState} from "react";

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)
  useEffect(()=>{
    setShowChild(true)
  })
  if(!showChild) {
    return null
  }
  return <Layouts>
    <Component {...pageProps} />
  </Layouts>
}
