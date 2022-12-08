// --- OBS! Lyden på vidoen skal være slået fra med koden "muted" før vidoen afspilles automatisk --- //

import "./Video.scss"
import herovideo from "../video/hero_video.mp4"
const Video = () => {
 
    return (

<section className="introvideo">
    <video width="100%" height="auto" autoPlay loop muted>
    <source src={herovideo} type="video/mp4" />
    </video>
</section>

);
}
 
export default Video;