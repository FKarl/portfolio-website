import Section from "../Section";
import {toast} from "react-toastify";
import {MdLocationOn, MdMail} from "react-icons/md";
import userData from "../../../constants/userData";


export default function Contact({side}) {

    const copyToClipboard = async (text) => {
        await navigator.clipboard.writeText(text);
        toast.success("Copied to Clipboard!", {
            toastId: "uniqueID-Copy"
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log("Sending Contact E-Mail")

        let apiCall = new Promise(function (resolve, reject) {
            fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        "name": e.target.name.value,
                        "message": e.target.message.value,
                        "email": e.target.email.value
                    }
                )
            }).then(r => {
                // TODO add alert
                if (r.status === 200) {
                    console.log("Response succeeded!")
                    resolve();
                } else {
                    console.log("Response received with status " + r.status)
                    reject();
                }
            }).catch(reject);
        })
        toast.promise(apiCall,
            {
                pending: "Message is being sent.",
                success: "Message was sent successfully!",
                error: "An error has occurred, please send an e-mail instead!"
            },
            {
                position: toast.POSITION.TOP_RIGHT,
                toastId: "uniqueID-Contact"
            }
        )


    }

    return (
        <Section side={side} id="contact" title="Contact">
            <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-8 space-y-4 sm:space-y-0 mx-auto">
                {/*Contact information*/}
                <div className="space-y-7 sm:space-y-14 sm:max-w-min md:max-w-md">
                    <div className="space-y-3">
                        <h1 className="text-2xl tracking-tight font-bold  sm:text-3xl md:text-4xl">
                            Get in touch.
                        </h1>
                        <p className="">
                            Fill out the form and I&apos;ll get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="space-y-3 sm:space-y-7">
                        <div
                            className="flex flex-row items-center space-x-5 md:space-x-10 rounded-md border border-bg-500 dark:border-dark-bg-500 hover:border-highlight-500 hover:dark:border-dark-highlight-500 p-2"
                            onClick={() => copyToClipboard(userData.email)}>
                            <div className="text-headline-500-500 dark:text-dark-headline-500 text-2xl ">
                                <MdMail/>
                            </div>
                            <p className="text-headline-500-500 dark:text-dark-headline-500 sm:text-lg whitespace-nowrap font-semibold">
                                {userData.email}
                            </p>
                        </div>
                        <div
                            className="flex flex-row items-center space-x-5 md:space-x-10 rounded-md border border-bg-500 dark:border-dark-bg-500 hover:border-highlight-500 hover:dark:border-dark-highlight-500 p-2">
                            <div className="text-headline-500-500 dark:text-dark-headline-500 text-2xl">
                                <MdLocationOn/>
                            </div>
                            <p className="text-headline-500-500 dark:text-dark-headline-500 sm:text-lg font-semibold">
                                {userData.location}
                            </p>
                        </div>
                    </div>
                </div>
                {/*Form*/}
                <div className="flex-grow">
                    <form className="flex flex-col" onSubmit={submitHandler}>
                        <label htmlFor="name" className="mb-1">
                            Your Name *
                        </label>
                        <input type="text"
                               name="name"
                               className="form-input rounded-xl bg-bg-400 dark:bg-dark-bg-400 text-p-500 dark:text-dark-p-500 border-p-500 dark:border-dark-p-500 focus:border-highlight-500 focus:dark:border-dark-highlight-500"/>

                        <label htmlFor="email" className="mt-2 mb-1">
                            E-Mail *
                        </label>
                        <input type="email"
                               name="email"
                               className="w-full form-input rounded-xl bg-bg-400 dark:bg-dark-bg-400 text-p-500 dark:text-dark-p-500 border-p-500 dark:border-dark-p-500 focus:border-highlight-500 focus:dark:border-dark-highlight-500"/>

                        <label htmlFor="message" className="mt-2 mb-1">
                            Message *
                        </label>
                        <textarea rows="5"
                                  name="message"
                                  className="form-input rounded-xl bg-bg-400 dark:bg-dark-bg-400 text-p-500 dark:text-dark-p-500 border-p-500 dark:border-dark-p-500 focus:outline-none focus:border-highlight-500 focus:dark:border-dark-highlight-500 focus:ring-0"/>

                        <input type="submit" value="Send"
                               className="w-1/2  max-w-xs mt-4 py-2 border border-transparent text-base md:text-lg rounded-md text-button-text-500 dark:text-button-text-500 bg-highlight-500 dark:bg-dark-highlight-500 hover:bg-highlight-800 hover:dark:bg-dark-highlight-800"/>

                    </form>
                </div>
            </div>
        </Section>
    )
}