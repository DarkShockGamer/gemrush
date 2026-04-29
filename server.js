const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const MAX_PLAYERS = 4;

const GEM_TYPES = [
  { name: 'Coal',      emoji: '🪨', color: '#5a4a3a', value: 1,    rarity: 0.45  },
  { name: 'Quartz',    emoji: '🔹', color: '#aaddff', value: 3,    rarity: 0.25  },
  { name: 'Ruby',      emoji: '♦️',  color: '#e84040', value: 8,    rarity: 0.15  },
  { name: 'Emerald',   emoji: '💚', color: '#30d97a', value: 18,   rarity: 0.09  },
  { name: 'Sapphire',  emoji: '🔷', color: '#4090f5', value: 40,   rarity: 0.04  },
  { name: 'Diamond',   emoji: '💎', color: '#c0f0ff', value: 100,  rarity: 0.015 },
  { name: 'Moonstone', emoji: '🌕', color: '#e8d8ff', value: 300,  rarity: 0.004 },
  { name: 'Void Gem',  emoji: '🔮', color: '#9040f0', value: 1000, rarity: 0.001 },
];

const UPGRADES = [
  { id: 'pickaxe',    name: 'Iron Pickaxe',     emoji: '⛏',  baseCost: 30,     costMult: 2.8,  maxLevel: 6,  type: 'gemsPerClick',    amount: 1,    desc: 'Swing harder. +1 gem/click per level.' },
  { id: 'gloves',     name: 'Miner Gloves',     emoji: '🧤', baseCost: 80,     costMult: 3.0,  maxLevel: 5,  type: 'gemsPerClick',    amount: 0.5,  desc: 'Better grip. +0.5 gem/click per level.' },
  { id: 'helmet',     name: 'Miner Helmet',     emoji: '⛑',  baseCost: 150,    costMult: 3.2,  maxLevel: 4,  type: 'rarityBonus',     amount: 0.12, desc: 'Reveals rare veins. +12% rare gem chance.' },
  { id: 'canary',     name: 'Mine Canary',      emoji: '🐦', baseCost: 400,    costMult: 3.5,  maxLevel: 5,  type: 'autoMine',        amount: 1,    gemEmoji: '🪨', desc: 'Tweets when coal is near. +1 gem/sec AFK.' },
  { id: 'lamp',       name: 'Crystal Lamp',     emoji: '🔦', baseCost: 500,    costMult: 3.2,  maxLevel: 5,  type: 'valueMultiplier', amount: 0.20, desc: 'Illuminates gems. +20% gem value per level.' },
  { id: 'goblin',     name: 'Goblin Miner',     emoji: '👺', baseCost: 900,    costMult: 4.0,  maxLevel: 5,  type: 'autoMine',        amount: 2,    gemEmoji: '🔹', desc: 'Sneaky little digger. +2 gems/sec AFK.' },
  { id: 'drill',      name: 'Power Drill',      emoji: '🔩', baseCost: 1200,   costMult: 4.2,  maxLevel: 4,  type: 'gemsPerClick',    amount: 3,    desc: 'Industrial might. +3 gems/click per level.' },
  { id: 'dwarf',      name: 'Dwarf Miner',      emoji: '🧙', baseCost: 2500,   costMult: 4.5,  maxLevel: 5,  type: 'autoMine',        amount: 3,    gemEmoji: '♦️',  desc: 'Expert craftsman. +3 gems/sec AFK.' },
  { id: 'radar',      name: 'Gem Radar',        emoji: '📡', baseCost: 3000,   costMult: 4.5,  maxLevel: 4,  type: 'rarityBonus',     amount: 0.20, desc: 'Tracks rare veins. +20% rare gem find rate.' },
  { id: 'cart',       name: 'Mine Cart',        emoji: '🛒', baseCost: 4000,   costMult: 4.8,  maxLevel: 4,  type: 'autoMine',        amount: 4,    gemEmoji: '💚', desc: 'Hauls loads automatically. +4 gems/sec AFK.' },
  { id: 'tnt',        name: 'Mining Charges',   emoji: '💣', baseCost: 5000,   costMult: 5.5,  maxLevel: 3,  type: 'gemsPerClick',    amount: 8,    desc: 'Blast radius! +8 gems/click per level.' },
  { id: 'vault',      name: 'Gold Vault',       emoji: '🏦', baseCost: 8000,   costMult: 5.5,  maxLevel: 3,  type: 'valueMultiplier', amount: 0.30, desc: 'Secure profits. +30% gem sell value.' },
  { id: 'robot',      name: 'Mining Robot',     emoji: '🤖', baseCost: 12000,  costMult: 6.0,  maxLevel: 4,  type: 'autoMine',        amount: 6,    gemEmoji: '💎', desc: 'Robotic miner. +6 gems/sec AFK.' },
  { id: 'lucky_pick', name: 'Lucky Pickaxe',    emoji: '🍀', baseCost: 15000,  costMult: 5.0,  maxLevel: 4,  type: 'clickChance',     amount: 0.08, desc: 'Fortune favours the bold. +8% click success chance.' },
  { id: 'black_mkt',  name: 'Black Market',     emoji: '🕵️', baseCost: 20000,  costMult: 6.0,  maxLevel: 3,  type: 'valueMultiplier', amount: 0.50, desc: 'No questions asked. +50% gem sell value.' },
  { id: 'dragon',     name: 'Cave Dragon',      emoji: '🐉', baseCost: 35000,  costMult: 7.0,  maxLevel: 3,  type: 'autoMine',        amount: 12,   gemEmoji: '🌕', desc: 'Ancient hoarding instincts. +12 gems/sec AFK.' },
  { id: 'earthquake', name: 'Earthquake Drill', emoji: '🌋', baseCost: 50000,  costMult: 6.5,  maxLevel: 3,  type: 'gemsPerClick',    amount: 15,   desc: 'Shake the mountain. +15 gems/click per level.' },
  { id: 'gem_magnet', name: 'Gem Magnet',       emoji: '🧲', baseCost: 60000,  costMult: 7.0,  maxLevel: 3,  type: 'rarityBonus',     amount: 0.35, desc: 'Attracts only the finest. +35% rare gem rate.' },
  { id: 'time_warp',  name: 'Time Warp Engine', emoji: '⏱',  baseCost: 80000,  costMult: 7.5,  maxLevel: 2,  type: 'autoMine',        amount: 20,   gemEmoji: '🔷', desc: 'Mines gems across time. +20 gems/sec AFK.' },
  { id: 'void_rig',   name: 'Void Drill Rig',   emoji: '🔮', baseCost: 100000, costMult: 8.5,  maxLevel: 2,  type: 'autoMine',        amount: 25,   gemEmoji: '🔮', desc: 'Drills into another dimension. +25 gems/sec AFK.' },
  { id: 'gem_forge',  name: 'Gem Forge',        emoji: '⚗️',  baseCost: 150000, costMult: 8.0,  maxLevel: 2,  type: 'valueMultiplier', amount: 1.00, desc: 'Refine raw gems. +100% sell value per level.' },
  { id: 'singularity',name: 'Mining Singularity',emoji:'🌀', baseCost: 500000, costMult: 10.0, maxLevel: 1,  type: 'autoMine',        amount: 100,  gemEmoji: '🔮', desc: 'A point of infinite density. +100 gems/sec AFK.' },
  { id: 'satchel',    name: 'Gem Satchel',       emoji:'🎒', baseCost: 200,    costMult: 3.0,  maxLevel: 6,  type: 'inventoryCap',    amount: 25,                   desc: 'Carry more gems. +25 inventory slots per level.' },
];

