// --- OBS! Lyden på vidoen skal være slået fra med koden "muted" før vidoen afspilles automatisk --- //

import { useState, useEffect } from "react";
import axios from "axios";
import "./Video.scss"

const Video = () => {
    const [video, setVideo] = useState();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios("http://localhost:4000/assets/hero_video.mp4")
        .then(response => setVideo(response.data))
        .finally(() => setLoading(false))
    }, []);
    return loading ? <p>Loading...</p> : (

<section className="introvideo">
    <video width="100%" height="auto" autoPlay loop muted>
    <source src={video.video}></source>
    </video>
</section>

);
}
 
export default Video;