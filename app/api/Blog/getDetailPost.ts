import axios from "axios";
import { PostsProps } from "../../types/Posts";

export const getDetailPost = async (id: number) => {
	try {
		const res = await axios.get<PostsProps[]>(
			`https://gorest.co.in/public/v2/posts?id=${id}`
		);
		return res.data[0];
	} catch (err) {
		throw new Error(err as string);
	}
};
