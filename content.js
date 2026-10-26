/* EDIT THIS FILE FIRST. Bracketed text is a placeholder, not a real claim.
   Use null for links you do not have; the site shows a setup message.
   Image paths are relative to index.html. Keep quotation marks and commas. */
window.CV = {
  name: "[YOUR NAME]",
  title: "[Your career title]",
  location: "[City, Country]",
  year: new Date().getFullYear(),
  availability: "[Your availability / career goal]",
  intro: "[Write a short introduction: what you study, what you create, and the kind of opportunity you're looking for.]",
  about: "[Introduce yourself in your own voice. Describe your interests, approach to solving problems, and what you enjoy learning or building.]",
  objective: "[Describe the internship, employment, freelance, or professional opportunity you want, and how you hope to contribute.]",
  interests: "[Career interests, e.g. web development, UI/UX]",
  email: "[YOUR EMAIL]",
  phone: "[Optional: public phone number, or remove this field in index.html]",
  portrait: "assets/profile.svg", // Replace with assets/profile.jpg after adding your own photo.
  portraitAlt: "Placeholder portrait: replace with your professional photo",
  contactIntro: "[Have an opportunity, project, or collaboration in mind? Write a short invitation to contact you.]",
  skills: [
    { group: "Build", items: ["[HTML]", "[CSS]", "[JavaScript]", "[Programming language]"] },
    { group: "Design & tools", items: ["[UI/UX design]", "[Git & GitHub]", "[Database management]"] },
    { group: "Work together", items: ["[Problem solving]", "[Communication]", "[Teamwork]"] }
  ],
  projects: [
    { name: "[Project one]", category: "Development", date: "[Month Year]", description: "[Describe the problem, who the project is for, and what you built.]", technologies: ["[HTML]", "[CSS]", "[JavaScript]"], image: "assets/project-web.svg", imageAlt: "Illustrative website wireframe; replace with a screenshot of your project", role: "[Your role and specific contribution]", outcome: "[What worked, what you learned, and a result you can support.]", repo: null, demo: null },
    { name: "[Project two]", category: "Design", date: "[Month Year]", description: "[Describe your design or another academic project and its purpose.]", technologies: ["[Figma]", "[User research]"], image: "assets/project-design.svg", imageAlt: "Illustrative mobile app wireframe; replace with your design preview", role: "[Your role and process]", outcome: "[Explain a design decision and what you learned.]", repo: null, demo: null },
    { name: "[Project three]", category: "Development", date: "[Ongoing / Month Year]", description: "[Introduce a completed or ongoing programming activity.]", technologies: ["[Language]", "[Database]"], image: "assets/project-data.svg", imageAlt: "Illustrative dashboard wireframe; replace with your project screenshot", role: "[Individual or team contribution]", outcome: "[Current progress or next steps]", repo: null, demo: null }
  ],
  education: [
    { period: "[Start year – Present]", title: "[Degree / Program]", organization: "[School / University]", detail: "[Current year level • relevant coursework • academic achievements]" },
    { period: "[Start year – End year]", title: "[Senior high school / strand, if applicable]", organization: "[School name]", detail: "[Relevant achievement or subject focus. Remove this entry if not applicable.]" }
  ],
  experience: [
    { period: "[Month Year – Month Year]", title: "[Role / Academic project role]", organization: "[Organization / Course / Volunteer group]", detail: "[Describe your contribution and a real outcome. If you have no work experience, use school activities, technical projects, or organization involvement.]" }
  ],
  achievements: [
    { title: "[Certificate / Award / Training]", detail: "[Issuing organization • Date • What you learned]" },
    { title: "[Competition / Academic achievement]", detail: "[Event or organization • Date • Your contribution]" }
  ],
  socials: [
    { label: "GitHub", url: null }, // REQUIRED: https://github.com/your-username
    { label: "LinkedIn", url: null }, // Optional: add your profile URL or remove the entry.
    { label: "Other professional profile", url: null } // Optional social media.
  ]
};
