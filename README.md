<main class="css-922oni"><div data-color-mode="dark"><div class="wmde-markdown wmde-markdown-color lms_md"><ol>
<li>Crea una carpeta llamada <code>laboratorio</code> en tu computador para esta práctica.</li>
<li>Abre la carpeta <code>laboratorio </code>con Visual Studio Code.</li>
<li>Clona el siguiente repositorio en tu maquina: <a href="https://github.com/ada-school/express-fundamentals-code-lab" target="_blank">https://github.com/ada-school/express-fundamentals-code-lab</a></li>
<li>Cambia a la rama <code>intro</code> usando el siguiente comando <code>git checkout intro</code></li>
<li>Instala las dependencias usando el comando <code>npm install</code></li>
<li>Utiliza <code>npm</code> para instalar <a href="https://expressjs.com/es/" target="_blank">express</a>.</li>
<li>En una terminal, en el directorio raíz, ejecuta el comando para iniciar tu asignación:
<ul>
<li>Mac <code>./ada-client start https://learn.ada-school.org/cohorts/64e4e34a303a56e0ecfb74b7/assignments/63bccb53162b78be78866973</code></li>
<li>Linux <code>./ada-client-linux start https://learn.ada-school.org/cohorts/64e4e34a303a56e0ecfb74b7/assignments/63bccb53162b78be78866973</code></li>
<li>Windows <code>.\ada-client.exe start https://learn.ada-school.org/cohorts/64e4e34a303a56e0ecfb74b7/assignments/63bccb53162b78be78866973</code> Se recomienda ejecutar en una terminal de <strong>PowerShell</strong>.</li>
</ul>
</li>
<li>La terminal abrirá una ventana en el navegador para hacer login con la plataforma. Si no lo hace automaticamente, puedes seguir los pasos en la terminal para hacer login</li>
<li>Ejecuta el siguiente comando para correr las pruebas <code>npm run test</code>. Las pruebas estan fallando, tu misión es ajustar el código para que las pruebas pasen 💪</li>
<li>Importa <code>express</code> usando <code>require</code>.</li>
<li>Crea tu aplicación de express en la constante <code>app</code></li>
<li>Configurar el puerto en el que se ejecutará el servidor de express, ejemplo <code>const PORT = 3000;</code> si el puerto esta ocupado puedes cambiar a otro puerto.</li>
<li>Usa <code>app</code> para responder a peticiones con el método <code>GET</code>
en la ruta raiz, debes responder a estas peticiones con el mensaje <code>Hola mundo</code>.</li>
<li>Haz que el servidor responda a las peticiones con el método <code>GET</code> en la ruta <code>/mensaje</code>, con el mensaje especifico <code>este es mi servidor usando express</code>.</li>
<li>Una vez las pruebas pasen ejecuta el siguiente comando para enviar tu asignación y obtener tu nota:
<ul>
<li>Mac <code>./ada-client submit https://learn.ada-school.org/cohorts/64e4e34a303a56e0ecfb74b7/assignments/63bccb53162b78be78866973</code></li>
<li>Linux <code>./ada-client-linux submit https://learn.ada-school.org/cohorts/64e4e34a303a56e0ecfb74b7/assignments/63bccb53162b78be78866973</code></li>
<li>Windows <code>.\ada-client.exe submit https://learn.ada-school.org/cohorts/64e4e34a303a56e0ecfb74b7/assignments/63bccb53162b78be78866973</code> Se recomienda ejecutar en una terminal de <strong>PowerShell</strong>.</li>
</ul>
</li>
<li>Felicitaciones 🎉, haz creado tu primer servidor con Express.</li>
</ol></div></div></main>
