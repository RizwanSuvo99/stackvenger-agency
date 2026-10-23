import { useState } from "react";
import { ArrowRight, Chevron, ChevronRight, Facebook, Instagram, XTwitter } from "./icons";
import { Link, sectionLink, ABOUT_PATH, SERVICE_PATHS, BLOG_PATH, CONTACTS_PATH, TEAM_PATH } from "../router";

const [AI_PATH, CSW_PATH, PUX_PATH, AIA_PATH, CUD_PATH, SGC_PATH, IDI_PATH, SWA_PATH, ISC_PATH] = SERVICE_PATHS;

const serviceLinks = [
  ["AI-Accelerated Product Development", AI_PATH],
  ["Custom Software & App Development", CSW_PATH],
  ["Prototyping & UX Design", PUX_PATH],
  ["AI Integration & Automation", AIA_PATH],
  ["Cloud Architecture & DevOps", CUD_PATH],
  ["Startup Growth Consulting", SGC_PATH],
  ["Intelligent Data Insights", IDI_PATH],
  ["Smart Workflow Automation", SWA_PATH],
  ["Innovation Strategy Consulting", ISC_PATH],
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
    next: ["Innovation Strategy Consulting", ISC_PATH],
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
    prev: ["Prototyping & UX Design", PUX_PATH],
    next: ["AI-Accelerated Product Development", AI_PATH],
  },
  [PUX_PATH.slice(10, -1)]: {
    title: "Prototyping & UX Design",
    heroP:
      "Rapidly test ideas with interactive AI-generated prototypes and data-backed design decisions that put users first.",
    aboutP:
      "Our service focuses on transforming ideas into interactive, user-friendly prototypes that visualize your product\u2019s flow and functionality. We combine user research, wireframing, and intuitive design principles to create experiences that are both engaging and easy to navigate. By testing early and iterating quickly, we ensure your product meets user needs and maximizes satisfaction before development begins.",
    offerGap: 40,
    heroImg: 3,
    offers: [
      ["User-Centered Prototypes", "We create interactive prototypes that bring your ideas to life, allowing you to test and validate functionality before development."],
      ["Intuitive UX Design", "Our team crafts seamless user experiences that prioritize clarity, efficiency, and user satisfaction."],
      ["Wireframes & Mockups", "From low-fidelity sketches to high-fidelity visuals, we provide a full range of design assets to support your product journey."],
      ["Usability Testing", "We conduct testing with real users to identify pain points early and optimize the design for better engagement."],
      ["Iterative Design Process", "With agile design cycles, we refine concepts quickly based on feedback, ensuring your product meets business and user needs."],
    ],
    prev: ["AI Integration & Automation", AIA_PATH],
    next: ["Custom Software & App Development", CSW_PATH],
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
    prev: ["Cloud Architecture & DevOps", CUD_PATH],
    next: ["Prototyping & UX Design", PUX_PATH],
  },
  [CUD_PATH.slice(10, -1)]: {
    title: "Cloud Architecture & DevOps",
    heroP:
      "Deploy with confidence. We design secure, scalable, and cost-efficient cloud infrastructure, with automated testing and CI/CD pipelines.",
    aboutP:
      "Optimize your infrastructure and accelerate software delivery with scalable cloud solutions and DevOps best practices. We design resilient, secure, and cost-efficient cloud architectures while implementing continuous integration, automated deployment pipelines, and monitoring systems to ensure your applications run smoothly and reliably.",
    offerGap: 40,
    heroImg: 5,
    offers: [
      ["Scalable Cloud Infrastructure", "We design and implement cloud environments that grow with your business needs, ensuring flexibility and cost efficiency."],
      ["CI/CD Pipeline Automation", "We set up automated build, test, and deployment pipelines for faster, more reliable software delivery."],
      ["Monitoring & Reliability", "We provide advanced monitoring, logging, and alerting systems to maintain uptime and quickly address issues."],
      ["Security & Compliance", "We integrate cloud security best practices and ensure compliance with industry standards and regulations."],
      ["Ongoing Optimization & Support", "We continuously optimize performance, manage cloud costs, and provide 24/7 DevOps support."],
    ],
    prev: ["Startup Growth Consulting", SGC_PATH],
    next: ["AI Integration & Automation", AIA_PATH],
  },
  [SGC_PATH.slice(10, -1)]: {
    title: "Startup Growth Consulting",
    heroP:
      "We\u2019re more than a dev shop — we help you refine your business model, optimize workflows, and prepare for funding rounds.",
    aboutP:
      "Startup Growth Consulting helps emerging businesses accelerate their development, optimize operations, and scale effectively. By combining market insights, technology strategy, and growth-focused methodologies, this service guides startups through funding, product-market fit, customer acquisition, and sustainable expansion. The goal is to turn innovative ideas into thriving, long-term ventures.",
    offerGap: 40,
    heroImg: 6,
    offers: [
      ["Tailored Growth Strategies", "We analyze your startup\u2019s current stage and market potential to create a customized roadmap for sustainable scaling."],
      ["Investor Readiness Support", "From pitch decks to financial modeling, we help you prepare to attract and secure funding."],
      ["Market Expansion Guidance", "Identify new markets, distribution channels, and partnerships to accelerate your reach."],
      ["Operational Efficiency Optimization", "Streamline processes, improve team workflows, and adopt the right tools for maximum productivity."],
      ["Ongoing Mentorship & Advisory", "Continuous guidance from experienced consultants to keep your startup on track and adaptable to changes."],
    ],
    prev: ["Intelligent Data Insights", IDI_PATH],
    next: ["Cloud Architecture & DevOps", CUD_PATH],
  },
  [IDI_PATH.slice(10, -1)]: {
    title: "Intelligent Data Insights",
    heroP:
      "Transform raw data into actionable insights with AI-driven analytics, helping businesses make smarter, faster decisions.",
    aboutP:
      "Intelligent Data Insights leverages advanced AI and machine learning to transform complex datasets into clear, actionable insights. Our platform helps businesses uncover hidden patterns, predict trends, and make data-driven decisions with confidence. From real-time analytics to predictive modeling, we empower organizations to optimize operations, enhance customer experiences, and drive measurable growth.",
    offerGap: null,
    heroImg: 7,
    offers: [
      ["Advanced Data Analytics", "We transform raw information into actionable insights through cutting-edge analytics tools and AI-powered models."],
      ["Custom Reporting & Dashboards", "Get real-time, visual reports designed around your business goals for smarter decision-making."],
      ["Predictive Intelligence", "Anticipate trends, risks, and opportunities with machine learning forecasts tailored to your industry."],
      ["Data Integration & Automation", "Seamlessly connect multiple data sources and automate workflows for efficiency and accuracy."],
      ["Strategic Consulting", "Our experts guide you on turning insights into impactful business strategies that drive measurable results."],
    ],
    prev: ["Smart Workflow Automation", SWA_PATH],
    next: ["Startup Growth Consulting", SGC_PATH],
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
    prev: ["Innovation Strategy Consulting", ISC_PATH],
    next: ["Intelligent Data Insights", IDI_PATH],
  },
  [ISC_PATH.slice(10, -1)]: {
    title: "Innovation Strategy Consulting",
    heroP:
      "Guide startups and established companies to sustainable growth with AI insights, tech strategy, and market-driven innovation.",
    aboutP:
      "Innovation Strategy Consulting helps businesses identify growth opportunities, leverage emerging technologies, and implement forward-thinking strategies to stay ahead of the competition. By combining market insights, AI-driven analysis, and creative problem-solving, this service guides companies in turning innovative ideas into actionable plans that drive sustainable success.",
    offerGap: null,
    heroImg: 9,
    offers: [
      ["Market Analysis & Trend Identification", "We help businesses identify emerging trends and market opportunities, enabling them to stay ahead of the competition and make data-driven strategic decisions."],
      ["Innovation Roadmapping", "We develop tailored innovation roadmaps, aligning your business goals with actionable steps for product, service, and process innovation."],
      ["Technology & Digital Transformation Advisory", "We guide companies in integrating cutting-edge technologies, optimizing digital workflows, and adopting disruptive solutions to boost efficiency and growth."],
      ["Ideation & Concept Development", "We facilitate creative workshops and brainstorming sessions to generate innovative ideas, validate concepts, and turn them into viable business solutions."],
      ["Performance Monitoring & Strategy Optimization", "We track innovation initiatives, measure outcomes, and refine strategies to ensure continuous improvement and long-term success."],
    ],
    prev: ["AI-Accelerated Product Development", AI_PATH],
    next: ["Smart Workflow Automation", SWA_PATH],
  },
};

const team = [
  ["Ethan White", "AI Solutions Architect", 1],
  ["Maya Brooks", "Lead UX/UI Designer", 2],
  ["Ryan Chen", "Full-Stack Developer", 3],
];

const hours = ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];
const minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

const fnav = [
  ["About Us", ABOUT_PATH],
  ["Our Services", "#services"],
  ["Blog Page", BLOG_PATH],
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
            This is a sample website - <a href="https://cmsmasters.studio/" target="_blank" rel="noreferrer">cmsmasters</a> © 2026 - All Rights Reserved
          </p>
          <div className="pfooter-socials">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook-f">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X-twitter">
              <XTwitter size={20} />
            </a>
          </div>
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
              {team.map(([name, role, n]) => (
                <div className="svc-team-card" key={name}>
                  <Link className="svc-team-photo" to={TEAM_PATH} aria-label={name}>
                    <img src={`/assets/images/71-profile-${n}.webp`} alt={`${name}, ${role}`} loading="lazy" />
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
