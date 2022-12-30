import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Profile } from "../../../api/hooks/useProfiles";
import useSwipeMutation from "../../../api/hooks/useSwipeMutation";
import { useAppContext } from "../../../contexts/AppContext";

const ProfileCard = ({ profiles }: { profiles: Profile[] }) => {
  const [profilesIndex, setProfilesIndex] = useState(0);
  const [currentProfile, setCurrentProfile] = useState(profiles[profilesIndex]);
  const [thereIsAMatch, setThereIsAMatch] = useState(false);
  const { push } = useRouter();
  const swipeMutation = useSwipeMutation();
  const { getUserID } = useAppContext();
  const onSwipe = (preference: "YES" | "NO") => {
    swipeMutation.mutate(
      {
        preference,
        profileId: currentProfile.id,
        swiperId: getUserID(),
      },
      {
        onSuccess: (data) => {
          if (data.data.match) {
            setThereIsAMatch(true);
            setTimeout(() => {
              setThereIsAMatch(false);
            }, 1000);
          }
          const newIndex = profilesIndex + 1;
          if (newIndex > profiles.length - 1) {
            push("/profiles/empty");
          } else {
            setCurrentProfile(profiles[newIndex]);
            setProfilesIndex(newIndex);
          }
        },
      }
    );
  };
  return (
    <>
      {!thereIsAMatch ? (
        <>
          <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative pb-5/6">
              <Image
                src={currentProfile.imageUrl}
                alt="American Express logo"
                height={100}
                width={100}
              />
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <Image
                  src={currentProfile.imageUrl}
                  alt="American Express logo"
                  height={50}
                  width={50}
                />
                <div className="text-lg font-bold">{currentProfile.name}</div>
              </div>
              <p className="text-gray-700 mt-2">{currentProfile.age}</p>
              <p className="text-gray-700 mt-2">{currentProfile.gender}</p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center">
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
          </div>
        </>
      ) : (
        <p>There is a match</p>
      )}
    </>
  );
};

export default ProfileCard;
