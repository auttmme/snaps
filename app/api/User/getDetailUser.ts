import axios from "axios";
import { UsersProps } from "../../types/Users";

export const getDetailUser = async (id: number) => {
	try {
		const res = await axios.get<UsersProps>(
			`https://gorest.co.in/public/v2/users/${id}`
		);
		return res.data;
	} catch (err) {
		throw new Error(err as string);
	}
};
