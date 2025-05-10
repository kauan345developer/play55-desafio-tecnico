export const useUserGithub = (user: string) => {
  return useFetch(`https://api.github.com/users/${user}`);
};
