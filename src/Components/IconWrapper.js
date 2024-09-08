const IconWrapper = (props) => {
  return (
    <div className="grid-container">
      <Icon
        name="Linked In"
        icon="LinkedIn_logo_initials.png"
              onClick={() => {
                window.open("https://www.linkedin.com/in/kirk-hietpas/", '_blank').focus();
        }}
      >
        1
      </Icon>
      <Icon
        name="GitLab"
        icon="gitlab-logo-500.svg"
        onClick={() => {
            window.open("https://gitlab.com/Captain-Kirkie", '_blank').focus();

        }}
      >
        1
      </Icon>
      <Icon
        name="GitHub"
        icon="Github-desktop-logo-symbol.png"
        onClick={() => {
            window.open("https://github.com/Captain-Kirkie", '_blank').focus();

        }}
      >
        1
      </Icon>
      <Icon
        name="Resume"
        icon="chexIcon.png"
        onClick={() => {
          console.log("whatever");
        }}
      >
        1
      </Icon>
    </div>
  );
};

const Icon = ({ name, icon, onClick }) => {
  return (
    <div className="icon-container" onClick={onClick}>
      <div className="icon-image-wrapper">
            <img src={icon} className="icon-img" alt="invalidIcon"></img>
      </div>
      <div className="item-label">{name}</div>
    </div>
  );
};

export { IconWrapper, Icon };
