import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BlogDetailProps } from "../../types/Posts";
import Link from "next/link";

function BlogCard({ title, body, id }: BlogDetailProps) {
	return (
		<Link href={`/blog/${id}`}>
			<Card
				variant="outline"
				_hover={{ bg: "primary.100", color: "white", transition: "0.3s" }}
			>
				<CardHeader>
					<Heading size="md">{title}</Heading>
					<CardBody px={0}>
						<Text>{body}</Text>
					</CardBody>
				</CardHeader>
			</Card>
		</Link>
	);
}

export default BlogCard;
