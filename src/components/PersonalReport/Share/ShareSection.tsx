interface PropType {
  name: string;
}

const ShareSection = ({ name }: PropType) => {
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
            <li className="cursor-pointer flex flex-col items-center gap-1">
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
            <li className="cursor-pointer flex flex-col items-center gap-1">
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
    </section>
  );
};

export default ShareSection;
