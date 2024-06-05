import "../css/ItemLista.css";
//const ItemLista = (props) => { 
//no código abaixo fiz a desestruturação de props
const ItemLista = ({
    id,
    name,
    introduction,
    ingredient,
    method_preparation,
    nutritional_information,
    excluirClick,
    alterarClick}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{introduction}</td>
            <td>{ingredient}</td>
            <td>{method_preparation}</td>
            <td>{nutritional_information}</td>
            <td class="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={excluirClick}>&#10008;</i>
                <i className="altera text-sucess fw-bold ms-2" title="Alterar" onClick={alterarClick}>&#36;</i>
            </td>
        </tr>
    );
};

export default ItemLista;