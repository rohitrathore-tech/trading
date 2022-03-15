import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.footer_top}>
        <div className={style.footertop_col1}>
          <h3>Company</h3>
          <span>Fund transfer</span>
          <span>Open an Account</span>
        </div>
        <div className={style.footertop_col2}>
          <h3>Social</h3>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Linkedin</span>
          <span>Youtube</span>
          <span>Instagram</span>
        </div>
        <div className={style.footertop_col3}>
          <span>
            Trading  Powered By:* IIFL Securities SEBI Regn. No:
            xxxxxxxxxx, PMS SEBI Regn. No: xxxxxxxx, IA SEBI Regn. No:
            xxxxxxxxxxxx, SEBI RA Regn. No: xxxxxxxxxx * Authorised Partners
            of IIFL Securities
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
