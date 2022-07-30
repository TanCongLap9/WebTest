import "./styles.css";
import root from ".\\index.js";
import * as data from ".\\data.js";

const keyFromIndex = (map, index) => Array.from(map.keys())[index];

let currentCourse = keyFromIndex(data.courseSelections, 0);
let bookStartIndex = 0;
let studentsViewingBookStartIndex = 0;

const Page = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);
const changeCourse = (courseId) => {
  for (const val of data.courseSelections.keys())
    document.getElementById(`course-${val}`).dataset.selected = (
      courseId === val
    ).toString();

  currentCourse = courseId;
  bookStartIndex = 0;
  root.render(<Page />);
};
const Header = () => (
  <header style={{ overflow: "auto" }}>
    <img
      src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
      alt="Udemy logo"
      width="100px"
      height="50px"
      style={{ float: "left" }}
    />
    <button style={{ float: "left" }}>Categories</button>
    <input
      type="search"
      style={{ maxWidth: "100%", float: "left" }}
      placeholder={String.fromCodePoint(0x1f50d) + " Search for anything"}
    />
    <button id="language-button" style={{ float: "right" }}>
      &#x1f310;
    </button>
    <button id="signup" style={{ float: "right" }}>
      Sign up
    </button>
    <button id="login" style={{ float: "right" }}>
      Log in
    </button>
    <button style={{ float: "right" }}>&#x1f6d2;</button>
    <button style={{ float: "right" }}>Teach on Udemy</button>
    <button style={{ float: "right" }}>Udemy Business</button>
  </header>
);
const Body = () => (
  <div>
    <HireScreen />
    <CoursesList />
    <SeeAlso />
    <StudentsViewing />
    <Categories />
    <TopicsByCategory />
    <Teaching />
    <TrustedCompanies />
    <Business />
    <Education />
  </div>
);
const Teaching = () => (
  <div id="teaching" className="div2-box">
    <img
      src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
      alt="Instructor"
      width="400px"
      height="400px"
    />
    <div id="teaching-proposal">
      <h2 style={{ fontFamily: "serif", fontSize: "32px" }}>
        Become an instructor
      </h2>
      <p>
        Instructors from around the world teach millions of students on Udemy.
        We provide the tools and skills to teach what you love.
      </p>
      <button className="black-button" type="button">
        Start teaching today
      </button>
    </div>
  </div>
);
const TrustedCompanies = () => (
  <div id="trusted-companies" style={{ clear: "left" }}>
    <h2 style={{ fontFamily: "serif", fontSize: "30px" }}>
      Trusted by companies of all sizes
    </h2>
    <table>
      <tbody>
        {Array(Math.ceil(data.companies.length / 3))
          .fill(undefined)
          .map((_, i1) => (
            <tr key={`tr${i1}`}>
              {Array(3)
                .fill(i1)
                .map((_, i2) => (
                  <td key={`td${i1 * 3 + i2}`}>
                    {data.companies[i1 * 3 + i2] ? (
                      <a href="./">
                        <img
                          src={data.companies[i1 * 3 + i2].src}
                          alt={data.companies[i1 * 3 + i2].alt}
                          width="100px"
                          height="50px"
                        />
                      </a>
                    ) : undefined}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);
const SeeAlso = () => (
  <div id="see-also-bg">
    <div id="see-also" className="div-box">
      <table>
        <tr>
          <td className="see-also-td">
            <img
              className="see-also-img"
              src="https://cdn-icons-png.flaticon.com/512/17/17550.png"
              alt=""
              width="40px"
              height="40px"
            />
            <span>Learn in-demand skills with over 185,000 video courses</span>
          </td>
          <td className="see-also-td">
            <img
              className="see-also-img"
              src="https://cdn-icons-png.flaticon.com/512/17/17577.png"
              alt=""
              width="40px"
              height="40px"
            />
            <span>Choose courses taught by real-world experts</span>
          </td>
          <td className="see-also-td">
            <img
              className="see-also-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMp_2Sn865hdse0DVrnEUNHZy_eXU-18KG-w&usqp=CAU"
              alt=""
              width="40px"
              height="40px"
            />
            <span>
              Learn at your own pace, with lifetime access on mobile and desktop
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
);
const StudentsViewing = () => (
  <div id="students-viewing" className="div-box">
    <h2>Students are viewing</h2>
    <div id="courses-list">
      <div id="course-detail">
        <BooksList
          books={data.viewingBooks}
          useVariable="studentsViewingBookStartIndex"
        />
      </div>
    </div>
  </div>
);
const Business = () => (
  <div id="business" className="div2-box">
    <img
      style={{ float: "right", margin: "0 0 0 80px" }}
      src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg"
      alt="Woman"
      width="400px"
      height="400px"
    />
    <div id="business-proposal">
      <img
        src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
        alt="Udemy Business"
        width="auto"
        height="40px"
      />
      <p>
        Get unlimited access to 16,000+ of Udemy's top courses for your team.
        Learn and improve skills across business, tech, design, and more
      </p>
      <button type="button" className="black-button">
        Get Udemy Business
      </button>
    </div>
  </div>
);
const Education = () => (
  <div id="education" className="div2-box" style={{ clear: "right" }}>
    <img
      style={{ float: "left", margin: "0 80px 0 0" }}
      src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg"
      alt="Joining hands"
      width="400px"
      height="400px"
    />
    <div id="education-proposal">
      <h2 style={{ fontFamily: "serif", fontSize: "32px" }}>
        Transform your life through education
      </h2>
      <p>
        Learners around the world are launching new careers, advancing in their
        fields, and enriching their lives.
      </p>
      <button type="button" className="black-button">
        Find out how
      </button>
    </div>
  </div>
);
const Topic = (props) => (
  <td>
    <div>
      <a href="./">{props.name}</a>
      <p>{Intl.NumberFormat("en-US").format(props.joined)} students</p>
    </div>
  </td>
);
const TopicsByCategory = () => (
  <div id="topics-by-category-bg">
    <div id="topics-by-category" className="div-box">
      <h2 style={{ margin: "0" }}>Featured topics by category</h2>
      <table>
        <thead>
          <tr>
            <td>
              <h3>Development</h3>
            </td>
            <td>
              <h3>Business</h3>
            </td>
            <td>
              <h3>IT and Software</h3>
            </td>
            <td>
              <h3>Design</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.getOwnPropertyNames(data.topicsByCategory).map((v) => (
              <Topic
                key={data.topicsByCategory[v][0].key}
                name={data.topicsByCategory[v][0].name}
                joined={data.topicsByCategory[v][0].joined}
              />
            ))}
          </tr>
          <tr>
            {Object.getOwnPropertyNames(data.topicsByCategory).map((v) => (
              <Topic
                key={data.topicsByCategory[v][1].key}
                name={data.topicsByCategory[v][1].name}
                joined={data.topicsByCategory[v][1].joined}
              />
            ))}
          </tr>
          <tr>
            {Object.getOwnPropertyNames(data.topicsByCategory).map((v) => (
              <Topic
                key={data.topicsByCategory[v][2].key}
                name={data.topicsByCategory[v][2].name}
                joined={data.topicsByCategory[v][2].joined}
              />
            ))}
          </tr>
        </tbody>
      </table>
      <button type="button" className="white-button">
        Explore more topics
      </button>
    </div>
  </div>
);
const CategoryButton = (props) => (
  <button>
    <figure>
      <img src={props.src} alt={props.caption} width="200px" />
      <figcaption style={{ textAlign: "left" }}>{props.caption}</figcaption>
    </figure>
  </button>
);
const Categories = () => (
  <div id="categories" className="div-box">
    <h2 style={{ textAlign: "left" }}>Top categories</h2>
    <table>
      <tbody>
        {data.categories.map((v1) => (
          <tr key={v1.key}>
            {v1.tr.map((v2) => (
              <td>
                <CategoryButton
                  src={v2.src}
                  caption={v2.caption}
                  key={v2.key}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const HireScreen = () => (
  <div id="hire-screen">
    <img
      src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/93f7ff2b-ec9e-486f-a2f5-d97e03a9a0ee.jpg"
      alt="Background"
      width="100%"
    />
    <div id="hire-dialog">
      <h2 style={{ margin: "5px 0px", font: "normal bold 35px serif" }}>
        Sale ends today
      </h2>
      <p>
        Have a dream? Start learning your way to it with courses from $19.99.
      </p>
    </div>
  </div>
);
const CoursesList = () => (
  <div id="courses-list" className="div-box">
    <h2 style={{ fontFamily: "serif" }}>A broad selection of courses</h2>
    <p>
      Choose from 185,000 online video courses with new additions published
      every month
    </p>
    <div>
      {Array.from(data.courseSelections.keys()).map((val, index) => (
        <button
          onClick={() => changeCourse(val)}
          key={val}
          className="course-button"
          id={`course-${val}`}
          data-selected={`${!index}`}
        >
          {data.courseSelections.get(val).name}
        </button>
      ))}
    </div>
    <div id="course-detail">
      <h3 id="courseTitle" style={{ margin: "5px 0px" }}>
        {data.courseSelections.get(currentCourse).title}
      </h3>
      <p id="courseText" style={{ width: "75%" }}>
        {data.courseSelections.get(currentCourse).text}
      </p>
      <button type="button" id="explore" className="white-button">{`Explore ${
        data.courseSelections.get(currentCourse).name
      }`}</button>
      <BooksList
        books={data.courseSelections.get(currentCourse).books}
        useVariable="bookStartIndex"
      />
    </div>
  </div>
);
const BooksList = (props) => {
  const books = props.books;
  let variable = props.useVariable;
  return (
    <table className="books-list">
      <tr>
        {eval(variable) ? (
          <td className="lr-button-td">
            <button
              className="lr-button"
              id="back-button"
              onClick={() => {
                const clamped = Math.min(eval(variable), 4);
                eval(`${variable} -= ${clamped}`);
                root.render(<Page />);
              }}
            >
              <img
                src="https://static.thenounproject.com/png/251451-200.png"
                id="back"
                alt="Back"
                width="50px"
                height="50px"
              />
            </button>
          </td>
        ) : undefined}
        {Array(5)
          .fill(undefined)
          .map((_, i) => (
            <td key={`book${i}`} className={`book-td`}>
              <img
                src={
                  books[i + eval(variable)].src ??
                  "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                }
                alt="Book image"
                width="200px"
                height="100px"
              />
              <p className="book-title">
                <b>{books[i + eval(variable)].title}</b>
              </p>
              <p className="book-author">
                {data.courseSelections
                  .get(currentCourse)
                  .books[i + eval(variable)].author.join?.(", ") ??
                  books[i + eval(variable)].author}
              </p>
              <span className="rating-star-text">{`${
                books[i + eval(variable)].rateRatio
              }`}</span>
              {Array(5)
                .fill(undefined)
                .map((_, i2) => (
                  <img
                    key={`rating-star${i2}`}
                    src={
                      books[i + eval(variable)].rateRatio <= 0.25 + i2
                        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/2048px-Empty_Star.svg.png"
                        : books[i + eval(variable)].rateRatio >= 0.75 + i2
                        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/2234px-Star%2A.svg.png"
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Star_Yellow.svg/1200px-Half_Star_Yellow.svg.png"
                    }
                    alt="star"
                    width="15px"
                    height="15px"
                  />
                ))}
              <span className="rating-amount">
                (
                {Intl.NumberFormat("en-US").format(
                  books[i + eval(variable)].rate
                )}
                )
              </span>
              <p>
                <b>
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                  }).format(books[i + eval(variable)].price)}
                </b>
              </p>
              {books[i + eval(variable)].badge === data.bookBadge.bestseller ? (
                <span className="bestseller">Bestseller</span>
              ) : books[i + eval(variable)].badge ===
                data.bookBadge.highestRated ? (
                <span className="highest-rated">Highest rated</span>
              ) : undefined}
            </td>
          ))}
        {eval(variable) + 4 < books.length - 1 ? (
          <td className="lr-button-td">
            <button
              className="lr-button"
              id="next-button"
              onClick={() => {
                const clamped = Math.min(
                  books.length - 1 - (eval(variable) + 4),
                  4
                );
                eval(`${variable} += ${clamped}`);
                root.render(<Page />);
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1174/1174469.png"
                id="next"
                alt="Next"
                width="50px"
                height="50px"
              />
            </button>
          </td>
        ) : undefined}
      </tr>
    </table>
  );
};
const Footer = () => (
  <footer style={{ clear: "both" }}>
    <button type="button" id="lang-button">
      &#x1F310; English
    </button>
    <nav>
      <table>
        <tbody>
          {Array(5)
            .fill(undefined)
            .map((_, i1) => (
              <tr key={`footerLinkTr${i1}`}>
                {Array(3)
                  .fill(undefined)
                  .map((_, i2) => (
                    <td key={`footerLinkTd${i2}`}>
                      <a href=".\">{data.footerLinks[i1 + i2 * 5]}</a>
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </nav>
    <img
      src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
      alt="Udemy logo"
      width="auto"
      height="30px"
    />
    <copy>&copy; 2022 Udemy, Inc.</copy>
  </footer>
);
export default Page;
