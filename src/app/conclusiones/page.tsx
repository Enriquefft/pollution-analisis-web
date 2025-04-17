import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function ConclusionesPage() {
	return (
		<div className="container py-10">
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
						Conclusiones
					</h1>
					<p className="text-gray-500 dark:text-gray-400 mb-8 max-w-3xl">
						En esta sección presentamos las conclusiones del proyecto,
						incluyendo los hallazgos principales, las implicaciones de los
						resultados y las recomendaciones para trabajos futuros.
					</p>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Hallazgos Principales</CardTitle>
						<CardDescription>
							Resumen de los resultados más importantes del proyecto
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<p>
								A lo largo de este proyecto, hemos desarrollado y evaluado
								varios modelos de regresión para predecir la concentración de
								Monóxido de Carbono (CO) en el aire. Los principales hallazgos
								son:
							</p>

							<ul className="list-disc pl-6 space-y-2">
								<li>
									<strong>Superioridad de los modelos no lineales:</strong> Los
									modelos de regresión polinómica superaron significativamente a
									los modelos lineales, lo que indica que la relación entre las
									variables predictoras y la concentración de CO es no lineal.
								</li>
								<li>
									<strong>Importancia de las variables:</strong> NO2 y PM2.5 son
									los predictores más importantes de la concentración de CO,
									seguidos por sus interacciones y por O3. Esto sugiere una
									fuerte relación entre estos contaminantes, posiblemente debido
									a fuentes comunes de emisión.
								</li>
								<li>
									<strong>Balance entre complejidad y rendimiento:</strong> El
									modelo polinómico de grado 4 proporcionó el mejor balance
									entre complejidad y capacidad predictiva, con un R² de 0.83 en
									el conjunto de prueba.
								</li>
								<li>
									<strong>Patrones temporales:</strong> La incorporación de
									características temporales mejoró significativamente el
									rendimiento de los modelos lineales, lo que indica la
									presencia de patrones estacionales y diarios en la
									concentración de CO.
								</li>
							</ul>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Comparación con el Modelo Base</CardTitle>
						<CardDescription>
							Análisis de las diferencias entre el mejor modelo y el modelo base
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<p>
								El modelo base de regresión lineal utilizaba todas las
								características disponibles sin ninguna transformación o
								interacción. En comparación, el mejor modelo (regresión
								polinómica de grado 4) presenta las siguientes diferencias:
							</p>

							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Aspecto</TableHead>
										<TableHead>Modelo Base</TableHead>
										<TableHead>Mejor Modelo</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell>Tipo de modelo</TableCell>
										<TableCell>Regresión lineal</TableCell>
										<TableCell>Regresión polinómica (grado 4)</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Transformación de variables</TableCell>
										<TableCell>Ninguna</TableCell>
										<TableCell>Términos polinómicos hasta grado 4</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Interacciones</TableCell>
										<TableCell>No incluidas</TableCell>
										<TableCell>
											Incluidas para variables correlacionadas
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Normalización</TableCell>
										<TableCell>Min-Max Scaling</TableCell>
										<TableCell>Z-Score Normalization</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>MSE (Prueba)</TableCell>
										<TableCell>0.48</TableCell>
										<TableCell>0.28</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>R² (Prueba)</TableCell>
										<TableCell>0.65</TableCell>
										<TableCell>0.83</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Mejora relativa</TableCell>
										<TableCell>-</TableCell>
										<TableCell>42% en MSE, 28% en R²</TableCell>
									</TableRow>
								</TableBody>
							</Table>

							<p className="mt-4">
								Las principales razones por las que el modelo polinómico superó
								al modelo base son:
							</p>

							<ol className="list-decimal pl-6 space-y-2">
								<li>
									<strong>Captura de relaciones no lineales:</strong> Los
									términos polinómicos permitieron capturar relaciones no
									lineales entre las variables predictoras y la concentración de
									CO.
								</li>
								<li>
									<strong>Modelado de interacciones:</strong> La inclusión de
									términos de interacción permitió modelar cómo el efecto de una
									variable puede depender del valor de otra.
								</li>
								<li>
									<strong>Mejor normalización:</strong> La normalización Z-Score
									resultó más adecuada para este conjunto de datos, posiblemente
									debido a la presencia de valores atípicos.
								</li>
							</ol>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Implicaciones y Aplicaciones</CardTitle>
						<CardDescription>
							Relevancia práctica de los resultados obtenidos
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<p>
								Los resultados de este proyecto tienen varias implicaciones
								prácticas:
							</p>

							<ul className="list-disc pl-6 space-y-2">
								<li>
									<strong>Monitoreo de calidad del aire:</strong> El modelo
									desarrollado puede utilizarse para estimar la concentración de
									CO en áreas donde no se dispone de sensores específicos para
									este contaminante, pero sí para otros como NO2 y PM2.5.
								</li>
								<li>
									<strong>Identificación de fuentes:</strong> La fuerte relación
									entre CO, NO2 y PM2.5 sugiere fuentes comunes de emisión, como
									el tráfico vehicular y la combustión industrial, lo que puede
									ayudar a dirigir las políticas de control de contaminación.
								</li>
								<li>
									<strong>Predicción a corto plazo:</strong> El modelo puede
									utilizarse para predecir la concentración de CO en las
									próximas horas o días, lo que permitiría emitir alertas
									tempranas en caso de niveles potencialmente peligrosos.
								</li>
								<li>
									<strong>Evaluación de políticas:</strong> El modelo puede
									ayudar a evaluar el impacto de políticas de control de
									emisiones, comparando las predicciones con las mediciones
									reales después de la implementación de dichas políticas.
								</li>
							</ul>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Recomendaciones para Trabajos Futuros</CardTitle>
						<CardDescription>
							Sugerencias para continuar y mejorar esta línea de investigación
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<p>
								Basándonos en los resultados y limitaciones de este proyecto,
								recomendamos las siguientes líneas de investigación para
								trabajos futuros:
							</p>

							<ol className="list-decimal pl-6 space-y-2">
								<li>
									<strong>Exploración de modelos más avanzados:</strong>{" "}
									Investigar el rendimiento de modelos de aprendizaje automático
									más sofisticados, como Random Forest, Gradient Boosting o
									redes neuronales, que podrían capturar relaciones aún más
									complejas en los datos.
								</li>
								<li>
									<strong>Incorporación de datos adicionales:</strong> Integrar
									datos de tráfico, actividad industrial, uso del suelo y
									topografía, que podrían mejorar la capacidad predictiva del
									modelo.
								</li>
								<li>
									<strong>Análisis espacial:</strong> Desarrollar modelos que
									consideren la distribución espacial de la contaminación,
									utilizando técnicas de estadística espacial o redes neuronales
									convolucionales.
								</li>
								<li>
									<strong>Predicción en tiempo real:</strong> Adaptar el modelo
									para su uso en sistemas de predicción en tiempo real, lo que
									requeriría optimizar su eficiencia computacional y desarrollar
									interfaces para la visualización de resultados.
								</li>
								<li>
									<strong>Transferencia a otras regiones:</strong> Investigar la
									transferibilidad del modelo a otras ciudades o regiones con
									diferentes condiciones climáticas y fuentes de emisión.
								</li>
							</ol>

							<p className="mt-4">
								Estas recomendaciones podrían contribuir a mejorar nuestra
								comprensión de la dinámica de la contaminación por CO y a
								desarrollar herramientas más efectivas para su monitoreo y
								control.
							</p>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Contribuciones del Autor</CardTitle>
						<CardDescription>Desarrollo del proyecto</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<p>
								Este proyecto fue desarrollado por Enrique Flores, estudiante
								del Departamento de Ciencia de la Computación de UTEC, bajo la
								supervisión de la Profa. Dra. Aurea Soriano‑Vargas.
							</p>

							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Autor</TableHead>
										<TableHead>Contribuciones</TableHead>
										<TableHead>Participación</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell>Enrique Flores</TableCell>
										<TableCell>
											<ul className="list-disc pl-6">
												<li>Exploración y preprocesamiento de datos</li>
												<li>
													Implementación de modelos lineales y polinómicos
												</li>
												<li>Análisis de resultados y visualizaciones</li>
												<li>Documentación y redacción del informe</li>
												<li>Presentación del proyecto</li>
											</ul>
										</TableCell>
										<TableCell>100%</TableCell>
									</TableRow>
								</TableBody>
							</Table>

							<p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
								El proyecto fue desarrollado como parte del curso de Ciencia de
								la Computación en UTEC, siguiendo las directrices establecidas
								por la profesora.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
