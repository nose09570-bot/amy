// WebSocket Connection Manager
class WebSocketManager {
  constructor() {
    this.ws = null;
    this.isConnected = false;
    this.playerId = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 3000;
    this.messageHandlers = {};
    this.init();
  }

  init() {
    this.updateConnectionStatus('connecting');
    this.connect();
  }

  connect() {
    try {
      this.ws = new WebSocket(CONFIG.WS_URL);
      
      this.ws.onopen = () => {
        console.log('✅ Conectado al servidor');
        this.isConnected = true;
        this.reconnectAttempts = 0;
        this.updateConnectionStatus('connected');
        this.joinGame();
      };

      this.ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          this.handleMessage(message);
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      };

      this.ws.onerror = (error) => {
        console.error('❌ Error WebSocket:', error);
        this.updateConnectionStatus('disconnected');
      };

      this.ws.onclose = () => {
        console.warn('🔌 Desconectado del servidor');
        this.isConnected = false;
        this.updateConnectionStatus('disconnected');
        this.attemptReconnect();
      };
    } catch (error) {
      console.error('Error al conectar:', error);
      this.attemptReconnect();
    }
  }

  attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Reconectando... Intento ${this.reconnectAttempts}/${this.maxReconnectAttempts}`);
      setTimeout(() => this.connect(), this.reconnectDelay);
    } else {
      console.error('❌ No se pudo conectar al servidor después de varios intentos');
      this.updateConnectionStatus('disconnected');
    }
  }

  joinGame() {
    const playerData = {
      name: `Jugador-${Math.floor(Math.random() * 10000)}`,
      color: CONFIG.SKINS[Math.floor(Math.random() * CONFIG.SKINS.length)]
    };
    this.send(MESSAGE_TYPES.PLAYER_JOIN, playerData);
  }

  send(type, data) {
    if (this.isConnected && this.ws) {
      this.ws.send(JSON.stringify({ type, data }));
    }
  }

  sendPlayerUpdate(playerData) {
    this.send(MESSAGE_TYPES.PLAYER_UPDATE, playerData);
  }

  on(messageType, handler) {
    if (!this.messageHandlers[messageType]) {
      this.messageHandlers[messageType] = [];
    }
    this.messageHandlers[messageType].push(handler);
  }

  handleMessage(message) {
    const { type, data } = message;
    if (this.messageHandlers[type]) {
      this.messageHandlers[type].forEach(handler => handler(data));
    }
  }

  updateConnectionStatus(status) {
    const statusElement = document.getElementById('connectionStatus');
    if (statusElement) {
      statusElement.className = `${status}`;
      const statusText = {
        connecting: '⏳ Conectando...',
        connected: '✅ Conectado',
        playing: '🎮 Jugando',
        disconnected: '❌ Desconectado'
      };
      statusElement.textContent = statusText[status] || status;
    }
  }

  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

// Instancia global del WebSocket
let wsManager = null;

function initWebSocket() {
  wsManager = new WebSocketManager();
  return wsManager;
}
