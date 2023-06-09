import { api } from "@/config/api";

export const getUser = async (
  username: string,
  setUser: (value: any) => void,
  setError: (value: boolean) => void,
) => {
  try {
    const result = await api.get(`/${username}`);
    const stars = await api.get(`/${username}/starred`);
    const repos = await api.get(`/${username}/repos`);
    const followers = await api.get(`/${username}/followers`);
    const following = await api.get(`/${username}/following`);
    const user = {
      ...result.data,
      stars: stars.data.length,
      repos_list: repos.data,
      stars_list: stars.data,
      followers_list: followers.data,
      following_list: following.data,
    };
    setUser(user);
    setError(false);
  } catch (err) {
    console.error(err);
    setError(true);
  }
};