const ACHIEVEMENTS = [
  { id: 'first_click',   name: 'First Strike',        emoji: '⚒',  check: s => s.totalClicks >= 1        },
  { id: 'clicks_50',     name: 'Getting Warmed Up',   emoji: '🔥', check: s => s.totalClicks >= 50       },
  { id: 'clicks_500',    name: 'Mining Addict',       emoji: '💪', check: s => s.totalClicks >= 500      },
  { id: 'clicks_5000',   name: 'Carpal Tunnel Club',  emoji: '🖱', check: s => s.totalClicks >= 5000     },
  { id: 'gems_100',      name: 'Novice Miner',        emoji: '🪨', check: s => s.totalGems >= 100        },
  { id: 'gems_1000',     name: 'Gem Hunter',          emoji: '💚', check: s => s.totalGems >= 1000       },
  { id: 'gems_10000',    name: 'Gem Mogul',           emoji: '💎', check: s => s.totalGems >= 10000      },
  { id: 'gems_100000',   name: 'Gem God',             emoji: '🌋', check: s => s.totalGems >= 100000     },
  { id: 'profit_1000',   name: 'Side Hustle',         emoji: '💵', check: s => s.totalEarned >= 1000     },
  { id: 'profit_50000',  name: 'Gem Tycoon',          emoji: '💰', check: s => s.totalEarned >= 50000    },
  { id: 'profit_500k',   name: 'Mining Baron',        emoji: '🏆', check: s => s.totalEarned >= 500000   },
  { id: 'profit_5m',     name: 'Gem Billionaire',     emoji: '💸', check: s => s.totalEarned >= 5000000  },
  { id: 'ruby',          name: 'Red Vein Found',      emoji: '♦️',  check: s => (s.inventory['Ruby']     || 0) + (s.totalSold?.['Ruby']     || 0) >= 1 },
  { id: 'diamond',       name: 'Diamond Find',        emoji: '💎', check: s => (s.inventory['Diamond']  || 0) + (s.totalSold?.['Diamond']  || 0) >= 1 },
  { id: 'moonstone',     name: 'Lunar Touch',         emoji: '🌕', check: s => (s.inventory['Moonstone']|| 0) + (s.totalSold?.['Moonstone']|| 0) >= 1 },
  { id: 'void',          name: 'Beyond Darkness',     emoji: '🔮', check: s => (s.inventory['Void Gem'] || 0) + (s.totalSold?.['Void Gem'] || 0) >= 1 },
  { id: 'void_x5',       name: 'Void Collector',      emoji: '🌀', check: s => (s.inventory['Void Gem'] || 0) + (s.totalSold?.['Void Gem'] || 0) >= 5  },
  { id: 'upgrade1',      name: 'Tool Time',           emoji: '🔧', check: s => s.upgradesBought >= 1     },
  { id: 'upgrade5',      name: 'Workshop Ready',      emoji: '🔩', check: s => s.upgradesBought >= 5     },
  { id: 'upgrade10',     name: 'Full Arsenal',        emoji: '🏗', check: s => s.upgradesBought >= 10    },
  { id: 'upgrade20',     name: 'Max Loadout',         emoji: '🚀', check: s => s.upgradesBought >= 20    },
  { id: 'auto_mine',     name: 'Automation!',         emoji: '🤖', check: s => s.autoMine >= 1           },
  { id: 'auto_mine_20',  name: 'Factory Floor',       emoji: '🏭', check: s => s.autoMine >= 20          },
  { id: 'auto_mine_100', name: 'Infinite Mine',       emoji: '♾',  check: s => s.autoMine >= 100         },
  { id: 'rich_click',    name: 'Jackpot Click',       emoji: '🎰', check: s => s.gemsPerClick >= 20      },
  { id: 'sell_spree',    name: 'Cash Out King',       emoji: '🏧', check: s => (s.totalSellCount || 0) >= 50 },
  { id: 'hoarder',       name: 'Hoarder',             emoji: '🐲', check: s => Object.values(s.inventory).reduce((a,b)=>a+b,0) >= 500 },
  { id: 'void_rig_max',  name: 'Void Lord',           emoji: '👁', check: s => (s.upgradeLevels?.['void_rig'] || 0) >= 2 },
  { id: 'singularity_u', name: 'Singularity Achieved',emoji: '🌀', check: s => (s.upgradeLevels?.['singularity'] || 0) >= 1 },
];

