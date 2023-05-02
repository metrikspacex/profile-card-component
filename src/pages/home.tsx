import ProfileCard from "@/components/profile-card/ProfileCard";
import BackgroundSrc from "@/public/images/bg-pattern-card.svg";
import PhotoSrc from "@/public/images/image-victor.jpg";

export default function HomePage() {
  return (
    <ProfileCard
      age={26}
      backgroundAlt="background of a bubble like pattern"
      backgroundSrc={BackgroundSrc}
      followers={80}
      likes={803}
      location="London"
      name="Victor Crest"
      photoAlt="photo of Victor Crest from London"
      photos={1.4}
      photoSrc={PhotoSrc}
    />
  );
}
