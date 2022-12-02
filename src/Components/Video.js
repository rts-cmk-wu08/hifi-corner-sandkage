// --- OBS! Lyden på vidoen skal være slået fra med koden "muted" før vidoen afspilles automatisk --- //

import introvideo from "./video/HiFi-Corner-Web-Video.mp4"

const Video = () => {
    return ( 

<section className="introvideo">
    <video width="100%" height="auto" autoPlay loop muted>
    <source src={introvideo}></source>
    </video>
</section>

);
}
 
export default Video;