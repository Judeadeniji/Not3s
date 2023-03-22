import { CSML } from "brace-js";
import './component.css'
const { div, p, header, input, h2 } = CSML;

const Search = (type) => {
  return div(
    {className: `${type} search`},
    input(
      {
        type: 'search',
        name: "search",
        value: '',
        placeholder: 'Search'
      }
      )
    )
}

const Brand = () => {
  return div(
    {className: 'brand'},
    div({className: 'logo'}),
    div(
      {className: 'group'},
      h2({className: 'app-name'}, "Not3s App"),
      p({className: 'tagline'}, "Free Music Free Download")
    )
  )
}

const RightDiv = () => {
  return div(
    {className: 'group-right'},
    div({className: 'get-app'}, "Get App"),
    div(
      {className: 'menu-btn'},
      div(),
      div(),
      div()
      )
    )
}

const Header = () => {
  return div(
    {className: 'header-container'},
    header( {}, Brand(), Search('desktop'), RightDiv() ),
    Search('mobile')
    )
}

export default Header