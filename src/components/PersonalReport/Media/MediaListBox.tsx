import { Link } from "react-router-dom";

interface MediaListBoxProp {
  type: string;
  uuid?: string;
  url: string;
  thumbnailUrl: string;
}

const MediaListBox = ({ type, url, thumbnailUrl }: MediaListBoxProp) => {
  return (
    <li>
      <Link to={"#"}>
        {type === "IMAGE" && (
          <div
            className="w-24 aspect-square rounded-md bg-cover"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
        )}
        {type === "VIDEO" && (
          <div
            className="w-24 aspect-square rounded-md flex justify-center items-center bg-cover"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${thumbnailUrl})`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 2.66669C8.63996 2.66669 2.66663 8.64002 2.66663 16C2.66663 23.36 8.63996 29.3334 16 29.3334C23.36 29.3334 29.3333 23.36 29.3333 16C29.3333 8.64002 23.36 2.66669 16 2.66669ZM16 26.6667C10.12 26.6667 5.33329 21.88 5.33329 16C5.33329 10.12 10.12 5.33335 16 5.33335C21.88 5.33335 26.6666 10.12 26.6666 16C26.6666 21.88 21.88 26.6667 16 26.6667ZM12.6666 22L22 16L12.6666 10V22Z"
                fill="#EBF1FF"
              />
            </svg>
          </div>
        )}
      </Link>
    </li>
  );
};

export default MediaListBox;
