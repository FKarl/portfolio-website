import React from "react";
import userData from "../constants/userData";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="max-w-6xl mx-auto px-4 py-10">
            <div className="h-0.5 w-full bg-black dark:bg-gray-700"></div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between mt-5 md:items-center">
                <div>
                    <p>&copy; {userData.name}. All Rights Reserved.</p>
                </div>
                {/*social media links*/}
                <div className="flex flex-row items-center space-x-4 text-gray-600 dark:text-gray-200">
                    <a href={userData.social.github}>
                        <BsGithub/>
                    </a>
                    <a href={userData.social.linkedin}>
                        <BsLinkedin/>
                    </a>
                    <a href={userData.social.twitter}>
                        <BsTwitter/>
                    </a>
                </div>
            </div>
        </footer>
    )
}