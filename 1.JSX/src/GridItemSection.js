export const GridItemSection = (props) => {
  return (
    <div className={props.divClassName}>
      <a href={props.href}>
        <img
          src={props.img}
          alt="changedNameImage"
          className={props.className}
        />
      </a>
    </div>
  );
};