const PLAYER_AVATARS = ['⛏','🧙','🤠','🤖','👾','🐉','🦊','🏴‍☠️','💎','🔮','⚗️','🌋','🦅','🐺','🐸','🧨','👑','🧲','🪄','⚡','🌀','🔥','❄️','☠️'];
const PLAYER_COLORS  = ['#f5c842','#e84040','#30d97a','#4090f5'];

const lobbies = new Map();
const sessions = new Map(); // sessionToken -> { lobbyCode, socketId, playerName }

function generateCode() {
  const words = ['GOLD','IRON','COAL','RUBY','JADE','OPAL','ONYX','GEMS'];
  return words[Math.floor(Math.random() * words.length)] + '-' + Math.floor(1000 + Math.random() * 9000);
}

function generateSessionToken() {
  return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
}

function createPlayerState(name, avatarIndex, colorIndex) {
  return {
    name,
    avatar: PLAYER_AVATARS[avatarIndex % PLAYER_AVATARS.length],
    color:  PLAYER_COLORS[colorIndex  % PLAYER_COLORS.length],
    totalGems: 0,
    profit: 0,
    totalEarned: 0,
    totalClicks: 0,
    clickChance: 0.55,
    gemsPerClick: 1,
    autoMine: 0,
    valueMultiplier: 1,
    rarityBonus: 0,
    upgradesBought: 0,
    inventoryCap: 50,
    inventory: {},
    achievementsUnlocked: [],
    upgradeLevels: {},
    totalSold: {},
    totalSellCount: 0,
  };
}

