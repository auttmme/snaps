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
