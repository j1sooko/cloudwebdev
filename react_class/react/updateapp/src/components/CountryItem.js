function CountryItem({item, onUpdate, updateData}) {
    const onUpdateData = (e) => {
        let id = parseInt(e.target.parentElement.id);
        console.log(typeof(id));

        let changeCountry = null;

        if (updateData != null)
            changeCountry = updateData;

        onUpdate(id, changeCountry);
    }
    return (
        <div key={item.id} id={item.id}>
            <span id='item_id'>{item.id}</span>-<span>{item.country}</span>
            <button onClick={onUpdateData}>업데이트</button>
        </div>
    )
}

export default CountryItem;