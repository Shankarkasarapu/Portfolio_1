import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import touch from "../assets/img/get_in_touch.png";

const LetsConnect = () => {
    const [send, setSend] = useState("Send");
    const [statusColor, setStatusColor] = useState();
    const [showAnimation, setShowAnimation] = useState(false);
    const my_access_key= import.meta.env.VITE_APP_ACCESS_KEY

    const formdetails = async (event) => {
        event.preventDefault();
        setSend("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", my_access_key );

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {

                setSend("Sent!");
                setShowAnimation(true);
                setTimeout(() => {
                    setSend("Send");
                    setStatusColor("white");
                    setShowAnimation(false);
                    event.target.reset();
                }, 3000);
            } else {
                console.error("Error:", data);
                setSend("Failed !!😢");
                setStatusColor("red");
                setTimeout(() => {
                    setSend("Send");
                    setStatusColor("white");
                }, 3300);
            }
        } catch (error) {
            console.error("Error:", error);
            setSend("Failed !!😢");
            setStatusColor("red");
            setTimeout(() => {
                setSend("Send");
                setStatusColor("white");
            }, 3000);
        }
    };

    return (
        <div className="connect" id="connect">
            <Container>
                <Row>
                    <div className="pb-5 d-flex justify-content-center">
                        <form
                            xs={12}
                            md={6}
                            className="col-lg-6 animate__animated animate__fadeIn pt-3"
                            onSubmit={formdetails}
                        >
                            <div className="col-11">
                                <h1 className="head py-5">Get In Touch</h1>
                                <div className="ps-5 text-center">
                                    <div className="fields d-flex justify-content-between w-100">
                                        <input
                                            type="text"
                                            name="first_name"
                                            placeholder="First name"
                                            className="field inp border p-3"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="last_name"
                                            placeholder="Last name"
                                            className="field inp border p-3"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="field border col-12 p-3"
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        className="field p-5 px-4 pt-4 col-12 border"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                    <div className="status-container">
                                        <button
                                            type="submit"
                                            className="letsconnect rounded col-4 w-auto"
                                            style={{ color: statusColor }}
                                        >
                                            <span>{send}</span>
                                        </button>
                                        {showAnimation && send === "Sent!" && (
                                            <div
                                                className="sent-animation"
                                                style={{ color: "white", marginTop: "10px" }}
                                            >
                                                <span>✔ Email Sent Successfully...!😍</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="m-auto d-none d-md-block col-md-6 col-lg-6 col-xl-4 p-0">
                            <img
                                src={touch}
                                alt="Get In Touch"
                                className="getintouch"
                            />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default LetsConnect;
