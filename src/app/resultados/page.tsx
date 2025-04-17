"use client";

import { BarChart, LineChart, Scatter, ScatterChart } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ResultadosPage() {
	// Datos de ejemplo para las visualizaciones
	const predictionVsActualData = [
		{ actual: 0.5, predicted: 0.48 },
		{ actual: 0.8, predicted: 0.75 },
		{ actual: 1.2, predicted: 1.15 },
		{ actual: 1.5, predicted: 1.62 },
		{ actual: 1.8, predicted: 1.75 },
		{ actual: 2.1, predicted: 2.05 },
		{ actual: 2.4, predicted: 2.52 },
		{ actual: 2.7, predicted: 2.65 },
		{ actual: 3.0, predicted: 2.85 },
		{ actual: 3.3, predicted: 3.45 },
	];

	const residualData = [
		{ predicted: 0.5, residual: 0.02 },
		{ predicted: 0.8, residual: 0.05 },
		{ predicted: 1.2, residual: 0.05 },
		{ predicted: 1.5, residual: -0.12 },
		{ predicted: 1.8, residual: 0.05 },
		{ predicted: 2.1, residual: 0.05 },
		{ predicted: 2.4, residual: -0.12 },
		{ predicted: 2.7, residual: 0.05 },
		{ predicted: 3.0, residual: 0.15 },
		{ predicted: 3.3, residual: -0.15 },
	];

	const featureImportanceData = [
		{ feature: "NO2", importance: 0.35 },
		{ feature: "PM2.5", importance: 0.28 },
		{ feature: "NO2×PM2.5", importance: 0.12 },
		{ feature: "O3", importance: 0.08 },
		{ feature: "TEMP", importance: 0.06 },
		{ feature: "WSPM", importance: 0.05 },
		{ feature: "TEMP×O3", importance: 0.04 },
		{ feature: "Otros", importance: 0.02 },
	];

	const timeSeriesPredictionData = [
		{ actual: 1.2, month: "Ene", predicted: 1.15 },
		{ actual: 1.5, month: "Feb", predicted: 1.45 },
		{ actual: 1.8, month: "Mar", predicted: 1.75 },
		{ actual: 1.4, month: "Abr", predicted: 1.35 },
		{ actual: 1.1, month: "May", predicted: 1.15 },
		{ actual: 0.9, month: "Jun", predicted: 0.95 },
		{ actual: 0.8, month: "Jul", predicted: 0.85 },
		{ actual: 0.7, month: "Ago", predicted: 0.75 },
		{ actual: 1.0, month: "Sep", predicted: 0.95 },
		{ actual: 1.3, month: "Oct", predicted: 1.25 },
		{ actual: 1.6, month: "Nov", predicted: 1.55 },
		{ actual: 1.9, month: "Dic", predicted: 1.85 },
	];

	return (
		<div className="container py-10">
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
						Resultados
					</h1>
					<p className="text-gray-500 dark:text-gray-400 mb-8 max-w-3xl">
						En esta sección presentamos los resultados de los modelos
						implementados, incluyendo comparaciones, análisis de errores y
						visualizaciones de las predicciones.
					</p>
				</div>

				<Tabs defaultValue="comparison" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="comparison">Comparación de Modelos</TabsTrigger>
						<TabsTrigger value="predictions">Predicciones</TabsTrigger>
						<TabsTrigger value="analysis">Análisis de Errores</TabsTrigger>
					</TabsList>

					<TabsContent value="comparison" className="space-y-6 mt-6">
						<Card>
							<CardHeader>
								<CardTitle>Comparación de Modelos</CardTitle>
								<CardDescription>
									Resumen comparativo de los modelos implementados
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<p>
										A continuación se presenta una comparación detallada de los
										modelos implementados, incluyendo sus métricas de
										rendimiento en los conjuntos de entrenamiento, validación y
										prueba:
									</p>

									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Modelo</TableHead>
												<TableHead>MSE (Train)</TableHead>
												<TableHead>MSE (Val)</TableHead>
												<TableHead>MSE (Test)</TableHead>
												<TableHead>R² (Test)</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											<TableRow>
												<TableCell>Regresión Lineal (Base)</TableCell>
												<TableCell>0.42</TableCell>
												<TableCell>0.45</TableCell>
												<TableCell>0.48</TableCell>
												<TableCell>0.65</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>
													Regresión Lineal (Variables Significativas)
												</TableCell>
												<TableCell>0.43</TableCell>
												<TableCell>0.44</TableCell>
												<TableCell>0.47</TableCell>
												<TableCell>0.66</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Regresión Lineal (Interacciones)</TableCell>
												<TableCell>0.38</TableCell>
												<TableCell>0.41</TableCell>
												<TableCell>0.43</TableCell>
												<TableCell>0.70</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>
													Regresión Lineal (Transformaciones)
												</TableCell>
												<TableCell>0.36</TableCell>
												<TableCell>0.39</TableCell>
												<TableCell>0.41</TableCell>
												<TableCell>0.72</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>
													Regresión Lineal (Características Temporales)
												</TableCell>
												<TableCell>0.35</TableCell>
												<TableCell>0.37</TableCell>
												<TableCell>0.39</TableCell>
												<TableCell>0.74</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Regresión Polinómica (Grado 2)</TableCell>
												<TableCell>0.36</TableCell>
												<TableCell>0.38</TableCell>
												<TableCell>0.40</TableCell>
												<TableCell>0.73</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Regresión Polinómica (Grado 3)</TableCell>
												<TableCell>0.29</TableCell>
												<TableCell>0.32</TableCell>
												<TableCell>0.34</TableCell>
												<TableCell>0.78</TableCell>
											</TableRow>
											<TableRow className="font-bold">
												<TableCell>Regresión Polinómica (Grado 4)</TableCell>
												<TableCell>0.23</TableCell>
												<TableCell>0.26</TableCell>
												<TableCell>0.28</TableCell>
												<TableCell>0.83</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>Regresión Polinómica (Grado 5)</TableCell>
												<TableCell>0.16</TableCell>
												<TableCell>0.28</TableCell>
												<TableCell>0.32</TableCell>
												<TableCell>0.79</TableCell>
											</TableRow>
										</TableBody>
									</Table>

									<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
										El modelo de regresión polinómica de grado 4 obtuvo el mejor
										rendimiento en el conjunto de prueba, con un MSE de 0.28 y
										un R² de 0.83.
									</p>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Importancia de las Características</CardTitle>
								<CardDescription>
									Contribución relativa de cada característica en el mejor
									modelo
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ChartContainer
									config={{
										importance: {
											color: "hsl(var(--chart-1))",
											label: "Importancia",
										},
									}}
									className="h-[400px]"
								>
									<BarChart
										data={featureImportanceData}
										layout="vertical"
										margin={{ bottom: 20, left: 70, right: 20, top: 20 }}
									>
										<ChartTooltip content={<ChartTooltipContent />} />
										<BarChart dataKey="importance" />
									</BarChart>
								</ChartContainer>
								<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
									Las características más importantes en el modelo polinómico de
									grado 4 son NO2 y PM2.5, que juntas representan más del 60% de
									la importancia total. La interacción entre estas dos variables
									también tiene una contribución significativa.
								</p>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="predictions" className="space-y-6 mt-6">
						<Card>
							<CardHeader>
								<CardTitle>Predicciones vs. Valores Reales</CardTitle>
								<CardDescription>
									Comparación entre los valores predichos y los valores reales
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ChartContainer
									config={{
										predicted: {
											color: "hsl(var(--chart-1))",
											label: "Predicción",
										},
									}}
									className="h-[400px]"
								>
									<ScatterChart
										margin={{ bottom: 20, left: 20, right: 20, top: 20 }}
									>
										<ChartTooltip content={<ChartTooltipContent />} />
										<Scatter
											name="Predicciones"
											data={predictionVsActualData}
											fill="var(--color-predicted)"
											line={{ stroke: "#ddd", strokeWidth: 1 }}
											lineType="fitting"
										/>
									</ScatterChart>
								</ChartContainer>
								<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
									El gráfico muestra una fuerte correlación entre los valores
									predichos y los valores reales, lo que indica un buen ajuste
									del modelo. La mayoría de los puntos se encuentran cerca de la
									línea diagonal, que representa una predicción perfecta.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Serie Temporal de Predicciones</CardTitle>
								<CardDescription>
									Comparación de predicciones y valores reales a lo largo del
									tiempo
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ChartContainer
									config={{
										actual: {
											color: "hsl(var(--chart-1))",
											label: "Valor Real",
										},
										predicted: {
											color: "hsl(var(--chart-2))",
											label: "Predicción",
										},
									}}
									className="h-[400px]"
								>
									<LineChart
										data={timeSeriesPredictionData}
										margin={{ bottom: 20, left: 20, right: 20, top: 20 }}
									>
										<ChartTooltip content={<ChartTooltipContent />} />
									</LineChart>
								</ChartContainer>
								<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
									El gráfico muestra que el modelo captura bien la tendencia y
									la estacionalidad de la concentración de CO a lo largo del
									año. Las predicciones son muy cercanas a los valores reales en
									la mayoría de los meses.
								</p>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="analysis" className="space-y-6 mt-6">
						<Card>
							<CardHeader>
								<CardTitle>Análisis de Residuos</CardTitle>
								<CardDescription>
									Distribución de los errores del modelo
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ChartContainer
									config={{
										residual: {
											color: "hsl(var(--chart-1))",
											label: "Residuo",
										},
									}}
									className="h-[400px]"
								>
									<ScatterChart
										margin={{ bottom: 20, left: 20, right: 20, top: 20 }}
									>
										<ChartTooltip content={<ChartTooltipContent />} />
										<Scatter
											name="Residuos"
											data={residualData}
											fill="var(--color-residual)"
										/>
									</ScatterChart>
								</ChartContainer>
								<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
									El gráfico de residuos muestra que los errores están
									distribuidos aleatoriamente alrededor de cero, sin patrones
									evidentes. Esto sugiere que el modelo ha capturado
									adecuadamente la relación entre las variables predictoras y la
									concentración de CO.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Análisis de Errores por Rango</CardTitle>
								<CardDescription>
									Distribución de errores según el rango de concentración de CO
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Rango de CO (µg/m³)</TableHead>
											<TableHead>MSE</TableHead>
											<TableHead>RMSE</TableHead>
											<TableHead>MAE</TableHead>
											<TableHead>% de Datos</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell>0.0 - 0.5</TableCell>
											<TableCell>0.15</TableCell>
											<TableCell>0.39</TableCell>
											<TableCell>0.32</TableCell>
											<TableCell>18%</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>0.5 - 1.0</TableCell>
											<TableCell>0.22</TableCell>
											<TableCell>0.47</TableCell>
											<TableCell>0.38</TableCell>
											<TableCell>35%</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>1.0 - 2.0</TableCell>
											<TableCell>0.28</TableCell>
											<TableCell>0.53</TableCell>
											<TableCell>0.42</TableCell>
											<TableCell>32%</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>2.0 - 3.0</TableCell>
											<TableCell>0.35</TableCell>
											<TableCell>0.59</TableCell>
											<TableCell>0.48</TableCell>
											<TableCell>12%</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>&gt; 3.0</TableCell>
											<TableCell>0.52</TableCell>
											<TableCell>0.72</TableCell>
											<TableCell>0.58</TableCell>
											<TableCell>3%</TableCell>
										</TableRow>
									</TableBody>
								</Table>
								<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
									El análisis muestra que el modelo tiene un mejor rendimiento
									en concentraciones bajas y medias de CO (0.0 - 2.0 µg/m³), que
									representan el 85% de los datos. El error aumenta para
									concentraciones más altas, posiblemente debido a la menor
									cantidad de ejemplos en esos rangos.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Limitaciones del Modelo</CardTitle>
								<CardDescription>
									Análisis de las limitaciones y posibles mejoras
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<p>
										A pesar del buen rendimiento general, el modelo presenta
										algunas limitaciones:
									</p>

									<ul className="list-disc pl-6 space-y-2">
										<li>
											<strong>Predicción de valores extremos:</strong> El modelo
											tiende a subestimar las concentraciones muy altas de CO
											(&gt; 3.0 µg/m³), posiblemente debido a la escasez de
											ejemplos en ese rango.
										</li>
										<li>
											<strong>Generalización temporal:</strong> El modelo podría
											tener dificultades para generalizar a períodos fuera del
											rango de entrenamiento, especialmente para generalizar a
											períodos fuera del rango de entrenamiento, especialmente
											en condiciones climáticas extremas o eventos inusuales.
										</li>
										<li>
											<strong>Complejidad computacional:</strong> El modelo
											polinómico de grado 4 tiene un gran número de parámetros,
											lo que aumenta el costo computacional del entrenamiento y
											la inferencia.
										</li>
										<li>
											<strong>Interpretabilidad:</strong> A medida que aumenta
											la complejidad del modelo, se vuelve más difícil
											interpretar el efecto individual de cada variable en la
											predicción.
										</li>
									</ul>

									<h3 className="text-lg font-semibold mt-6 mb-2">
										Posibles Mejoras
									</h3>

									<ul className="list-disc pl-6 space-y-2">
										<li>
											<strong>Técnicas de muestreo:</strong> Implementar
											técnicas de sobremuestreo para aumentar la representación
											de concentraciones altas de CO en el conjunto de
											entrenamiento.
										</li>
										<li>
											<strong>Modelos más avanzados:</strong> Explorar modelos
											no lineales más sofisticados como Random Forest, Gradient
											Boosting o redes neuronales.
										</li>
										<li>
											<strong>Características adicionales:</strong> Incorporar
											datos de tráfico, actividad industrial y otros factores
											que podrían influir en la concentración de CO.
										</li>
										<li>
											<strong>Regularización:</strong> Aplicar técnicas de
											regularización como Ridge o Lasso para reducir el riesgo
											de sobreajuste en el modelo polinómico.
										</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
