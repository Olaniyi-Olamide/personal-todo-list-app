//import bgMobileDark from "../assets/images/bg-mobile-dark.jpg";
import sunIcon from "../assets/images/icon-sun.svg";

export default function Header() {
  return (
    <header
      className={`bg-[image:var(--bg-darkBg)] bg-cover bg-center px-[2rem] pt-[2rem] pb-[8rem] flex justify-between items-center`}
    >
      <h1 className="text-Gray50 tracking-[0.5rem] text-[1.6rem]">TODO</h1>

      <button className="bg-transparent border-none">
        <img src={sunIcon} alt="sunIcon" />
      </button>
    </header>
  );
}
