
import styles from "../App.module.css"
const Display = ({display_val}) =>{


   return  (
   <input type="text" className={styles.display} value = {display_val}
   readOnly />
      
   );
}
export default Display;