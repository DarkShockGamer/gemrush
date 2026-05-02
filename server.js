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
  { name: 'Ruby',      emoji: '♦️',  color: '#e84040', value: 8,    rarity: 0.015  },
  { name: 'Emerald',   emoji: '💚', color: '#30d97a', value: 18,   rarity: 0.01  },
  { name: 'Sapphire',  emoji: '🔷', color: '#4090f5', value: 40,   rarity: 0.005  },
  { name: 'Diamond',   emoji: '💎', color: '#c0f0ff', value: 100,  rarity: 0.001 },
  { name: 'Moonstone',     emoji: '🌕', color: '#e8d8ff', value: 300,   rarity: 0.0004  },
  { name: 'Void Gem',     emoji: '🔮', color: '#9040f0', value: 1000,  rarity: 0.0001  },
  { name: 'Celestite',    emoji: '✨', color: '#ffe0ff', value: 3500,  rarity: 0.00003 },
  { name: 'Abyssal Shard',emoji: '🌑', color: '#1a0a3a', value: 12000, rarity: 0.000007},
  { name: 'Eternal Flame',emoji: '🔱', color: '#ff8c00', value: 50000, rarity: 0.0000015},
  { name: 'Genesis Crystal',emoji:'⭐', color: '#fff0a0', value: 250000,rarity: 0.0000002},
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
  { id: 'satchel',    name: 'Gem Satchel',       emoji:'🎒', baseCost: 500,    costMult: 4.5,  maxLevel: 6,  type: 'inventoryCap',    amount: 0,                    desc: 'Doubles your bag capacity each upgrade. Starts at 50 slots.' },
  { id: 'gem_insurance', name: 'Gem Insurance',  emoji: '🛡', baseCost: 2500,  costMult: 1.0,  maxLevel: 1,  type: 'sabotageShield',  amount: 1,    desc: 'Blocks the next sabotage you receive. One-time use, recharge by repurchasing.' },
  { id: 'bulk_sell',  name: 'Auto Sell',         emoji: '📦', baseCost: 3500,  costMult: 2.2,  maxLevel: 5,  type: 'bulkSell',        amount: 1,    desc: 'Auto-sells when inventory is full. Each level reduces the delay.' },
];

// Auto-sell delay (ms) per level: 1->2s, 2->1.5s, 3->1s, 4->0.5s, 5->instant
const AUTO_SELL_DELAY_MS = [0, 2000, 1500, 1000, 500, 0];
function getAutoSellDelayMs(level) {
  return AUTO_SELL_DELAY_MS[Math.min(level, AUTO_SELL_DELAY_MS.length - 1)] || 0;
}

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
  { id: 'void',          name: 'Beyond Darkness',     emoji: '🔮', check: s => (s.inventory['Void Gem']       || 0) + (s.totalSold?.['Void Gem']       || 0) >= 1 },
  { id: 'void_x5',       name: 'Void Collector',      emoji: '🌀', check: s => (s.inventory['Void Gem']       || 0) + (s.totalSold?.['Void Gem']       || 0) >= 5 },
  { id: 'celestite',     name: 'Star Touched',        emoji: '✨', check: s => (s.inventory['Celestite']      || 0) + (s.totalSold?.['Celestite']      || 0) >= 1 },
  { id: 'abyssal',       name: 'Depths of Despair',   emoji: '🌑', check: s => (s.inventory['Abyssal Shard']  || 0) + (s.totalSold?.['Abyssal Shard']  || 0) >= 1 },
  { id: 'eternal_flame', name: 'The Undying Ember',   emoji: '🔱', check: s => (s.inventory['Eternal Flame']  || 0) + (s.totalSold?.['Eternal Flame']  || 0) >= 1 },
  { id: 'genesis',       name: 'In the Beginning',    emoji: '⭐', check: s => (s.inventory['Genesis Crystal']|| 0) + (s.totalSold?.['Genesis Crystal']|| 0) >= 1 },
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

const SABOTAGES = [
  { id: 'freeze',     name: 'Freeze',      emoji: '🧊', baseCost: 300,  desc: 'Halts their auto-miners for 15 seconds.' },
  { id: 'pickpocket', name: 'Pickpocket',  emoji: '🪤', baseCost: 500,  desc: 'Steals 8% of their held inventory gems.' },
  { id: 'cursed_vein',name: 'Cursed Vein', emoji: '☠️', baseCost: 800,  desc: 'Their next 10 clicks are guaranteed misses.' },
  { id: 'gem_tax',    name: 'Gem Tax',     emoji: '💸', baseCost: 650,  desc: 'Steals 15% of the value of their next sell.' },
  { id: 'pickaxe_jam',name: 'Pickaxe Jam', emoji: '🔧', baseCost: 450,  desc: 'Halves their gems per click for 20 seconds.' },
];
// Scaling: cost = baseCost * (1 + timesUsed * 0.35)^2
function sabotageCost(sab, timesUsed) {
  return Math.floor(sab.baseCost * Math.pow(1 + timesUsed * 0.35, 2));
}

// ── PRESTIGE ─────────────────────────────────────────────────────────────────
// Each rank requires a cumulative totalEarned threshold (in a single run or
// across all runs — here we use lifetime totalEarned stored across sessions).
// The bonus is a permanent value-multiplier added on top of each prestige.
const PRESTIGE_RANKS = [
  { rank: 1,  label: 'I',    emoji: '🌑', threshold: 50000,    bonus: 0.10, color: '#aaaaaa' },
  { rank: 2,  label: 'II',   emoji: '🌒', threshold: 200000,   bonus: 0.10, color: '#aaaaaa' },
  { rank: 3,  label: 'III',  emoji: '🌓', threshold: 750000,   bonus: 0.15, color: '#f5c842' },
  { rank: 4,  label: 'IV',   emoji: '🌔', threshold: 2500000,  bonus: 0.15, color: '#f5c842' },
  { rank: 5,  label: 'V',    emoji: '🌕', threshold: 8000000,  bonus: 0.20, color: '#30d97a' },
  { rank: 6,  label: 'VI',   emoji: '🔮', threshold: 25000000, bonus: 0.25, color: '#9040f0' },
  { rank: 7,  label: 'VII',  emoji: '💀', threshold: 100000000,bonus: 0.30, color: '#e84040' },
];

