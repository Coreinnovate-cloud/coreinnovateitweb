export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type Blog = {
  id: number;
  title: string;
  content: string;
  image: string;
  heroImage?: string;
  tags: string[];
  date: string;
  sections: BlogSection[];
};

export const accordionData = [
  {
    question: "What services does CoreInnovate IT provide?",
    answer:
      "We offer a full range of IT and cybersecurity services including Managed IT Services, Managed Security (SOC-as-a-Service), Microsoft 365 Management, Cloud Management (Azure & AWS), Web and Software Development, Project Management, and IT & Cybersecurity Training for individuals and organisations.",
  },
  {
    question: "Who are your services designed for?",
    answer:
      "Our services are tailored for small to medium-sized businesses, enterprises, and public sector organisations looking to improve security, streamline IT operations, or modernise their technology infrastructure. We also provide training programs for individuals looking to start or grow their careers in IT and cybersecurity.",
  },

  {
    question: "How do your Managed IT Services work?",
    answer:
      "We act as your virtual IT department. Our team monitors, manages, and maintains your IT infrastructure, keeping your systems secure and your staff supported. This proactive approach reduces downtime, improves efficiency, and ensures predictable IT costs",
  },
  {
    question: "What is SOC-as-a-Service and why do I need it?",
    answer:
      "SOC-as-a-Service gives you 24/7 cybersecurity monitoring, detection, and response without the high cost of running your own security operations centre. This ensures threats are identified and mitigated quickly, keeping your business safe from cyberattacks.",
  },
  {
    question: "Can you help us migrate to the cloud?",
    answer:
      "Yes. We provide end-to-end cloud migration services for Microsoft Azure and AWS. From planning and migration to optimisation and security, we ensure your transition to the cloud is smooth, secure, and cost-effective.",
  },
  {
    question: "Do you offer customised training?",
    answer:
      "Absolutely. We provide tailored IT and cybersecurity training for both individuals and organisations. Our training is hands-on, practical, and aligned with industry-recognised certifications such as CompTIA, Microsoft, and AWS.",
  },
  {
    question: "How do you ensure security and compliance?",
    answer:
      "We use globally recognised frameworks such as ISO 27001, NIST CSF, and SOC 2. Our team of certified professionals implement layered security controls, compliance checks, and regular audits to keep your business secure and compliant.",
  },
  {
    question: "What makes CoreInnovate IT different?",
    answer:
      "We combine deep technical expertise with a business-first mindset. Our focus is not only on technology but also on ensuring it aligns with your business goals. We also stand out through our passion for mentoring future tech professionals and building long-term partnerships with clients.",
  },
  {
    question: "How do we get started?",
    answer:
      "It’s simple. Contact us through our website or book a free consultation. We’ll discuss your business needs, assess your current IT and security posture, and recommend the right solution tailored for you.",
  },
];

export const individualProgrammes = [
  {
    title: "IT Fundamentals",
    topics: [
      "Introduction to computer systems and networking",
      "Windows Server and Microsoft 365 basics",
      "Troubleshooting and IT support essentials.",
    ],
  },
  {
    title: "Cybersecurity Foundations",
    topics: [
      "Threats, vulnerabilities, and cyber hygiene.",
      "Security best practices for individuals and businesses",
      "Introduction to SOC tools and monitoring",
    ],
  },
  {
    title: "Cloud Essentials",
    topics: [
      "Understanding Microsoft Azure and AWS",
      "Cloud concepts, architecture, and security fundamentals",
      "Getting started with cloud certifications",
    ],
  },
  {
    title: "Advanced Cybersecurity",
    topics: [
      "Incident detection and response",
      "Ethical hacking and penetration testing basics",
      "Security operations and compliance frameworks",
    ],
  },
];

export const organizationProgrammes = [
  {
    title: "Cybersecurity Awareness",
    topics: [
      "Phishing simulations and social engineering training",
      "Best practices for password management and secure communication",
      "Safe remote working practices",
    ],
  },
  {
    title: "Advanced IT and Security Training",
    topics: [
      "Incident detection and response for IT teams",
      "SOC tools, threat intelligence, and vulnerability management",
      "Cloud security for Microsoft Azure and AWS environments",
    ],
  },
  {
    title: "Regulatory & Compliance Training",
    topics: [
      "GDPR, PCI DSS, and ISO 27001 awareness",
      "Role-based compliance workshops",
      "Audit preparation and documentation practices",
    ],
  },
  {
    title: "Custom Corporate Programs",
    topics: [
      "Tailored workshops for specific teams",
      "Executive training for board-level cyber awareness",
      "Ongoing refresher courses and quarterly updates",
    ],
  },
];

