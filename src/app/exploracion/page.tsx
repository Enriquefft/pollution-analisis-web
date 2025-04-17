"use client";

import {
	BarChart,
	LineChart,
	PolarGrid,
	Radar,
	RadarChart,
	RadialBar,
} from "recharts";
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

export default function ExploracionPage() {
	// Datos de ejemplo para las visualizaciones
	const dataDistribution = [
		{ name: "PM2.5", value: 120 },
		{ name: "PM10", value: 180 },
		{ name: "SO2", value: 60 },
		{ name: "NO2", value: 90 },
		{ name: "O3", value: 75 },
		{ name: "CO", value: 150 },
	];

	const correlationData = [
		{ correlation: 0.72, feature: "PM2.5" },
		{ correlation: 0.68, feature: "PM10" },
		{ correlation: 0.45, feature: "SO2" },
		{ correlation: 0.82, feature: "NO2" },
		{ correlation: -0.23, feature: "O3" },
		{ correlation: -0.15, feature: "TEMP" },
		{ correlation: 0.12, feature: "PRES" },
		{ correlation: 0.31, feature: "DEWP" },
		{ correlation: -0.08, feature: "RAIN" },
		{ correlation: -0.42, feature: "WSPM" },
	];

	const timeSeriesData = [
		{ co: 1.2, month: "Ene" },
		{ co: 1.5, month: "Feb" },
		{ co: 1.8, month: "Mar" },
		{ co: 1.4, month: "Abr" },
		{ co: 1.1, month: "May" },
		{ co: 0.9, month: "Jun" },
		{ co: 0.8, month: "Jul" },
		{ co: 0.7, month: "Ago" },
		{ co: 1.0, month: "Sep" },
		{ co: 1.3, month: "Oct" },
		{ co: 1.6, month: "Nov" },
		{ co: 1.9, month: "Dic" },
	];

	const radarData = [
		{
			A: 120,
			fullMark: 150,
			subject: "PM2.5",
		},
		{
			A: 98,
			fullMark: 150,
			subject: "PM10",
		},
		{
			A: 86,
			fullMark: 150,
			subject: "SO2",
		},
		{
			A: 99,
			fullMark: 150,
			subject: "NO2",
		},
		{
			A: 85,
			fullMark: 150,
			subject: "O3",
		},
		{
			A: 65,
			fullMark: 150,
			subject: "CO",
		},
	];

	return (
		<div className="container py-10">
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
						Exploración de Datos
					</h1>
					<p className="text-gray-500 dark:text-gray-400 mb-8 max-w-3xl">
						En esta sección presentamos el análisis exploratorio de los datos,
						incluyendo estadísticas descriptivas, distribución de variables,
						correlaciones y tratamiento de valores faltantes.
					</p>
				</div>

				<Tabs defaultValue="dataset" className="w-full">
					<TabsList className="grid w-full grid-cols-4">
						<TabsTrigger value="dataset">Conjunto de Datos</TabsTrigger>
						<TabsTrigger value="statistics">Estadísticas</TabsTrigger>
						<TabsTrigger value="visualization">Visualizaciones</TabsTrigger>
						<TabsTrigger value="preprocessing">Preprocesamiento</TabsTrigger>
					</TabsList>

					<TabsContent value="dataset" className="space-y-6 mt-6">
						<Card>
							<CardHeader>
								<CardTitle>Descripción del Conjunto de Datos</CardTitle>
								<CardDescription>
									Variables utilizadas para predecir la concentración de
									Monóxido de Carbono
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Variable</TableHead>
											<TableHead>Descripción</TableHead>
											<TableHead>Unidad</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell>PM2.5</TableCell>
											<TableCell>Concentración de PM2.5 en el aire</TableCell>
											<TableCell>µg/m³</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>PM10</TableCell>
											<TableCell>Concentración de PM10 en el aire</TableCell>
											<TableCell>µg/m³</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>SO2</TableCell>
											<TableCell>Concentración de SO2 en el aire</TableCell>
											<TableCell>µg/m³</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>NO2</TableCell>
											<TableCell>Concentración de NO2 en el aire</TableCell>
											<TableCell>µg/m³</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>O3</TableCell>
											<TableCell>Concentración de O3 en el aire</TableCell>
											<TableCell>µg/m³</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>TEMP</TableCell>
											<TableCell>Temperatura</TableCell>
											<TableCell>°C</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>PRES</TableCell>
											<TableCell>Presión atmosférica</TableCell>
											<TableCell>hPa</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>DEWP</TableCell>
											<TableCell>Punto de rocío del agua</TableCell>
											<TableCell>-</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>RAIN</TableCell>
											<TableCell>Precipitación de agua</TableCell>
											<TableCell>mm</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>WD</TableCell>
											<TableCell>Dirección del viento</TableCell>
											<TableCell>-</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>WSPM</TableCell>
											<TableCell>Velocidad del viento</TableCell>
											<TableCell>m/s</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="font-bold">Target</TableCell>
											<TableCell className="font-bold">
												Concentración de CO en el aire
											</TableCell>
											<TableCell className="font-bold">µg/m³</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Información del Dataset</CardTitle>
								<CardDescription>
									Resumen de la estructura y características del conjunto de
									datos
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
											<p className="text-sm text-gray-500 dark:text-gray-400">
												Total de ejemplos
											</p>
											<p className="text-2xl font-bold">43,824</p>
										</div>
										<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
											<p className="text-sm text-gray-500 dark:text-gray-400">
												Características
											</p>
											<p className="text-2xl font-bold">16</p>
										</div>
										<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
											<p className="text-sm text-gray-500 dark:text-gray-400">
												Valores faltantes
											</p>
											<p className="text-2xl font-bold">2.3%</p>
										</div>
									</div>

									<div>
										<h3 className="text-lg font-semibold mb-2">
											Distribución de los conjuntos
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
											<div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-lg">
												<p className="text-sm text-gray-500 dark:text-gray-400">
													Entrenamiento
												</p>
												<p className="text-2xl font-bold">70%</p>
											</div>
											<div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-lg">
												<p className="text-sm text-gray-500 dark:text-gray-400">
													Validación
												</p>
												<p className="text-2xl font-bold">15%</p>
											</div>
											<div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded-lg">
												<p className="text-sm text-gray-500 dark:text-gray-400">
													Prueba
												</p>
												<p className="text-2xl font-bold">15%</p>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="statistics" className="space-y-6 mt-6">
						<Card>
							<CardHeader>
								<CardTitle>Estadísticas Descriptivas</CardTitle>
								<CardDescription>
									Resumen estadístico de las variables principales
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Variable</TableHead>
											<TableHead>Media</TableHead>
											<TableHead>Desv. Est.</TableHead>
											<TableHead>Mínimo</TableHead>
											<TableHead>Máximo</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell>PM2.5</TableCell>
											<TableCell>57.8</TableCell>
											<TableCell>58.9</TableCell>
											<TableCell>2.0</TableCell>
											<TableCell>994.0</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>PM10</TableCell>
											<TableCell>92.1</TableCell>
											<TableCell>87.5</TableCell>
											<TableCell>3.0</TableCell>
											<TableCell>1697.0</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>SO2</TableCell>
											<TableCell>18.3</TableCell>
											<TableCell>27.4</TableCell>
											<TableCell>0.1</TableCell>
											<TableCell>504.0</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>NO2</TableCell>
											<TableCell>52.5</TableCell>
											<TableCell>30.8</TableCell>
											<TableCell>1.0</TableCell>
											<TableCell>294.0</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>CO</TableCell>
											<TableCell>1.2</TableCell>
											<TableCell>1.1</TableCell>
											<TableCell>0.1</TableCell>
											<TableCell>11.3</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Matriz de Correlación</CardTitle>
								<CardDescription>
									Correlaciones entre las variables y la concentración de CO
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ChartContainer
									config={{
										correlation: {
											color: "hsl(var(--chart-1))",
											label: "Correlación",
										},
									}}
									className="h-[300px]"
								>
									<BarChart
										data={correlationData}
										layout="vertical"
										margin={{ bottom: 20, left: 70, right: 20, top: 20 }}
									>
										<ChartTooltip content={<ChartTooltipContent />} />
										<RadialBar
											dataKey="correlation"
											fill="var(--color-correlation)"
											radius={5}
										/>
									</BarChart>
								</ChartContainer>
								<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
									La matriz de correlación muestra que NO2 y PM2.5 tienen la
									correlación más alta con la concentración de CO, mientras que
									O3 y RAIN tienen correlaciones negativas.
								</p>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="visualization" className="space-y-6 mt-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<Card>
								<CardHeader>
									<CardTitle>Distribución de Contaminantes</CardTitle>
									<CardDescription>
										Concentración relativa de los principales contaminantes
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ChartContainer
										config={{
											value: {
												color: "hsl(var(--chart-1))",
												label: "Valor",
											},
										}}
										className="h-[300px]"
									>
										<BarChart
											data={dataDistribution}
											margin={{ bottom: 20, left: 20, right: 20, top: 20 }}
										>
											<ChartTooltip content={<ChartTooltipContent />} />
											<RadialBar
												dataKey="value"
												fill="var(--color-value)"
												radius={5}
											/>
										</BarChart>
									</ChartContainer>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Serie Temporal de CO</CardTitle>
									<CardDescription>
										Variación de la concentración de CO a lo largo del año
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ChartContainer
										config={{
											co: {
												color: "hsl(var(--chart-2))",
												label: "CO",
											},
										}}
										className="h-[300px]"
									>
										<LineChart
											data={timeSeriesData}
											margin={{ bottom: 20, left: 20, right: 20, top: 20 }}
										>
											<ChartTooltip content={<ChartTooltipContent />} />
										</LineChart>
									</ChartContainer>
								</CardContent>
							</Card>

							<Card className="md:col-span-2">
								<CardHeader>
									<CardTitle>Análisis Multivariable</CardTitle>
									<CardDescription>
										Relación entre múltiples contaminantes
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ChartContainer
										config={{
											A: {
												color: "hsl(var(--chart-3))",
												label: "Valor",
											},
										}}
										className="h-[400px]"
									>
										<RadarChart
											outerRadius={150}
											width={730}
											height={400}
											data={radarData}
										>
											<PolarGrid />
											<ChartTooltip content={<ChartTooltipContent />} />
											<Radar
												name="Contaminantes"
												dataKey="A"
												stroke="var(--color-A)"
												fill="var(--color-A)"
												fillOpacity={0.6}
											/>
										</RadarChart>
									</ChartContainer>
								</CardContent>
							</Card>
						</div>
					</TabsContent>

					<TabsContent value="preprocessing" className="space-y-6 mt-6">
						<Card>
							<CardHeader>
								<CardTitle>Tratamiento de Valores Faltantes</CardTitle>
								<CardDescription>
									Estrategias aplicadas para manejar datos incompletos
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<p>
										Para el tratamiento de valores faltantes, se aplicaron las
										siguientes estrategias:
									</p>
									<ul className="list-disc pl-6 space-y-2">
										<li>
											<strong>Variables numéricas continuas:</strong> Se utilizó
											la media de la variable para imputar los valores
											faltantes.
										</li>
										<li>
											<strong>Variables categóricas:</strong> Se utilizó la moda
											(valor más frecuente) para imputar los valores faltantes.
										</li>
										<li>
											<strong>Variables temporales:</strong> Se utilizó
											interpolación lineal para estimar los valores faltantes en
											series temporales.
										</li>
									</ul>
									<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
										El porcentaje total de valores faltantes en el conjunto de
										datos fue de 2.3%, principalmente en las variables RAIN y
										WD.
									</p>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Normalización de Datos</CardTitle>
								<CardDescription>
									Técnicas de normalización aplicadas al conjunto de datos
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<p>
										Se aplicaron dos técnicas de normalización para preparar los
										datos:
									</p>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="border p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">
												Min-Max Scaling
											</h3>
											<p className="text-sm">
												Normaliza los datos al rango [0,1] utilizando la
												fórmula:
											</p>
											<div className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2 text-center">
												<code>X_norm = (X - X_min) / (X_max - X_min)</code>
											</div>
											<p className="text-sm text-gray-500 dark:text-gray-400">
												Esta técnica preserva la distribución original de los
												datos pero los escala a un rango específico.
											</p>
										</div>
										<div className="border p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">
												Z-Score Normalization
											</h3>
											<p className="text-sm">
												Normaliza los datos a una distribución con media 0 y
												desviación estándar 1:
											</p>
											<div className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2 text-center">
												<code>X_norm = (X - μ) / σ</code>
											</div>
											<p className="text-sm text-gray-500 dark:text-gray-400">
												Esta técnica es útil cuando los datos siguen
												aproximadamente una distribución normal.
											</p>
										</div>
									</div>
									<p>
										Para nuestro modelo final, se utilizó Z-Score Normalization
										ya que mostró mejores resultados en la validación cruzada.
									</p>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
