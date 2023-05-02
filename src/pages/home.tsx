import ProfileCard from "@/components/profile-card/ProfileCard";
import BackgroundSrc from "@/images/bg-pattern-card.svg";
import PhotoSrc from "@/images/image-victor.jpg";
import Styles from "@/styles/pages/home.module.scss";

export default function HomePage() {
  return (
    <main className={Styles.root}>
      <ProfileCard
        age={26}
        backgroundAlt="background of a dark colored bubble like pattern"
        backgroundSrc={BackgroundSrc}
        followers={80}
        likes={803}
        location="London"
        name="Victor Crest"
        photoAlt="photo of Victor Crest from London"
        photos={1.4}
        photoSrc={PhotoSrc}
      />
    </main>
  );
}
