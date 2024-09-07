const IconWrapper = (props) => {
  return (
    <div className="grid-container">
      <Icon
        name="Linked In"
        icon=""
        onClick={() => {
          console.log(`hello world`);
        }}
      >
        1
      </Icon>
      <Icon
        name="GitLab"
        icon=""
        onClick={() => {
          console.log("whatever");
        }}
      >
        1
      </Icon>
      <Icon
        name="GitHub"
        icon=""
        onClick={() => {
          console.log("whatever");
        }}
      >
        1
      </Icon>
      <Icon
        name="Resume"
        icon=""
        onClick={() => {
          console.log("whatever");
        }}
      >
        1
      </Icon>
    </div>
  );
};

const Icon = (props) => {
    return (
      <div className="icon-container" onClick={props.onClick} >
        <div className="grid-item"></div>
        <div className="item-label">
        {props.name}
        </div>

      </div>
  );
};

export { IconWrapper, Icon };
