import React from "react";
import userData from "../../constants/userData";
import {BsGithub, BsLinkedin, BsTwitterX} from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="max-w-6xl mx-auto px-4 py-10">
            <div className="h-0.5 w-full bg-p-500 dark:bg-dark-p-500"/>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between mt-5 sm:items-center">
                <div>
                    <p>&copy; {userData.name}. All Rights Reserved.</p>
                </div>
                {/*social media links*/}
                <div className="flex flex-row items-center space-x-4 text-p-500 dark:text-dark-p-500">
                    <a href={userData.social.github}
                       aria-label="GitHub-Link"
                    >
                        <BsGithub alt="GitHub Icon"/>
                    </a>
                    <a href={userData.social.linkedin}
                       aria-label="LinkedIn-Link"
                    >
                        <BsLinkedin alt="LinkedIn Icon"/>
                    </a>
                    <a href={userData.social.twitter}
                       aria-label="TwitterX-Link"
                    >
                        <BsTwitterX alt="Twitter Icon"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}