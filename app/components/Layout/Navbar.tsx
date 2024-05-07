import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<Box
			as="header"
			position="fixed"
			w="100%"
			backgroundColor="rgba(255, 255, 255, 0.8)"
			backdropFilter="saturate(180%) blur(5px)"
			shadow={"sm"}
		>
			<Flex
				justifyContent={"space-between"}
				alignItems={"center"}
				px={36}
				py={6}
			>
				<Link href={"/"}>
					<Image
						src="/snaps_logo.png"
						alt="Logo snaps"
						width="150"
						height="150"
					/>
				</Link>
				<Flex gap={8}>
					<Link href={"/"}>
						<Text>Blogs</Text>
					</Link>
					<Link href={"/user"}>
						<Text>User</Text>
					</Link>
				</Flex>
			</Flex>
		</Box>
	);
}

export default Navbar;
