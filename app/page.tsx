"use client";

import { SimpleGrid, Text } from "@chakra-ui/react";
import BlogCard from "./components/Blog/BlogCard";
import { useQuery } from "react-query";
import { getPosts } from "./api/Blog/getPostList";

export default function Home() {
	const { data: posts } = useQuery({
		queryKey: ["GetPosts", 1, 20],
		queryFn: () => getPosts(1, 20),
	});

	return (
		<SimpleGrid
			spacing={4}
			templateColumns="repeat(auto-fill, minmax(300px, 2fr))"
		>
			{posts?.map((post) => (
				<BlogCard
					key={post.id}
					id={post.id}
					title={post.title}
					body={post.body}
				/>
			))}
		</SimpleGrid>
	);
}
