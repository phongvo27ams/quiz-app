import React from 'react'

import VideoHome from '../../assets/videos/home.webm'

const Home = () => {
    return (
        <div className="home-container">
            <video autoPlay muted loop>
                <source
                    src={VideoHome}
                    type="video/webm"
                />
            </video>

            <div className="home-content">
                <div className="big-title">There's a better way to ask</div>

                <div className="description">You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</div>

                <div className="button-container">
                    <button>Get's started - it's free!</button>
                </div>
            </div>
        </div>
    )
}

export default Home