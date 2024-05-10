import axios from "axios";
import { AddUserProps } from "../../types/Users";
import { MutationFunction } from "react-query";

export const addUser: MutationFunction<void, AddUserProps> = async (
	postData
) => {
	const token = process.env.NEXT_PUBLIC_API_KEY;

	return axios.post("https://gorest.co.in/public/v2/users", postData, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
