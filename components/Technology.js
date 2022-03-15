import style from "../styles/Services.module.css";
import { FaChalkboardTeacher } from "react-icons/fa";

const Technology = () => {
  const service = [
    {
      title: "Zero Brokerage",
      icon: <FaChalkboardTeacher />,
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde libero quasi sed error velit voluptatem eos suscipit explicabo.",
    },
    {
      title: "High Trading Limits",
      icon: <FaChalkboardTeacher />,
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde libero quasi sed error velit voluptatem eos suscipit explicabo.",
    },
    {
      title: "Margin Trading Facility",
      icon: <FaChalkboardTeacher />,
      dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde libero quasi sed error velit voluptatem eos suscipit explicabo.",
    },
  ];

  return (
    <div id ='technology' className={style.techcontainer}>
      <h2 className={style.services_title}>Technology</h2>
      <div className={style.services}>
        {
        service.map((item, i)=>

             <div className={style.servicbox} key={i}>
             <div className={style.serviceinfo}>
               <span className={style.serviceicon}>{item.icon}  </span>
               <h2>{item.title}</h2>
               <span>{item.dec} </span>
               <button className={style.btn}>View Details</button>
             </div>
           </div>
        )}
       
        
      </div>
    </div>
  );
};

export default Technology;
