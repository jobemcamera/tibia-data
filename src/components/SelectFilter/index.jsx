import React from 'react'
import styles from './SelectFilter.module.scss'

export default function SelectFilter({ filters, handleFilterChange, options, info }) {
    return (
        <div>
            <select className={styles.select__filter} name={info} value={filters.info} onChange={handleFilterChange}>
                {options.map(option => (
                    <option value={option} className={styles.select__filter__option} key={option}>
                        {option === "" ? "All" : option === "date" ? "Yellow" : option === "release" ? "Green" : option}
                    </option>
                ))}
            </select>
        </div>
    )
}
