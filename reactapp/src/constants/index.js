import project1 from "../assets/projects/websiteProject.png";
import cloud_prac from "../assets/cloud_practitioner.png";

export const ADDRESS = `Davenport, Iowa, United States`;
export const BODY_CONTENT = `Software Engineering and Machine Learning Enthusiast`;

export const ABOUT_TEXT = `I go to school at Iowa State University. As a student studying software engineering, I am interested in cloud computing, cybersecurity, and machine learning. I am committed to contributing towards innovative solutions that address complex engineering problems.`;
export const ABOUT_TEXT2 = `Since 2023, I have been working at John Deere as a Part-Time Student Software/Cybersecurity Engineer. During my time here, I have spent my time on the Cloud Security team and contributed towards a safer, more secure,  cloud environment for other developers at John Deere.`;
export const ABOUT_TEXT3 = `Outside of work and school, I enjoy watching sports, playing games, and spending time with friends and family. On occasion, I travel around to new places to eat delicious food. I'll go to the gym if I feel like it.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Part-Time Student Software/Cybersecurity Engineer",
    company: "John Deere",
    description: `I work in the cloud, specifically security in the cloud. I work alongside other engineers to support a healthy and secure cloud environment.`,
    technologies: ["Terraform", "Python", "AWS", "CI/CD"],
  },
  {
    year: "2022 - Present",
    role: "Bachelor of Science: Software Engineering",
    company: "Iowa State University",
    description: `I am currently pursuing a Bachelor of Science in Software Engineering at Iowa State University. My coursework covers a wide range of topics, including general engineering, software development, and database courses. I have gained experience in programming languages such as Java, MySQL, and JavaScript.`,
    technologies: ["MySQL", "Java", "C", "CI/CD"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. Built using React and Javascript. Uploaded to GitHub and deployed using AWS Amplify. CD via Amplify.",
    technologies: ["AWS", "JavaScript", "React", "Amplify"],
  },
];

export const CERTIFICATES = [
  {
    title: "AWS Certified Cloud Practitioner",
    image: cloud_prac,
    description: "The AWS Certified Cloud Practitioner certification validates an individual's understanding of AWS Cloud services and the ability to define basic cloud infrastructure and architectural principles.",
    date: "August 2024"
  }
];

export const CONTACT = {
  address: "Ames, IA 50014",
  email: "kevtran04@gmail.com",
  linked_in: "LinkedIn"
};
