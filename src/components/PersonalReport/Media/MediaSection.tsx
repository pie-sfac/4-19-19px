import usePersonalReportDetail from "../../../api/personal/usePersonalReportDetail";
import MediaListBox from "./MediaListBox";

const MediaSection = () => {
  const { data } = usePersonalReportDetail(undefined);
  return (
    <ul className="flex space-x-2 overflow-scroll">
      <MediaListBox mediaItems={data.media.items} />
    </ul>
  );
};

export default MediaSection;
