// Configuración del juego multijugador
const CONFIG = {
  WORLD_WIDTH: 8000,
  WORLD_HEIGHT: 8000,
  DEFAULT_PLAYER_SIZE: 20,
  DEFAULT_SPEED: 4,
  MAX_PLAYERS: 100,
  FOOD_SPAWN_AMOUNT: 1500,
  MAX_ENEMIES: 45,
  TICK_RATE: 60, // actualizaciones por segundo
  WS_URL: process.env.WS_URL || 'ws://localhost:8080', // Cambiar a tu servidor
  SKINS: [
    "#22c55e", "#3b82f6", "#ef4444", "#eab308",
    "#a855f7", "#ec4899", "#14b8a6"
  ],
  FOOD_VALUES: [10, 20, 30, 40, 50],
  BOOST_DRAIN_RATE: 0.15,
  DASH_SPEED: 14,
  DASH_DURATION: 300,
  INVULNERABLE_TIME: 1500,
  COMBO_DURATION: 120
};

// Estados del juego
const GAME_STATES = {
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  PLAYING: 'playing',
  GAME_OVER: 'game_over',
  DISCONNECTED: 'disconnected'
};

// Tipos de mensajes WebSocket
const MESSAGE_TYPES = {
  // Cliente -> Servidor
  PLAYER_UPDATE: 'player_update',
  PLAYER_JOIN: 'player_join',
  PLAYER_LEAVE: 'player_leave',
  
  // Servidor -> Cliente
  GAME_STATE: 'game_state',
  PLAYER_JOINED: 'player_joined',
  PLAYER_DIED: 'player_died',
  FOOD_EATEN: 'food_eaten',
  LEADERBOARD_UPDATE: 'leaderboard_update'
};
