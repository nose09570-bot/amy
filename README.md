# AMY - Juego Multijugador en Línea 🐍

Un juego estilo .io multijugador donde compites con otros jugadores en tiempo real. Come comida para crecer, evita a jugadores más grandes y domina el ranking global.

## 🎮 Características

- **Multijugador en Tiempo Real**: Juega con hasta 100 jugadores simultáneamente
- **Gráficos Dinámicos**: Efectos visuales fluidos con canvas
- **Sistema de Combo**: Bonificación de puntos por comer consecutivamente
- **Poderes Especiales**:
  - ⚡ Boost (SPACE): Acelera pero consume tu tamaño
  - 💨 Dash (SHIFT): Ráfaga de velocidad instantánea
- **Ranking Global**: Compite en el leaderboard en vivo
- **Minimapa**: Vista del mundo en tiempo real
- **Controles Intuitivos**: 
  - 🕹️ Joystick táctil o ratón
  - ⌨️ Teclado para movimientos especiales

## 🚀 Instalación Rápida

### Cliente (Navegador)

```bash
# Simplemente abre index.html en tu navegador
# O sirve la carpeta con un servidor web

python -m http.server 8000
# http://localhost:8000
```

### Servidor (Backend)

```bash
cd server
npm install
npm start
```

El servidor escuchará en `ws://localhost:8080`

## 📋 Requisitos

### Cliente
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Conexión a internet

### Servidor
- Node.js v14+
- npm o yarn

## 🎯 Cómo Jugar

1. **Abre el juego** en tu navegador
2. **Controla la serpiente** con el joystick o ratón
3. **Come comida** para crecer y ganar puntos
4. **Evita jugadores más grandes** o te eliminarán
5. **Come jugadores más pequeños** para ganar puntos extra
6. **Sube de nivel** comiendo continuamente

## 🛠️ Estructura del Proyecto

```
amy/
├── index.html              # Cliente principal
├── js/
│   ├── config.js          # Configuración compartida
│   ├── websocket.js       # Gestor de WebSocket
│   └── game.js            # Lógica del juego
├── server/
│   ├── server.js          # Servidor WebSocket
│   ├── package.json       # Dependencias
│   ├── .env.example       # Ejemplo de variables
│   └── README.md          # Docs del servidor
├── .gitignore             # Ignorar archivos
└── README.md              # Este archivo
```

## 📡 Arquitectura

```
Cliente (Navegador)
    ↓ WebSocket
Servidor Node.js (Express + ws)
    ↓ Broadcast
Todos los Clientes
```

## 🔧 Configuración

Edita `js/config.js` para cambiar:

- `WORLD_WIDTH / WORLD_HEIGHT`: Tamaño del mundo (8000x8000)
- `WS_URL`: URL del servidor WebSocket
- `SKINS`: Colores disponibles
- `MAX_PLAYERS`: Máximo de jugadores

## 📊 Estadísticas

- Velocidad de sincronización: 60 FPS
- Lag máximo recomendado: <100ms
- Jugadores simultáneos soportados: 100+
- Tamaño del mundo: 8000x8000 píxeles

## 🎨 Personalizaciones

### Agregar nuevas skins (colores)

Edita `CONFIG.SKINS` en `js/config.js`:

```javascript
SKINS: [
  "#22c55e",  // Verde
  "#3b82f6",  // Azul
  "#ef4444",  // Rojo
  // Agrega más colores...
]
```

### Modificar dificultad

En `js/config.js`:

```javascript
DEFAULT_SPEED: 4,        // Velocidad base
BOOST_DRAIN_RATE: 0.15,  // Consumo del boost
DEFAULT_PLAYER_SIZE: 20  // Tamaño inicial
```

## 🌐 Desplegar en Producción

### Railway (Recomendado)

1. Conecta tu repositorio a [Railway.app](https://railway.app)
2. Selecciona `server` como directorio raíz
3. Agrega las variables de entorno
4. Deploy automático

### Heroku

```bash
heroku create amy-game
git push heroku main
```

### VPS (DigitalOcean, Linode, etc.)

```bash
# SSH a tu servidor
ssh root@tu-vps

# Clona el repositorio
git clone https://github.com/tu-usuario/amy.git
cd amy/server

# Instala dependencias
npm install

# Ejecuta con PM2
npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup
```

## 🐛 Solución de Problemas

### El cliente no se conecta
- Verifica que el servidor esté corriendo: `npm start`
- Comprueba la URL de WebSocket en `CONFIG.WS_URL`
- Abre la consola (F12) para ver errores

### Lag excesivo
- Reduce `MAX_PLAYERS` en la configuración
- Verifica tu conexión a internet
- Cierra otras pestañas que usen red

### El servidor crash
- Verifica que Node.js está instalado: `node --version`
- Revisa los logs de error
- Reinicia con: `npm start`

## 📈 Próximas Características

- [ ] Sistema de clanes/equipos
- [ ] Efectos de partículas mejorados
- [ ] Chat entre jugadores
- [ ] Diferentes modos de juego
- [ ] Sistema de logros/badges
- [ ] Replay de mejores jugadas
- [ ] Monetización/Cosmética
- [ ] App móvil nativa

## 🤝 Contribuir

¿Tienes ideas? ¡Abre un issue o PR!

```bash
git checkout -b feature/mi-feature
git commit -am "Agrega mi feature"
git push origin feature/mi-feature
```

## 📝 Licencia

MIT - Siéntete libre de usar este proyecto

## 👨‍💻 Autor

nose09570-bot

## 🙏 Agradecimientos

- Inspirado en juegos .io clásicos
- WebSocket para comunicación en tiempo real
- Canvas API para renderizado

---

**¡Diviértete jugando! 🎮**
