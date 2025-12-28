import { Link } from "react-router-dom";
const IconWrapper = (props) => {
    return (
        <div className="grid-container">
            <Icon
                name="Linked In"
                icon={`${process.env.PUBLIC_URL}/LinkedIn_logo_initials.png`}
                onClick={() => {
                    window
                        .open(
                            "https://www.linkedin.com/in/kirk-hietpas/",
                            "_blank"
                        )
                        .focus();
                }}
            >
                1
            </Icon>
            <Icon
                name="GitLab"
                icon={`${process.env.PUBLIC_URL}/gitlab-logo.png`}
                onClick={() => {
                    window
                        .open("https://gitlab.com/Captain-Kirkie", "_blank")
                        .focus();
                }}
            >
                1
            </Icon>
            <Icon
                name="GitHub"
                icon={`${process.env.PUBLIC_URL}/Github-desktop-logo-symbol.png`}
                onClick={() => {
                    window
                        .open("https://github.com/Captain-Kirkie", "_blank")
                        .focus();
                }}
            >
                1
            </Icon>
            <Link to="/resume">
                <Icon
                    name="Resume"
                    icon={`${process.env.PUBLIC_URL}/chexIcon.png`}
                    onClick={() => {
                        console.log("I love Chexy Boy");
                    }}
                ></Icon>
            </Link>
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
