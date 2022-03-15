import style from "../styles/Contact.module.css";
import { useState } from 'react';
import { FaMapMarkerAlt, FaChalkboardTeacher } from 'react-icons/fa';

const Contact = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { phone, name, email, desc };

    fetch('/api/contact', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        alert("Thanks for contacting us");
        console.log(data)
        setname('')
        setphone('')
        setemail('')
        setdesc('')

      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  const handleChange = (e) => {
    if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
    else if (e.target.name == 'name') {
      setname(e.target.value)
    }
  }

  const service = [
    {
      title: "CALL AND TRADE",
      icon: <FaChalkboardTeacher />,
      phone: '1234567890',
      mail: "demo@gamil.com",
    },
    {
      title: "CUSTOMER SUPPORT",
      icon: <FaChalkboardTeacher />,
      phone: '1234567890',
      mail: "demo@gamil.com",
    },
    {
      title: "ACCOUNT OPENING",
      icon: <FaChalkboardTeacher />,
      phone: '1234567890',
      mail: "demo@gamil.com",
    },
  ];
  return (
    <div id="contact" className={style.container}>
      <div className={style.contact_details}>
        <h2 className={style.contact_title}>Contact Us</h2>
        <div className={style.details}>
          {
            service.map((item, i) =>

              <div className={style.detailsbox} key={i}>
                <div className={style.detailsinfo}>
                  <span className={style.detailsicon}>{item.icon}  </span>
                  <h2>{item.title}</h2>
                  <span>{item.phone} </span>
                  <span>{item.mail} </span>
                </div>
              </div>
            )}

        </div>
      </div>
      <div className={style.contact}>
        <div className={style.contactinfo}>
          <div className={style.officeinfo}>
            <h2><FaMapMarkerAlt /> CORPORATE OFFICE</h2>
            <hr />
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Indore (M.P.) - 452010</span>
          </div>

          <div className={style.officeinfo}>
            <h2><FaMapMarkerAlt /> REGISTERED OFFICE</h2>
            <hr />
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Indore (M.P.) - 452010</span>          </div>

        </div>
        <div>
          <form onSubmit={handleSubmit} className={style.form}>
            <div className=''>
              <label htmlFor="name" className=''>Enter your name</label>
              <input className='' type="text" value={name} onChange={handleChange} id="name" name='name' required />
            </div>
            <div className=''>
              <label htmlFor="email" className=''>Email address</label>
              <input className='' type="email" value={email} onChange={handleChange} name='email' id="email" required />
            </div>
            <div className=''>
              <label htmlFor="phone" className=''>Phone</label>
              <input className='' type="phone" value={phone} onChange={handleChange} name='phone' id="phone" required />
            </div>
            <div className=''>
              <label className='' htmlFor="desc">Message</label>
              <textarea className='' value={desc} onChange={handleChange} name='desc' id="desc" />
            </div>
            <button type="submit" className={style.btn}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;