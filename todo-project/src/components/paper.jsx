import style from "../css/paper.module.css";

const paper = () => {
  return (
    <div className={style.paper}>
      <h2>Titel</h2>
      <label className={style.container}>
        <input type="text" />
        <input type="checkbox" />
        <span class={style.checkmark}></span>
      </label>
    </div>
  );
};

export default paper;
