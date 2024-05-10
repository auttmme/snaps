import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import React from "react";

interface PaginationProps {
	currentPage: number;
	handleClickPage: (page: number) => void;
	handleNextPage: () => void;
	handlePrevPage: () => void;
}

function BlogPagination({
	currentPage,
	handleClickPage,
	handleNextPage,
	handlePrevPage,
}: PaginationProps) {
	const pages = [1, 2, 3, 4, 5];

	const handleChangePage = (page: number) => {
		handleClickPage(page);
	};

	return (
		<Flex justifyContent={["center", "center", "flex-end", "flex-end"]}>
			<Flex gap={2}>
				<IconButton
					aria-label="previous page"
					icon={<ChevronLeftIcon />}
					onClick={handlePrevPage}
					isDisabled={currentPage <= 1}
					variant={"ghost"}
					_hover={{ bgColor: "transparent" }}
				/>
				{pages.map((page, index) => (
					<Button
						key={index}
						variant={currentPage === page ? "solid" : "outline"}
						bgColor={currentPage === page ? "primary.100" : "transparent"}
						color={currentPage === page ? "white" : "gray.800"}
						borderColor={"gray.300"}
						onClick={() => handleChangePage(page)}
						_hover={{
							bgColor: "transparent",
							color: "gray.800",
							borderColor: "primary.100",
						}}
					>
						{page}
					</Button>
				))}
				<IconButton
					aria-label="next page"
					icon={<ChevronRightIcon />}
					onClick={handleNextPage}
					isDisabled={currentPage >= 5}
					variant={"ghost"}
					_hover={{ bgColor: "transparent" }}
				/>
			</Flex>
		</Flex>
	);
}

export default BlogPagination;
