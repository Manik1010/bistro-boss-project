import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import imgbg1 from '../../../assets/menu/banner3.jpg'
// import PopularMenu from '../../Shared/PopularMenu/PopularMenu';
import imgbg2 from '../../../assets/menu/dessert-bg.jpeg'
import imgbg3 from '../../../assets/menu/pizza-bg.jpg'
import imgbg4 from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../componements/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const offeres = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>

            <Cover
                bg_img={imgbg1}
                title='Our Menu'
                seronam='wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww?'
            ></Cover>
            {/* Main Cover  */}
            <SectionTitle
                sunHeading='Do not miss'
                heading='Today offer'
            ></SectionTitle>
            {/* Offered menu items  */}
            <MenuCategory
                items={offeres}
            ></MenuCategory>
            {/* desserts menu items  */}
            <MenuCategory
                items={desserts}
                bg_img={imgbg2}
                title='Our Desserts'
                seronam='Would you like to a deish?'
            ></MenuCategory>
            {/* pizzas menu items  */}
            <MenuCategory
                items={pizzas}
                bg_img={imgbg3}
                title='Our pizzas'
                seronam='Would you like to a deish?'
            ></MenuCategory>
            {/* salads menu items  */}
            <MenuCategory
                items={salads}
                bg_img={imgbg4}
                title='Our salads'
                seronam='Would you like to a deish?'
            ></MenuCategory>


            {/* <PopularMenu></PopularMenu>
            <Cover
                bg_img={imgbg2}
                title='Desserts'
                seronam='Lorem Ipsum has been the industry is standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></Cover>
            <PopularMenu></PopularMenu> */}

        </div>
    );
};

export default Menu;