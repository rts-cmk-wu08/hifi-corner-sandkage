import { useState, useEffect } from "react";
import axios from "axios";
import "./Faq.scss"


const Faq = () => {

    const [faq, setFaq] = useState();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios("http://localhost:4000/faq")
        .then(response => setFaq(response.data))
        .finally(() => setLoading(false))
    }, []);

    return loading ? <p>Loading...</p> : ( 
        <section className="faq">
            {
                faq.map((faq) => (
                    <>
                    <h1>{faq.headline}</h1>
                    <article id={`${faq.subheadline}`}>
                        <p className="headlinetext">{faq.headlinetext}</p>
                        <h2>{faq.subheadline}</h2>
                        <p>{faq.text}</p>
                    </article>
                    </>
                ))
            }
        </section>
     );
}
 
export default Faq;