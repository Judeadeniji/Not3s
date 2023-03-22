import { CSML } from "brace-js"
import { Location } from "brace-router"
const locationApi = Location()
export const AlbumSingleComponent = ({ artist_id }) => {
  
  return CSML.h1({}, (artist_id !== 'undefined' ? artist_id : 'Redirecting...'))
}