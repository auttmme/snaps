import axios from "axios";
import { MutationFunction } from "react-query";
import { UsersProps } from "../../types/Users";

export const editUser: MutationFunction<void, UsersProps> = async (
	dataUser
) => {
	const token = process.env.NEXT_PUBLIC_API_KEY;

	return axios.put(
		`https://gorest.co.in/public/v2/users/${dataUser.id}`,
		dataUser,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
};
