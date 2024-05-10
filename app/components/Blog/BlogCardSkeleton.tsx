import { Card, CardHeader, CardBody, SkeletonText } from "@chakra-ui/react";

import React from "react";

function BlogCardSkeleton() {
	return (
		<Card variant="elevated">
			<CardHeader>
				<SkeletonText noOfLines={1} spacing={"2"} skeletonHeight={"4"} />
			</CardHeader>
			<CardBody>
				<SkeletonText noOfLines={4} spacing={"2"} skeletonHeight={"4"} />
			</CardBody>
		</Card>
	);
}

export default BlogCardSkeleton;
