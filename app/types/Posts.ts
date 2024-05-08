export interface PostsProps {
	id: number;
	user_id: number;
	title: string;
	body: string;
}

export interface BlogCardProps {
	user_id?: number;
	title: string;
	body: string;
}

export interface BlogDetailProps {
	id: number;
	title: string;
	body: string;
}

export interface CommentProps {
	id: number;
	post_id: number;
	name: string;
	email: string;
	body: string;
}
