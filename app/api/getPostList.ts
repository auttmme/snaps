import axios from "axios";
import { PostsProps } from "../types/Posts";

export const getPosts = async (page: number, per_page: number) => {
	try {
		const res = await axios.get<PostsProps[]>(
			`https://gorest.co.in/public/v2/posts?page=${page}&per_page=${per_page}`
		);
		return res.data;
	} catch (err) {
		throw new Error(err as string);
	}
};
