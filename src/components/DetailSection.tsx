import PainChart from "./PainChart";
import ConditionList from "./ConditionList";
import SectionHeader from "./PersonalReport/SectionHeader";
import MediaSection from "./PersonalReport/Media/MediaSection";
import FeedbackSection from "./PersonalReport/Feedback/FeedbackSection";
import RecommendSection from "./PersonalReport/Recommend/RecommendSection";

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
