import ConditionList from "./Condition/ConditionList";
import SectionHeader from "./SectionHeader";
import MediaSection from "./Media/MediaSection";
import FeedbackSection from "./Feedback/FeedbackSection";
import RecommendSection from "./Recommend/RecommendSection";
import PainChart from "./Pain/PainChart";

interface PropType {
  type: "media" | "feedback" | "recommend" | "pain" | "condition";
}

const DetailSection = ({ type }: PropType) => {
  return (
    <section className="mt-6">
      <SectionHeader type={type} />
      <div className="mt-2">
        {type === "media" && <MediaSection />}
        {type === "feedback" && <FeedbackSection />}
        {type === "recommend" && <RecommendSection />}
        {type === "pain" && <PainChart />}
        {type === "condition" && <ConditionList />}
      </div>
    </section>
  );
};

export default DetailSection;
