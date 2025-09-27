// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import touch from "../assets/img/get_in_touch.png";

// const LetsConnect = () => {
//   const [send, setSend] = useState("Send");
//   const [statusColor, setStatusColor] = useState("#fff");
//   const [showAnimation, setShowAnimation] = useState(false);
//   const my_access_key = import.meta.env.VITE_APP_ACCESS_KEY;

//   const formdetails = async (event) => {
//     event.preventDefault();
//     setSend("Sending...");

//     const formData = new FormData(event.target);
//     formData.append("access_key", my_access_key);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setSend("Sent!");
//         setShowAnimation(true);
//         setTimeout(() => {
//           setSend("Send");
//           setStatusColor("#fff");
//           setShowAnimation(false);
//           event.target.reset();
//         }, 3000);
//       } else {
//         setSend("Failed 😢");
//         setStatusColor("red");
//         setTimeout(() => setSend("Send"), 3000);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setSend("Failed 😢");
//       setStatusColor("red");
//       setTimeout(() => setSend("Send"), 3000);
//     }
//   };

//   return (
//     <section className="connect py-5" id="connect">
//       <Container>
//         <Row className="align-items-center pb-5">
//           {/* Left Side - Form */}
//           <Col md={7} className="mb-5 mb-md-0">
//             <div className="form-box p-4 p-lg-5 rounded-4 shadow-lg">
//               <h2 className="text-center text-white mb-4">Get In Touch</h2>
//               <form onSubmit={formdetails}>
//                 <Row>
//                   <Col sm={6} className="mb-3">
//                     <input
//                       type="text"
//                       name="first_name"
//                       placeholder="First name"
//                       className="field form-control"
//                       required
//                     />
//                   </Col>
//                   <Col sm={6} className="mb-3">
//                     <input
//                       type="text"
//                       name="last_name"
//                       placeholder="Last name"
//                       className="field form-control"
//                       required
//                     />
//                   </Col>
//                 </Row>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="field form-control mb-3"
//                   required
//                 />
//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   rows="5"
//                   className="field form-control mb-3"
//                   required
//                 ></textarea>

//                 <div className="text-center">
//                   <button
//                     type="submit"
//                     className="btn-connect px-4 py-2 rounded-3"
//                     style={{ color: statusColor }}
//                   >
//                     {send}
//                   </button>
//                   {showAnimation && send === "Sent!" && (
//                     <p className="mt-3 text-success fw-semibold">
//                       ✔ Email Sent Successfully! 😍
//                     </p>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </Col>
//           {/* Right Side - Image */}
//           <Col md={5} className="text-center d-none">
//             <img src={touch} alt="Get In Touch" className="getintouch" />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default LetsConnect;
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import touch from "../assets/img/connect.png";

const LetsConnect = () => {
  const [send, setSend] = useState("Send");
  const [statusColor, setStatusColor] = useState("#fff");
  const [showAnimation, setShowAnimation] = useState(false);
  const my_access_key = import.meta.env.VITE_APP_ACCESS_KEY;

  const formdetails = async (event) => {
    event.preventDefault();
    setSend("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", my_access_key);

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
          setStatusColor("#fff");
          setShowAnimation(false);
          event.target.reset();
        }, 3000);
      } else {
        setSend("Failed 😢");
        setStatusColor("red");
        setTimeout(() => setSend("Send"), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setSend("Failed 😢");
      setStatusColor("red");
      setTimeout(() => setSend("Send"), 3000);
    }
  };

  return (
    <section className="connect py-5" id="connect">
      <Container>
        <Row className=" py-5 px-0 px-md-5 d-flex gap-5 align-items-center justify-content-center">
          {/* Left Side - Form */}
          <Col md={6} className="mb-5 mb-md-0 ">
            <div className="form-box p-4 p-lg-5 rounded-4">
              <h2 className="text-center text-white mb-4">Get In Touch</h2>
              <form onSubmit={formdetails}>
                <Row>
                  <Col sm={6} className="mb-3">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First name"
                      className="field form-control"
                      required
                    />
                  </Col>
                  <Col sm={6} className="mb-3">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      className="field form-control"
                      required
                    />
                  </Col>
                </Row>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="field form-control mb-3"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  className="field form-control mb-3"
                  required
                ></textarea>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-connect col-7 px-4 mt-2 rounded-3"
                    style={{ color: statusColor }}
                  >
                    {send}
                  </button>
                  {showAnimation && send === "Sent!" && (
                    <p className="mt-3 text-success fw-semibold">
                      ✔ Email Sent Successfully! 😍
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Col>
          {/* Right Side - Image */}
           <Col md={5} className="text-center d-none d-md-block ">
             {/* <img src={touch} alt="Get In Touch" className="getintouch" /> */}
              <img src={touch} alt="Get In Touch" className="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LetsConnect;
