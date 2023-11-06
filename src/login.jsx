import logo from "./assets/100xlogo.svg";
import Buttons from "./buttons";
import { Base } from "./components";

//Header
function Header() {
  return (
    <img
      className="object-contain my-3 w-14 h-4 sm:w-36 sm:h-12 md:w-72 md:h-24 lg:w-[600px] lg:h-52"
      src={logo}
      alt="100xlogo"
    />
  );
}

//Container
function Container({ children }) {
  return (
    <>
      <div className="justify-center items-start lg:items-center flex px-7">
        <div className="flex items-center md:gap-6 lg:gap-25 flex-col md:flex-row">
          {children}
        </div>
      </div>
    </>
  );
}

//main content
function MainContent() {
  return (
    <div className="flex flex-col pl-7 min-h-screen">
      <div className="m-auto">
        <h1 className="text-3.5xl md:text-5xl mb-3 font-extrabold ">
          Happening Now
        </h1>
        <h3 className="text-base md:text-2.5xl pb-10 font-bold">Join today.</h3>
        <div className="pr-7">
          <a href="./step1.jsx">
            <Buttons
              variant="white"
              size="lg"
              text="Create account"
              disabled={true}
            />
          </a>
          <div className="flex items-center justify-center py-10 gap-1">
            <hr width="150.5px" />
            or
            <hr width="150.5px" />
          </div>
          <h2 className="text-xl font-medium pb-5">
            Already have an account ?
          </h2>

          <Buttons variant="outline" size="lg" text="Sign-up" />
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <Base>
        <Container>
          <Header />
          <MainContent />
        </Container>
      </Base>
    </>
  );
}

export default App;
