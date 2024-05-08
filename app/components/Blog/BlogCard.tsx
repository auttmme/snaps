import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BlogCardProps } from "../../types/Posts";

function BlogCard({ title, body }: BlogCardProps) {
	return (
		<Card variant="outline">
			<CardHeader>
				<Heading size="md">{title}</Heading>
				<CardBody px={0}>
					<Text>{body}</Text>
				</CardBody>
			</CardHeader>
		</Card>
	);
}

export default BlogCard;
