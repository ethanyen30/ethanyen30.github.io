import reactSvg from "../assets/react.svg";

export const projects = [
  {
    id: "project-one",
    title: "AI Sustainability Chatbot",
    description: `
For my DCC capstone project, I wanted to combine my current 
knowledge in computer science with an issue that I deeply care about.
As a student, I see my peers recognize sustainability and they are 
somewhat aware. However, they don't all necessarily take action. 
Therefore, I wondered what I could do to help encourage more 
students to be sustainable. That's what I asked ChatGPT and 
it was right then that I realized I could learn to make a chatbot. 
After all, almost everyone in college is using AI chatbots to help 
with their schoolwork, which is why I believe that a sustainability 
geared chatbot can help students as well.
    `,
    image: reactSvg,
    link: "https://huggingface.co/spaces/ethanyen30/UMD-Sustainability-Chatbot",
  },
  {
    id: "project-two",
    title: "Tennis Ball Tracker",
    description: `
This project presents a real-time tennis ball tracking system 
using YOLOv5 and a few variants. By training a custom object 
detection model on annotated tennis footage, we
were able to detect and follow the ball across high-speed
video sequences. Our model integrates YOLOv5 for fast
and robust detection of tennis balls. Unlike traditional motion 
capture systems that require specialized equipment, our
approach relies only on standard camera footage, making
performance analysis more accessible. The final system
supports tasks such as ball speed estimation and shot trajectory
 visualization, laying the foundation for AI-assisted
coaching and match review. Compared to previous work focused 
on player movement or general sports tracking, our
solution is optimized specifically for ball detection in tennis,
focusing on speed, precision, and affordability. This work
demonstrates the feasibility of real-time ball tracking using
video and open-source models and tools.
    `,
    image: reactSvg,
    link: "https://www.youtube.com/watch?v=v1ZrOg5EmTY",
  },
];
