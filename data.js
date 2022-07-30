const bookBadge = Object.freeze({
  bestseller: 1,
  highestRated: 2
});
const Book = (src, title, author, rate, rateRatio, price, badge) => ({
  src,
  title,
  author,
  rate,
  rateRatio,
  price,
  badge
});
const Course = (name, title, text, ...books) => ({
  name,
  title,
  text,
  books
});
const courseSelections = new Map([
  [
    "py",
    Course(
      "Python",
      "Expand your career opportunities with Python",
      "Take one of Udemy’s range of Python courses and learn " +
        "how to code using this incredibly useful language. Its simple " +
        "syntax and readability makes Python perfect for Flask, Django," +
        "data science, and machine learning. You’ll learn how to build " +
        "everything from games to sites to apps. Choose from a range of " +
        "courses that will appeal to both beginners and advanced " +
        "developers alike.",
      Book(
        undefined,
        "Learn Python: The Complete Python Programming Course",
        ["Avinash Jain", "The Codex"],
        2821,
        4.4,
        84.99
      ),
      Book(
        undefined,
        "Learning Python for Data Analysis and Visualization",
        "Jose Portilla",
        17944,
        4.4,
        84.99,
        bookBadge.bestseller
      ),
      Book(
        undefined,
        "Python for Beginners - Learn Programming Language from scratch",
        ["Edwin Diaz", "Coding Faculty Solutions"],
        1721,
        4.4,
        84.99
      ),
      Book(
        undefined,
        "Learn Python: Python for Beginners",
        "Arbar Hussain",
        2759,
        4.2,
        29.99
      ),
      Book(
        undefined,
        "Python Beyond the Basics - Object-Oriented Programming",
        "Infinite Skills",
        2924,
        4.4,
        49.99
      ),
      Book(
        undefined,
        "Python From Scratch & Selenium WebDriver QA Automation 2022",
        "Admas Kinfu",
        1767,
        4.6,
        84.99,
        bookBadge.bestseller
      ),
      Book(
        undefined,
        "Teach Your Kids to Code: Learn to Program Python at Any Age!",
        "Bryson Payne",
        8761,
        4.5,
        29.99,
        bookBadge.bestseller
      ),
      Book(
        undefined,
        "Python for Data Structures, Algorithms, and Interviews!",
        "Jose Portilla",
        10667,
        4.5,
        84.99
      ),
      Book(
        undefined,
        "Automate the Boring Stuff with Python Programming",
        "Al Sweigart",
        101480,
        4.7,
        49.99
      ),
      Book(
        undefined,
        "2022 Complete Python Bootcamp From Zero to Hero in Python",
        "Jose Portilla",
        426119,
        4.6,
        84.99
      )
    )
  ],
  [
    "excel",
    Course(
      "Excel",
      "Analyze and visualize data with Excel",
      "Take a Microsoft Excel course from Udemy, and learn " +
        "how to use this industry-standard software. Real-world " +
        "experts will show you the basics like how to organize data " +
        "into sheets, rows and columns, and advanced techniques like " +
        "creating complex dynamic formulas. Both small businesses and " +
        "large companies use Excel to turn their raw data into " +
        "actionable insights.",
      Book(
        undefined,
        "Microsoft Excel 2013 Course Beginners/Intermediate Training",
        "Infinite Skills",
        1604,
        4.3,
        49.99
      ),
      Book(
        undefined,
        "Microsoft Excel 2013  Advanced. Online Excel Training Course",
        "Infinite Skills",
        3494,
        4.5,
        49.99
      ),
      Book(
        undefined,
        "Microsoft Excel - From Beginner to Expert in 6 Hours",
        "Todd McLeod",
        24097,
        4.5,
        24.99
      ),
      Book(
        undefined,
        "Sharper skills using Microsoft Excel 2010 for business",
        "Ulrika Hedlund",
        637,
        4.7,
        19.99
      ),
      Book(
        undefined,
        "Learn Microsoft Excel 2013 - Advanced",
        "Simon Sez IT",
        364,
        4.7,
        84.99
      ),
      Book(undefined, "Excel 2013", "Learnit Anytime", 1427, 4.6, 39.99),
      Book(
        undefined,
        "7 Steps To Excel Success - Excel Skills And Power Tips",
        ["Billy Wigley", "Stephanie Jhoy Tumulak"],
        1218,
        4.6,
        84.99
      ),
      Book(
        undefined,
        "Advanced Excel - Beginner to Ninja level (includes Charts)",
        ["Rishabh Pugalia", "Yoda Learning"],
        741,
        4.5,
        84.99
      ),
      Book(
        undefined,
        "The Ultimate Microsoft Excel 2013 Training Bundle - 19 Hours",
        "Simon Sez IT",
        332,
        4.6,
        84.99
      ),
      Book(
        undefined,
        "Use Excel Like a Pro. Fast.",
        "Kieran Luke",
        1291,
        4.7,
        49.99
      )
    )
  ],
  [
    "web",
    Course(
      "Web Development",
      "Build websites and applications with Web Development",
      "The world of web development is as wide as the " +
        "internet itself. Much of our social and vocational lives play " +
        "out on the internet, which prompts new industries aimed at " +
        "creating, managing, and debugging the websites and applications " +
        "that we increasingly rely on.",
      Book(
        undefined,
        "Become a Certified HTML, CSS, JavaScript Web Developer",
        ["Tech Learning Network", "Mark Lassoff"],
        2694,
        4.4,
        84.99
      ),
      Book(
        undefined,
        "The Complete 2020 Fullstack Web Developer Course",
        "Kalob Taulien",
        6093,
        454,
        84.99
      ),
      Book(
        undefined,
        "Introduction to Web Development",
        ["Tech Learning Network", "Mark Lassoff"],
        1698,
        4.3,
        19.99
      ),
      Book(
        undefined,
        "Running a Web Development Business: The Complete Guide",
        "Evan Kimbrell",
        1569,
        4.8,
        84.99
      ),
      Book(
        undefined,
        "Ultimate Web Designer & Web Developer Course",
        "Brad Hussey",
        13330,
        4.5,
        84.99
      ),
      Book(
        undefined,
        "Introduction to Programming",
        ["Tech Learning Network", "Mark Lassoff"],
        1309,
        4.6,
        84.99
      ),
      Book(
        undefined,
        "The Complete 2022 Web Development Course - Build 15 Projects",
        "Development Island (UK)",
        6792,
        4.6,
        84.99
      ),
      Book(
        undefined,
        "The Web Developer Bootcamp 2022",
        "Colt Steele",
        240813,
        4.7,
        84.99
      ),
      Book(
        undefined,
        "The Complete Web Developer Course 2.0",
        ["Rob Percival", "Codestars by Rob Percival"],
        70042,
        4.5,
        84.99
      ),
      Book(
        undefined,
        "Build Responsive Website Using HTML5, CSS3, JS And Bootstrap",
        "Irfan Dayan",
        3527,
        4.4,
        84.99
      )
    )
  ],
  [
    "js",
    Course(
      "JavaScript",
      "Grow your software development skills with JavaScript",
      "JavaScript is a text-based computer programming " +
        "language used to make dynamic web pages. A must-learn for " +
        "aspiring web developers or programmers, JavaScript can be " +
        "used for features like image carousels, displaying countdowns " +
        "and timers, and playing media on a webpage. With JavaScript " +
        "online classes, you can learn to build interactive web " +
        "applications, choose the best framework, and work with " +
        "other programming languages like HTML and CSS.",
      Book(
        undefined,
        "JavaScript for Beginners",
        "Tech Learning Network",
        706,
        4.4,
        19.99
      ),
      Book(undefined, "1 Hour JavaScript", "John Bura", 1894, 4.4, 84.99),
      Book(
        undefined,
        "JavaScript: Understanding the Weird Parts",
        "Anthony Alicea",
        45092,
        4.7,
        84.99
      ),
      Book(
        undefined,
        "Javascript for Beginners Learn by Doing Practical Exercises",
        ["Edwin Diaz", "Coding Faculty Solutions"],
        14035,
        4.3,
        99.99
      ),
      Book(
        undefined,
        "JavaScript from Beginner to Expert",
        "Arkadiusz Włodarczyk",
        1147,
        4.3,
        84.99
      ),
      Book(
        undefined,
        "JavaScript for Kids: Code Your Own Games and Apps at Any Age",
        "Bryson Payne",
        784,
        4.6,
        29.99
      ),
      Book(undefined, "Advanced JavaScript", "Asim Hussain", 7349, 4.6, 49.99),
      Book(
        undefined,
        "The Complete JavaScript Course 2022: From Zero to Expert!",
        "Jonas Schmedtmann",
        145623,
        4.8,
        84.99
      ),
      Book(
        undefined,
        "JavaScript Beginner Bootcamp 2022",
        "Rob Merrill",
        5564,
        4.3,
        84.99
      ),
      Book(
        undefined,
        "ES6 Javascript: The Complete Developer's Guide",
        "Stephen Grider",
        12018,
        4.7,
        79.99
      )
    )
  ],
  [
    "data",
    Course(
      "Data Science",
      "Lead data-driven decisions with Data Science",
      "Data science application is an in-demand skill in " +
        "many industries worldwide — including finance, " +
        "transportation, education, manufacturing, human " +
        "resources, and banking. Explore data science courses " +
        "with Python, statistics, machine learning, and more " +
        "to grow your knowledge. Get data science training " +
        "if you’re into research, statistics, and analytics.",
      Book(
        undefined,
        "Data Science A-Z™: Real-Life Data Science Exercises Included",
        ["Kirill Eremenko", "Ligency I Team", "Ligency Team"],
        31954,
        4.5,
        84.99
      ),
      Book(
        undefined,
        "Machine Learning, Data Science and Deep Learning with Python",
        [
          "Sundog Education by Frank Kane",
          "Frank Kane",
          "Sundog Education Team"
        ],
        27559,
        4.5,
        24.99
      ),
      Book(
        undefined,
        "Data Science: Deep Learning and Neural Networks in Python",
        "Lazy Programmer Inc.",
        8500,
        4.7,
        84.99
      ),
      Book(
        undefined,
        "R Programming A-Z™: R For Data Science With Real Exercises!",
        ["Kirill Eremenko", "Ligency I Team", "Ligency Team"],
        46921,
        4.7,
        84.99,
        bookBadge.bestseller
      ),
      Book(
        undefined,
        "Data Science and Machine Learning Bootcamp with R",
        "Jose Portilla",
        15056,
        4.8,
        84.99
      ),
      Book(
        undefined,
        "R Programming: Advanced Analytics In R For Data Science",
        ["Kirill Eremenko", "Ligency I Team", "Ligency Team"],
        7956,
        4.7,
        84.99,
        bookBadge.highestRated
      ),
      Book(
        undefined,
        "Python for Data Science and Machine Learning Bootcamp",
        "Jose Portilla",
        117902,
        4.7,
        119.99,
        bookBadge.bestseller
      ),
      Book(
        undefined,
        "Python A-Z™: Python For Data Science With Real Exercises!",
        ["Kirill Eremenko", "Ligency I Team", "Ligency Team"],
        24416,
        4.6,
        84.99
      ),
      Book(
        undefined,
        "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        [
          "Kirill Eremenko",
          "Hadelin de Ponteves",
          "Ligency I Team",
          "Ligency Team"
        ],
        160631,
        4.6,
        84.99
      ),
      Book(
        undefined,
        "Introduction to Machine Learning for Data Science",
        "David Valentine",
        11786,
        4.6,
        84.99
      )
    )
  ],
  [
    "aws",
    Course(
      "AWS Certification",
      "Become an expert in cloud computing with AWS Certification",

      "Prep for your AWS certification with an AWS course on Udemy. " +
        "Learn the fundamentals of AWS such as working with a " +
        "serverless platform, the various frameworks, security and " +
        "more. With these courses, you’ll build the valuable skills " +
        "you need to implement cloud initiatives — and open up new " +
        "career opportunities. If you want to become an AWS developer," +
        "we’ve got the course for you.",

      Book(
        undefined,
        "Amazon Web Services (AWS) Certified 2022 - 4 Certifications!",
        ["BackSpace Academy", "Paul Coady"],
        20865,
        4.5,
        84.99
      ),
      Book(
        undefined,
        "AWS Cerified Security Specialty 2022",
        "Zeal Vora",
        5260,
        4.6,
        34.99,
        bookBadge.bestseller
      ),
      Book(
        undefined,
        "Part 1: AWS Certified Solutions Architect SAA C03 [Updated]",
        "Chanda Lingram",
        1540,
        4.6,
        84.99
      ),
      Book(
        undefined,
        "Practice Test AWS Solutions Architect Associate SAA C03",
        "Alan Rodrigues",
        2276,
        4.6,
        84.99
      ),
      Book(
        undefined,
        "AWS Cerified Solution Architect - Associate",
        "Alan Rodrigues",
        2276,
        4.6,
        84.99
      ),
      Book(
        undefined,
        "AWS Cerified Solution Architect - Associate 2022",
        "Zeal Vora",
        1455,
        4.7,
        29.99
      ),
      Book(
        undefined,
        "The Ultimate AWS Certified Solutions Architect - Associate",
        "Bernard Golden",
        1464,
        4.2,
        84.99
      ),
      Book(
        undefined,
        "AWS Certified Cloud Practitioner 2022",
        "Zeal Vora",
        19608,
        4.6,
        19.99
      ),
      Book(
        undefined,
        "AWS Certified Solutions Architect - Professional 2022",
        "Zeal Vora",
        1748,
        4.5,
        34.99
      ),
      Book(
        undefined,
        "AWS Certified Cloud Practitioner - Updated 2020",
        "Alan Rodrigues",
        2293,
        4.6,
        84.99
      )
    )
  ],
  [
    "draw",
    Course(
      "Drawing",
      "Expand your creative skillset with Drawing",

      "Want to start drawing for fun or take your craft to the next " +
        "level? Explore our online drawing classes and learn pencil " +
        "drawing, figure drawing, cartoon drawing, character drawing " +
        "for cartoons and anime, illustration, sketching, shading and " +
        "more. Take an overview course on the fundamentals of drawing " +
        "or zero in on an area you’d like to improve with a specialized " +
        "course. We’ve got tons of options to get — and keep — you going.",
      Book(
        undefined,
        "The Secrets to Drawing",
        "Matthew Fussell",
        3926,
        4.5,
        29.99
      ),
      Book(
        undefined,
        "Building Confidence Through Drawing: Art for Beginners",
        "Em Winn",
        1769,
        4.7,
        24.99,
        bookBadge.bestseller
      ),
      Book(
        undefined,
        "Art for Kids & Beginners: 15 Easy Drawing & Painting Lessons",
        "Em Winn",
        760,
        4.7,
        24.99
      ),
      Book(
        undefined,
        "The Ultimate Drawing Course - Beginner to Advanced",
        ["Jaysen Batchelor", "Quinton Batchelor"],
        114567,
        4.6,
        84.99,
        bookBadge.bestseller
      ),
      Book(
        undefined,
        "The Art & Science of Drawing / BASIC SKILLS",
        "Brent Eviston",
        11804,
        4.7,
        34.99
      ),
      Book(
        undefined,
        "How to Draw and Sketch for Absolute Beginners pt 1",
        "Rich Graysonn",
        4474,
        4.6,
        84.99,
        bookBadge.highestRated
      ),
      Book(
        undefined,
        "The Art & Science of Drawing / DYNAMIC MARK MAKING",
        "Brent Eviston",
        2588,
        4.8,
        34.99,
        bookBadge.highestRated
      ),
      Book(
        undefined,
        "The Art & Science of Drawing / FORM & SPACE",
        "Brent Eviston",
        2595,
        4.8,
        44.99
      ),
      Book(
        undefined,
        "The Art & Science of Drawing / MEASURING & PROPORTION",
        "Brent Eviston",
        1237,
        4.8,
        34.99,
        bookBadge.bestseller
      ),
      Book(
        undefined,
        "The Art & Science of Drawing / CONTOURS",
        "Brent Eviston",
        1076,
        4.8,
        34.99
      )
    )
  ]
]);
const categories = [
  {
    key: "tr1",
    tr: [
      {
        src:
          "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
        caption: "Design",
        key: "catDesign"
      },
      {
        src:
          "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
        caption: "Development",
        key: "catDev"
      },
      {
        src:
          "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
        caption: "Marketing",
        key: "catMarket"
      },
      {
        src:
          "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
        caption: "IT and Software",
        key: "catIT"
      }
    ]
  },
  {
    key: "tr2",
    tr: [
      {
        src:
          "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
        caption: "Personal Development",
        key: "catPerson"
      },
      {
        src:
          "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
        caption: "Business",
        key: "catBusiness"
      },
      {
        src:
          "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
        caption: "Photography",
        key: "catPhoto"
      },
      {
        src:
          "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
        caption: "Music",
        key: "catMusic"
      }
    ]
  }
];
const topicsByCategory = {
  development: [
    {
      name: "Python",
      key: "py",
      joined: 35_866_836
    },
    {
      name: "Web Development",
      key: "web",
      joined: 11_192_945
    },
    {
      name: "Machine Learning",
      key: "machine",
      joined: 6_992_804
    }
  ],
  business: [
    {
      name: "Financial Analysis",
      key: "finan",
      joined: 1_192_633
    },
    {
      name: "SQL",
      key: "sql",
      joined: 5_807_690
    },
    {
      name: "PMP",
      key: "pmp",
      joined: 1_701_661
    }
  ],
  it: [
    {
      name: "AWS Certification",
      key: "aws",
      joined: 5_869_527
    },
    {
      name: "Ethical Hacking",
      key: "hack",
      joined: 10_747_446
    },
    {
      name: "Cyber Security",
      key: "security",
      joined: 3_917_434
    }
  ],
  design: [
    {
      name: "Photoshop",
      key: "photo",
      joined: 10_771_595
    },
    {
      name: "Graphic Design",
      key: "graphic",
      joined: 3_324_348
    },
    {
      name: "Drawing",
      key: "draw",
      joined: 2_439_752
    }
  ]
};
const companies = [
  {
    src: "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg",
    alt: "Nasdaq"
  },
  {
    src: "https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg",
    alt: "Volkswagen"
  },
  {
    src: "https://s.udemycdn.com/partner-logos/v4/box-dark.svg",
    alt: "Box"
  },
  {
    src: "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg",
    alt: "NetApp"
  },
  {
    src: "https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg",
    alt: "Eventbrite"
  }
];
const footerLinks = [
  "Udemy Business",
  "Teach on Udemy",
  "Get the app",
  "About us",
  "Contact us",
  "Careers",
  "Blog",
  "Help and Support",
  "Affiliate",
  "Investors",
  "Terms",
  "Privacy policy",
  "Cookie settings",
  "Sitemap",
  "Accessibility statement"
];
const viewingBooks = [
  Book(
    undefined,
    "The Complete 2022 Web Development Bootcamp",
    "Dr. Angela Yu",
    209166,
    4.7,
    84.99,
    bookBadge.bestseller
  ),
  Book(
    undefined,
    "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
    "Dr. Angela Yu",
    124196,
    4.7,
    84.99,
    bookBadge.bestseller
  ),
  Book(
    undefined,
    "The Complete JavaScript Course 2022: From Zero to Expert!",
    "Jonas Schmedtmann",
    145623,
    4.8,
    84.99,
    bookBadge.bestseller
  ),
  Book(
    undefined,
    "React - The Complete Guide (incl Hooks, React Router, Redux)",
    "Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller",
    155996,
    4.6,
    84.99,
    bookBadge.bestseller
  ),
  Book(
    undefined,
    "Ultimate AWS Certified Solutions Architect Associate 2022",
    "Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer",
    137075,
    4.7,
    84.99,
    bookBadge.bestseller
  ),
  Book(
    undefined,
    "2022 Complete Python Bootcamp From Zero to Hero in Python",
    "Jose Portilla",
    426119,
    4.6,
    84.99
  ),
  Book(
    undefined,
    "Microsoft Excel - Excel from Beginner to Advanced",
    ["Kyle Pew", "Office Newb"],
    318342,
    4.7,
    84.99,
    bookBadge.bestseller
  ),
  Book(
    undefined,
    "The Web Developer Bootcamp 2022",
    "Colt Steele",
    240813,
    4.7,
    84.99
  ),
  Book(
    undefined,
    "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
    "Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer",
    100734,
    4.7,
    84.99,
    bookBadge.bestseller
  ),
  Book(
    undefined,
    "Java Programming Masterclass covering Java 11 & Java 17",
    "Tim Buchalka, Tim Buchalka's Learn Programming Academy",
    165579,
    4.6,
    84.99,
    bookBadge.bestseller
  )
];
export {
  courseSelections,
  categories,
  topicsByCategory,
  companies,
  footerLinks,
  bookBadge,
  viewingBooks
};
