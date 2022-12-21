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
            <h1 className="headline">Faq</h1>
            <div className="faqbox">
            {
                faq.map((faq) => (
                    <>
                    
                    <article id={`${faq.subheadline}`}>
                        <p className="headlinetext">{faq.headlinetext}</p>
                        <h2 className="subheadline">{faq.subheadline}</h2>
                        <p className="faqtext">{faq.text}</p>
                    </article>
                    </>
                ))
            }
            </div>
        </section>
     );
}
 
export default Faq;