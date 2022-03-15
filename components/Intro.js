import React, { useState } from 'react';
import style from "../styles/Intro.module.css";


const Intro = () => {

    const [phone, setphone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {phone};
    
        fetch('/api/introform', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data),
        })
          .then(response => response.text())
          .then(data => {
            alert("Thanks for contacting us");
            setphone('')
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    
      }
      const handleChange = (e) => {
        if (e.target.name == 'phone') {
          setphone(e.target.value)
        }
       
      }
    


    return (
        <div className={style.container}>

            <div className={style.card}>
                <div className={style.bannerright}>
                    <h1 className={style.title}>
                        <span className={style.brandName}>Choice</span> Trading Zone
                        AGENCY <br />
                        <p>Online Share & Commodity Broker</p>
                    </h1>

                    <div className={style.bannform}>
                        <form onSubmit={handleSubmit} className={style.bannerform}>
                            <div>
                          <input  type="phone" value={phone} className={style.pinput} placeholder="Enter Your Mobile Number" onChange={handleChange} name='phone' id="phone" required />
                            </div>    
                            <button className={style.sbtn} type="submit">Get A Call</button>
                        </form>
                    </div>
                </div>


            </div>
            <div className={style.imgcard}>


            </div>
        </div>

    );
};

export default Intro;