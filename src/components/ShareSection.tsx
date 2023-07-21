interface PropType {
  name: string;
}

const ShareSection = ({ name }: PropType) => {
  return (
    <section>
      <div>
        <div>{name} 회원님의</div>
        <div>퍼스널 레포트를 공유해 보세요</div>
        <div>내가 작성한 만족도를 제외한 모든 정보가 함께 전달됩니다.</div>
        <div>
          <ul>
            <li>
              <div>🔗</div>
              <span>링크 복사</span>
            </li>
            <li>
              <div>🔗</div>
              <span>카카오톡</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShareSection;
