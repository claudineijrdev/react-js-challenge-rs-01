import styles from './Header.module.css'
import rocketLogo from '../../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
        <img src={rocketLogo} alt="" />
        <div className={styles.todo}>
          <div className={styles.title_to}>to</div>
          <div className={styles.title_do}>do</div>
        </div>
    </header>
  )
}