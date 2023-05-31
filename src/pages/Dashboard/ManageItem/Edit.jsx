import { useLoaderData } from "react-router-dom";

const Edit = () => {
    const editMenu = useLoaderData();
    console.log(editMenu);
    return (
        <div className='bg-[#F4F3F0] p-32'>
            <h2 className='text-3xl font-extrabold text-center'>Edit a Food Menu</h2>
            <form >

                <div className='w-96'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Menu Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Food Menu Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Menu category" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' placeholder="Menu price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='url' placeholder="image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Discripation</span>
                        </label>
                        <label className="input-group w-full">
                            <textarea name="recipe" placeholder="Recipe Discripation" className="textarea textarea-bordered w-full" ></textarea>
                        </label>

                    </div>
                </div>

                <input type='submit' value="Add Toy" className="btn btn-block mt-4" />

            </form>
        </div>
    );
};

export default Edit;