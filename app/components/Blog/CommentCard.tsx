import React from "react";
import {
	Card,
	CardBody,
	CardHeader,
	Circle,
	Flex,
	Heading,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { CommentProps } from "../../types/Posts";

function CommentCard({ name, body }: CommentProps) {
	return (
		<Card rounded="xl">
			<CardBody>
				<Stack divider={<StackDivider />} spacing="8">
					<Flex gap="4" alignItems="center">
						<Circle bg="gray.600" size="50px">
							<FontAwesomeIcon icon={faUser} size="xl" color="#ffffff" />
						</Circle>
						<Heading size="md">{name}</Heading>
					</Flex>
					<Text>{body}</Text>
				</Stack>
			</CardBody>
		</Card>
	);
}

export default CommentCard;
