/**
 * Optional per hobby:
 * links: [{ label, url, type }]
 * - type: "external" opens in a new tab.
 * - type: "demo" opens the in-site modal iframe.
 */
import runningImage from "../assets/running.jpg";
import musicImage from "../assets/music.jpg";
import diaboloImage from "../assets/diabolo.jpg";
import sportsImage from "../assets/sports.jpg";

export const hobbies = [
  {
    id: "running",
    title: "Running/XCTF",
    image: runningImage,
    summary:
      "I have been running since I was in 10th grade. I was on my highschool cross country and track team. Now, I run at UMD on the club running team. As a versatile runner, I like to run both long distance and sprints. My best event is actually the long jump!",
    links: [
      // {
      //   label: "Strava",
      //   url: "https://www.strava.com/",
      //   type: "external",
      // },
      // {
      //   label: "Club profile",
      //   url: "https://www.instagram.com/clubrunningumd/",
      //   type: "external",
      // },
    ],
  },
  {
    id: "music",
    title: "Music",
    image: musicImage,
    summary:
      "I am an active member of the UMD University Orchestra. I play the cello and have been playing for 11 years now. I was the principal cellist for the Maryland High School All-State Orchestra in 2023 (picture left). Check out one of my performances below!",
    links: [
      {
        label: "Performance",
        url: "https://www.youtube.com/embed/u22-0M3T7FU",
        type: "demo",
      },
      {
        label: "University Orchestra",
        url: "https://www.music.umd.edu/ensembles/orchestras",
        type: "external",
      },
    ],
  },
  {
    id: "diabolo",
    title: "Diabolo",
    image: diaboloImage,
    summary:
      "I have been yoyoing since I was in 1st grade (so for 15 years now). At UMD, I am the current treasurer of Infinite Diabolo which is the yoyo club on campus. We perform at various events on campus and in the community. I also am a teacher for the Washington DC Taiwanese School (WDCTS) where I teach yoyo to kids ages 5-13. I personally perform at local events as well. Check out one of my performances below!",
    links: [
      {
        label: "Performance",
        url: "https://www.youtube.com/embed/fgQBjAS8FH8",
        type: "demo",
      },
      
    ],
  },
  {
    id: "other-sports",
    title: "Other Sports",
    image: sportsImage,
    summary:
      "I enjoy playing a lot of other sports. I play soccer, volleyball, pickleball, frisbee, golf, climbing, and many more. Check out my youtube channel for all the sports that I play! Additionally, check out a trickshot channel that I made with some friends in middle school!",
    links: [
      {
        label: "My Youtube Channel",
        url: "https://www.youtube.com/@ethanyen30",
        type: "external",
      },
      {
        label: "My Old Trickshot Channel",
        url: "https://www.youtube.com/@AsianBros",
        type: "external",
      },
    ],
  },
];