// Prestige-only upgrades unlocked after rank 1+
const PRESTIGE_UPGRADES = [
  { id: 'deep_core',    name: 'Deep Core Drill',   emoji: '⚙️',  baseCost: 5000,   costMult: 5.0, maxLevel: 4, type: 'autoMine',        amount: 8,    desc: 'Drills the deep earth. +8 gems/sec AFK. [Prestige only]' },
  { id: 'dark_matter',  name: 'Dark Matter Lens',  emoji: '🌑',  baseCost: 10000,  costMult: 5.5, maxLevel: 3, type: 'rarityBonus',     amount: 0.50, desc: 'Bends reality to find rarer gems. +50% rare gem rate. [Prestige only]' },
  { id: 'golden_heart', name: 'Golden Heart',      emoji: '💛',  baseCost: 20000,  costMult: 6.0, maxLevel: 3, type: 'valueMultiplier', amount: 0.75, desc: 'Every gem pulses with gold. +75% sell value per level. [Prestige only]' },
  { id: 'void_soul',    name: 'Void Soul',         emoji: '👁',  baseCost: 50000,  costMult: 8.0, maxLevel: 2, type: 'autoMine',        amount: 30,   gemEmoji: '🔮', desc: 'Your very essence mines. +30 gems/sec AFK. [Prestige only]' },
];

const PLAYER_AVATARS = ['⛏','🧙','🤠','🤖','👾','🐉','🦊','🏴‍☠️','💎','🔮','⚗️','🌋','🦅','🐺','🐸','🧨','👑','🧲','🪄','⚡','🌀','🔥','❄️','☠️'];
const PLAYER_COLORS  = ['#f5c842','#e84040','#30d97a','#4090f5'];

const lobbies = new Map();
const sessions = new Map(); // sessionToken -> { lobbyCode, socketId, playerName, isSpectator }

// Public lobby list endpoint
app.get('/api/lobbies', (req, res) => {
  const publicLobbies = [];
  for (const [code, lobby] of lobbies.entries()) {
    if (lobby.isPublic && lobby.status === 'waiting') {
      publicLobbies.push({
        code,
        playerCount: Object.keys(lobby.players).length,
        maxPlayers: MAX_PLAYERS,
        gameMode: lobby.gameMode,
        gameDuration: lobby.gameDuration,
        hostName: Object.values(lobby.players)[0]?.state?.name || 'Unknown',
      });
    }
  }
  // Also expose in-progress lobbies for spectating
  for (const [code, lobby] of lobbies.entries()) {
    if (lobby.isPublic && lobby.status === 'playing') {
      publicLobbies.push({
        code,
        playerCount: Object.keys(lobby.players).length,
        spectatorCount: Object.keys(lobby.spectators || {}).length,
        maxPlayers: MAX_PLAYERS,
        gameMode: lobby.gameMode,
        gameDuration: lobby.gameDuration,
        hostName: Object.values(lobby.players)[0]?.state?.name || 'Unknown',
        inProgress: true,
      });
    }
  }
  res.json(publicLobbies);
});

function generateCode() {
  const words = ['GOLD','IRON','COAL','RUBY','JADE','OPAL','ONYX','GEMS'];
  return words[Math.floor(Math.random() * words.length)] + '-' + Math.floor(1000 + Math.random() * 9000);
}

function generateSessionToken() {
  return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
}

function createPlayerState(name, avatarIndex, colorIndex, prestigeData) {
  const pd = prestigeData || {};
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
    clickRemainder: 0,
    autoMine: 0,
    valueMultiplier: 1 + (pd.prestigeBonus || 0),
    rarityBonus: 0,
    upgradesBought: 0,
    inventoryCap: 50,
    inventory: {},
    achievementsUnlocked: [],
    upgradeLevels: {},
    totalSold: {},
    totalSellCount: 0,
    sabotageUses: {},
    sabotageCooldowns: {},
    frozenUntil: 0,
    cursedClicksLeft: 0,
    sabotageShield: false,
    pickaxeJamUntil: 0,
    gemTaxPending: 0,
    gemTaxAttackerSocketId: null,
    bulkSellInterval: null,
    prestigeRank: pd.prestigeRank || 0,
    prestigeBonus: pd.prestigeBonus || 0,
    lifetimeEarned: pd.lifetimeEarned || 0,
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
  const u = UPGRADES.find(x => x.id === upgradeId) || PRESTIGE_UPGRADES.find(x => x.id === upgradeId);
  if (!u) return Infinity;
  return Math.floor(u.baseCost * Math.pow(u.costMult, level));
}

