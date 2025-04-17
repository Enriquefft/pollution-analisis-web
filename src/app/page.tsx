import { Database, FileText, LineChart, User, Wind } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section - Simplified */}
			<section className="w-full py-12 md:py-16 bg-linear-to-b from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
				<div className="container px-4 md:px-6">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
							Predicción de la Calidad del Aire
						</h1>
						<p className="text-gray-500 md:text-xl dark:text-gray-400 mb-6">
							Proyecto de regresión para predecir la concentración de Monóxido
							de Carbono en el aire utilizando técnicas de aprendizaje
							automático.
						</p>
						<div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
							<span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse duration-5000" />
							Departamento de Ciencia de la Computación - UTEC
						</div>
					</div>
				</div>
			</section>

			{/* Components Section */}
			<section className="w-full py-12">
				<div className="container px-4 md:px-6">
					<div className="text-center mb-10">
						<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
							Componentes del Proyecto
						</h2>
						<p className="mt-2 text-gray-500 dark:text-gray-400">
							Desde la exploración de datos hasta la implementación de modelos
							avanzados de regresión
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card>
							<CardHeader className="flex flex-row items-center gap-4">
								<Database className="h-8 w-8 text-green-500" />
								<div>
									<CardTitle>Exploración de Datos</CardTitle>
									<CardDescription>Análisis y preprocesamiento</CardDescription>
								</div>
							</CardHeader>
							<CardContent>
								<p>
									Inspección de datos, tratamiento de valores faltantes y
									normalización para preparar el conjunto de datos. Análisis de
									correlaciones entre variables.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="flex flex-row items-center gap-4">
								<LineChart className="h-8 w-8 text-blue-500" />
								<div>
									<CardTitle>Modelos de Regresión</CardTitle>
									<CardDescription>Lineal y polinómica</CardDescription>
								</div>
							</CardHeader>
							<CardContent>
								<p>
									Implementación de modelos de regresión lineal y polinómica
									para predecir la concentración de CO. Comparación de
									rendimiento entre modelos.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className="flex flex-row items-center gap-4">
								<FileText className="h-8 w-8 text-purple-500" />
								<div>
									<CardTitle>Resultados</CardTitle>
									<CardDescription>Análisis comparativo</CardDescription>
								</div>
							</CardHeader>
							<CardContent>
								<p>
									Comparación de modelos, análisis de errores y visualización de
									resultados. Evaluación de métricas como MSE, RMSE y R².
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* About Project Section */}
			<section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
				<div className="container px-4 md:px-6">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6 text-center">
							Sobre el Proyecto
						</h2>

						<div className="space-y-4">
							<p>
								El Monóxido de Carbono (CO) es un gas extremadamente tóxico para
								los seres humanos y animales, y puede causar graves problemas
								respiratorios y circulatorios si es inhalado en grandes
								cantidades. Es emitido por automóviles, fábricas, hornos y
								equipos de calefacción mediante la combustión incompleta de
								combustibles fósiles.
							</p>
							<p>
								En este contexto, la concentración de CO puede ser un excelente
								indicador para medir la calidad del aire, la cual puede ser
								utilizada para evaluar y diagnosticar los riesgos a los que está
								expuesta una población en una región determinada.
							</p>
							<p>
								Este proyecto desarrolla modelos de regresión lineal y
								polinómica para predecir la concentración de CO en el aire
								utilizando variables como PM2.5, PM10, SO2, NO2, O3,
								temperatura, presión atmosférica y otros factores ambientales.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Conclusions Section */}
			<section className="w-full py-12">
				<div className="container px-4 md:px-6">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6 text-center">
							Principales Conclusiones
						</h2>

						<Card className="border-green-200 dark:border-green-900">
							<CardContent className="pt-6">
								<ul className="space-y-3">
									<li className="flex items-start gap-2">
										<Wind className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
										<span>
											Los modelos de regresión polinómica (grado 4) superaron
											significativamente a los modelos lineales, con un R² de
											0.83 vs 0.65 del modelo base.
										</span>
									</li>
									<li className="flex items-start gap-2">
										<Wind className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
										<span>
											NO2 y PM2.5 son los predictores más importantes de la
											concentración de CO, representando más del 60% de la
											importancia total en el modelo.
										</span>
									</li>
									<li className="flex items-start gap-2">
										<Wind className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
										<span>
											La incorporación de características temporales mejoró
											significativamente el rendimiento de los modelos,
											indicando patrones estacionales en la concentración de CO.
										</span>
									</li>
									<li className="flex items-start gap-2">
										<Wind className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
										<span>
											El modelo desarrollado puede utilizarse para estimar la
											concentración de CO en áreas sin sensores específicos y
											para predecir niveles a corto plazo.
										</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Author Section */}
			<section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
				<div className="container px-4 md:px-6">
					<div className="max-w-md mx-auto text-center">
						<h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-6">
							Autor
						</h2>

						<div className="flex flex-col items-center space-y-4">
							<div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
								<User className="h-12 w-12 text-gray-500 dark:text-gray-400" />
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-bold">Enrique Flores</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Estudiante de Ciencia de la Computación - UTEC
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Profa. Dra. Aurea Soriano‑Vargas
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
