import Swal from "sweetalert2";


const AddItem = () => {

    const handelAddMenu = event => {
        event.preventDefault();

        const frm = event.target;

        const name = frm.name.value;
        const category = frm.category.value;
        const url = frm.url.value;
        const recipe = frm.recipe.value;
        const price = frm.price.value;


        const addMenu = { name, category, url, recipe, price }
        console.log(addMenu);

        fetch('http://localhost:5000/postMenu', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addMenu)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    frm.reset();
                }
          })

    }
    return (
        <div className='bg-[#F4F3F0] p-32'>
            <h2 className='text-3xl font-extrabold text-center'>Add a Food Menu</h2>
            <form onSubmit={handelAddMenu}>

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
export default AddItem;