import React , {useContext , useState , useEffect} from 'react'

import Parent from './Parent.jsx'

function GrandParent() {
  return (
    <Parent/>
  )
}

export default GrandParent