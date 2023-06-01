import SectionTitle from "../../../componements/SectionTitle/SectionTitle";
// import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const PopularMenu = () => {
    // const [menu, setMenu] = useState([])
    // useEffect( ()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then( data => {
    //         const populerItems = data.filter(item => item.category === 'popular')
    //         setMenu(populerItems)
    //     })
    // }, [])
    const [menu] = useMenu();
    const populerItems = menu.filter(item => item.category === 'popular')
    return (
        <section className="mb-12">
            <SectionTitle
                sunHeading={"Popular Items"}
                heading={"From Our Menu"}
            ></SectionTitle>

            {/* <div className="grid md:grid-cols-2 gap-10">
                {
                    // menu.map(item => <MenuItem
                    //     key={item._id}
                    //     item={item}
                    // ></MenuItem>)
                    populerItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div> */}
            <MenuCategory
                items={populerItems}
            ></MenuCategory>
            
        </section>
    );
};

export default PopularMenu;