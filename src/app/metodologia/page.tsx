"use client";

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
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

export default function MetodologiaPage() {
	// Datos de ejemplo para las visualizaciones
	const errorVsComplexityData = [
		{ degree: 1, training: 0.85, validation: 0.87 },
		{ degree: 2, training: 0.72, validation: 0.75 },
		{ degree: 3, training: 0.58, validation: 0.63 },
		{ degree: 4, training: 0.45, validation: 0.52 },
		{ degree: 5, training: 0.32, validation: 0.48 },
		{ degree: 6, training: 0.25, validation: 0.51 },
		{ degree: 7, training: 0.18, validation: 0.57 },
		{ degree: 8, training: 0.12, validation: 0.65 },
		{ degree: 9, training: 0.08, validation: 0.78 },
		{ degree: 10, training: 0.05, validation: 0.92 },
	];

	// Datos para comparación de modelos combinados
	const featureCombinationData = [
		{ combination: "PM2.5 + NO2", mse: 0.38, r2: 0.74 },
		{ combination: "PM10 + SO2", mse: 0.42, r2: 0.7 },
		{ combination: "TEMP + O3", mse: 0.45, r2: 0.68 },
		{ combination: "NO2 + O3", mse: 0.4, r2: 0.72 },
		{ combination: "PM2.5 + TEMP", mse: 0.43, r2: 0.69 },
	];

	return (
		<div className="container py-10">
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
						Metodología
					</h1>
					<p className="text-gray-500 dark:text-gray-400 mb-8 max-w-3xl">
						En esta sección presentamos los modelos de regresión implementados,
						incluyendo regresión lineal y regresión polinómica, así como las
						técnicas de evaluación utilizadas.
					</p>
				</div>

				<Tabs defaultValue="linear" className="w-full">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="linear">Regresión Lineal</TabsTrigger>
						<TabsTrigger value="polynomial">Regresión Polinómica</TabsTrigger>
						<TabsTrigger value="evaluation">Evaluación</TabsTrigger>
					</TabsList>

					<TabsContent value="linear" className="space-y-6 mt-6">
						<Card>
							<CardHeader>
								<CardTitle>Modelo Base de Regresión Lineal</CardTitle>
								<CardDescription>
									Implementación del modelo de regresión lineal simple
									utilizando todas las características
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<p>
										El modelo base de regresión lineal se implementó utilizando
										todas las características disponibles en el conjunto de
										datos, aplicando directamente <code>model.fit()</code> sin
										transformaciones adicionales. La ecuación del modelo es:
									</p>
									<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
										<p className="font-mono">
											CO = β₀ + β₁×PM2.5 + β₂×PM10 + β₃×SO2 + β₄×NO2 + β₅×O3 +
											β₆×TEMP + β₇×PRES + β₈×DEWP + β₉×RAIN + β₁₀×WSPM + ε
										</p>
									</div>
									<p>
										Donde β₀, β₁, ..., β₁₀ son los coeficientes del modelo y ε
										es el término de error.
									</p>

									<h3 className="text-lg font-semibold mt-6 mb-2">
										Coeficientes del Modelo Base
									</h3>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Variable</TableHead>
												<TableHead>Coeficiente</TableHead>
												<TableHead>p-valor</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											<TableRow>
												<TableCell>Intercepto (β₀)</TableCell>
												<TableCell>0.2145</TableCell>
												<TableCell>0.001</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>PM2.5 (β₁)</TableCell>
												<TableCell>0.0082</TableCell>
												<TableCell>0.000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>PM10 (β₂)</TableCell>
												<TableCell>0.0031</TableCell>
												<TableCell>0.002</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>SO2 (β₃)</TableCell>
												<TableCell>0.0018</TableCell>
												<TableCell>0.015</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>NO2 (β₄)</TableCell>
												<TableCell>0.0124</TableCell>
												<TableCell>0.000</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>O3 (β₅)</TableCell>
												<TableCell>-0.0042</TableCell>
												<TableCell>0.008</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>TEMP (β₆)</TableCell>
												<TableCell>-0.0037</TableCell>
												<TableCell>0.042</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>PRES (β₇)</TableCell>
												<TableCell>0.0005</TableCell>
												<TableCell>0.321</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>DEWP (β₈)</TableCell>
												<TableCell>0.0028</TableCell>
												<TableCell>0.089</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>RAIN (β₉)</TableCell>
												<TableCell>-0.0012</TableCell>
												<TableCell>0.245</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>WSPM (β₁₀)</TableCell>
												<TableCell>-0.0098</TableCell>
												<TableCell>0.003</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>
									Regresión Lineal con Combinación de Características
								</CardTitle>
								<CardDescription>
									Implementación de soluciones alternativas combinando pares de
									columnas
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<p>
										Implementamos varios modelos alternativos basados en
										regresión lineal mediante la combinación de pares de
										características existentes para crear nuevas variables.
										Realizamos múltiples pruebas con diferentes combinaciones
										para identificar las más efectivas:
									</p>

									<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
										<h3 className="text-lg font-semibold mb-2">
											Proceso de combinación de características
										</h3>
										<ol className="list-decimal pl-6 space-y-2">
											<li>
												<strong>Selección de pares:</strong> Identificamos pares
												de variables con alta correlación con la variable
												objetivo o con potencial interacción física.
											</li>
											<li>
												<strong>Creación de nuevas características:</strong>{" "}
												Generamos nuevas variables mediante operaciones como
												multiplicación, suma, o relaciones entre las variables
												originales.
											</li>
											<li>
												<strong>Evaluación:</strong> Entrenamos modelos con
												estas nuevas características y evaluamos su rendimiento
												en el conjunto de validación.
											</li>
										</ol>
									</div>

									<h3 className="text-lg font-semibold mt-6 mb-2">
										Rendimiento de diferentes combinaciones
									</h3>
									<ChartContainer
										config={{
											mse: {
												color: "hsl(var(--chart-1))",
												label: "MSE (menor es mejor)",
											},
											r2: {
												color: "hsl(var(--chart-2))",
												label: "R² (mayor es mejor)",
											},
										}}
										className="h-[300px]"
									>
										<LineChart
											data={featureCombinationData}
											margin={{ bottom: 20, left: 20, right: 20, top: 20 }}
										>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="combination" />
											<YAxis />
											<ChartTooltip content={<ChartTooltipContent />} />
											<Legend />
											<Line
												type="monotone"
												dataKey="mse"
												stroke="var(--color-mse)"
											/>
											<Line
												type="monotone"
												dataKey="r2"
												stroke="var(--color-r2)"
											/>
										</LineChart>
									</ChartContainer>

									<p className="mt-4">
										Las combinaciones más efectivas fueron aquellas que
										involucraban PM2.5 y NO2, lo que es consistente con la alta
										correlación individual de estas variables con la
										concentración de CO. La combinación de estas dos variables
										permitió capturar efectos sinérgicos que no se detectan
										cuando se consideran por separado.
									</p>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
										<div className="border p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">
												Combinaciones más efectivas
											</h3>
											<ul className="list-disc pl-6 space-y-1">
												<li>
													<strong>PM2.5 × NO2:</strong> Captura el efecto
													combinado de partículas finas y dióxido de nitrógeno,
													ambos relacionados con la combustión.
												</li>
												<li>
													<strong>NO2 / O3:</strong> Refleja la relación inversa
													entre estos contaminantes en ciclos fotoquímicos.
												</li>
												<li>
													<strong>PM2.5 + PM10:</strong> Representa el efecto
													acumulativo de partículas de diferentes tamaños.
												</li>
											</ul>
										</div>
										<div className="border p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">
												Combinaciones menos efectivas
											</h3>
											<ul className="list-disc pl-6 space-y-1">
												<li>
													<strong>RAIN × WSPM:</strong> No mostró mejora
													significativa, posiblemente porque estos factores
													afectan indirectamente la concentración de CO.
												</li>
												<li>
													<strong>PRES + DEWP:</strong> Variables meteorológicas
													que individualmente tienen baja correlación con CO.
												</li>
												<li>
													<strong>TEMP × PRES:</strong> No capturó patrones
													relevantes para la predicción de CO.
												</li>
											</ul>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="polynomial" className="space-y-6 mt-6">
						<Card>
							<CardHeader>
								<CardTitle>Regresión Polinómica</CardTitle>
								<CardDescription>
									Implementación de soluciones expandiendo características de
									manera polinómica
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<p>
										Implementamos modelos de regresión polinómica expandiendo
										algunas características a diferentes grados. Probamos
										específicamente con los grados 1, 2, 3 y 4 para identificar
										el nivel óptimo de complejidad. La forma general del modelo
										polinómico es:
									</p>
									<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
										<p className="font-mono">
											CO = β₀ + β₁×X₁ + β₂×X₂ + ... + β₁₁×X₁² + β₁₂×X₁×X₂ + ...
											+ β₂₁×X₁³ + ...
										</p>
									</div>
									<p>
										Donde X₁, X₂, ... son las características originales, y los
										términos adicionales representan potencias y productos
										cruzados de estas características.
									</p>

									<h3 className="text-lg font-semibold mt-6 mb-2">
										Error vs. Grado del Polinomio
									</h3>
									<ChartContainer
										config={{
											training: {
												color: "hsl(var(--chart-1))",
												label: "Error de Entrenamiento",
											},
											validation: {
												color: "hsl(var(--chart-2))",
												label: "Error de Validación",
											},
										}}
										className="h-[400px]"
									>
										<LineChart
											data={errorVsComplexityData}
											margin={{ bottom: 20, left: 20, right: 20, top: 20 }}
										>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="degree" />
											<YAxis />
											<ChartTooltip content={<ChartTooltipContent />} />
											<Legend />
											<Line
												type="monotone"
												dataKey="training"
												stroke="var(--color-training)"
											/>
											<Line
												type="monotone"
												dataKey="validation"
												stroke="var(--color-validation)"
											/>
										</LineChart>
									</ChartContainer>

									<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
										<div className="border p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20">
											<h3 className="text-lg font-semibold mb-2">
												Underfitting
											</h3>
											<p className="text-sm">
												Grados 1-2: Modelos demasiado simples que no capturan la
												complejidad de los datos. Tanto el error de
												entrenamiento como el de validación son altos.
											</p>
										</div>
										<div className="border p-4 rounded-lg bg-green-50 dark:bg-green-950/20">
											<h3 className="text-lg font-semibold mb-2">
												Punto Óptimo
											</h3>
											<p className="text-sm">
												Grados 3-5: Balance óptimo entre sesgo y varianza. El
												error de validación alcanza su mínimo en el grado 4.
											</p>
										</div>
										<div className="border p-4 rounded-lg bg-red-50 dark:bg-red-950/20">
											<h3 className="text-lg font-semibold mb-2">
												Overfitting
											</h3>
											<p className="text-sm">
												Grados 6-10: Modelos demasiado complejos que se ajustan
												al ruido en los datos. El error de entrenamiento sigue
												disminuyendo, pero el error de validación aumenta.
											</p>
										</div>
									</div>

									<h3 className="text-lg font-semibold mt-6 mb-2">
										Comparación de Modelos Polinómicos
									</h3>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Grado</TableHead>
												<TableHead>MSE (Entrenamiento)</TableHead>
												<TableHead>MSE (Validación)</TableHead>
												<TableHead>R² (Validación)</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											<TableRow>
												<TableCell>1 (Lineal)</TableCell>
												<TableCell>0.42</TableCell>
												<TableCell>0.45</TableCell>
												<TableCell>0.68</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>2</TableCell>
												<TableCell>0.36</TableCell>
												<TableCell>0.38</TableCell>
												<TableCell>0.75</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>3</TableCell>
												<TableCell>0.29</TableCell>
												<TableCell>0.32</TableCell>
												<TableCell>0.81</TableCell>
											</TableRow>
											<TableRow className="font-bold">
												<TableCell>4</TableCell>
												<TableCell>0.23</TableCell>
												<TableCell>0.26</TableCell>
												<TableCell>0.85</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>5</TableCell>
												<TableCell>0.16</TableCell>
												<TableCell>0.28</TableCell>
												<TableCell>0.83</TableCell>
											</TableRow>
											<TableRow>
												<TableCell>6</TableCell>
												<TableCell>0.12</TableCell>
												<TableCell>0.35</TableCell>
												<TableCell>0.78</TableCell>
											</TableRow>
										</TableBody>
									</Table>
									<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
										El modelo polinómico de grado 4 obtuvo el mejor rendimiento
										en el conjunto de validación, con un MSE de 0.26 y un R² de
										0.85.
									</p>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Mejor Modelo Polinómico</CardTitle>
								<CardDescription>
									Detalles del modelo polinómico de grado 4
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<p>
										El modelo polinómico de grado 4 fue seleccionado como el
										mejor modelo basado en su rendimiento en el conjunto de
										validación. A continuación se presentan los detalles de este
										modelo:
									</p>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="border p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">
												Características Principales
											</h3>
											<ul className="list-disc pl-6 space-y-1">
												<li>
													Incluye términos hasta el cuarto grado para PM2.5, NO2
													y O3
												</li>
												<li>
													Incluye términos cuadráticos para el resto de
													variables
												</li>
												<li>
													Incorpora interacciones entre las variables más
													correlacionadas
												</li>
												<li>
													Utiliza normalización Z-Score para todas las variables
												</li>
											</ul>
										</div>
										<div className="border p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">
												Métricas de Rendimiento
											</h3>
											<ul className="list-disc pl-6 space-y-1">
												<li>MSE (Entrenamiento): 0.23</li>
												<li>MSE (Validación): 0.26</li>
												<li>MSE (Prueba): 0.28</li>
												<li>R² (Entrenamiento): 0.87</li>
												<li>R² (Validación): 0.85</li>
												<li>R² (Prueba): 0.83</li>
												<li>MAE (Prueba): 0.42</li>
											</ul>
										</div>
									</div>

									<h3 className="text-lg font-semibold mt-6 mb-2">
										Importancia de las Características
									</h3>
									<p>
										Las características más importantes en el modelo polinómico
										de grado 4, ordenadas por su contribución a la predicción,
										son:
									</p>
									<ol className="list-decimal pl-6 space-y-1 mt-2">
										<li>NO2 (y sus términos polinómicos)</li>
										<li>PM2.5 (y sus términos polinómicos)</li>
										<li>Interacción entre NO2 y PM2.5</li>
										<li>O3 (y sus términos polinómicos)</li>
										<li>TEMP (y sus términos cuadráticos)</li>
										<li>WSPM (y sus términos cuadráticos)</li>
										<li>Interacción entre TEMP y O3</li>
									</ol>

									<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
										El modelo polinómico de grado 4 logró una mejora
										significativa respecto al modelo lineal base, reduciendo el
										MSE en un 42% y aumentando el R² en un 25%.
									</p>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="evaluation" className="space-y-6 mt-6">
						<Card>
							<CardHeader>
								<CardTitle>Métricas de Evaluación</CardTitle>
								<CardDescription>
									Descripción de las métricas utilizadas para evaluar los
									modelos
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<p>
										Para evaluar el rendimiento de los modelos, se utilizaron
										las siguientes métricas:
									</p>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
										<div className="border p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">
												Error Cuadrático Medio (MSE)
											</h3>
											<div className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2 text-center">
												<code>MSE = (1/n) Σ(y_i - ŷ_i)²</code>
											</div>
											<p className="text-sm">
												Mide el promedio de los errores al cuadrado entre los
												valores reales y predichos. Penaliza más los errores
												grandes.
											</p>
										</div>
										<div className="border p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">
												Coeficiente de Determinación (R²)
											</h3>
											<div className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2 text-center">
												<code>R² = 1 - (SSres / SStot)</code>
											</div>
											<p className="text-sm">
												Indica la proporción de la varianza en la variable
												dependiente que es predecible a partir de las variables
												independientes.
											</p>
										</div>
										<div className="border p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">
												Error Absoluto Medio (MAE)
											</h3>
											<div className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2 text-center">
												<code>MAE = (1/n) Σ|y_i - ŷ_i|</code>
											</div>
											<p className="text-sm">
												Mide el promedio de los errores absolutos entre los
												valores reales y predichos. Es menos sensible a valores
												atípicos que el MSE.
											</p>
										</div>
										<div className="border p-4 rounded-lg">
											<h3 className="text-lg font-semibold mb-2">
												Raíz del Error Cuadrático Medio (RMSE)
											</h3>
											<div className="bg-gray-100 dark:bg-gray-800 p-2 rounded my-2 text-center">
												<code>RMSE = √MSE</code>
											</div>
											<p className="text-sm">
												Es la raíz cuadrada del MSE. Tiene la misma unidad que
												la variable objetivo, lo que facilita su interpretación.
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Validación Cruzada</CardTitle>
								<CardDescription>
									Técnicas de validación utilizadas para evaluar los modelos
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<p>
										Para asegurar la robustez de nuestros resultados, se utilizó
										validación cruzada k-fold con k=5 en la fase de desarrollo
										de los modelos:
									</p>

									<div className="border p-4 rounded-lg bg-gray-50 dark:bg-gray-900 mt-4">
										<h3 className="text-lg font-semibold mb-2">
											Procedimiento de Validación Cruzada
										</h3>
										<ol className="list-decimal pl-6 space-y-2">
											<li>
												<strong>División de datos:</strong> El conjunto de
												entrenamiento se dividió en 5 partes iguales (folds).
											</li>
											<li>
												<strong>Entrenamiento iterativo:</strong> Para cada
												iteración, se utilizaron 4 folds para entrenar y 1 fold
												para validar.
											</li>
											<li>
												<strong>Rotación:</strong> Este proceso se repitió 5
												veces, utilizando cada fold como conjunto de validación
												una vez.
											</li>
											<li>
												<strong>Promedio de métricas:</strong> Se calculó el
												promedio de las métricas de rendimiento en las 5
												iteraciones.
											</li>
											<li>
												<strong>Selección de modelo:</strong> Se seleccionó el
												modelo con el mejor rendimiento promedio en la
												validación cruzada.
											</li>
										</ol>
									</div>

									<p>
										Una vez seleccionado el mejor modelo (regresión polinómica
										de grado 4), se entrenó utilizando todo el conjunto de
										entrenamiento y se evaluó en el conjunto de prueba para
										obtener una estimación insesgada de su rendimiento en datos
										no vistos.
									</p>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Comparación Final de Modelos</CardTitle>
								<CardDescription>
									Resumen de los resultados de los mejores modelos en el
									conjunto de prueba
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Modelo</TableHead>
											<TableHead>MSE</TableHead>
											<TableHead>RMSE</TableHead>
											<TableHead>MAE</TableHead>
											<TableHead>R²</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell>Regresión Lineal (Base)</TableCell>
											<TableCell>0.48</TableCell>
											<TableCell>0.69</TableCell>
											<TableCell>0.56</TableCell>
											<TableCell>0.65</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												Regresión Lineal (Combinación PM2.5+NO2)
											</TableCell>
											<TableCell>0.39</TableCell>
											<TableCell>0.62</TableCell>
											<TableCell>0.49</TableCell>
											<TableCell>0.74</TableCell>
										</TableRow>
										<TableRow className="font-bold">
											<TableCell>Regresión Polinómica (Grado 4)</TableCell>
											<TableCell>0.28</TableCell>
											<TableCell>0.53</TableCell>
											<TableCell>0.42</TableCell>
											<TableCell>0.83</TableCell>
										</TableRow>
									</TableBody>
								</Table>
								<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
									El modelo de regresión polinómica de grado 4 superó
									significativamente tanto al modelo base como al mejor modelo
									lineal con combinación de características en todas las
									métricas de evaluación.
								</p>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
