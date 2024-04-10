import res_2 from "../images/7_2.png";
import one_1 from "../images/1_1.png";
import one_2 from "../images/1_2.png";
import one_3 from "../images/1_3.png";
import one_4 from "../images/1_4.png";
import one_5 from "../images/1_5.png";
import one_6 from "../images/1_6.png";
import two_1 from "../images/2_1.png";
import two_2 from "../images/2_2.png";
import two_3 from "../images/2_3.png";
import two_4 from "../images/2_4.png";
import two_5 from "../images/2_5.png";
import four_1 from "../images/3_1.png";
import four_2 from "../images/3_2.png";
import four_3 from "../images/3_3.png";
import four_4 from "../images/3_4.png";

export const cardData = [
  {
    id: "qualification",
    content: [
      {
        text: "Student or soon to be enrolled",
        image: one_1,
      },
      {
        text: "Professional pursuing a carrer",
        image: one_2,
      },
      {
        text: "Parent of a school-age child",
        image: one_3,
      },
      {
        text: "Lifelong learner",
        image: one_4,
      },
      {
        text: "Teacher",
        image: one_5,
      },
      {
        text: "Other",
        image: one_6,
      },
    ],
  },
  {
    id: "interest",
    content: [
      {
        text: "Learning specific skills to advance my carrer",
        image: two_1,
      },
      {
        text: "Exploring new topics I'm interested in",
        image: two_2,
      },
      {
        text: "Refreshing my math foundations",
        image: two_3,
      },
      {
        text: "Exercising my brain to stay sharp",
        image: two_4,
      },
      {
        text: "Something else",
        image: two_5,
      },
    ],
  },
  {
    id: "level",
    content: [
      {
        text1: "Arithmetic",
        text2: "Introductory",
        image: four_1,
      },
      {
        text1: "Basic Algebra",
        text2: "Foundational",
        image: four_2,
      },
      {
        text1: "Intermediate Algebra",
        text2: "Intermediate",
        image: four_3,
      },
      {
        text1: "Calculus",
        text2: "Advanced",
        image: four_4,
      },
    ],
  },
];

export const questionData = [
  {
    text1: "Which describes you best?",
    text2: "This will help us personalize your experience.",
  },
  {
    text1: "Which are you most interested in?",
    text2:
      "Choose just one. This will help us get you started (but won't limit your experience).",
  },
  {
    text1: "You're in the right place",
    text2:
      "Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.",
  },
  {
    text1: "What is your math comfort level?",
    text2:
      "Choose the highest level you feel confident in - you can always adjust later.",
  },
  {
    text1: "You're on your way!",
    text2:
      '"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving solutions."',
  },
  {
    text1: "",
    text2: "",
  },
  {
    text1: "Learning paths based on your answers",
    text2: "Choose one to get started. You can switch anytime.",
  },
];

export const resultData = [
  {
    content:
      "Foundational Math Build your foundational skills in algebra, geometry and probability.",
    image: res_2,
  },
  {
    content:
      "Mathematical Thinking Build your foundational skills in algebra, geometry and probability.",
    image: res_2,
  },
];
