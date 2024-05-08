import axios from "axios";
import { CommentProps } from "../../types/Posts";

export const getComments = async (id: number) => {
	try {
		const res = await axios.get<CommentProps[]>(
			`https://gorest.co.in/public/v2/posts/${id}/comments`
		);
		return res.data;
	} catch (err) {
		throw new Error(err as string);
	}
};
