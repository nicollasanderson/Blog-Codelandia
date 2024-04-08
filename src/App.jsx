import PostCard from "./components/PostCard";
import { postList } from "./services/posts";
import { MainContent } from "./styleApp";
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <MainContent>
      <section className="search__section">
        <div className="section__wrapper">
          <h1 className="blog_tittle__h1">
            <span className="brand_text__color">Code</span>lândia
          </h1>
          <div className="input__wrapper">
            <button>
              <FaSearch className="brand_text__color" />
            </button>
            <input type="text" placeholder="Pesquisar no blog" />
          </div>
        </div>
      </section>
      <main className="main__cards">
        <div>
          {postList.map((element, index) => (
            <PostCard
              title={element.title}
              description={element.description}
              date={element.date}
              key={index}
            />
          ))}
        </div>
      </main>
    </MainContent>
  );
}

export default App;
