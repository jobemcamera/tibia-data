import React from 'react'
import styles from './SelectFilter.module.scss'

export default function SelectFilter({ filters, handleFilterChange, options, info }) {
  return (
    <select className={styles.filter} name={info} value={filters.info} onChange={handleFilterChange}>
      {options.map(option => (
        <option value={option} key={option}>
          {option === "" ? "All" : option}
        </option>
      ))}
    </select>
  )
}