function rollGem(player) {
  const bonus = player.rarityBonus || 0;

  // Build adjusted weights: boost rare gems (low base rarity) by rarityBonus,
  // then pull weight proportionally from common gems so total stays stable.
  const weights = GEM_TYPES.map((gem, i) => {
    // Rarity index 0 = most common, last = rarest.
    // Give a proportional bonus to gems beyond the first two tiers.
    const rarityTier = i / (GEM_TYPES.length - 1); // 0..1
    const boost = 1 + bonus * rarityTier * 4;       // up to 4× at max tier
    return gem.rarity * boost;
  });

  const totalWeight = weights.reduce((s, w) => s + w, 0);
  let r = Math.random() * totalWeight;
  for (let i = 0; i < GEM_TYPES.length; i++) {
    r -= weights[i];
    if (r <= 0) return GEM_TYPES[i];
  }
  return GEM_TYPES[GEM_TYPES.length - 1];
}

function upgradeCost(upgradeId, level) {
  const u = UPGRADES.find(x => x.id === upgradeId);
  if (!u) return Infinity;
  return Math.floor(u.baseCost * Math.pow(u.costMult, level));
}

function applyUpgrade(player, upgradeId) {
  const u = UPGRADES.find(x => x.id === upgradeId);
  if (!u) return;
  switch (u.type) {
    case 'gemsPerClick':
      player.gemsPerClick += u.amount;
      player.clickChance = Math.min(1, player.clickChance + 0.05);
      break;
    case 'autoMine':        player.autoMine        += u.amount; break;
    case 'rarityBonus':     player.rarityBonus     += u.amount; break;
    case 'valueMultiplier': player.valueMultiplier += u.amount; break;
    case 'clickChance':     player.clickChance = Math.min(1, player.clickChance + u.amount); break;
    case 'inventoryCap':    player.inventoryCap = (player.inventoryCap || 50) + u.amount; break;
  }
}

