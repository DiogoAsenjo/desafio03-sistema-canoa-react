import "./banner.css";
import banner from "../../assets/images/banner.png";

export const Banner = () => {
  return (
    <header className="banner">
      <img src={banner} alt="Banner principal da página" />
    </header>
  );
};
