import "./WhatWeDo.scss"

const WhatWeDo = () => {
  return (
    <section className="whatwedo_container">
      <article className="whatwedo">
        <h3>What we do</h3>
        <p>We look forward to customising a system to meet your needs.</p>
        <p>
          We don’t favour one manufacturer over another – the only thing we do
          favour is making sure our customers get the right product that suits
          their needs and listening preferences. We will ask many questions in
          order to ensure that what you buy from us is tailored to you and you
          alone.
        </p>
        <p>
          If you are looking for a product not found in our demonstration
          showrooms or our online site, don’t fret as we have access to hundreds
          of brands.
        </p>
        <p>
          One of our biggest pleasures of working in this industry is to see the
          smile on our customers’ faces when they finally hear and see the
          system of their dreams.
        </p>
      </article>
      <article className="openinghours">
        <h3>Opening hours</h3>
        <div>
          <h4>Edinburgh</h4>
          <p>
            2 Joppa Rd,Edinburgh, EH15 2EU<br></br>
            Monday to Friday: 10:00am - 5:30pm<br></br>
            Saturday: 10:00am - 5:30pm<br></br> 
            Sunday: Closed
          </p>
        </div>
        <div>
          <h4>Falkirk</h4>
          <p>
            44 Cow Wynd, Falkirk, Central Region, FK1 1PU<br></br> 
            Monday to Friday: 10:00am - 5:30pm<br></br> 
            Saturday - By appointment only<br></br> 
            Sunday: Closed{" "}
          </p>
        </div>
      </article>
    </section>
  );
};

export default WhatWeDo;