function applyUpgrade(player, upgradeId) {
  const u = UPGRADES.find(x => x.id === upgradeId) || PRESTIGE_UPGRADES.find(x => x.id === upgradeId);
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
    case 'inventoryCap':    player.inventoryCap = (player.inventoryCap || 50) * 2; break;
    case 'sabotageShield':  player.sabotageShield = true; break;
    case 'bulkSell':        player.hasBulkSell = true; player.bulkSellLevel = (player.upgradeLevels['bulk_sell'] || 0); break;
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
  const spectators = Object.values(lobby.spectators || {});
  io.to(lobby.code).emit('lobby:state', {
    code: lobby.code,
    status: lobby.status,
    hostId: lobby.hostId,
    isPublic: lobby.isPublic || false,
    gameMode: lobby.gameMode,
    gameDuration: lobby.gameDuration,
    players: players.map(p => ({
      socketId: p.socketId,
      name: p.state.name,
      avatar: p.state.avatar,
      color: p.state.color,
    })),
    spectators: spectators.map(s => ({
      socketId: s.socketId,
      name: s.name,
      avatar: s.avatar,
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
    prestigeRank: p.state.prestigeRank || 0,
    lives: p.state.lives,
    maxLives: p.state.maxLives,
    eliminated: p.state.eliminated || false,
  }));
  const spectatorCount = Object.keys(lobby.spectators || {}).length;
  io.to(lobby.code).emit('game:state', { players: snapshot, spectatorCount });
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
    const now = Date.now();
    for (const [sid, p] of Object.entries(lobby.players)) {
      // ── Auto Sell: check if a pending auto-sell timer has fired ──────────
      if (p.state.hasBulkSell && p.state.bulkSellPendingAt && now >= p.state.bulkSellPendingAt) {
        p.state.bulkSellPendingAt = null;
        const inv = p.state.inventory;
        let autoEarned = 0;
        for (const gem of GEM_TYPES) {
          const count = inv[gem.name] || 0;
          if (count <= 0) continue;
          const saleValue = Math.floor(count * Math.floor(gem.value * p.state.valueMultiplier));
          autoEarned += saleValue;
          p.state.totalSold = p.state.totalSold || {};
          p.state.totalSold[gem.name] = (p.state.totalSold[gem.name] || 0) + count;
          p.state.totalSellCount = (p.state.totalSellCount || 0) + 1;
          delete inv[gem.name];
        }
        if (autoEarned > 0) {
          p.state.profit += autoEarned;
          p.state.totalEarned += autoEarned;
          io.to(sid).emit('bulksell:triggered', { earned: autoEarned });
          io.to(sid).emit('player:self', playerSelfPayload(p.state));
          anyAutoMiner = true;
        }
      }
      if (p.state.autoMine > 0) {
        // Skip auto-mine if frozen
        if (p.state.frozenUntil && Date.now() < p.state.frozenUntil) continue;
        anyAutoMiner = true;
        const amCap = p.state.inventoryCap || 50;
        const amHeld = Object.values(p.state.inventory).reduce((s,v)=>s+v,0);
        // Don't auto-mine past cap (unless auto-sell pending, let it fill naturally)
        if (amHeld < amCap) {
          const drops = [];
          const toMine = Math.min(p.state.autoMine, amCap - amHeld);
          for (let i = 0; i < toMine; i++) {
            const gem = rollGem(p.state);
            p.state.inventory[gem.name] = (p.state.inventory[gem.name] || 0) + 1;
            p.state.totalGems++;
            drops.push({ emoji: gem.emoji, name: gem.name });
          }
          const newAch = checkAchievements(p.state);
          if (newAch.length) io.to(sid).emit('achievements:unlocked', newAch);
          io.to(sid).emit('automine:drops', { drops });
          // Check if now full — trigger auto-sell
          const afterHeld = Object.values(p.state.inventory).reduce((s,v)=>s+v,0);
          if (p.state.hasBulkSell && afterHeld >= amCap && !p.state.bulkSellPendingAt) {
            const bsLvl = p.state.upgradeLevels?.['bulk_sell'] || 1;
            p.state.bulkSellPendingAt = now + getAutoSellDelayMs(bsLvl);
          }
        }
        io.to(sid).emit('player:self', playerSelfPayload(p.state));
      }
    }
    if (anyAutoMiner) broadcastGameState(lobby);
  }, 1000);
}

function playerSelfPayload(state) {
  return {
    name: state.name,
    avatar: state.avatar,
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
    sabotageUses: state.sabotageUses || {},
    sabotageCooldowns: state.sabotageCooldowns || {},
    frozenUntil: state.frozenUntil || 0,
    cursedClicksLeft: state.cursedClicksLeft || 0,
    pickaxeJamUntil: state.pickaxeJamUntil || 0,
    gemTaxPending: state.gemTaxPending || 0,
    sabotageShield: state.sabotageShield || false,
    hasBulkSell: state.hasBulkSell || false,
    bulkSellLevel: state.upgradeLevels?.['bulk_sell'] || 0,
    bulkSellPendingAt: state.bulkSellPendingAt || 0,
    prestigeRank: state.prestigeRank || 0,
    prestigeBonus: state.prestigeBonus || 0,
    lifetimeEarned: state.lifetimeEarned || 0,
    lives: state.lives,
    maxLives: state.maxLives,
    eliminated: state.eliminated || false,
  };
}