export const contacts = [
  {
    title: "Call Now",
    description: "Call us on weekdays from 9 AM to 5 PM.",
    contact: "01452 222192",
    icon: "/call.svg",
  },
  {
    title: "Email Address",
    description: "Contact us by email, we will respond.",
    contact: "hello@coreinnovateit.co.uk",
    icon: "/mail.svg",
  },
  {
    title: "Office Address",
    description: "Visit us at our headquarters.",
    contact:
      "Suite 248, Corinium House, Barnwood Business Park, Gloucester, GL4 3HX, United Kingdom",
    icon: "/map-marker.svg",
  },
];

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Optimizing Cloud Infrastructure with Managed IT Services",
    content:
      "Discover how professional cloud management services can streamline your business operations, reduce costs, and enhance scalability while maintaining robust security protocols.",
    image: "/article-image.jpg",
    tags: ["Cloud Management", "Managed IT"],
    date: "September 12, 2024",
    heroImage: "/popular.jpg",
    sections: [
      {
        heading: "Frequent Downtime and Slow Systems",
        paragraphs: [
          "If your cloud workloads are sluggish or downtime is common, it's a sign to revisit architecture and monitoring.",
          "Managed IT providers implement observability and autoscaling to maintain uptime and performance.",
        ],
      },
      {
        heading: "Rising IT Costs Without Predictable Value",
        paragraphs: [
          "Right-size compute and storage, apply lifecycle policies, and leverage cost reports to control spend.",
        ],
      },
      {
        heading: "Security Risks Keep You Awake at Night",
        paragraphs: [
          "Defense-in-depth, compliant baselines, and continuous posture management are essential in cloud.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Proactive Threat Detection in Managed Security Solutions",
    content:
      "Learn about advanced security frameworks that provide 24/7 monitoring, threat intelligence, and rapid incident response to protect your digital assets from evolving cyber threats.",
    image: "/blog-two.png",
    tags: ["Managed Security", "Project Risk"],
    date: "October 5, 2024",
    heroImage: "/soc.jpg",
    sections: [
      {
        heading: "Frequent Downtime and Slow Systems",
        paragraphs: [
          "Threats and noisy alerts can slow teams down. A tuned SIEM and SOC workflows restore efficiency.",
        ],
      },
      {
        heading: "Security Risks Keep You Awake at Night",
        paragraphs: [
          "Managed detection and response reduces mean time to detect and respond with 24/7 coverage.",
        ],
      },
      {
        heading: "You’re Focused on IT, Not Your Business",
        paragraphs: [
          "Outsourcing operations frees your team to focus on value-add initiatives.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Agile Project Management in Software Development",
    content:
      "Explore how agile methodologies combined with expert project management can accelerate software delivery, improve team collaboration, and ensure project success.",
    image: "/blog-three.png",
    tags: ["Project Management", "Software Development"],
    date: "November 18, 2024",
    heroImage: "/project-management.jpg",
    sections: [
      {
        heading: "Lack of In-House Expertise",
        paragraphs: [
          "Coaching, playbooks, and tooling help teams adopt agile effectively without heavy ceremony.",
        ],
      },
      {
        heading: "The Bottom Line",
        paragraphs: [
          "Agile is a means to deliver value sooner with quality and feedback loops.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Mitigating Project Risks in IT Implementations",
    content:
      "Understand key risk assessment strategies and contingency planning approaches that help minimize disruptions during critical IT project deployments and system migrations.",
    image: "/blog-four.png",
    tags: ["Project Risk", "Managed IT"],
    date: "December 3, 2024",
    heroImage: "/project-risk.jpg",
    sections: [
      {
        heading: "Security Risks Keep You Awake at Night",
        paragraphs: [
          "Risk registers, owners, and mitigations keep complex implementations on track.",
        ],
      },
      {
        heading: "You’re Focused on IT, Not Your Business",
        paragraphs: [
          "Good governance ensures delivery aligns with business goals and timelines.",
        ],
      },
    ],
  },
];
