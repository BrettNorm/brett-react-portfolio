const SocialMediaIcons = () => {

    return (
        <>
            <style>
            {`
            .social-icon {
                width: 25px;
                height: 25px;
            }
            `}
            </style>
        
        <div className = "flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/brett-bax-b1b90b132/"
                target="_blank"
                rel="noreferrer"
            >
                <img className="social-icon" alt="linkedin-link" src="../assets/linkedin.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/BrettNorm"
                target="_blank"
                rel="noreferrer"
            >
                <img className="social-icon" alt="linkedin-link" src="../assets/github-mark.png" />
            </a>

        </div>
        </>

    )

}

export default SocialMediaIcons;