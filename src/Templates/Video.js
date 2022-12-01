// --- OBS! Lyden på vidoen skal være slået fra med koden "muted" før vidoen afspilles automatisk --- //

const Video = () => {
    return ( 

<div class="introvideo">
    <video width = "100%" height = "auto" muted autoPlay loop>
    <source src = "/src/Components/video/HiFi-Corner-Web-Video.mp4"></source>
    </video>
</div>

);
}
 
export default Video;