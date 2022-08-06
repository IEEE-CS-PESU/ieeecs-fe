// import Image from "./Image";
const Gallery = (props) => {

    // let imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // let imgSrc = ["https://images.unsplash.com/photo-1657497850517-ef3c57b867c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",]
    return (
        <div className="border-8 border-white rounded-xl overflow-hidden  w-full lg:w-full md:w-full bg-white mx-3 md:mx-0 lg:mx-8">

            <img src={props.img} alt="" />
            <div className="px-3">
                <div className="">
                    <i className="far fa-heart cursor-pointer"></i>

                </div>
                <div className="">

                </div>


            </div>
        </div>


        // <div className="gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        // {

        //     props.imgList.map((e, ind) => {
        //         return <div className="my-2 pr-12 mr-8 py-5 w-3/4"> <img className="rounded-xl w-40 h-64" src={e} key={ind + 1} alt=""></img> </div>

        //     }
        //     )
        // }
        // </div>
    );
}

export default Gallery;