import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, bg_img, seronam }) => {
    return (
        <div className="pt-8">
            {
                title && <Cover
                    bg_img={bg_img}
                    title={title}
                    seronam={seronam}
                ></Cover>
            }
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-2">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;