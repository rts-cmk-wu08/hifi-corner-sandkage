import { useState, useEffect } from "react";
import axios from "axios";


const Faq = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [faq, setFaq] = useState();
    
    useEffect(() => {
        axios("http://localhost:4000/faq")
        .then(response => setFaq(response.data))
        .catch(() => setError("Something went wrong"))
        .finally(() => setLoading(false))
    }, []);

    return ( 
        <section className="faqSection">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && faq && (
                <>
                    <h1>{faq.headline}</h1>
                    <p>{faq.headlinetext}</p>
                    <p>{faq.text}</p>
                </>
            )}
        </section>
     );
}
 
export default Faq;