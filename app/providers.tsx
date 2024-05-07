"use client";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
		</QueryClientProvider>
	);
}
