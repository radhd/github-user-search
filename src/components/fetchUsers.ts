import { Users } from "../userInterfaces";

export const fetchUsers = async (
  search: string,
): Promise<Users | undefined> => {
  try {
    const response = await fetch(`https://api.github.com/users/${search}`);
    if (!response.ok) {
      throw new Error("failed to fetch users: ");
    }
    const userData: Users = await response.json();
    return userData;
  } catch (error) {
    console.error("Error Fetching user data: ", error);
    return undefined;
  }
};
