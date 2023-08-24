import { useEffect, useState } from "react";
import Modal from "react-modal";

interface PropType {
  name: string;
}

const ClipBoardPopup = ({ isOpen, onClose }) => {
  const handleClose = () => {
    if (isOpen) {
      onClose();
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: { background: "rgba(0, 0, 0, 0.80)" },
        content: {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 0, 0, 0)",
          WebkitOverflowScrolling: "touch",
          border: "none",
          outline: "none",
          width: "360px",
          height: "390px",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <div className="w-11/12 flex flex-col px-4 py-5 rounded-lg bg-white">
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={handleClose}
          >
            <path
              d="M5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="text-sm font-light text-[#1D1D1D] text-center">
            <span>링크가 복사되었습니다.</span>
          </div>
        </div>
        <div className="mt-7 flex justify-center gap-2">
          <button
            className="px-2 py-3 rounded-md text-white bg-[#6691FF]"
            onClick={handleClose}
          >
            <div className="w-32 text-sm font-light">확인</div>
          </button>
        </div>
      </div>
    </Modal>
  );
};

const ShareSection = ({ name }: PropType) => {
  const { Kakao }: any = window;
  const [isOpen, setIsOpen] = useState(false);

  const onCopyClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsOpen(true);
  };

  const onShareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "퍼스널 레포트",
        description: "통증, 컨디션, 피드백",
        imageUrl:
          "https://canpstiukrhg15427954.cdn.ntruss.com/image/thumbnail/798592bf-adaf-4fc1-9044-03aff560289c.png",
        link: {
          mobileWebUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "레포트 확인하기",
          link: {
            mobileWebUrl: window.location.href,
          },
        },
      ],
    });
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(import.meta.env.VITE_SOME_KEY_KAKAO_API_KEY);
  }, []);

  return (
    <section className="mx-4 mt-10">
      <div>
        <div className="text-sm font-semibold">{name} 회원님의</div>
        <div className="text-sm font-semibold">
          퍼스널 레포트를 공유해 보세요
        </div>
        <div className="text-xs text-[#505050]">
          내가 작성한 만족도를 제외한 모든 정보가 함께 전달됩니다.
        </div>
        <div className="mt-4">
          <ul className="flex gap-3">
            <li
              className="cursor-pointer flex flex-col items-center gap-1"
              onClick={onCopyClipboard}
            >
              <div className="w-12 h-12 border rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_13_590)">
                    <path
                      d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z"
                      fill="#6691FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_590">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[10px] text-[#505050]">링크 복사</span>
            </li>
            <li
              className="cursor-pointer flex flex-col items-center gap-1"
              onClick={onShareKakao}
            >
              <div className="w-12 h-12 border rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_13_595)">
                    <path
                      d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z"
                      fill="#F5DF92"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_595">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[10px] text-[#505050]">카카오톡</span>
            </li>
          </ul>
        </div>
      </div>
      <ClipBoardPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default ShareSection;
