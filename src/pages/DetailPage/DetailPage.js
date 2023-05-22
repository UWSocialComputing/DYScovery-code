import DetailPageTopBar from "../../components/DetailPageTopBar/DetailPageTopBar";
import AboutInfo from "../../components/DetailPageInformation/AboutInfo";
import NeighborhoodInfo from "../../components/DetailPageInformation/NeighborhoodInfo";
import ReviewInfo from "../../components/DetailPageInformation/ReviewInfo";
import InterestCard from "../../components/InterestCard/InterestCard";
import { useParams } from "react-router-dom";
import postsData from "../../data/posts.json";

function DetailPage() {
  const { postId } = useParams();
  const post = postsData.find((post) => post.postId === parseInt(postId));

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex-col items-center justify-between p-8 relative">
      <DetailPageTopBar />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 space-y-4">
          <AboutInfo {...post} />
          <NeighborhoodInfo {...post} />
          <ReviewInfo userInformation={post.userInformation} />
        </div>
        <div className="col-span-1">
          <div className="sticky top-20">
            <InterestCard userInformation={post.userInformation} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
