import "./About.scss"
import "../global.scss"

const About = () => {
    return ( 
        <section className="aboutSection">
            <h1 className="headline">Our History</h1>
            <section className="aboutUsGrid">
                <img className="aboutUsImg" src="http://localhost:4000/img/about/history_1.jpg" alt="" />
                <article className="card">
                    <h2 className="subheadline">History</h2>
                    <p className="orangeText">Established in the late 1960s, our family owned business is based in Edinburgh and Falkirk, but services customers across the UK. </p>
                    <p className="breadtext">Our Edinburgh branch has the longest history as an audio retailer in the UK. During recent renovations, receipts were found from Nicolson's Gramophone Saloon dating back to 1926. In the 1950s WG Graham took over the shop and renamed it WG Graham's Hi-Fi Corner. Upon his retirement, Graham Tiso bought the business and shortened the name to Hi-Fi Corner.</p> 
                    <p className="breadtext">Soon thereafter a young enthusiastic Colin MacKenzie (left), who was recommended by Linn's own Ivor Tiefenbrun, was employed to manage the shop; with a knack for business and years of experience in the hi-fi industry, Colin would later become the owner of Hi-Fi Corner. Today, Struan MacKenzie carries on the legacy as the company's Managing Director. </p>
                </article>
                <article className="card">
                    <h2 className="subheadline">Hear The Difference</h2>
                    <p className="orangeText">Book a demonstration at our Edinburgh or Falkirk showrooms.</p>
                    <p className="breadtext">Would you choose a quality car without a test drive? If you are familiar with the brand and have great trust in it, you might. However, our listening preferences are unique to the individual and with many of our customers new to the world of high quality sound and vision, we encourage everyone to come in to demonstrate the products they are interested in. You'll find a relaxing and comfortable environment in both our Edinburgh and Falkirk premises where you can decide for yourself if the kit is right for you. We also offer home demonstrations on selected products.</p>
                    <p className="breadtext">It's our aim to get the right product for you.</p>
                    <p className="breadtext">Our experts are on hand to guide you through the differences between speakers, amplifiers and sources and provide simple solutions that suit your needs.</p>
                </article>
                <img className="aboutUsImg" src="http://localhost:4000/img/about/difference_1.png" alt="" />
                <img className="aboutUsImg" src="http://localhost:4000/img/about/services_1.jpg" alt="" />
                <article className="card">
                    <h2 className="subheadline">Services</h2>
                    <p className="orangeText">Our passion for the products we sell and, for our customers' satisfaction simply means that we happily offer additional services not found on the high-street.</p>
                    <p className="breadtext">Home Setup - We want to ensure that the equipment you've purchased from us is installed correctly and sounds perfect; and we happily provide this service throughout the UK.</p>
                    <p className="breadtext">Part Exchange - To help you upgrade your system, we offer our part-exchange program. We can offer a set price, or sell your old kit on your behalf.</p>
                    <p className="breadtext">Turntable Doctor - Our turntable experts have been trained by the manufacturers for initial setup, long-term maintenance, and upgrading your high quality turntables.</p>
                    <p className="breadtext">Record Cleaning Service - Have some old records that need a bit of love? We offer Scotland's very own professional record cleaning service with our bespoke Pro-Ject record cleaner.</p>
                </article>
                <article className="card">
                    <h2 className="subheadline">Tailored For You</h2>
                    <p className="orangeText">We look forward to customising a system to meet your needs. </p>
                    <p className="breadtext">We don't favour one manufacturer over another - the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.</p>
                    <p className="breadtext">If you are looking for a product not found in our demonstration showrooms or our online site, don't fret as we have access to hundreds of brands.</p>
                    <p className="breadtext">One of our biggest pleasures of working in this industry is to see the smile on our customers' faces when they finally hear and see the system of their dreams.</p>
                </article>
                <img className="aboutUsImg" src="http://localhost:4000/img/about/tailored_1.jpg" alt="" />
            </section>
        </section>
     );
}
 
export default About;




// import { useState, useEffect } from "react";
// import axios from "axios";
// 
// 
// const About = () => {
// 
//     const [aboutus, setAboutus] = useState();
//     const [loading, setLoading] = useState(true);
// 
//     useEffect(() => {
//         axios("http://localhost:4000/aboutus")
//         .then(response => setAboutus(response.data))
//         .finally(() => setLoading(false))
//     }, []);
// 
//     return loading ? <p>Loading...</p> : (
//        <section>
//         {
//             aboutus.map((about) => (
//                 <>
//                 <h1>{about.headline}</h1>
//                 <article>
//                 <img src={`http://localhost:4000${about.image}`} />
//                     <div>
//                     <h2>{about.subheadline}</h2>
//                     <p>{about.headlinetext}</p>
//                     <p>{about.text}</p>
//                     </div>
//                 </article>
//                 </>
//             ))
//         }
//        </section>
//      );
// }
//  
// export default About;