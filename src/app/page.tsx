import styles from "./page.module.css";
import Image from "next/image";
import logo from "./assets/logo-livingshapes.png";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <div className="CardGroup">
        <div className="Main_card"></div>
        <div className="Main_card"></div>
        <div className="Main_card"></div>
        <div className="Main_card"></div>
      </div>
    </div>
  );
}
