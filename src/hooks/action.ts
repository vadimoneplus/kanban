import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { kanbanAction } from "../store/common/common.slice"

const actions = {
  ...kanbanAction
}

export const useActions = ()=>{
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}