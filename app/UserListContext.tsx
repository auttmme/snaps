"use client";

import React, { ReactNode, createContext } from "react";
import { useQuery } from "react-query";
import { getUsers } from "./api/User/getUserList";
import { UsersProps } from "./types/Users";

export const UserListContext = createContext<UsersProps[]>([]);

export default function UserListProvider({
	children,
}: {
	children: ReactNode;
}) {
	const { data: users } = useQuery({
		queryKey: ["GetUsers", 1, 100],
		queryFn: () => getUsers(1, 100),
	});

	return (
		<UserListContext.Provider value={users ?? []}>
			{children}
		</UserListContext.Provider>
	);
}
