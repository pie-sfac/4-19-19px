import { useNavigate } from "react-router-dom";

const NotificationPageHeader = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="border-b border-b-1 border-gray-300 px-8 py-6 flex items-center justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        onClick={handleGoBack}
      >
        <path
          d="M11.6732 2.58002L10.4866 1.40002L3.89322 8.00002L10.4932 14.6L11.6732 13.42L6.25322 8.00002L11.6732 2.58002Z"
          fill="#505050"
        />
      </svg>
    </div>
  );
};

export default NotificationPageHeader;
