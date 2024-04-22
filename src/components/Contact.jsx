import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import '../styles/common.css';
import '../styles/contact.css';




function Line({ lineNumber, text }) {
    return (
        <div>
            <div className='lineArea grid'>
                <div className="lineNumber">{lineNumber}</div>
                <div className=''>{text}</div>
            </div>
        </div>
    );
}


function Contact () {
    const formRef = useRef();
    const [phone, setPhone] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        const cleanedValue = value.replace(/[^0-9]/g, '');
        setPhone(cleanedValue);
    };

    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs
            .sendForm(
                "service_hs9slm8",
                "template_pfn6a98",
                formRef.current,
                "4XvF2yvK92OfCq4SM"
            )
            .then(
                (result) => {
                console.log(result.text);
                formRef.current.reset();
                alert("이메일이 성공적으로 전송되었습니다!");
                },
                (error) => {
                console.log(error.text);
            }
        );
    };


    const lines = [
        <div><h1 className="contents_title">My contact method 📱</h1></div>,
        "",
        "",
        <div><span className="blue">&lt;<sapn className="green">input </sapn>type="</span>Phone<span className="blue">" placeholder="</span>010-2442-8379<span className="blue">"/&gt;</span></div>,
        <div><span className="blue">&lt;<sapn className="green">input </sapn>type="</span>E-mail<span className="blue">" placeholder="</span>79ptke@gmail.com<span className="blue">"/&gt;</span></div>,
        "",
        "",
        "",
        "",
        <div><h1 className="contents_title">Contact me! 📪</h1></div>,
        <div><p>메일을 보내주시면 3일 안으로 답장 드립니다~</p></div>,
        "",
        "",
        <form ref={formRef} onSubmit={sendEmail}>
            <div className="form_Area">
                <div className="input_wrapper">
                    <label htmlFor="company">company</label>
                    <input type="text" id="company" name="company" />
                </div>
                <div className="input_wrapper">
                    <label htmlFor="fullName">name</label>
                    <input type="text" id="fullName" name="fullName" />
                </div>
            </div>
            <div className="form_Area">
                <div className="input_wrapper">
                    <label htmlFor="email">e-mail</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="input_wrapper">
                    <label htmlFor="phone">phone</label>
                    <input type="tel" id="phone" name="phone" value={phone} onChange={handleChange} />
                </div>
            </div>
            <div className="form_textarea">
                <label htmlFor="message">message</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit" className="submitBtn" value="Send">submit</button>
        </form>,
    ];

    return (

        <div className="contact">
            {lines.map((line, index) => (
                <Line key={index + 1} lineNumber={index + 1} text={line} />
            ))}
        </div>
    );
}

export default Contact;