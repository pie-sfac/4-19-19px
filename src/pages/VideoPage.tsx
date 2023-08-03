import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const VideoPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Layout type="video" isNavigationDisplay={false}>
      <div className="bg-black px-4  py-8">
        <video controls>
          <source src={location.state} />
        </video>
      </div>
    </Layout>
  );
};

export default VideoPage;
