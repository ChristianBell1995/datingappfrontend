import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Profile } from "../../../api/hooks/useProfiles";
import useSwipeMutation from "../../../api/hooks/useSwipeMutation";
import { useAppContext } from "../../../contexts/AppContext";
import SuccessfulMatchCard from "../SuccessfulMatchCard/SuccessfulMatchCard";

interface ProfileCardProps {
  profiles: Profile[];
}

const ProfileCard = ({ profiles }: ProfileCardProps) => {
  const { push } = useRouter();
  const swipeMutation = useSwipeMutation();
  const { getUserID } = useAppContext();

  const [profilesIndex, setProfilesIndex] = useState(0);
  const [currentProfile, setCurrentProfile] = useState(profiles[profilesIndex]);
  const [thereIsAMatch, setThereIsAMatch] = useState(false);

  const onSwipe = (preference: "YES" | "NO") => {
    swipeMutation.mutate(
      {
        preference,
        profileId: currentProfile.id,
        swiperId: getUserID(),
      },
      {
        onSuccess: (data) => {
          const newIndex = profilesIndex + 1;
          if (!!data.data.match) {
            setThereIsAMatch(true);
            setTimeout(() => {
              setCurrentProfile(profiles[newIndex]);
              setProfilesIndex(newIndex);
              setThereIsAMatch(false);
            }, 2000);
            return;
          }
          if (newIndex > profiles.length - 1) {
            push("/profiles/empty");
            return;
          }

          setCurrentProfile(profiles[newIndex]);
          setProfilesIndex(newIndex);
        },
      }
    );
  };
  return (
    <>
      <div className="h-full border border-grey flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden">
        {!thereIsAMatch ? (
          <>
            <div className="relative h-full ">
              <Image
                src={currentProfile.imageUrl}
                alt="Profile Image"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="px-4 py-2">
              <div className="flex items-center">
                <div className="text-lg font-bold">{currentProfile.name}</div>
              </div>
              <p className="text-gray-700 mt-1">
                Gender:{" "}
                <span className="font-bold"> {currentProfile.gender}</span>
              </p>
              <p className="text-gray-700 mt-1">
                Age: <span className="font-bold"> {currentProfile.age}</span>
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 flex justify-between items-center">
              <button
                className="text-xs font-bold tracking-wide uppercase bg-red-500 text-white rounded-full py-3 px-4"
                onClick={() => onSwipe("NO")}
              >
                Dislike
              </button>
              <button
                className="text-xs font-bold tracking-wide uppercase bg-green-500 text-white rounded-full py-3 px-4"
                onClick={() => onSwipe("YES")}
              >
                Like
              </button>
            </div>
          </>
        ) : (
          <SuccessfulMatchCard name={currentProfile.name} />
        )}
      </div>
    </>
  );
};

export default ProfileCard;
