import { useLocation, useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";

const VideoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center">
      <div className="text-white" onClick={() => navigate(-1)}>
        X
      </div>
      <video controls>
        <source src={video} />
      </video>
    </div>
  );
};

export default VideoPage;
