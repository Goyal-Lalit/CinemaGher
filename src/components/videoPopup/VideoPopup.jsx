import "./style.scss";

const VideoPopup = ({ setShow, setVideoId }) => {
    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };
};

export default VideoPopup;
