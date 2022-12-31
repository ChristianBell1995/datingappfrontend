import useProfiles from "../../api/hooks/useProfiles";
import ProfileCard from "../../components/molecules/ProfileCard/ProfileCard";
import LoggedInLayout from "../../components/organisms/LoggedInLayout/LoggedInLayout";

const ProfilesPage = () => {
  const profileQuery = useProfiles();

  return (
    <LoggedInLayout
      content={
        <>
          {profileQuery?.isLoading && <p>Loading your matches...</p>}
          {profileQuery?.isError && <p>Something went wrong :(</p>}
          {profileQuery?.isSuccess && (
            <ProfileCard profiles={profileQuery?.data?.data} />
          )}
        </>
      }
    />
  );
};

export default ProfilesPage;
