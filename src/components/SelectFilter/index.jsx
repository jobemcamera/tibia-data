import React from 'react'

export default function SelectFilter({ filters, handleFilterChange, options, info }) {
    return (
        <div>
            <select name={info} value={filters.info} onChange={handleFilterChange}>
                {options.map(option => (
                    <option value={option}>
                        {option === "" ? "All" : option}
                    </option>
                ))}
            </select>
        </div>
    )
}
