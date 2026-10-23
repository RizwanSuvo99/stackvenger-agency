import { ArrowRight } from "./icons";
import { FormSplit } from "./PageParts";
import { Link, ABOUT_PATH } from "../router";

const locations = [
  ["Apple Valley", "14960 Florence Trail Apple Valley, MN 55124", 1],
  ["White Bear Lake", "2401 East Buffalo St. White Bear Lake, MN 55110", 2],
];

export default function ContactsPage() {
  return (
    <div className="pg-page">
      <section className="ct-hero">
        <div className="ct-hero-in">
          <h1>
            <span className="gradient-text grad0">Contact Us Easily Online</span>
          </h1>
          <p>Start your path to psychological wellness with our thuroughly selected specialists.</p>
          <div className="ct-hero-cta">
            <Link className="btn" to={ABOUT_PATH}>
              <ArrowRight size={12} className="btn-arrow" /> More About Us
            </Link>
            <a className="ct-call" href="tel:+080023367811">
              <span>Give Us a Call:</span>
              <strong>+ 0800 2336 7811</strong>
            </a>
          </div>
        </div>
      </section>

      <section className="ct-info">
        <div className="ct-info-text">
          <h3>Contact Information</h3>
          <p>
            We’re here to walk alongside you on your wellness journey. Whether you have
            questions about our services, want to book an appointment, or simply need
            guidance, our team is ready to help.
          </p>
          <div className="ct-cols">
            <div>
              <h6>Address:</h6>
              <p>14960 Florence Trail Apple Valley, MN 55124</p>
            </div>
            <div>
              <h6>Open:</h6>
              <p>Monday – Sunday,{"\n"}9am – 7pm EST</p>
            </div>
          </div>
        </div>
        <img
          className="ct-map"
          src="/assets/images/google-map-placeholder-shortcode-bw.webp"
          alt="Map showing our office locations"
          loading="lazy"
          width="742"
          height="580"
        />
      </section>

      <section className="ct-locs">
        <h3>All Locations</h3>
        <div className="ct-loc-row">
          {locations.map(([city, addr, n]) => (
            <div className="ct-loc" key={city}>
              <img src={`/assets/images/71-contacts-${n}.webp`} alt={`${city} office`} loading="lazy" />
              <h4>{city}</h4>
              <div className="ct-cols ct-cols--loc">
                <div>
                  <h6>Address:</h6>
                  <p>{addr}</p>
                </div>
                <div>
                  <h6>Open:</h6>
                  <p>Monday – Sunday, 9am – 7pm EST</p>
                </div>
              </div>
              <a
                className="ct-dir"
                href={`https://maps.google.com/?q=${encodeURIComponent(addr)}`}
                target="_blank"
                rel="noreferrer"
              >
                <ArrowRight size={12} /> Get Directions
              </a>
            </div>
          ))}
        </div>
      </section>

      <FormSplit img="71-contacts-3.webp" title="Ask a Question" align="left" rows={4} />
    </div>
  );
}
