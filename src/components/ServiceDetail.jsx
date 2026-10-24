import { useState } from "react";
import { ArrowRight, Chevron, ChevronRight } from "./icons";
import { Link, sectionLink, ABOUT_PATH, SERVICE_PATHS, CONTACTS_PATH, TEAM_PATH } from "../router";
import { TEAM } from "../data/team";

const [AI_PATH, CSW_PATH, AIA_PATH, SWA_PATH] = SERVICE_PATHS;

const serviceLinks = [
  ["AI-Accelerated Product Development", AI_PATH],
  ["Custom Software & App Development", CSW_PATH],
  ["AI Integration & Automation", AIA_PATH],
  ["Smart Workflow Automation", SWA_PATH],
];

const SERVICES = {
  [AI_PATH.slice(10, -1)]: {
    title: "AI-Accelerated Product Development",
    heroP:
      "We combine advanced AI tools with expert engineering to take your concept from idea to MVP in record time — without sacrificing quality.",
    aboutP:
      "AI-Accelerated Product Development leverages advanced artificial intelligence to streamline the entire product lifecycle. From idea validation and market research to design, prototyping, and iterative testing, this service speeds up development, reduces costs, and minimizes risks. By combining AI-driven insights with agile methodologies, businesses can bring innovative products to market faster, with smarter decisions at every stage.",
    offerGap: null,
    heroImg: 1,
    offers: [
      ["Faster Time-to-Market", "We leverage AI-driven tools to streamline research, prototyping, and testing, helping your product reach customers significantly faster."],
      ["Smarter Decision-Making", "Our AI models analyze vast amounts of data, enabling data-backed insights that guide design, features, and market positioning."],
      ["Cost-Efficient Development", "By automating repetitive tasks and optimizing workflows, we reduce unnecessary expenses while maintaining top quality."],
      ["Personalized User Experiences", "We build AI-powered products that adapt to users\u2019 behaviors, increasing engagement, satisfaction, and retention."],
      ["Scalable Innovation", "Our approach ensures that your product can grow seamlessly, supported by future-ready AI architectures and automation."],
    ],
    prev: ["Custom Software & App Development", CSW_PATH],
    next: ["Smart Workflow Automation", SWA_PATH],
  },
  [CSW_PATH.slice(10, -1)]: {
    title: "Custom Software & App Development",
    heroP:
      "From mobile apps to web platforms, we build scalable, high-performance solutions tailored to your market and business needs.",
    aboutP:
      "We design and build tailored software solutions and mobile applications that perfectly fit your business needs. From initial concept to deployment, our team ensures scalable, secure, and user-friendly applications that drive growth, streamline operations, and deliver exceptional digital experiences.",
    offerGap: 40,
    heroImg: 2,
    offers: [
      ["Tailored Solutions for Your Business Needs", "We design and build software and applications fully aligned with your goals, processes, and user expectations."],
      ["End-to-End Development", "From initial idea and wireframes to launch and support, we cover the full lifecycle of product creation."],
      ["Scalable & Future-Proof Architecture", "Our solutions are designed to grow with your business and adapt to evolving market demands."],
      ["Seamless User Experience & Design", "We prioritize intuitive interfaces and smooth functionality to ensure maximum engagement and satisfaction."],
      ["Ongoing Support & Optimization", "After launch, we provide continuous updates, maintenance, and improvements to keep your product running at its best."],
    ],
    prev: ["AI Integration & Automation", AIA_PATH],
    next: ["AI-Accelerated Product Development", AI_PATH],
  },
  [AIA_PATH.slice(10, -1)]: {
    title: "AI Integration & Automation",
    heroP:
      "Enhance your product with AI features — from predictive analytics to smart chatbots — to improve efficiency and user engagement.",
    aboutP:
      "Leverage the power of artificial intelligence to streamline business processes, reduce manual tasks, and enhance operational efficiency. Our service integrates AI seamlessly into your existing systems, automating repetitive workflows, improving decision-making, and enabling your team to focus on high-value activities. From intelligent process automation to AI-driven analytics, we help businesses unlock innovation and productivity at scale.",
    offerGap: 40,
    heroImg: 4,
    offers: [
      ["Seamless AI Integration", "We connect AI tools and models directly into your existing workflows, platforms, and applications without disrupting daily operations."],
      ["Process Automation", "We help businesses automate repetitive tasks, from data entry to customer support, boosting efficiency and reducing costs."],
      ["Custom AI Solutions", "Tailored machine learning models and automation pipelines designed to fit your specific industry needs and business goals."],
      ["Scalable Infrastructure", "AI systems built with scalability in mind, ensuring your solutions grow alongside your business without performance issues."],
      ["Ongoing Optimization & Support", "Continuous monitoring, updates, and enhancements to keep your AI and automation tools performing at their best."],
    ],
    prev: ["Smart Workflow Automation", SWA_PATH],
    next: ["Custom Software & App Development", CSW_PATH],
  },
  [SWA_PATH.slice(10, -1)]: {
    title: "Smart Workflow Automation",
    heroP:
      "Streamline repetitive processes and boost productivity by integrating AI-powered automation across your organization.",
    aboutP:
      "Optimize your business processes with AI-powered workflow automation. This service streamlines repetitive tasks, reduces human error, and accelerates project timelines, allowing your team to focus on high-value work. From automating approvals and data entry to integrating cross-platform operations, Smart Workflow Automation ensures efficiency, consistency, and scalability across your organization.",
    offerGap: null,
    heroImg: 8,
    offers: [
      ["Automated Task Management", "Streamline repetitive tasks and reduce manual effort by automating workflows across teams and departments."],
      ["Real-Time Collaboration", "Enhance team coordination with centralized dashboards, instant notifications, and collaborative workflow tools."],
      ["Custom Workflow Design", "Build tailored workflows to match your unique business processes without coding expertise."],
      ["Data-Driven Insights", "Monitor workflow performance with analytics and reports, enabling smarter decision-making."],
      ["Integration with Existing Tools", "Seamlessly connect with your CRM, email, project management, and other software for a unified workflow ecosystem."],
    ],
    prev: ["AI-Accelerated Product Development", AI_PATH],
    next: ["AI Integration & Automation", AIA_PATH],
  },
};

