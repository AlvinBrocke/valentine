import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
      className="overflow-hidden relative min-h-screen flex flex-col items-center justify-center selection:bg-rose-600 selection:text-white text-zinc-900"
      style={{
        backgroundImage: "url(/pexels-nietjuhart-776635.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <div className="relative glow-pulse animate-float">
            <img
              className="h-[230px] rounded-lg shadow-lg animate-float"
              src="public/IMG_0370.jpeg"
            />
            {/* Floating hearts animation */}
            <div className="absolute -top-4 -right-4 animate-heart-1">❤️</div>
            <div className="absolute -bottom-2 -left-4 animate-heart-2">💕</div>
            <div className="absolute top-1/2 -right-6 animate-heart-3">💗</div>
          </div>
          <style>{`@keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(2deg); }
            }
            @keyframes heart-1 {
              0%, 100% { transform: scale(1) translateY(0); opacity: 1; }
              50% { transform: scale(1.2) translateY(-5px); opacity: 0.8; }
            }
            @keyframes heart-2 {
              0%, 100% { transform: scale(1) translateY(0) rotate(-10deg); opacity: 1; }
              50% { transform: scale(1.1) translateY(-8px) rotate(10deg); opacity: 0.8; }
            }
            @keyframes heart-3 {
              0%, 100% { transform: scale(1) translateY(0); opacity: 1; }
              50% { transform: scale(1.3) translateY(-3px); opacity: 0.7; }
            }
            .animate-float { animation: float 3s ease-in-out infinite; }
            .animate-heart-1 { animation: heart-1 2s ease-in-out infinite; }
            .animate-heart-2 { animation: heart-2 2.5s ease-in-out infinite; }
            .animate-heart-3 { animation: heart-3 1.8s ease-in-out infinite; }
            @keyframes glow-pulse {
              0%, 100% {
                box-shadow: 
                  0 0 5px #ffb6c1,
                  0 0 10px #ffb6c1,
                  0 0 20px #ffb6c1,
                  0 0 40px #ff69b4;
                border-color: #ffb6c1;
              }
              50% {
                box-shadow: 
                  0 0 10px #ffb6c1,
                  0 0 20px #ffb6c1,
                  0 0 40px #ffb6c1,
                  0 0 80px #ff69b4;
                border-color: #ff69b4;
              }
            }
            .glow-pulse {
              border: 3px solid #ffb6c1;
              animation: glow-pulse 2s ease-in-out infinite;
            }
          `}</style>
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Estelle, will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
