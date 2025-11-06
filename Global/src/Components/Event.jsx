import React from 'react'
import './Event.css'

const Event = () => {
  return (
    <div className="event-sponsorship">
      <div className="event-hero">
        <h1 className="event-title">Sponsorship Packages</h1>
      </div>
      
      <div className="sponsorship-cards">
        <div className="sponsor-card silver-sponsor">
          <h2 className="sponsor-card-title">Silver Sponsor</h2>
          <ul className="sponsor-benefits">
            <li><em>Sponsor 3 Poster Presentation Awards</em></li>
            <li>2 complimentary registrations</li>
            <li>1 workshop slot (AV & catering included)</li>
            <li>1 exhibit booth (3x3 sqm)</li>
            <li>Logo on sponsorship page</li>
            <li>A4 color ad (excluding cover pages)</li>
            <li>1 insert in delegate bags</li>
            <li>Priority for extra sponsorships</li>
            <li>Online promotion on all social platforms</li>
            <li>10% waiver for next year's sponsorship</li>
          </ul>
          <div className="sponsor-divider"></div>
          <button className="sponsor-button">Become a Partner</button>
        </div>

        <div className="sponsor-card gold-sponsor">
          <h2 className="sponsor-card-title">Gold Sponsor</h2>
          <ul className="sponsor-benefits">
            <li><em>Sponsor 5 Poster Presentation Awards</em></li>
            <li>2 corporate workshop slots (AV included)</li>
            <li>1 exhibit booth (3x3 sqm)</li>
            <li>4 complimentary registrations</li>
            <li>Logo on homepage and sponsorship page</li>
            <li>A4 color ad (excluding cover pages)</li>
            <li>2 inserts in delegate bags</li>
            <li>Online promotion on all social platforms</li>
          </ul>
          <div className="sponsor-divider"></div>
          <button className="sponsor-button">Become a Partner</button>
        </div>

        <div className="sponsor-card elite-sponsor">
          <h2 className="sponsor-card-title">Elite Sponsor</h2>
          <ul className="sponsor-benefits">
            <li><em>Sponsor 10 Poster Presentation Awards</em></li>
            <li>3 corporate workshop slots (AV included)</li>
            <li>2 exhibit booths (3x3 sqm each)</li>
            <li>6 complimentary registrations</li>
            <li>Logo on homepage and sponsorship page</li>
            <li>A4 color ad (excluding cover pages)</li>
            <li>3 inserts in delegate bags</li>
            <li>Post-conference email to registrants</li>
            <li>Online promotion on all social platforms</li>
          </ul>
          <div className="sponsor-divider"></div>
          <button className="sponsor-button">Become a Partner</button>
        </div>

        <div className="sponsor-card exhibitor-sponsor">
          <h2 className="sponsor-card-title">Exhibitor</h2>
          <ul className="sponsor-benefits">
            <li>Sponsor 1 Poster Presentation Award</li>
            <li>1 complimentary registration</li>
            <li>Custom exhibit booth (3x3 sqm)</li>
            <li>Logo on sponsorship page</li>
            <li>A4 color ad in program/book of abstracts</li>
            <li>Leaflet in delegate bags</li>
            <li>Online promotion on all social platforms</li>
            <li>5% waiver for next year</li>
            <li>Product recognition on global website</li>
            <li>B2B meeting opportunities</li>
            <li>Branding at ceremonies</li>
            <li>Press release for your company</li>
            <li>Brand in 50,000 brochures globally</li>
            <li>Posters shared with 10,000 institutions</li>
            <li>Product recognition on global website</li>
          </ul>
          <div className="sponsor-divider"></div>
          <button className="sponsor-button">Become a Partner</button>
        </div>
      </div>
    </div>
  )
}

export default Event