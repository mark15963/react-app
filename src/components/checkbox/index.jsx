import styles from './Checkbox.module.css'
import ClassNames from 'classnames'

const CheckboxIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill='white' class="bi bi-check-square" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" stroke='white' strokeWidth='1' strokeLinecap='round' />
        </svg>
    )
}

export const Checkbox = ({ label, checked, disabled = false, error = false }) => {
    return (
        <div className={styles.wrapper}>
            <div className={ClassNames({
                [styles.checkbox]: true,
                [styles.activeBorder]: checked,
                [styles.checked]: checked,
                [styles.disabled]: disabled,
                [styles.error]: error,
            })}>{checked && <CheckboxIcon />}</div>
            {label && <div>{label}</div>}
        </div>

    )
}