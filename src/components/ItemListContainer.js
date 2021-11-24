import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    
    return(
        <div style={{width: 300, height: 80, marginLeft: 550, marginTop: 50}}>
            {greeting}
            <ItemCount stock="15" initial="1" />
        </div>
    )
}

export default ItemListContainer;