function computeAwards(lobby) {
  const players = Object.values(lobby.players).map(p => p.state);
  if (players.length < 2) return [];
  const awards = [];

  // 🐢 Slowest Seller — most gems still in inventory at end
  const sorted_unsold = [...players].sort((a,b) => {
    const ua = Object.values(a.inventory).reduce((s,v)=>s+v,0);
    const ub = Object.values(b.inventory).reduce((s,v)=>s+v,0);
    return ub - ua;
  });
  const hoardCount = Object.values(sorted_unsold[0].inventory).reduce((s,v)=>s+v,0);
  if (hoardCount > 0) awards.push({ emoji:'🐢', title:'Slowest Seller', desc:`${sorted_unsold[0].name} had ${hoardCount} gems still in their bag!` });

  // 🎰 Luckiest Miner — most Void Gems ever found
  const sorted_void = [...players].sort((a,b) =>
    ((b.inventory['Void Gem']||0) + (b.totalSold?.['Void Gem']||0)) - ((a.inventory['Void Gem']||0) + (a.totalSold?.['Void Gem']||0))
  );
  const voidCount = (sorted_void[0].inventory['Void Gem']||0) + (sorted_void[0].totalSold?.['Void Gem']||0);
  if (voidCount > 0) awards.push({ emoji:'🎰', title:'Luckiest Miner', desc:`${sorted_void[0].name} found ${voidCount} Void Gem${voidCount>1?'s':''}!` });

  // 🤖 Most AFK — highest auto-mine rate
  const sorted_afk = [...players].sort((a,b) => b.autoMine - a.autoMine);
  if (sorted_afk[0].autoMine > 0) awards.push({ emoji:'🤖', title:'AFK Champion', desc:`${sorted_afk[0].name} reached ${sorted_afk[0].autoMine} gems/sec on auto-mine.` });

  // 😈 Chaos Agent — most sabotages used
  const sorted_sab = [...players].sort((a,b) => {
    const ua = Object.values(a.sabotageUses||{}).reduce((s,v)=>s+v,0);
    const ub = Object.values(b.sabotageUses||{}).reduce((s,v)=>s+v,0);
    return ub - ua;
  });
  const sabCount = Object.values(sorted_sab[0].sabotageUses||{}).reduce((s,v)=>s+v,0);
  if (sabCount > 0) awards.push({ emoji:'😈', title:'Chaos Agent', desc:`${sorted_sab[0].name} sabotaged others ${sabCount} time${sabCount>1?'s':''}!` });

  // 🖱️ Click Maniac — most clicks
  const sorted_clicks = [...players].sort((a,b) => b.totalClicks - a.totalClicks);
  awards.push({ emoji:'🖱️', title:'Click Maniac', desc:`${sorted_clicks[0].name} clicked ${sorted_clicks[0].totalClicks.toLocaleString()} times!` });

  return awards;
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

  io.to(lobby.code).emit('game:ended', { results, mode: lobby.gameMode, awards: computeAwards(lobby) });

  // No auto-return — host manually triggers return via lobby:returnToLobby
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

  socket.on('lobby:create', ({ playerName, mode, duration, isPublic, rushTarget, lastMinerLives }, callback) => {
    let code;
    do { code = generateCode(); } while (lobbies.has(code));
    const gameMode = mode || 'unlimited';
    const gameDuration = gameMode === 'timed' ? (duration || 300) : null;
    const rushGoal = gameMode === 'rushHour' ? (rushTarget || 10000) : null;
    const maxLives = gameMode === 'lastMiner' ? (lastMinerLives || 3) : null;
    const lobby = { code, status: 'waiting', hostId: socket.id, players: {}, spectators: {}, timer: null, gameMode, gameDuration, rushGoal, maxLives, isPublic: !!isPublic };
    const state = createPlayerState(playerName || 'Miner', 0, 0);
    lobby.players[socket.id] = { socketId: socket.id, state, team: 'A' };
    lobbies.set(code, lobby);
    socket.join(code);
    socket.data.lobbyCode = code;
    const token = generateSessionToken();
    sessions.set(token, { lobbyCode: code, socketId: socket.id });
    callback({ ok: true, code, playerIndex: 0, self: playerSelfPayload(state), token, mode: gameMode, duration: gameDuration, rushGoal, maxLives });
    broadcastLobbyState(lobby);
  });

  socket.on('lobby:join', ({ playerName, code }, callback) => {
    const lobby = lobbies.get(code.toUpperCase());
    if (!lobby) return callback({ ok: false, error: 'Lobby not found.' });
    if (lobby.status === 'ended') return callback({ ok: false, error: 'This game has ended.' });

    // Allow joining as spectator if game is in progress
    if (lobby.status === 'playing' || lobby.status === 'countdown') {
      const spectatorName = (playerName || 'Spectator').trim().slice(0, 16);
      const spectatorAvatars = ['👁','🍿','📺','🎭','👻'];
      const spectatorAvatar = spectatorAvatars[Object.keys(lobby.spectators || {}).length % spectatorAvatars.length];
      if (!lobby.spectators) lobby.spectators = {};
      lobby.spectators[socket.id] = { socketId: socket.id, name: spectatorName, avatar: spectatorAvatar };
      socket.join(code.toUpperCase());
      socket.data.lobbyCode = code.toUpperCase();
      socket.data.isSpectator = true;
      const token = generateSessionToken();
      sessions.set(token, { lobbyCode: code.toUpperCase(), socketId: socket.id, isSpectator: true });

      // Send current game state snapshot to new spectator
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
        prestigeRank: p.state.prestigeRank || 0,
      }));

      callback({ ok: true, code: code.toUpperCase(), isSpectator: true, token, mode: lobby.gameMode, duration: lobby.gameDuration, spectatorName, spectatorAvatar });

      // Notify lobby of new spectator via chat
      io.to(lobby.code).emit('lobby:chatMessage', {
        name: 'System',
        avatar: '👁',
        color: '#6a7090',
        text: `${spectatorAvatar} ${spectatorName} joined as spectator`,
        socketId: 'system',
        isSpectator: true,
      });

      // Send current game state to spectator
      socket.emit('game:state', { players: snapshot, spectatorCount: Object.keys(lobby.spectators).length });
      broadcastGameState(lobby);
      return;
    }

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

  socket.on('lobby:changeMode', ({ mode, duration, rushTarget, lastMinerLives }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false, error: 'No lobby.' });
    if (lobby.hostId !== socket.id) return callback?.({ ok: false, error: 'Only host can change mode.' });
    if (lobby.status !== 'waiting') return callback?.({ ok: false, error: 'Cannot change mode during game.' });
    lobby.gameMode = mode || 'unlimited';
    lobby.gameDuration = lobby.gameMode === 'timed' ? (duration || 300) : null;
    lobby.rushGoal = lobby.gameMode === 'rushHour' ? (rushTarget || 10000) : null;
    lobby.maxLives = lobby.gameMode === 'lastMiner' ? (lastMinerLives || 3) : null;
    io.to(lobby.code).emit('lobby:modeChanged', { mode: lobby.gameMode, duration: lobby.gameDuration, rushGoal: lobby.rushGoal, maxLives: lobby.maxLives });
    callback?.({ ok: true, mode: lobby.gameMode, duration: lobby.gameDuration, rushGoal: lobby.rushGoal, maxLives: lobby.maxLives });
  });

  socket.on('lobby:leave', (_, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false });
    if (lobby.hostId === socket.id) return callback?.({ ok: false, error: 'Host cannot leave. End the game or close the lobby instead.' });
    delete lobby.players[socket.id];
    socket.leave(lobby.code);
    socket.data.lobbyCode = null;
    // Clear session
    for (const [token, sess] of sessions.entries()) {
      if (sess.socketId === socket.id) { sessions.delete(token); break; }
    }
    callback?.({ ok: true });
    if (lobby.status === 'waiting') broadcastLobbyState(lobby);
    else broadcastGameState(lobby);
  });

  socket.on('lobby:end', (_, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false, error: 'No lobby.' });
    if (lobby.hostId !== socket.id) return callback?.({ ok: false, error: 'Only host can end the lobby.' });
    if (lobby.status === 'playing') {
      clearInterval(lobby.timer);
      if (lobby.timedEnd) clearTimeout(lobby.timedEnd);
    }
    io.to(lobby.code).emit('lobby:closed', { reason: 'Host ended the lobby.' });
    // Clean up sessions for all players in this lobby
    for (const [token, sess] of sessions.entries()) {
      if (sess.lobbyCode === lobby.code) sessions.delete(token);
    }
    lobbies.delete(lobby.code);
    callback?.({ ok: true });
  });

  socket.on('lobby:setPublic', ({ isPublic }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false });
    if (lobby.hostId !== socket.id) return callback?.({ ok: false, error: 'Only host can change visibility.' });
    lobby.isPublic = !!isPublic;
    callback?.({ ok: true, isPublic: lobby.isPublic });
    io.to(lobby.code).emit('lobby:visibilityChanged', { isPublic: lobby.isPublic });
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

  socket.on('lobby:chat', ({ text }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false });
    const isSpectator = socket.data.isSpectator;
    const spectator = isSpectator ? lobby.spectators?.[socket.id] : null;
    const p = !isSpectator ? lobby.players[socket.id] : null;
    if (!p && !spectator) return callback?.({ ok: false });
    const trimmed = (text || '').trim().slice(0, 200);
    if (!trimmed) return callback?.({ ok: false });
    const senderName  = isSpectator ? spectator.name  : p.state.name;
    const senderAvatar= isSpectator ? spectator.avatar : p.state.avatar;
    const senderColor = isSpectator ? '#6a7090' : p.state.color;
    io.to(lobby.code).emit('lobby:chatMessage', {
      name: senderName,
      avatar: senderAvatar,
      color: senderColor,
      text: trimmed,
      isMe: false,
      socketId: socket.id,
      isSpectator: !!isSpectator,
    });
    callback?.({ ok: true });
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

  // ── Kick player (host only) ──────────────────────────────────────────────────
  socket.on('lobby:kick', ({ targetSocketId, reason }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false, error: 'No lobby.' });
    if (lobby.hostId !== socket.id) return callback?.({ ok: false, error: 'Only host can kick.' });
    if (targetSocketId === socket.id) return callback?.({ ok: false, error: 'Cannot kick yourself.' });

    const kickReason = (reason || 'Kicked by host').trim().slice(0, 80);

    // Check if target is a spectator first
    if (lobby.spectators?.[targetSocketId]) {
      const spec = lobby.spectators[targetSocketId];
      delete lobby.spectators[targetSocketId];
      io.to(targetSocketId).emit('lobby:kicked', { reason: kickReason });
      // Clean up session
      for (const [token, sess] of sessions.entries()) {
        if (sess.socketId === targetSocketId) { sessions.delete(token); break; }
      }
      // Notify lobby
      io.to(lobby.code).emit('lobby:chatMessage', {
        name: 'System', avatar: '🚫', color: '#e84040',
        text: `${spec.avatar} ${spec.name} was removed by the host.`,
        socketId: 'system',
      });
      broadcastGameState(lobby);
      return callback?.({ ok: true });
    }

    // Kick a player
    const target = lobby.players[targetSocketId];
    if (!target) return callback?.({ ok: false, error: 'Player not found.' });

    io.to(targetSocketId).emit('lobby:kicked', { reason: kickReason });
    delete lobby.players[targetSocketId];

    // Clean up session
    for (const [token, sess] of sessions.entries()) {
      if (sess.socketId === targetSocketId) { sessions.delete(token); break; }
    }

    // Notify lobby
    io.to(lobby.code).emit('lobby:chatMessage', {
      name: 'System', avatar: '🚫', color: '#e84040',
      text: `${target.state.avatar} ${target.state.name} was kicked by the host.`,
      socketId: 'system',
    });

    if (lobby.status === 'waiting') broadcastLobbyState(lobby);
    else broadcastGameState(lobby);
    callback?.({ ok: true });
  });

  // ── Transfer host ─────────────────────────────────────────────────────────────
  socket.on('lobby:transferHost', ({ targetSocketId }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false, error: 'No lobby.' });
    if (lobby.hostId !== socket.id) return callback?.({ ok: false, error: 'Only host can transfer.' });
    if (targetSocketId === socket.id) return callback?.({ ok: false, error: 'Already the host.' });
    const target = lobby.players[targetSocketId];
    if (!target) return callback?.({ ok: false, error: 'Player not found.' });

    lobby.hostId = targetSocketId;
    io.to(lobby.code).emit('lobby:newHost', { hostId: targetSocketId });
    io.to(lobby.code).emit('lobby:chatMessage', {
      name: 'System', avatar: '👑', color: '#f5c842',
      text: `${target.state.avatar} ${target.state.name} is now the host.`,
      socketId: 'system',
    });
    if (lobby.status === 'waiting') broadcastLobbyState(lobby);
    callback?.({ ok: true });
  });

  socket.on('game:start', (_, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false, error: 'No lobby.' });
    if (lobby.hostId !== socket.id) return callback?.({ ok: false, error: 'Only host can start.' });
    if (lobby.status !== 'waiting') return callback?.({ ok: false, error: 'Already started.' });
    lobby.status = 'countdown';
    callback?.({ ok: true });
    // Broadcast 3 -> 2 -> 1 then launch
    [3, 2, 1].forEach((n, i) => {
      setTimeout(() => io.to(lobby.code).emit('game:countdown', { count: n }), i * 1000);
    });
    setTimeout(() => {
      if (lobby.status !== 'countdown') return;
      lobby.status = 'playing';
      io.to(lobby.code).emit('game:started', { mode: lobby.gameMode, duration: lobby.gameDuration, rushGoal: lobby.rushGoal, maxLives: lobby.maxLives });
      startAutoMineInterval(lobby);
      broadcastGameState(lobby);
      if (lobby.gameMode === 'timed' && lobby.gameDuration) {
        lobby.timedEnd = setTimeout(() => {
          if (lobby.status === 'playing') endGame(lobby);
        }, lobby.gameDuration * 1000);
      }
      // Rush Hour: no timer, check on sells
      // Last Miner: give all players lives
      if (lobby.gameMode === 'lastMiner') {
        for (const p of Object.values(lobby.players)) {
          p.state.lives = lobby.maxLives || 3;
          p.state.maxLives = lobby.maxLives || 3;
          p.state.eliminated = false;
        }
        broadcastGameState(lobby);
      }
    }, 3000);
  });

  socket.on('game:end', (_, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false, error: 'No lobby.' });
    if (lobby.hostId !== socket.id) return callback?.({ ok: false, error: 'Only host can end.' });
    if (lobby.status !== 'playing') return callback?.({ ok: false, error: 'Game not in progress.' });
    endGame(lobby);
    callback?.({ ok: true });
  });

  socket.on('lobby:returnToLobby', (_, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby) return callback?.({ ok: false, error: 'No lobby.' });
    if (lobby.hostId !== socket.id) return callback?.({ ok: false, error: 'Only host can return to lobby.' });
    if (lobby.status !== 'ended') return callback?.({ ok: false, error: 'Game has not ended.' });
    lobby.status = 'waiting';
    lobby.timer = null;
    lobby.timedEnd = null;

    // Dismiss spectators — notify them with the lobby code so they can rejoin as players
    if (lobby.spectators) {
      for (const [sid] of Object.entries(lobby.spectators)) {
        io.to(sid).emit('spectator:gameDone', {
          message: 'The game ended. Returning to lobby...',
          lobbyCode: lobby.code,
        });
        // Clean up sessions for spectators
        for (const [token, sess] of sessions.entries()) {
          if (sess.socketId === sid) { sessions.delete(token); break; }
        }
      }
      lobby.spectators = {};
    }

    let colorIdx = 0;
    for (const [sid, p] of Object.entries(lobby.players)) {
      const { name, avatar, color } = p.state;
      const pd = {
        prestigeRank: p.state.prestigeRank || 0,
        prestigeBonus: p.state.prestigeBonus || 0,
        lifetimeEarned: (p.state.lifetimeEarned || 0) + (p.state.totalEarned || 0),
      };
      p.state = createPlayerState(name, 0, colorIdx, pd);
      p.state.avatar = avatar;
      p.state.color = color;
      colorIdx++;
    }
    broadcastLobbyState(lobby);
    io.to(lobby.code).emit('lobby:returnedFromGame', {
      code: lobby.code,
      mode: lobby.gameMode,
      duration: lobby.gameDuration,
    });
    callback?.({ ok: true });
  });

  socket.on('game:mine', (_, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby || lobby.status !== 'playing') return;
    const p = lobby.players[socket.id];
    if (!p) return;

    // Last Miner: eliminated players cannot mine
    if (p.state.eliminated) return callback?.({ ok: false, error: 'You have been eliminated.' });

    p.state.totalClicks++;

    // Cursed vein: forced misses
    if (p.state.cursedClicksLeft > 0) {
      p.state.cursedClicksLeft--;
      const newAch = checkAchievements(p.state);
      if (newAch.length) socket.emit('achievements:unlocked', newAch);
      return callback?.({ ok: true, gemsAdded: 0, drops: [], miss: true, cursed: true, self: playerSelfPayload(p.state) });
    }

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

    // Pickaxe jam: halve gems per click
    const isJammed = p.state.pickaxeJamUntil && Date.now() < p.state.pickaxeJamUntil;
    const effectiveGpc = isJammed ? Math.max(1, p.state.gemsPerClick / 2) : p.state.gemsPerClick;
    // Fractional accumulator: carry over the decimal portion across clicks
    // so 3.5/click alternates +3, +4, +3, +4 rather than always rounding up to +4
    p.state.clickRemainder = (p.state.clickRemainder || 0) + effectiveGpc;
    const wholeGems = Math.floor(p.state.clickRemainder);
    p.state.clickRemainder -= wholeGems;
    const count = Math.min(wholeGems, cap - held);
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

    // Auto-sell trigger: if inventory is now full and player has auto-sell, schedule a delayed sell
    const newHeld = Object.values(p.state.inventory).reduce((s,v)=>s+v,0);
    if (p.state.hasBulkSell && newHeld >= cap && !p.state.bulkSellPendingAt) {
      const lvl = p.state.upgradeLevels?.['bulk_sell'] || 1;
      const delayMs = getAutoSellDelayMs(lvl);
      p.state.bulkSellPendingAt = Date.now() + delayMs;
    }

    // Broadcast very rare finds (Moonstone / Void Gem) to entire lobby
    // Throttled per player per gem: Moonstone max once/30s, Void Gem max once/60s
    const now = Date.now();
    p.state.rareFindCooldowns = p.state.rareFindCooldowns || {};
    drops.forEach(d => {
      const gemDef = GEM_TYPES.find(g => g.name === d.name);
      if (!gemDef || gemDef.rarity > 0.004) return;
      const cooldownMs = gemDef.rarity <= 0.001 ? 60000 : 30000;
      const lastBroadcast = p.state.rareFindCooldowns[d.name] || 0;
      if (now - lastBroadcast < cooldownMs) return;
      p.state.rareFindCooldowns[d.name] = now;
      io.to(lobby.code).emit('game:rareFind', {
        finderName: p.state.name,
        finderAvatar: p.state.avatar,
        gemName: d.name,
        gemEmoji: d.emoji,
        isVoid: gemDef.rarity <= 0.001,
      });
    });
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
    let earned = toSell * Math.floor(gem.value * p.state.valueMultiplier);

    // Apply gem tax if active
    let taxAmount = 0;
    if (p.state.gemTaxPending > 0) {
      taxAmount = Math.floor(earned * p.state.gemTaxPending);
      earned -= taxAmount;
      const attackerSid = p.state.gemTaxAttackerSocketId;
      p.state.gemTaxPending = 0;
      p.state.gemTaxAttackerSocketId = null;
      // Pay the attacker if still in lobby
      if (attackerSid && lobby.players[attackerSid]) {
        lobby.players[attackerSid].state.profit += taxAmount;
        io.to(attackerSid).emit('player:self', playerSelfPayload(lobby.players[attackerSid].state));
      }
      io.to(socket.id).emit('sabotage:tax_triggered', { taxAmount });
    }

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

    // Rush Hour: check if this player hit the profit target
    if (lobby.gameMode === 'rushHour' && lobby.rushGoal && p.state.totalEarned >= lobby.rushGoal) {
      if (lobby.status === 'playing') endGame(lobby);
    }
  });

  socket.on('game:upgrade', ({ upgradeId }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby || lobby.status !== 'playing') return callback?.({ ok: false });
    const p = lobby.players[socket.id];
    if (!p) return callback?.({ ok: false });
    const u = UPGRADES.find(x => x.id === upgradeId) || PRESTIGE_UPGRADES.find(x => x.id === upgradeId);
    if (!u) return callback?.({ ok: false, error: 'Unknown upgrade.' });
    // Prestige-only upgrades require rank >= 1
    if (PRESTIGE_UPGRADES.find(x => x.id === upgradeId) && (p.state.prestigeRank || 0) < 1) {
      return callback?.({ ok: false, error: 'Requires Prestige I.' });
    }
    const currentLevel = p.state.upgradeLevels[upgradeId] || 0;
    if (currentLevel >= u.maxLevel) return callback?.({ ok: false, error: 'Already maxed.' });
    const cost = upgradeCost(upgradeId, currentLevel);
    if (p.state.profit < cost) return callback?.({ ok: false, error: 'Not enough profit.' });
    p.state.profit -= cost;
    p.state.upgradeLevels[upgradeId] = currentLevel + 1;
    applyUpgrade(p.state, upgradeId);
    p.state.upgradesBought++;

    if (upgradeId === 'bulk_sell') {
      p.state.bulkSellLevel = p.state.upgradeLevels['bulk_sell'] || 1;
      p.state.bulkSellPendingAt = null; // reset any pending timer
    }
    const newAch = checkAchievements(p.state);
    if (newAch.length) socket.emit('achievements:unlocked', newAch);
    callback?.({ ok: true, self: playerSelfPayload(p.state) });
  });

  // ── Sabotage ────────────────────────────────────────────────────────────────
  socket.on('game:sabotage', ({ sabotageId, targetSocketId }, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby || lobby.status !== 'playing') return callback?.({ ok: false, error: 'Not in game.' });
    const attacker = lobby.players[socket.id];
    const target   = lobby.players[targetSocketId];
    if (!attacker || !target) return callback?.({ ok: false, error: 'Player not found.' });
    if (targetSocketId === socket.id) return callback?.({ ok: false, error: 'Cannot sabotage yourself.' });

    const sab = SABOTAGES.find(s => s.id === sabotageId);
    if (!sab) return callback?.({ ok: false, error: 'Unknown sabotage.' });

    // Check cooldown (30s)
    const now = Date.now();
    const cooldowns = attacker.state.sabotageCooldowns || {};
    if (cooldowns[sabotageId] && now < cooldowns[sabotageId]) {
      const secsLeft = Math.ceil((cooldowns[sabotageId] - now) / 1000);
      return callback?.({ ok: false, error: `On cooldown for ${secsLeft}s.` });
    }

    const timesUsed = (attacker.state.sabotageUses?.[sabotageId] || 0);
    const cost = sabotageCost(sab, timesUsed);
    if (attacker.state.profit < cost) return callback?.({ ok: false, error: 'Not enough cash.' });

    // Deduct cost & record use
    attacker.state.profit -= cost;
    attacker.state.sabotageUses = attacker.state.sabotageUses || {};
    attacker.state.sabotageUses[sabotageId] = timesUsed + 1;
    attacker.state.sabotageCooldowns = attacker.state.sabotageCooldowns || {};
    attacker.state.sabotageCooldowns[sabotageId] = now + 30000;

    // Apply effect — check shield first
    if (target.state.sabotageShield) {
      target.state.sabotageShield = false;
      // Downgrade shield (allow repurchase)
      target.state.upgradeLevels['gem_insurance'] = 0;
      io.to(targetSocketId).emit('sabotage:blocked', { sabotageId, attackerName: attacker.state.name, attackerAvatar: attacker.state.avatar });
      io.to(socket.id).emit('player:self', playerSelfPayload(attacker.state));
      io.to(targetSocketId).emit('player:self', playerSelfPayload(target.state));
      broadcastGameState(lobby);
      return callback?.({ ok: true, cost, blocked: true, self: playerSelfPayload(attacker.state) });
    }

    switch (sabotageId) {
      case 'freeze':
        target.state.frozenUntil = now + 15000;
        io.to(targetSocketId).emit('sabotage:hit', { sabotageId, attackerName: attacker.state.name, attackerAvatar: attacker.state.avatar, duration: 15 });
        break;
      case 'pickpocket': {
        const inv = target.state.inventory;
        const gemNames = Object.keys(inv).filter(k => inv[k] > 0);
        let stolen = 0;
        gemNames.forEach(name => {
          const take = Math.floor(inv[name] * 0.08);
          if (take > 0) { inv[name] -= take; stolen += take; if (inv[name] <= 0) delete inv[name]; }
        });
        io.to(targetSocketId).emit('sabotage:hit', { sabotageId, attackerName: attacker.state.name, attackerAvatar: attacker.state.avatar, stolen });
        break;
      }
      case 'cursed_vein':
        target.state.cursedClicksLeft = (target.state.cursedClicksLeft || 0) + 10;
        io.to(targetSocketId).emit('sabotage:hit', { sabotageId, attackerName: attacker.state.name, attackerAvatar: attacker.state.avatar });
        break;
      case 'gem_tax':
        target.state.gemTaxPending = 0.15;
        target.state.gemTaxAttackerSocketId = socket.id;
        io.to(targetSocketId).emit('sabotage:hit', { sabotageId, attackerName: attacker.state.name, attackerAvatar: attacker.state.avatar });
        break;
      case 'pickaxe_jam': {
        const jamDuration = 20000;
        target.state.pickaxeJamUntil = now + jamDuration;
        io.to(targetSocketId).emit('sabotage:hit', { sabotageId, attackerName: attacker.state.name, attackerAvatar: attacker.state.avatar, duration: 20 });
        break;
      }
    }

    // Last Miner Standing: lethal sabotages cost a life
    if (lobby.gameMode === 'lastMiner' && !target.state.eliminated) {
      const lethalSabotages = ['freeze', 'cursed_vein', 'pickaxe_jam'];
      if (lethalSabotages.includes(sabotageId)) {
        target.state.lives = Math.max(0, (target.state.lives || 1) - 1);
        io.to(targetSocketId).emit('lastMiner:lifeLost', {
          livesLeft: target.state.lives,
          attackerName: attacker.state.name,
          attackerAvatar: attacker.state.avatar,
          sabotageId,
        });
        io.to(socket.id).emit('lastMiner:lifeStolen', {
          targetName: target.state.name,
          targetAvatar: target.state.avatar,
          livesLeft: target.state.lives,
        });
        if (target.state.lives <= 0) {
          target.state.eliminated = true;
          io.to(targetSocketId).emit('lastMiner:eliminated', { attackerName: attacker.state.name, attackerAvatar: attacker.state.avatar });
          io.to(lobby.code).emit('lastMiner:playerOut', { name: target.state.name, avatar: target.state.avatar });
          // Check if only 1 active player remains
          const alive = Object.values(lobby.players).filter(pl => !pl.state.eliminated);
          if (alive.length <= 1) {
            if (lobby.status === 'playing') endGame(lobby);
          }
        }
      }
    }

    io.to(socket.id).emit('player:self', playerSelfPayload(attacker.state));
    io.to(targetSocketId).emit('player:self', playerSelfPayload(target.state));
    broadcastGameState(lobby);
    callback?.({ ok: true, cost, self: playerSelfPayload(attacker.state) });
  });

  // ── Prestige ────────────────────────────────────────────────────────────────
  socket.on('game:prestige', (_, callback) => {
    const lobby = lobbies.get(socket.data.lobbyCode);
    if (!lobby || lobby.status !== 'playing') return callback?.({ ok: false, error: 'Not in game.' });
    const p = lobby.players[socket.id];
    if (!p) return callback?.({ ok: false });

    const currentRank = p.state.prestigeRank || 0;
    const nextRankDef = PRESTIGE_RANKS[currentRank];
    if (!nextRankDef) return callback?.({ ok: false, error: 'Already at max prestige.' });

    // Require all base UPGRADES to be fully maxed
    const allMaxed = UPGRADES.every(u => {
      const lvl = p.state.upgradeLevels?.[u.id] || 0;
      if (u.type === 'sabotageShield') return lvl >= 1;
      return lvl >= u.maxLevel;
    });
    if (!allMaxed) return callback?.({ ok: false, error: 'Max out all upgrades first.' });

    const newRank = currentRank + 1;
    const totalBonus = (p.state.prestigeBonus || 0) + nextRankDef.bonus;
    const lifetime = (p.state.lifetimeEarned || 0) + p.state.totalEarned;

    // Carry prestige data into the reset
    const pd = {
      prestigeRank: newRank,
      prestigeBonus: totalBonus,
      lifetimeEarned: lifetime,
    };

    const { name, avatar, color } = p.state;
    const colorIdx = PLAYER_COLORS.indexOf(p.state.color);
    p.state = createPlayerState(name, 0, colorIdx >= 0 ? colorIdx : 0, pd);
    p.state.avatar = avatar;
    p.state.color = color;

    socket.emit('prestige:achieved', {
      rank: newRank,
      label: nextRankDef.label,
      emoji: nextRankDef.emoji,
      bonus: nextRankDef.bonus,
      totalBonus,
      self: playerSelfPayload(p.state),
    });
    broadcastGameState(lobby);
    callback?.({ ok: true, rank: newRank, self: playerSelfPayload(p.state) });
  });

  socket.on('disconnect', () => {
    console.log('[-] Disconnected: ' + socket.id);
    const code = socket.data.lobbyCode;
    if (!code) return;
    const lobby = lobbies.get(code);
    if (!lobby) return;

    // If spectator, remove immediately (no reconnect grace for spectators)
    if (socket.data.isSpectator) {
      if (lobby.spectators?.[socket.id]) {
        const spec = lobby.spectators[socket.id];
        delete lobby.spectators[socket.id];
        for (const [token, sess] of sessions.entries()) {
          if (sess.socketId === socket.id) { sessions.delete(token); break; }
        }
        if (lobby.status === 'playing') broadcastGameState(lobby);
      }
      return;
    }

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
