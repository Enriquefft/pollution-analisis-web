import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import "@/styles/globals.css";

export { metadata } from "@/metadata";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { inter } from "@/styles/fonts";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					inter.className,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex flex-col min-h-screen">
						<Navbar />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
