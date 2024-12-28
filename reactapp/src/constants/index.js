import project1 from "../assets/projects/websiteProject.png";


export const BODY_CONTENT = `I am a third-year student majoring in Software Engineering at Iowa State University. I have a passion for learning about new technologies and building software applications. I am proficient in programming languages such as Java, Python, and JavaScript. I have experience working with web development frameworks like React. I am currently a Part-Time Student Software/Cybersecurity Engineer at John Deere. I hope to further develop my skills as a software engineer and contribute to innovative projects.`;

export const ABOUT_TEXT = `Hi, I'm Kevin, a Software Engineering student at Iowa State University originally from Davenport, Iowa. I'm interested in leveraging technology to solve complex problems and make systems more secure.`;

export const ABOUT_TEXT2 = `Currently, I work part-time as a software and cybersecurity engineer at John Deere, where I’m gaining hands-on experience in developing secure systems. My academic interests lie in cybersecurity, cloud computing, and machine learning, and I’m excited to explore how these fields intersect to create innovative solutions.`;
export const ABOUT_TEXT3 = `Beyond academics and work, I enjoy traveling and experiencing new cultures, which has taught me to approach challenges with an open mind. I also like hitting the gym to stay active and maintain a balanced lifestyle.\n In the future, I hope to contribute to projects that make technology safer and more accessible for everyone. I’m always eager to connect with professionals and peers who share a passion for innovation, so feel free to reach out!`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Part-Time Student Software/Cybersecurity Engineer",
    company: "John Deere",
    description: ` As a part-time student software engineer at John Deere, I focus on enhancing cloud security using AWS tools. My responsibilities include designing and implementing secure cloud architectures, managing cloud resources, and ensuring compliance with security best practices. I work with services such as AWS IAM, EC2, S3, and Lambda to build and maintain secure and scalable applications. Additionally, I collaborate with the cybersecurity team to identify and mitigate potential security threats, conduct security audits, and implement automated security measures.`,
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

export const CONTACT = {
  address: "Ames, IA 50014",
  email: "kevtran04@gmail.com",
  linked_in: "LinkedIn"
};
