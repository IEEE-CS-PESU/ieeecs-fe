import Gallery from "../utils/Gallery";

const Template = (props) => {

    return (


        <div className="content">

            <div>
                <h1 className="text-center text-4xl uppercase text-yellow-500 font-bold">{props.Title}</h1>
                <p className="text-yellow-600 mx-20 mt-10">{props.desc}</p>
                <p className="text-center">Gallery</p>
                <div className="bg-slate-200 justify-items-center grid lg:grid-cols-3 md:grid-cols-2">
                    {props.imgList.map((item, ind) => {
                        return <div key={ind + 10} className="image my-2 pr-12 mr-8 py-5 w-3/4 ">
                            <Gallery img={item} key={ind + 1} />
                        </div>
                    })}
                </div>
            </div>



        </div>
        // {/* <Gallery img={props.imgList} /> */ }





    );
}

export default Template;