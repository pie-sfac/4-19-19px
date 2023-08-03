import { useEffect, useState } from "react";

const useArchiveLink = (url: string, site: string) => {
  const [thumbnail, setThumbnail] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const getThumbnail = async () => {
    switch (site) {
      case "YOUTUBE":
        const youtubeUrl = "https://www.youtube.com/oembed?url=";
        const youtubeResponse = await fetch(`${youtubeUrl}${url}`);
        const youtubeJson = await youtubeResponse.json();
        setThumbnail(youtubeJson.thumbnail_url);
        break;
      case "INSTAGRAM":
        const InstagramUrl = "https://api.instagram.com/oembed?url=";
        const InstagramResponse = await fetch(`${InstagramUrl}${url}`);
        const InstagramJson = await InstagramResponse.json();
        setThumbnail(InstagramJson.thumbnail_url);
        break;
      case "TICKTOK":
        const ticktokUrl = "https://www.tiktok.com/oembed?url=";
        const ticktokResponse = await fetch(`${ticktokUrl}${url}`);
        const ticktokJson = await ticktokResponse.json();
        setThumbnail(ticktokJson.thumbnail_url);
        break;
      default:
        setThumbnail("default");
        break;
    }
  };

  useEffect(() => {
    getThumbnail();
  }, []);

  useEffect(() => {
    if (thumbnail) {
      setIsLoading(false);
    }
  }, [thumbnail]);

  return { thumbnail, isLoading };
};

export default useArchiveLink;
