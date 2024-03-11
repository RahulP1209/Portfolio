import React from 'react'
import './Clients.css'
import Walmart from '../../Assets/walmart.png'
import Microsoft from '../../Assets/microsoft.png'
import Facebook from '../../Assets/facebook.png'
import Adobe from '../../Assets/adobe.png'

const Clients = () => {
  return (
    <div>
        <section id="clientsPage">
            <div id="clients">
                <h2 className="clientsPageTitle">My Clients</h2>
                <p className="clientsDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some pf the notable companies I have worked with includes:
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Walmart" className="clientImg" />
                    <img src={Facebook} alt="Facebook" className="clientImg" />
                    <img src={Microsoft} alt="Microsoft" className="clientImg" />
                    <img src={Adobe} alt="Adobe" className="clientImg" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Clients