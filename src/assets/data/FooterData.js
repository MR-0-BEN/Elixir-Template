import logo from "../images/logo-white.svg";

const data = [
  {
    type: "logoSection",
    content: {
      logo: logo,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, hic!",
      socialIcons: [
        { platform: "Twitter", iconClass: "ri-twitter-fill", link: "#" },
        { platform: "Instagram", iconClass: "ri-facebook-fill", link: "#" },
        { platform: "GitHub", iconClass: "ri-github-fill", link: "#" },
        { platform: "Linkedin", iconClass: "ri-linkedin-fill", link: "#" },
      ],
    },
  },
  {
    type: "section",
    title: "SERVICES",
    items: ["UI Design", "UX Design", "Branding", "Logo Designing"],
  },
  {
    type: "section",
    title: "ABOUT",
    items: ["Blog", "Services", "Company", "Career"],
  },
  {
    type: "contact",
    title: "CONTACT",
    items: [
      "New York, NY 3300",
      { type: "phone", value: "(414) 586-3017" },
      { type: "email", value: "info@example.com" },
    ],
  },
];

export const logoSection = data.filter((item) => item.type === "logoSection");
export const sections = data.filter((item) => item.type === "section");
export const contact = data.find((item) => item.type === "contact");
