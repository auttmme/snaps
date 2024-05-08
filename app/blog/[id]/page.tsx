"use client";

import { Box, Text, Stack, Card } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getDetailPost } from "../../api/Blog/getDetailPost";
import { getComments } from "../../api/Blog/getPostComment";
import CommentCard from "../../components/Blog/CommentCard";

function Page({ params }: { params: { id: string } }) {
	const { data } = useQuery({
		queryKey: ["GetDetailPost", params.id],
		queryFn: () => getDetailPost(Number(params.id)),
	});

	const { data: comments } = useQuery({
		queryKey: ["GetComments", params.id],
		queryFn: () => getComments(Number(params.id)),
	});

	return (
		<Box width={"80%"}>
			<Stack gap={4}>
				<Text fontSize={"4xl"} fontWeight={"700"}>
					{data?.title}
				</Text>
				<Text lineHeight="7">{data?.body}</Text>
			</Stack>
			<Stack gap={6} mt={10}>
				<hr style={{ borderColor: "#C6C6C6" }} />
				<Text color="gray.800" fontSize="xl" fontWeight={"600"}>
					Comments
				</Text>
				{comments?.map((item) => (
					<CommentCard
						id={item.id}
						key={item.id}
						name={item.name}
						body={item.body}
						email={item.email}
						post_id={item.post_id}
					/>
				))}
			</Stack>
		</Box>
	);
}

export default Page;
