"use client";

import { Menu, Moon, Sun, Wind, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { setTheme, theme } = useTheme();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-2">
					<Wind className="h-6 w-6 text-green-500" />
					<Link href="/" className="text-xl font-bold">
						AirQuality ML
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex gap-6">
					<Link
						href="/"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Inicio
					</Link>
					<Link
						href="/exploracion"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Exploración
					</Link>
					<Link
						href="/metodologia"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Metodología
					</Link>
					<Link
						href="/resultados"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Resultados
					</Link>
					<Link
						href="/conclusiones"
						className="text-sm font-medium hover:underline underline-offset-4"
					>
						Conclusiones
					</Link>
				</nav>

				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						className="mr-2"
					>
						<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={toggleMenu}
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden border-t">
					<div className="container py-4 flex flex-col space-y-4">
						<Link
							href="/"
							className="text-sm font-medium hover:underline underline-offset-4"
							onClick={() => setIsMenuOpen(false)}
						>
							Inicio
						</Link>
						<Link
							href="/exploracion"
							className="text-sm font-medium hover:underline underline-offset-4"
							onClick={() => setIsMenuOpen(false)}
						>
							Exploración
						</Link>
						<Link
							href="/metodologia"
							className="text-sm font-medium hover:underline underline-offset-4"
							onClick={() => setIsMenuOpen(false)}
						>
							Metodología
						</Link>
						<Link
							href="/resultados"
							className="text-sm font-medium hover:underline underline-offset-4"
							onClick={() => setIsMenuOpen(false)}
						>
							Resultados
						</Link>
						<Link
							href="/conclusiones"
							className="text-sm font-medium hover:underline underline-offset-4"
							onClick={() => setIsMenuOpen(false)}
						>
							Conclusiones
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
