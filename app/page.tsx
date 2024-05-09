"use client";

import { Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import BlogCard from "./components/Blog/BlogCard";
import { useQuery } from "react-query";
import { getPosts } from "./api/Blog/getPostList";
import Pagination from "./components/Blog/Pagination";
import { useCallback, useState } from "react";

export default function Home() {
	const [currentPage, setCurrentPage] = useState(1);

	const { data: posts } = useQuery({
		queryKey: ["GetPosts", currentPage, 10],
		queryFn: () => getPosts(currentPage, 10),
	});

	const handleNextPage = useCallback(() => {
		if (currentPage === 5) {
			return;
		}
		setCurrentPage((a) => a + 1);
	}, [currentPage]);

	const handlePrevPage = useCallback(() => {
		if (currentPage === 1) {
			return;
		}
		setCurrentPage((a) => a - 1);
	}, [currentPage]);

	const handleClickPage = useCallback((page?: number) => {
		if (page) {
			console.log("page", page);
			setCurrentPage(page ?? 1);
		}
	}, []);

	return (
		<Stack gap={10}>
			<SimpleGrid
				spacing={4}
				templateColumns={{
					base: "repeat(auto-fill, minmax(300px, 2fr))",
					xl: "repeat(auto-fill, minmax(500px, 2fr))",
				}}
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
			<Pagination
				currentPage={currentPage}
				handleClickPage={handleClickPage}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
			/>
		</Stack>
	);
}
