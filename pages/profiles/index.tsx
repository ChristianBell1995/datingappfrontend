import useProfiles from "../../api/hooks/useProfiles";
import ProfileCard from "../../components/molecules/ProfileCard/ProfileCard";

const ProfilesPage = () => {
  const profileQuery = useProfiles();

  if (profileQuery.isLoading) {
    return <p>Loading your matches...</p>;
  }

  if (profileQuery.isError) {
    return <p>Something went wrong :(</p>;
  }

  return (
    <div>
      {profileQuery?.isSuccess && (
        <ProfileCard profiles={profileQuery?.data?.data?.data} />
      )}
    </div>
  );
};

export default ProfilesPage;
