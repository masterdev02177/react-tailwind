import icon1 from "./assets/reliable-icon.svg";
import "./input.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-back-color min-h-screen">
        <div className="max-w-screen-lg mx-auto px-8">
          <div className="py-24">
            <h1 className="text-icon-back font-black text-4xl sm:text-5xl tracking-wide font-sans">Amazing Features</h1>
            <p className="text-normal-text text-base lg:text-lg font-medium mt-6 max-w-xl mx-auto font-sans tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className="flex flex-wrap justify-center mt-8">
              <div className="item">
                <div className="bg-icon-back p-5 rounded-full text-center w-fit">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="mt-6">
                  <h2 className="text-normal-text text-xl font-bold font-sans tracking-wide">Secure</h2>
                  <p className="text-opacity-color text-lg font-normal mt-2 font-sans tracking-wide">We strictly only deal with vendors that provide top notch security infrastructure.</p>
                </div>
              </div>
              <div className="item">
                <div className="bg-icon-back p-5 rounded-full text-center w-fit">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="mt-6">
                  <h2 className="text-normal-text text-xl font-bold font-sans tracking-wide">Secure</h2>
                  <p className="text-opacity-color text-lg font-normal mt-2 font-sans tracking-wide">We strictly only deal with vendors that provide top notch security infrastructure.</p>
                </div>
              </div>
              <div className="item">
                <div className="bg-icon-back p-5 rounded-full text-center w-fit">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="mt-6">
                  <h2 className="text-normal-text text-xl font-bold font-sans tracking-wide">Secure</h2>
                  <p className="text-opacity-color text-lg font-normal mt-2 font-sans tracking-wide">We strictly only deal with vendors that provide top notch security infrastructure.</p>
                </div>
              </div>
              <div className="item">
                <div className="bg-icon-back p-5 rounded-full text-center w-fit">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="mt-6">
                  <h2 className="text-normal-text text-xl font-bold font-sans tracking-wide">Secure</h2>
                  <p className="text-opacity-color text-lg font-normal mt-2 font-sans tracking-wide">We strictly only deal with vendors that provide top notch security infrastructure.</p>
                </div>
              </div>
              <div className="item">
                <div className="bg-icon-back p-5 rounded-full text-center w-fit">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="mt-6">
                  <h2 className="text-normal-text text-xl font-bold font-sans tracking-wide">Secure</h2>
                  <p className="text-opacity-color text-lg font-normal mt-2 font-sans tracking-wide">We strictly only deal with vendors that provide top notch security infrastructure.</p>
                </div>
              </div>
              <div className="item">
                <div className="bg-icon-back p-5 rounded-full text-center w-fit">
                  <img src={icon1} alt="icon1" />
                </div>
                <div className="mt-6">
                  <h2 className="text-normal-text text-xl font-bold font-sans tracking-wide">Secure</h2>
                  <p className="text-opacity-color text-lg font-normal mt-2 font-sans tracking-wide">We strictly only deal with vendors that provide top notch security infrastructure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
