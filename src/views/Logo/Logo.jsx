import style from "./logo.module.css";

const Logo = () => {
  return (
    <div className={style.logo}>
      <h1 className={style.title}>Rick and Morty</h1>
      <h4 className={style.title}>app</h4>
    </div>
  );
};

export default Logo;
