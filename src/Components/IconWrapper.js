import { Link } from "react-router-dom";
const IconWrapper = () => {
    return (
        <nav className="grid-container" aria-label="Social media and resume links">
            <a
                href="https://www.linkedin.com/in/kirk-hietpas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kirk's LinkedIn profile"
            >
                <Icon
                    name="LinkedIn"
                    icon={`${process.env.PUBLIC_URL}/LinkedIn_logo_initials.png`}
                />
            </a>
            <a
                href="https://gitlab.com/Captain-Kirkie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kirk's GitLab profile"
            >
                <Icon
                    name="GitLab"
                    icon={`${process.env.PUBLIC_URL}/gitlab-logo.png`}
                />
            </a>
            <a
                href="https://github.com/Captain-Kirkie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kirk's GitHub profile"
            >
                <Icon
                    name="GitHub"
                    icon={`${process.env.PUBLIC_URL}/Github-desktop-logo-symbol.png`}
                />
            </a>
            <Link to="/resume" aria-label="View Kirk's resume">
                <Icon
                    name="Resume"
                    icon={`${process.env.PUBLIC_URL}/chexIcon.png`}
                />
            </Link>
        </nav>
    );
};

const Icon = ({ name, icon }) => {
    return (
        <div className="icon-container">
            <div className="icon-image-wrapper">
                <img src={icon} className="icon-img" alt={`${name} icon`} />
            </div>
            <div className="item-label">{name}</div>
        </div>
    );
};

export { IconWrapper, Icon };
