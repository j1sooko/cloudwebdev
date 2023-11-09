function CheckBox ({label, ischecked, onChange}) {
    return (
        <label>
            <input type="checkbox" value={label} checked={ischecked} onChange={onChange} /> 
            {label}
        </label>
    )
}


export default CheckBox;