function checkAchievements(player) {
  const newlyUnlocked = [];
  for (const a of ACHIEVEMENTS) {
    if (!player.achievementsUnlocked.includes(a.id) && a.check(player)) {
      player.achievementsUnlocked.push(a.id);
      newlyUnlocked.push({ id: a.id, name: a.name, emoji: a.emoji });
    }
  }
  return newlyUnlocked;
}

function broadcastLobbyState(lobby) {
  const players = Object.values(lobby.players);
  io.to(lobby.code).emit('lobby:state', {
    code: lobby.code,
    status: lobby.status,
    players: players.map(p => ({
      socketId: p.socketId,
      name: p.state.name,
      avatar: p.state.avatar,
      color: p.state.color,
    })),
  });
}

function broadcastGameState(lobby) {
  const snapshot = Object.entries(lobby.players).map(([sid, p]) => ({
    socketId: sid,
    name: p.state.name,
    avatar: p.state.avatar,
    color: p.state.color,
    totalGems: p.state.totalGems,
    profit: p.state.profit,
    totalEarned: p.state.totalEarned,
    totalClicks: p.state.totalClicks,
    autoMine: p.state.autoMine,
    upgradesBought: p.state.upgradesBought,
    achievementsUnlocked: p.state.achievementsUnlocked,
    unsoldValue: calcInventoryValue(p.state),
    team: p.team,
  }));
  io.to(lobby.code).emit('game:state', { players: snapshot });
}

function calcInventoryValue(state) {
  let total = 0;
  for (const gem of GEM_TYPES) {
    const count = state.inventory[gem.name] || 0;
    total += count * Math.floor(gem.value * state.valueMultiplier);
  }
  return total;
}

function startAutoMineInterval(lobby) {
  lobby.timer = setInterval(() => {
    let anyAutoMiner = false;
    for (const [sid, p] of Object.entries(lobby.players)) {
      if (p.state.autoMine > 0) {
        anyAutoMiner = true;
        const drops = [];
        for (let i = 0; i < p.state.autoMine; i++) {
          const gem = rollGem(p.state);
          p.state.inventory[gem.name] = (p.state.inventory[gem.name] || 0) + 1;
          p.state.totalGems++;
          drops.push({ emoji: gem.emoji, name: gem.name });
        }
        const newAch = checkAchievements(p.state);
        if (newAch.length) io.to(sid).emit('achievements:unlocked', newAch);
        io.to(sid).emit('automine:drops', { drops });
        io.to(sid).emit('player:self', playerSelfPayload(p.state));
      }
    }
    if (anyAutoMiner) broadcastGameState(lobby);
  }, 1000);
}

function playerSelfPayload(state) {
  return {
    totalGems: state.totalGems,
    profit: state.profit,
    totalEarned: state.totalEarned,
    totalClicks: state.totalClicks,
    clickChance: state.clickChance,
    gemsPerClick: state.gemsPerClick,
    autoMine: state.autoMine,
    valueMultiplier: state.valueMultiplier,
    rarityBonus: state.rarityBonus,
    upgradesBought: state.upgradesBought,
    inventoryCap: state.inventoryCap || 50,
    inventory: state.inventory,
    achievementsUnlocked: state.achievementsUnlocked,
    upgradeLevels: state.upgradeLevels,
  };
}

