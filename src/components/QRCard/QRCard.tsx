import './QRCard.css'

export default function QRCard () {


    return (    
        <div className="QRCardComponent">
        <main>
            <div className="card">
            <div className="qr-code">
                <img className="qr-img" src="/QRCard/image-qr-code.png" alt="QR Code for Frontend Mentors Website" />
            </div>
            <div className="pitch">
                <p>Improve your front-end skills by building projects</p>
            </div>
            
            <div className="description">
                <p>
                Scan the QR code to visit Frontend Mentor and 
                take your coding skills to the next level
                </p>
            </div>
            </div>
        </main>
        </div>

    )

}