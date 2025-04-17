import { Wind } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full border-t py-6 md:py-8">
			<div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
				<div className="flex items-center gap-2">
					<Wind className="h-5 w-5 text-green-500" />
					<p className="text-sm text-gray-500 dark:text-gray-400">
						© 2025 UTEC - Departamento de Ciencia de la Computación | Enrique
						Flores
					</p>
				</div>
				<div className="flex gap-4">
					<Link
						href="/"
						className="text-xs text-gray-500 hover:underline underline-offset-4 dark:text-gray-400"
					>
						Inicio
					</Link>
					<Link
						href="/exploracion"
						className="text-xs text-gray-500 hover:underline underline-offset-4 dark:text-gray-400"
					>
						Exploración
					</Link>
					<Link
						href="/metodologia"
						className="text-xs text-gray-500 hover:underline underline-offset-4 dark:text-gray-400"
					>
						Metodología
					</Link>
					<Link
						href="/resultados"
						className="text-xs text-gray-500 hover:underline underline-offset-4 dark:text-gray-400"
					>
						Resultados
					</Link>
					<Link
						href="/conclusiones"
						className="text-xs text-gray-500 hover:underline underline-offset-4 dark:text-gray-400"
					>
						Conclusiones
					</Link>
				</div>
			</div>
		</footer>
	);
}
