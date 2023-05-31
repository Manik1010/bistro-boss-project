import { Link } from "react-router-dom";


const Table = ({ menu, handelDeleteMenu }) => {
    // console.log(menu)
    const { category, name, price, image, _id } = menu || {}
    // console.log(_id)
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-25 h-20">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>{price}</td>
                <td> {category}</td>

                <th>
                    <Link to={`/dashboard/edit/${_id}`}>
                        <button className="btn btn-ghost btn-xs">Edite</button>
                    </Link>

                    <button onClick={() => handelDeleteMenu(_id)} className="btn btn-ghost btn-xs">DELETE</button>
                </th>
            </tr>
        </tbody>
    );
};

export default Table;