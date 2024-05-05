import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const scrollToCreditPoints = () => {
    const creditPointsContainer = document.querySelector('.credit-points');
    creditPointsContainer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className="welcome">
        <div className="blur">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1>Recycle Your Tech, Renew Our World!</h1>
            <p>Help us protect the environment by recycling your electronic waste!</p>
          </div>
          <div className="wel-img">
            <img src="/images/ewaste.png" alt="Ewaste" />
          </div>
        </div>
        <button onClick={scrollToCreditPoints} className="scroll-btn">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <Link to="/camera" className="btn">Scan Here</Link>
        
        </div>
      </div>
      <div className="credit-points">
        <h2>Voucher Credit Points</h2>
        <div className="grid">
          <div className="device">
            <img src="/images/mobile.jpg" alt="Mobile Phone" />
            <p>Mobile Phones: 70 points</p>
          </div>
          <div className="device">
            <img src="/images/laptop.jpg" alt="Laptop" />
            <p>Laptops: 100 points</p>
          </div>
          <div className="device">
            <img src="/images/battery.jpg" alt="Battery" />
            <p>Batteries: 5 points</p>
          </div>
          <div className="device">
            <img src="/images/keyboard.jpg" alt="Keyboard" />
            <p>Keyboards: 30 points</p>
          </div>
          <div className="device">
            <img src="/images/mouse.jpg" alt="Mouse" />
            <p>Mouse: 20 points</p>
          </div>
          <div className="device">
            <img src="/images/pendrive.jpg" alt="Monitor" />
            <p>Pendrive: 15 points</p>
          </div>
          <div className="device">
            <img src="/images/pcb.jpg" alt="Pcb" />
            <p>PCB: 15 points</p>
          </div>
          <div className="device">
            <img src="/images/microwave.jpg" alt="microwave" />
            <p>Microwave: 40 points</p>
          </div>
          <div className="device">
            <img src="/images/datacable.jpg" alt="Datacable" />
            <p>Datacable: 10 points</p>
          </div>
          <div className="device">
            <img src="/images/SD.jpg" alt="SD Cards" />
            <p>SD: 2 points</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
