import styles from './Content.module.css'


interface ContentProps {
  children: React.ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}