function endGame(lobby) {
  clearInterval(lobby.timer);
  if (lobby.timedEnd) clearTimeout(lobby.timedEnd);
  lobby.status = 'ended';
  const results = Object.values(lobby.players)
    .map(p => ({
      name: p.state.name,
      avatar: p.state.avatar,
      color: p.state.color,
      profit: p.state.profit,
      totalEarned: p.state.totalEarned,
      totalGems: p.state.totalGems,
      unsoldValue: calcInventoryValue(p.state),
      team: p.team,
    }));

  // Teams mode: rank by team combined score then individual
  if (lobby.gameMode === 'teams') {
    const teamScores = { A: 0, B: 0 };
    results.forEach(r => { if (r.team) teamScores[r.team] += r.totalEarned; });
    const winTeam = teamScores.A >= teamScores.B ? 'A' : 'B';
    results.sort((a, b) => {
      const aWin = a.team === winTeam ? 0 : 1;
      const bWin = b.team === winTeam ? 0 : 1;
      if (aWin !== bWin) return aWin - bWin;
      return b.totalEarned - a.totalEarned;
    });
  } else {
    results.sort((a, b) => b.totalEarned - a.totalEarned);
  }

  io.to(lobby.code).emit('game:ended', { results, mode: lobby.gameMode });
  setTimeout(() => lobbies.delete(lobby.code), 120_000);
}

