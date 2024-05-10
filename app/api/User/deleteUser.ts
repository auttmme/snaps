import axios from "axios";
import { MutationFunction } from "react-query";

export const deleteUser: MutationFunction<void, number> = async (id) => {
	const token = process.env.NEXT_PUBLIC_API_KEY;

	return axios.delete(`https://gorest.co.in/public/v2/users/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
