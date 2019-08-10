import Listing from "../components/Listing";
import Detail from "../components/Detail";


export default [
  {
    component: Listing,
    path:'/',
    exact: true
  },
  {
    component: Detail,
    path:'/:id'
  }
]