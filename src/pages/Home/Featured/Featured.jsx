import SectionTitle from "../../../componements/SectionTitle/SectionTitle";
import feater from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="Featured-item bg-fixed text-white pt-8">
            <SectionTitle
                sunHeading={"check it out"}
                heading={"Feature Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-30 py-20 px-36 gap-6">
                <div>
                    <img src={feater}></img>
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere,
                        deserunt dolores maiores quod nobis quas quasi.
                        Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-2">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;