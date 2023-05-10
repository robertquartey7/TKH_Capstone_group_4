import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-96 flex p-2 px-10 gap-5">
      <div className="flex flex-col justify-around py-16 md:w-3/4 lg:w-2/4 sm:w-full items-center">
        <svg
          width="500"
          height="109"
          viewBox="0 0 620 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full flex-grow"
        >
          <path
            d="M59.75 53.3C65.65 54.4 70.5 57.35 74.3 62.15C78.1 66.95 80 72.45 80 78.65C80 84.25 78.6 89.2 75.8 93.5C73.1 97.7 69.15 101 63.95 103.4C58.75 105.8 52.6 107 45.5 107H0.350001V2.3H43.55C50.65 2.3 56.75 3.45 61.85 5.75C67.05 8.05 70.95 11.25 73.55 15.35C76.25 19.45 77.6 24.1 77.6 29.3C77.6 35.4 75.95 40.5 72.65 44.6C69.45 48.7 65.15 51.6 59.75 53.3ZM21.35 45.5H40.55C45.55 45.5 49.4 44.4 52.1 42.2C54.8 39.9 56.15 36.65 56.15 32.45C56.15 28.25 54.8 25 52.1 22.7C49.4 20.4 45.55 19.25 40.55 19.25H21.35V45.5ZM42.5 89.9C47.6 89.9 51.55 88.7 54.35 86.3C57.25 83.9 58.7 80.5 58.7 76.1C58.7 71.6 57.2 68.1 54.2 65.6C51.2 63 47.15 61.7 42.05 61.7H21.35V89.9H42.5ZM145.337 108.05C135.537 108.05 126.537 105.75 118.337 101.15C110.137 96.55 103.637 90.2 98.8367 82.1C94.0367 73.9 91.6367 64.65 91.6367 54.35C91.6367 44.15 94.0367 35 98.8367 26.9C103.637 18.7 110.137 12.3 118.337 7.69999C126.537 3.1 135.537 0.799999 145.337 0.799999C155.237 0.799999 164.237 3.1 172.337 7.69999C180.537 12.3 186.987 18.7 191.687 26.9C196.487 35 198.887 44.15 198.887 54.35C198.887 64.65 196.487 73.9 191.687 82.1C186.987 90.2 180.537 96.55 172.337 101.15C164.137 105.75 155.137 108.05 145.337 108.05ZM145.337 89.3C151.637 89.3 157.187 87.9 161.987 85.1C166.787 82.2 170.537 78.1 173.237 72.8C175.937 67.5 177.287 61.35 177.287 54.35C177.287 47.35 175.937 41.25 173.237 36.05C170.537 30.75 166.787 26.7 161.987 23.9C157.187 21.1 151.637 19.7 145.337 19.7C139.037 19.7 133.437 21.1 128.537 23.9C123.737 26.7 119.987 30.75 117.287 36.05C114.587 41.25 113.237 47.35 113.237 54.35C113.237 61.35 114.587 67.5 117.287 72.8C119.987 78.1 123.737 82.2 128.537 85.1C133.437 87.9 139.037 89.3 145.337 89.3ZM251.11 2.3C262.11 2.3 271.76 4.45 280.06 8.75C288.46 13.05 294.91 19.2 299.41 27.2C304.01 35.1 306.31 44.3 306.31 54.8C306.31 65.3 304.01 74.5 299.41 82.4C294.91 90.2 288.46 96.25 280.06 100.55C271.76 104.85 262.11 107 251.11 107H214.51V2.3H251.11ZM250.36 89.15C261.36 89.15 269.86 86.15 275.86 80.15C281.86 74.15 284.86 65.7 284.86 54.8C284.86 43.9 281.86 35.4 275.86 29.3C269.86 23.1 261.36 20 250.36 20H235.51V89.15H250.36ZM343.03 19.25V45.5H378.28V62.15H343.03V89.9H382.78V107H322.03V2.14999H382.78V19.25H343.03Z"
            fill="#253B80"
          />
          <path
            d="M474.764 33.8C472.364 29.4 469.064 26.05 464.864 23.75C460.664 21.45 455.764 20.3 450.164 20.3C443.964 20.3 438.464 21.7 433.664 24.5C428.864 27.3 425.114 31.3 422.414 36.5C419.714 41.7 418.364 47.7 418.364 54.5C418.364 61.5 419.714 67.6 422.414 72.8C425.214 78 429.064 82 433.964 84.8C438.864 87.6 444.564 89 451.064 89C459.064 89 465.614 86.9 470.714 82.7C475.814 78.4 479.164 72.45 480.764 64.85H444.764V48.8H501.464V67.1C500.064 74.4 497.064 81.15 492.464 87.35C487.864 93.55 481.914 98.55 474.614 102.35C467.414 106.05 459.314 107.9 450.314 107.9C440.214 107.9 431.064 105.65 422.864 101.15C414.764 96.55 408.364 90.2 403.664 82.1C399.064 74 396.764 64.8 396.764 54.5C396.764 44.2 399.064 35 403.664 26.9C408.364 18.7 414.764 12.35 422.864 7.85C431.064 3.25 440.164 0.949997 450.164 0.949997C461.964 0.949997 472.214 3.85 480.914 9.64999C489.614 15.35 495.614 23.4 498.914 33.8H474.764ZM565.6 108.05C555.8 108.05 546.8 105.75 538.6 101.15C530.4 96.55 523.9 90.2 519.1 82.1C514.3 73.9 511.9 64.65 511.9 54.35C511.9 44.15 514.3 35 519.1 26.9C523.9 18.7 530.4 12.3 538.6 7.69999C546.8 3.1 555.8 0.799999 565.6 0.799999C575.5 0.799999 584.5 3.1 592.6 7.69999C600.8 12.3 607.25 18.7 611.95 26.9C616.75 35 619.15 44.15 619.15 54.35C619.15 64.65 616.75 73.9 611.95 82.1C607.25 90.2 600.8 96.55 592.6 101.15C584.4 105.75 575.4 108.05 565.6 108.05ZM565.6 89.3C571.9 89.3 577.45 87.9 582.25 85.1C587.05 82.2 590.8 78.1 593.5 72.8C596.2 67.5 597.55 61.35 597.55 54.35C597.55 47.35 596.2 41.25 593.5 36.05C590.8 30.75 587.05 26.7 582.25 23.9C577.45 21.1 571.9 19.7 565.6 19.7C559.3 19.7 553.7 21.1 548.8 23.9C544 26.7 540.25 30.75 537.55 36.05C534.85 41.25 533.5 47.35 533.5 54.35C533.5 61.35 534.85 67.5 537.55 72.8C540.25 78.1 544 82.2 548.8 85.1C553.7 87.9 559.3 89.3 565.6 89.3Z"
            fill="#00BF63"
          />
        </svg>
        <h1 className="text-blue-gray-900 mb-5">Get Your Bodego On The Go</h1>
        <Link to={"/signup"}>
          <span className="p-3 border rounded-lg bg-secondary text-white ">
            Sign Up Now
          </span>
        </Link>
      </div>

      <div className="md:w-1/4  lg:w-2/4 sm:w-1/4">
        <img
          src="/img/heroimg.svg"
          alt=""
          className="bg-blend-overlay w-full h-full "
        />
      </div>
    </div>
  );
}

export default Hero;