io.on('connection', (socket) => {
  console.log('[+] Connected: ' + socket.id);

  // ── Session reconnect ──────────────────────────────────────────────────────
  socket.on('session:restore', ({ token }, callback) => {
    const session = sessions.get(token);
    if (!session) return callback?.({ ok: false });
    const lobby = lobbies.get(session.lobbyCode);
    if (!lobby) return callback?.({ ok: false });

    // Re-attach socket to player slot
    const player = lobby.players[session.socketId];
    if (!player) return callback?.({ ok: false });

    // Cancel any pending disconnect eviction
    if (lobby._disconnectTimers?.[session.socketId]) {
      clearTimeout(lobby._disconnectTimers[session.socketId]);
      delete lobby._disconnectTimers[session.socketId];
    }

    // Move player to new socket id
    lobby.players[socket.id] = player;
    delete lobby.players[session.socketId];
    if (lobby.hostId === session.socketId) lobby.hostId = socket.id;
    session.socketId = socket.id;

    socket.join(lobby.code);
    socket.data.lobbyCode = lobby.code;

    const isHost = lobby.hostId === socket.id;
    callback?.({
      ok: true,
      code: lobby.code,
      status: lobby.status,
      isHost,
      self: playerSelfPayload(player.state),
      mode: lobby.gameMode,
      duration: lobby.gameDuration,
    });

    if (lobby.status === 'waiting') {
      broadcastLobbyState(lobby);
    } else if (lobby.status === 'playing') {
      broadcastGameState(lobby);
    }
  });

  socket.on('lobby:create', ({ playerName, mode, duration }, callback) => {
    let code;
    do { code = generateCode(); } while (lobbies.has(code));
    const gameMode = mode || 'unlimited';
    const gameDuration = gameMode === 'timed' ? (duration || 300) : null;
    const lobby = { code, status: 'waiting', hostId: socket.id, players: {}, timer: null, gameMode, gameDuration };
    const state = createPlayerState(playerName || 'Miner', 0, 0);
    lobby.players[socket.id] = { socketId: socket.id, state, team: 'A' };
    lobbies.set(code, lobby);
    socket.join(code);
    socket.data.lobbyCode = code;
    const token = generateSessionToken();
    sessions.set(token, { lobbyCode: code, socketId: socket.id });
    callback({ ok: true, code, playerIndex: 0, self: playerSelfPayload(state), token, mode: gameMode, duration: gameDuration });
    broadcastLobbyState(lobby);
  });

  socket.on('lobby:join', ({ playerName, code }, callback) => {
    const lobby = lobbies.get(code.toUpperCase());
    if (!lobby) return callback({ ok: false, error: 'Lobby not found.' });
    const count = Object.keys(lobby.players).length;
    if (count >= MAX_PLAYERS) return callback({ ok: false, error: 'Lobby is full.' });
    const state = createPlayerState(playerName || 'Miner', count, count);
    // Teams: players 0,2 = Team A; players 1,3 = Team B
    const team = count % 2 === 0 ? 'A' : 'B';
    lobby.players[socket.id] = { socketId: socket.id, state, team };
    socket.join(code.toUpperCase());
    socket.data.lobbyCode = code.toUpperCase();
    const token = generateSessionToken();
    sessions.set(token, { lobbyCode: code.toUpperCase(), socketId: socket.id });
    callback({ ok: true, code: code.toUpperCase(), playerIndex: count, self: playerSelfPayload(state), token, mode: lobby.gameMode, duration: lobby.gameDuration });
    broadcastLobbyState(lobby);
  });

  socket.on('lobby:rename', ({ name }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby || lobby.status !== 'waiting') return callback?.({ ok: false });
    const p = lobby.players[socket.id];
    if (!p) return callback?.({ ok: false });
    const trimmed = (name || '').trim().slice(0, 16);
    if (!trimmed) return callback?.({ ok: false, error: 'Name cannot be empty.' });
    p.state.name = trimmed;
    callback?.({ ok: true });
    broadcastLobbyState(lobby);
  });

  socket.on('lobby:setAvatar', ({ avatar }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby || lobby.status !== 'waiting') return callback?.({ ok: false });
    const p = lobby.players[socket.id];
    if (!p) return callback?.({ ok: false });
    if (PLAYER_AVATARS.includes(avatar)) {
      p.state.avatar = avatar;
      callback?.({ ok: true });
      broadcastLobbyState(lobby);
    } else {
      callback?.({ ok: false, error: 'Invalid avatar.' });
    }
  });

  socket.on('game:start', (_, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false, error: 'No lobby.' });
    if (lobby.hostId !== socket.id) return callback?.({ ok: false, error: 'Only host can start.' });
    if (lobby.status !== 'waiting') return callback?.({ ok: false, error: 'Already started.' });
    lobby.status = 'playing';
    io.to(lobby.code).emit('game:started', { mode: lobby.gameMode, duration: lobby.gameDuration });
    startAutoMineInterval(lobby);
    broadcastGameState(lobby);
    // Timed mode: auto-end after duration
    if (lobby.gameMode === 'timed' && lobby.gameDuration) {
      lobby.timedEnd = setTimeout(() => {
        if (lobby.status === 'playing') endGame(lobby);
      }, lobby.gameDuration * 1000);
    }
    callback?.({ ok: true });
  });

  socket.on('game:end', (_, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false, error: 'No lobby.' });
    if (lobby.hostId !== socket.id) return callback?.({ ok: false, error: 'Only host can end.' });
    if (lobby.status !== 'playing') return callback?.({ ok: false, error: 'Game not in progress.' });
    endGame(lobby);
    callback?.({ ok: true });
  });

  socket.on('game:mine', (_, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby || lobby.status !== 'playing') return;
    const p = lobby.players[socket.id];
    if (!p) return;

    p.state.totalClicks++;

    const chance = p.state.clickChance || 0.55;
    if (Math.random() > chance) {
      const newAch = checkAchievements(p.state);
      if (newAch.length) socket.emit('achievements:unlocked', newAch);
      return callback?.({ ok: true, gemsAdded: 0, drops: [], miss: true, self: playerSelfPayload(p.state) });
    }

    // Check inventory cap
    const cap = p.state.inventoryCap || 50;
    const held = Object.values(p.state.inventory).reduce((s,v)=>s+v,0);
    if (held >= cap) {
      return callback?.({ ok: true, gemsAdded: 0, drops: [], miss: false, full: true, self: playerSelfPayload(p.state) });
    }

    const count = Math.min(Math.ceil(p.state.gemsPerClick), cap - held);
    const drops = [];
    for (let i = 0; i < count; i++) {
      const gem = rollGem(p.state);
      p.state.inventory[gem.name] = (p.state.inventory[gem.name] || 0) + 1;
      p.state.totalGems++;
      if (gem.value >= 18) drops.push({ emoji: gem.emoji, name: gem.name });
    }

    const newAch = checkAchievements(p.state);
    if (newAch.length) socket.emit('achievements:unlocked', newAch);
    callback?.({ ok: true, gemsAdded: count, drops, miss: false, self: playerSelfPayload(p.state) });
  });

  socket.on('game:sell', ({ gemName, quantity }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby || lobby.status !== 'playing') return callback?.({ ok: false, error: 'Not in game.' });
    const p = lobby.players[socket.id];
    if (!p) return callback?.({ ok: false });
    const gem = GEM_TYPES.find(g => g.name === gemName);
    if (!gem) return callback?.({ ok: false, error: 'Unknown gem.' });
    const held = p.state.inventory[gemName] || 0;
    const toSell = quantity === -1 ? held : Math.min(quantity, held);
    if (toSell <= 0) return callback?.({ ok: false, error: 'None to sell.' });
    const earned = toSell * Math.floor(gem.value * p.state.valueMultiplier);
    p.state.inventory[gemName] = held - toSell;
    if (p.state.inventory[gemName] === 0) delete p.state.inventory[gemName];
    p.state.profit += earned;
    p.state.totalEarned += earned;
    p.state.totalSold = p.state.totalSold || {};
    p.state.totalSold[gemName] = (p.state.totalSold[gemName] || 0) + toSell;
    p.state.totalSellCount = (p.state.totalSellCount || 0) + 1;
    const newAch = checkAchievements(p.state);
    if (newAch.length) socket.emit('achievements:unlocked', newAch);
    broadcastGameState(lobby);
    callback?.({ ok: true, earned, self: playerSelfPayload(p.state) });
  });

  socket.on('game:upgrade', ({ upgradeId }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby || lobby.status !== 'playing') return callback?.({ ok: false });
    const p = lobby.players[socket.id];
    if (!p) return callback?.({ ok: false });
    const u = UPGRADES.find(x => x.id === upgradeId);
    if (!u) return callback?.({ ok: false, error: 'Unknown upgrade.' });
    const currentLevel = p.state.upgradeLevels[upgradeId] || 0;
    if (currentLevel >= u.maxLevel) return callback?.({ ok: false, error: 'Already maxed.' });
    const cost = upgradeCost(upgradeId, currentLevel);
    if (p.state.profit < cost) return callback?.({ ok: false, error: 'Not enough profit.' });
    p.state.profit -= cost;
    p.state.upgradeLevels[upgradeId] = currentLevel + 1;
    applyUpgrade(p.state, upgradeId);
    p.state.upgradesBought++;
    const newAch = checkAchievements(p.state);
    if (newAch.length) socket.emit('achievements:unlocked', newAch);
    callback?.({ ok: true, self: playerSelfPayload(p.state) });
  });

  socket.on('disconnect', () => {
    console.log('[-] Disconnected: ' + socket.id);
    const code = socket.data.lobbyCode;
    if (!code) return;
    const lobby = lobbies.get(code);
    if (!lobby) return;

    // Give player 30s to reconnect before removing them
    const disconnectTimer = setTimeout(() => {
      if (!lobby.players[socket.id]) return; // already reconnected under new id
      delete lobby.players[socket.id];
      const remaining = Object.keys(lobby.players).length;
      if (remaining === 0) {
        clearInterval(lobby.timer);
        lobbies.delete(code);
      } else {
        if (lobby.hostId === socket.id) {
          lobby.hostId = Object.keys(lobby.players)[0];
          io.to(lobby.code).emit('lobby:newHost', { hostId: lobby.hostId });
        }
        if (lobby.status === 'waiting') broadcastLobbyState(lobby);
        else broadcastGameState(lobby);
      }
    }, 30000);

    // Store timer ref so reconnect can cancel it
    if (!lobby._disconnectTimers) lobby._disconnectTimers = {};
    lobby._disconnectTimers[socket.id] = disconnectTimer;

    if (lobby.status === 'waiting') broadcastLobbyState(lobby);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('GEM RUSH server running on port ' + PORT));