const team = TEAM.slice(0, 3);

const hours = ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];
const minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

const fnav = [
  ["About Us", ABOUT_PATH],
  ["Our Services", "#services"],
  ["Contacts", CONTACTS_PATH],
];

export const Na = ({ to, className, children, label }) =>
  to.startsWith("#") ? (
    <a href="#" onClick={(e) => e.preventDefault()} className={className} aria-label={label}>{children}</a>
  ) : (
    <Link to={to} className={className} aria-label={label}>{children}</Link>
  );

export function PageFooter() {
  return (
    <footer className="pfooter">
      <div className="pfooter-in">
        <nav className="pfooter-nav" aria-label="Footer">
          {fnav.map(([label, href]) =>
            href.startsWith("/") ? (
              <Link key={label} to={href}>{label}</Link>
            ) : (
              <a key={label} {...sectionLink(href)}>{label}</a>
            )
          )}
        </nav>
        <div className="pfooter-row">
          <p className="pfooter-legal">
            Copyright StackVenger © 2026 - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function ServiceDetail({ slug }) {
  const svc = SERVICES[slug || AI_PATH.slice(10, -1)] || SERVICES[AI_PATH.slice(10, -1)];
  const [open, setOpen] = useState(new Set());
  const [sent, setSent] = useState(false);

  const toggle = (i) => {
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  };

  return (
    <>
      <section className="svc-hero">
        <div className="svc-hero-in">
          <div className="svc-hero-text">
            <h1>{svc.title}</h1>
            <p>{svc.heroP}</p>
          </div>
          <div className="svc-hero-img" role="img" aria-label={svc.title} style={{ backgroundImage: `url(/assets/images/71-service-${svc.heroImg}.webp)` }} />
        </div>
      </section>

      <section className="svc-body">
        <div className="svc-row">
          <aside className="svc-side">
            <div className="svc-card svc-card-list">
              <div className="svc-card-in">
                <h5 className="svc-card-head">Our Services</h5>
                <ul>
                  {serviceLinks.map(([label, to]) => (
                    <li key={label}>
                      <Na to={to} className="svc-slink">
                        {label}
                        <ArrowRight size={12} className="svc-slink-arrow" />
                      </Na>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="svc-card svc-card-form">
              <div className="svc-card-in">
                <h5 className="svc-card-head">Find out More</h5>
                <form
                  className="svc-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    e.currentTarget.reset();
                  }}
                >
                  <input type="text" placeholder="Your Full Name" aria-label="Your Full Name" required />
                  <input type="tel" placeholder="Your Phone" aria-label="Your Phone" required />
                  <input type="text" placeholder="Select Date" aria-label="Select Date" />
                  <div className="svc-time">
                    <label className="svc-select">
                      <select defaultValue="08" aria-label="Hour">
                        {hours.map((h) => (
                          <option key={h} value={h}>{h}</option>
                        ))}
                      </select>
                      <Chevron size={12} className="caret" />
                    </label>
                    <label className="svc-select">
                      <select defaultValue="30" aria-label="Minutes">
                        {minutes.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                      <Chevron size={12} className="caret" />
                    </label>
                  </div>
                  <button type="submit" className="svc-submit">Request a Consultation</button>
                  {sent ? <p className="svc-sent" role="status">Thanks! We&apos;ll call you to confirm.</p> : null}
                </form>
              </div>
            </div>
          </aside>

          <div className="svc-main">
            <h3 className="svc-h3">About {svc.title}</h3>
            <p className="svc-para">{svc.aboutP}</p>

            <h3 className="svc-h3 svc-h3-offer" style={svc.offerGap != null ? { marginTop: svc.offerGap + "px" } : undefined}>
              What We Offer?
            </h3>
            <div className="svc-acc">
              {svc.offers.map(([title, body], i) => (
                <div className={`svc-acc-card${open.has(i) ? " open" : ""}`} key={title}>
                  <h5>
                    <button type="button" className="svc-acc-trigger" onClick={() => toggle(i)} aria-expanded={open.has(i)}>
                      <span className="svc-acc-title">{title}</span>
                      <span className="svc-acc-circle">
                        <ChevronRight size={12} className="svc-acc-chevron" />
                      </span>
                    </button>
                  </h5>
                  {open.has(i) ? <div className="svc-acc-body">{body}</div> : null}
                </div>
              ))}
            </div>

            <h3 className="svc-h3 svc-h3-team">Our Team</h3>
            <div className="svc-team">
              {team.map(({ name, role, img }) => (
                <div className="svc-team-card" key={name}>
                  <Link className="svc-team-photo" to={TEAM_PATH} aria-label={name}>
                    <img src={img} alt={`${name}, ${role}`} loading="lazy" />
                    <span className="svc-team-over">
                      <ArrowRight size={18} className="svc-team-arrow" />
                    </span>
                  </Link>
                  <Link className="svc-team-name" to={TEAM_PATH}>{name}</Link>
                  <span className="svc-team-role">{role}</span>
                </div>
              ))}
            </div>

            <div className="sdp-more">
              <ArrowRight size={12} className="sdp-more-arrow" />
              <Link to={TEAM_PATH}>View More</Link>
            </div>
          </div>
        </div>

        <div className="svc-pn">
          <div className="svc-pn-in">
            <div className="svc-pn-half">
              <Na to={svc.prev[1]} className="svc-pn-link">
                <span className="svc-pn-circle dir-prev">
                  <ArrowRight size={18} className="svc-pn-arrow" />
                </span>
                <span className="svc-pn-title">{svc.prev[0]}</span>
              </Na>
            </div>
            <div className="svc-pn-half">
              <Na to={svc.next[1]} className="svc-pn-link">
                <span className="svc-pn-title">{svc.next[0]}</span>
                <span className="svc-pn-circle">
                  <ArrowRight size={18} className="svc-pn-arrow" />
                </span>
              </Na>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}
