// import image from '../assets/pic.jpg'

const Image = (props) => {
    return (
        <div className="image">
            <img src={props.link} alt="test" />
        </div>
    );
}

export default Image;