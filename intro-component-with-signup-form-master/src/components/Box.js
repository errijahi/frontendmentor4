 import '../css/box.css';
// need to cheack json
import Form from "./Form.js";

export default function Box() {

    return (
        <div className="main">
            <div className="text">
            <h1>Learn to code by watching others</h1>
            <div className="paragraph">
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </div>
            </div>
            <div className="boxes">
                <div className="box">
                    <div className="wi">
                    <p className="ad">Try it free 7 days</p>
                    <p className="restofad"> then $20/mo. thereafter</p>
                    </div>
                </div>
                <div className="form">
                  <Form />  
                </div>
            </div>
        </div>
    )
}
