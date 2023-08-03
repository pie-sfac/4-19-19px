import { Link } from "react-router-dom";
import useArchiveLink from "../../../api/personal/useArchiveLink";
import { useEffect, useState } from "react";

interface RecommnedListBoxProp {
  url: string;
  title: string;
  site: string;
}

const RecommnedListBox = ({ url, title, site }: RecommnedListBoxProp) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | undefined>();
  const { thumbnail, isLoading } = useArchiveLink(url, site);

  useEffect(() => {
    if (!isLoading) {
      setThumbnailUrl(thumbnail);
    }
  }, [isLoading]);

  return (
    <li>
      <Link
        to={url}
        className="w-60 flex items-center space-x-2 border p-2 rounded-lg"
      >
        <div
          className="w-12 aspect-square rounded-md shadow-md bg-cover"
          style={{ backgroundImage: `url(${thumbnailUrl && thumbnailUrl})` }}
        />
        <span className="text-xs text-[#1D1D1D]">
          {title.slice(0, 24) + "..."}
        </span>
      </Link>
    </li>
  );
};

export default RecommnedListBox;
