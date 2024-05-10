import {
	Box,
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Menu,
	MenuButton,
	IconButton,
	MenuList,
	Stack,
	MenuItem,
	SkeletonText,
	SkeletonCircle,
	Center,
} from "@chakra-ui/react";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

function UserListSkeleton() {
	return (
		<TableContainer
			backgroundColor="white"
			borderRadius="24px"
			boxShadow={"lg"}
		>
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th textAlign="center">
							<SkeletonText noOfLines={1} spacing={"2"} skeletonHeight={"2"} />
						</Th>
						<Th textAlign="center">
							<SkeletonText noOfLines={1} spacing={"2"} skeletonHeight={"2"} />
						</Th>
						<Th textAlign="center">
							<SkeletonText noOfLines={1} spacing={"2"} skeletonHeight={"2"} />
						</Th>
						<Th textAlign="center">
							<SkeletonText noOfLines={1} spacing={"2"} skeletonHeight={"2"} />
						</Th>
						<Th textAlign="center">
							<SkeletonText noOfLines={1} spacing={"2"} skeletonHeight={"2"} />
						</Th>
						<Th textAlign="center">
							<SkeletonText noOfLines={1} spacing={"2"} skeletonHeight={"2"} />
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{[...Array(20)]?.map((_, index) => (
						<Tr key={index}>
							<Td textAlign="center">
								<SkeletonText
									noOfLines={1}
									spacing={"2"}
									skeletonHeight={"2"}
								/>
							</Td>
							<Td textAlign="center">
								<SkeletonText
									noOfLines={1}
									spacing={"2"}
									skeletonHeight={"2"}
								/>
							</Td>
							<Td textAlign="center">
								<SkeletonText
									noOfLines={1}
									spacing={"2"}
									skeletonHeight={"2"}
								/>
							</Td>
							<Td textAlign="center">
								<Box p={1} height="auto" rounded="24px">
									<SkeletonText
										noOfLines={1}
										spacing={"2"}
										skeletonHeight={"2"}
									/>
								</Box>
							</Td>
							<Td textAlign="center">
								<SkeletonText
									noOfLines={1}
									spacing={"2"}
									skeletonHeight={"2"}
								/>
							</Td>
							<Td textAlign="center">
								<Center>
									<SkeletonCircle w={4} h={4} />
								</Center>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default UserListSkeleton;
