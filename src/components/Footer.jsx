import { footerLinks } from "../constants"

function Footer() {
  return (
    <footer>
      <div className="info">
        <p>More ways to shop: <a>Find an Apple store</a> or <a>other retailer</a> near you. Or call 000800 040 1966.</p>
      </div>
      <hr/>
      <div className="links">
        <p>Copyright 2024 Apple Inc. All rights reserved.</p>
        <ul>{
          footerLinks.map(({label, link})=>(
            <li key={label}><a href={link}>{label}</a></li>
          ))
        }</ul>
      </div>
    </footer>
  )
}

export default Footer