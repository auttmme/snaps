import axios from "axios";
import { UsersProps } from "../../types/Users";

export const getUsers = async (page: number, per_page: number) => {
	try {
		const res = await axios.get<UsersProps[]>(`
    https://gorest.co.in/public/v2/users?page=${page}&per_page=${per_page}
    `);
		return res.data;
	} catch (err) {
		throw new Error(err as string);
	}
};
