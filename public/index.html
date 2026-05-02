<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>GEM RUSH — Multiplayer Mining</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@300;400;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<script src="/socket.io/socket.io.js"></script>
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<style>
  :root {
    --bg:#0a0c10; --surface:#12151c; --surface2:#1a1e28; --border:#2a2f3e;
    --gold:#f5c842; --gold2:#e8a020; --ruby:#e84040; --emerald:#30d97a;
    --sapphire:#4090f5; --text:#e8eaf0; --muted:#6a7090;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{background:var(--bg);color:var(--text);font-family:'Barlow Condensed',sans-serif;min-height:100vh;overflow-x:hidden;}
  body::before{content:'';position:fixed;inset:0;background:radial-gradient(ellipse at 20% 20%,rgba(245,200,66,.04),transparent 60%),radial-gradient(ellipse at 80% 80%,rgba(64,144,245,.04),transparent 60%);pointer-events:none;z-index:0;}

  .screen{display:none;position:relative;z-index:1;}
  .screen.active{display:flex;}

  /* ── TITLE ── */
  #title-screen{flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:2rem;}
  .title-logo{text-align:center;margin-bottom:3rem;animation:logoIn .8s cubic-bezier(.16,1,.3,1) both;}
  @keyframes logoIn{from{opacity:0;transform:translateY(-30px) scale(.95)}to{opacity:1;transform:none}}
  .title-logo h1{font-family:'Bebas Neue',sans-serif;font-size:clamp(4rem,12vw,9rem);letter-spacing:.05em;line-height:.9;background:linear-gradient(135deg,#f5c842 0%,#e8a020 40%,#ff6060 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 0 40px rgba(245,200,66,.4));}
  .title-logo p{font-size:1.1rem;letter-spacing:.4em;text-transform:uppercase;color:var(--muted);margin-top:.5rem;}
  .gem-row{display:flex;gap:.6rem;justify-content:center;margin:1rem 0;font-size:1.6rem;animation:float 3s ease-in-out infinite;}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
  .title-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:2.5rem;width:100%;max-width:440px;animation:cardIn .8s .2s cubic-bezier(.16,1,.3,1) both;}
  @keyframes cardIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
  .title-card h2{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;letter-spacing:.1em;color:var(--gold);margin-bottom:1.5rem;border-bottom:1px solid var(--border);padding-bottom:.8rem;}
  .field-group{margin-bottom:1.2rem;}
  .field-group label{display:block;font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);margin-bottom:.4rem;}
  .field-group input{width:100%;background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:.75rem 1rem;color:var(--text);font-family:'Barlow Condensed',sans-serif;font-size:1rem;outline:none;transition:border-color .2s;}
  .field-group input:focus{border-color:var(--gold);}
  .btn{display:block;width:100%;padding:.9rem 1.5rem;border-radius:8px;font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:.15em;cursor:pointer;border:none;transition:all .15s;}
  .btn-gold{background:linear-gradient(135deg,var(--gold),var(--gold2));color:#1a1200;}
  .btn-gold:hover{filter:brightness(1.1);transform:translateY(-1px);box-shadow:0 4px 20px rgba(245,200,66,.35);}
  .btn-outline{background:transparent;border:1px solid var(--border);color:var(--text);margin-top:.7rem;}
  .btn-outline:hover{border-color:var(--gold);color:var(--gold);}
  .btn-danger{background:linear-gradient(135deg,var(--ruby),#c02020);color:#fff;}
  .btn-danger:hover{filter:brightness(1.1);transform:translateY(-1px);}
  .btn:disabled{opacity:.4;cursor:not-allowed;transform:none!important;}
  .divider{text-align:center;color:var(--muted);font-size:.75rem;letter-spacing:.2em;margin:1.2rem 0;position:relative;}
  .divider::before,.divider::after{content:'';position:absolute;top:50%;width:calc(50% - 2rem);height:1px;background:var(--border);}
  .divider::before{left:0;}.divider::after{right:0;}
  .error-msg{color:var(--ruby);font-size:.85rem;margin-top:.5rem;display:none;}

  /* ── LOBBY ── */
  #lobby-screen{flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:1.5rem 1.5rem 120px;overflow-y:auto;}
  .lobby-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:2rem;width:100%;max-width:560px;}
  .lobby-header{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:1.5rem;flex-wrap:wrap;gap:.5rem;}
  .lobby-header h2{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--gold);letter-spacing:.1em;}
  .lobby-code{font-family:'Share Tech Mono',monospace;font-size:1rem;color:var(--muted);background:var(--surface2);padding:.3rem .8rem;border-radius:6px;border:1px solid var(--border);}
  .lobby-code span{color:var(--gold);}
  .player-slots{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-bottom:1.5rem;}
  @media(max-width:480px){.player-slots{grid-template-columns:1fr;}}
  .player-slot{background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:1rem;min-height:70px;display:flex;align-items:center;gap:.8rem;transition:border-color .2s;}
  .player-slot.filled{border-color:var(--emerald);}
  .player-slot.you{border-color:var(--gold);}
  .slot-icon{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0;}
  .slot-name{font-weight:700;font-size:1rem;}
  .slot-sub{font-size:.75rem;color:var(--muted);letter-spacing:.1em;}
  .you-badge{font-family:'Share Tech Mono',monospace;font-size:.6rem;background:var(--gold);color:#1a1200;padding:.1rem .4rem;border-radius:3px;margin-left:.4rem;}
  .lobby-actions{display:flex;gap:.8rem;flex-wrap:wrap;}
  .lobby-actions .btn{flex:1;min-width:120px;}
  .copy-hint{font-size:.75rem;color:var(--muted);text-align:center;margin-bottom:.8rem;cursor:pointer;}
  .copy-hint:hover{color:var(--gold);}
  .lobby-name-row{display:flex;gap:.5rem;margin-bottom:1rem;align-items:center;}
  .lobby-name-row input{flex:1;background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:.5rem .8rem;color:var(--text);font-family:'Barlow Condensed',sans-serif;font-size:.95rem;outline:none;transition:border-color .2s;}
  .lobby-name-row input:focus{border-color:var(--gold);}
  .lobby-name-row button{background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:.5rem .9rem;color:var(--gold);font-family:'Bebas Neue',sans-serif;font-size:.95rem;letter-spacing:.1em;cursor:pointer;white-space:nowrap;transition:all .15s;}
  .lobby-name-row button:hover{border-color:var(--gold);}

  /* ── GAME ── */
  #game-screen{flex-direction:column;height:100vh;overflow:hidden;}
  .game-topbar{background:var(--surface);border-bottom:1px solid var(--border);padding:.6rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;flex-shrink:0;}
  .game-title{font-family:'Bebas Neue',sans-serif;font-size:1.6rem;color:var(--gold);letter-spacing:.1em;}
  .game-layout{display:grid;grid-template-columns:1fr 320px;flex:1;overflow:hidden;min-height:0;}
  .mine-area{padding:1.5rem;display:flex;flex-direction:column;align-items:center;gap:1.2rem;overflow-y:hidden;}
  .mine-scroll-zone{width:100%;max-width:480px;display:flex;flex-direction:column;gap:.8rem;overflow-y:auto;flex:1;min-height:0;padding-bottom:.5rem;}
  .stats-row{display:flex;gap:1rem;width:100%;max-width:480px;}
  .stat-box{flex:1;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:.8rem 1rem;text-align:center;}
  .stat-box .stat-val{font-family:'Share Tech Mono',monospace;font-size:1.3rem;color:var(--gold);display:block;}
  .stat-box .stat-lbl{font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);}

  /* ── MINE BUTTON + ORBIT ZONE ── */
  .mine-btn-wrap{position:relative;display:flex;flex-direction:column;align-items:center;gap:.8rem;}
  /* Orbit container — wide enough to hold orbiting miners */
  .orbit-zone{position:relative;width:320px;height:320px;display:flex;align-items:center;justify-content:center;}
  .mine-button{width:200px;height:200px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#2a2f3e,#12151c);border:3px solid var(--border);cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:4rem;transition:all .08s;position:relative;overflow:hidden;user-select:none;z-index:2;touch-action:manipulation;}
  .mine-button::before{content:'';position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 50% 50%,rgba(245,200,66,.08),transparent 70%);opacity:0;transition:opacity .15s;}
  .mine-button:hover::before{opacity:1;}
  .mine-button:active,.mine-button.clicking{transform:scale(.93);box-shadow:0 0 30px rgba(245,200,66,.2);border-color:var(--gold);}
  .mine-button .pick-icon{font-size:4rem;pointer-events:none;transition:transform .1s;}
  .mine-button.clicking .pick-icon{transform:rotate(-25deg) scale(1.1);}
  .mine-label{font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:.2em;color:var(--muted);}
  .mine-power{font-family:'Share Tech Mono',monospace;font-size:.85rem;color:var(--gold);background:var(--surface);padding:.25rem .8rem;border-radius:4px;border:1px solid var(--border);}

  /* Orbiting miners */
  .orbit-miner{position:absolute;font-size:1.4rem;pointer-events:none;z-index:3;animation:none;}

  /* Floating gem particles from auto-miners */
  .particle{position:fixed;pointer-events:none;font-size:1rem;font-family:'Share Tech Mono',monospace;font-weight:700;z-index:999;animation:particleUp .8s ease-out forwards;}
  @keyframes particleUp{0%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0;transform:translateY(-60px) scale(.6)}}
  .gem-drop{position:fixed;pointer-events:none;font-size:1.5rem;z-index:999;animation:gemDrop .9s ease-out forwards;}
  @keyframes gemDrop{0%{opacity:1;transform:translateY(0) scale(1.2)}100%{opacity:0;transform:translateY(-80px) scale(.4)}}

  /* Miss flash */
  .miss-text{position:fixed;pointer-events:none;font-size:.9rem;font-family:'Share Tech Mono',monospace;color:var(--muted);z-index:999;animation:missUp .7s ease-out forwards;}
  @keyframes missUp{0%{opacity:.8;transform:translateY(0)}100%{opacity:0;transform:translateY(-40px)}}

  /* AFK gem burst */
  .afk-gem{position:fixed;pointer-events:none;font-size:1.3rem;z-index:998;animation:afkBurst 1.1s ease-out forwards;}
  @keyframes afkBurst{0%{opacity:1;transform:translate(0,0) scale(1.1)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.3)}}

  /* ── SCREEN SHAKE ── */
  @keyframes mineShake{
    0%,100%{transform:translate(0,0) rotate(0deg)}
    10%{transform:translate(-6px,-4px) rotate(-.5deg)}
    20%{transform:translate(6px,-2px) rotate(.5deg)}
    30%{transform:translate(-4px,6px) rotate(0deg)}
    40%{transform:translate(4px,4px) rotate(.3deg)}
    50%{transform:translate(-6px,-2px) rotate(-.3deg)}
    60%{transform:translate(5px,-5px) rotate(.5deg)}
    70%{transform:translate(-3px,3px) rotate(0deg)}
    80%{transform:translate(4px,2px) rotate(-.2deg)}
    90%{transform:translate(-2px,-4px) rotate(.2deg)}
  }
  .mine-area.shake{animation:mineShake .45s ease-out;}

  /* ── CHARGE BUTTON ── */
  .mine-button.charging{
    border-color:var(--gold)!important;
    box-shadow:0 0 0 0 rgba(245,200,66,.6);
    animation:chargePulse var(--charge-dur,1s) ease-in forwards;
  }
  @keyframes chargePulse{
    0%{box-shadow:0 0 0 0 rgba(245,200,66,.5);border-color:var(--border);background:radial-gradient(circle at 35% 35%,#2a2f3e,#12151c)}
    50%{box-shadow:0 0 30px 8px rgba(245,200,66,.3);border-color:var(--gold);background:radial-gradient(circle at 35% 35%,#3a3020,#1a1408)}
    100%{box-shadow:0 0 60px 20px rgba(245,200,66,.7);border-color:#fff8a0;background:radial-gradient(circle at 35% 35%,#5a4820,#2a1c08)}
  }
  .mine-button.power-strike{
    animation:powerRelease .25s ease-out forwards;
  }
  @keyframes powerRelease{
    0%{transform:scale(1.08);box-shadow:0 0 60px 20px rgba(245,200,66,.8)}
    60%{transform:scale(.85)}
    100%{transform:scale(1);box-shadow:none}
  }
  /* Charge ring indicator */
  .charge-ring{
    position:absolute;inset:-8px;border-radius:50%;
    border:3px solid transparent;pointer-events:none;z-index:5;
    background:conic-gradient(var(--gold) var(--pct,0%), transparent var(--pct,0%)) border-box;
    -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 calc(100% - 3px));
    mask:radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 calc(100% - 3px));
    opacity:0;transition:opacity .1s;
  }
  .mine-button.charging .charge-ring{opacity:1;}
  /* Charge label */
  .charge-label{
    position:absolute;bottom:-2.8rem;left:50%;transform:translateX(-50%);
    font-family:'Share Tech Mono',monospace;font-size:.8rem;color:var(--gold);
    opacity:0;transition:opacity .15s;white-space:nowrap;pointer-events:none;
  }
  .mine-button.charging .charge-label{opacity:1;}

  /* ── INVENTORY / SELL ── */
  .inventory-section{width:100%;}
  .inv-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem;}
  .inv-title{font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);}
  .inv-sell-all-btn{font-family:'Bebas Neue',sans-serif;font-size:.85rem;letter-spacing:.1em;background:linear-gradient(135deg,var(--emerald),#22a060);color:#001a0a;border:none;border-radius:6px;padding:.25rem .8rem;cursor:pointer;transition:all .15s;}
  .inv-sell-all-btn:hover{filter:brightness(1.1);}
  .inv-sell-all-btn:disabled{opacity:.4;cursor:not-allowed;}
  #gem-inventory{display:flex;flex-wrap:wrap;gap:.5rem;}
  .gem-chip{border-radius:8px;padding:.35rem .7rem;font-size:.8rem;font-family:'Share Tech Mono',monospace;display:flex;align-items:center;gap:.4rem;cursor:pointer;transition:all .12s;position:relative;border:1px solid;}
  .gem-chip:hover{transform:scale(1.05);}
  .gem-chip .chip-sell{font-size:.65rem;opacity:.7;letter-spacing:.05em;}
  .gem-chip .gem-icon{display:inline-flex;align-items:center;vertical-align:middle;}
  .inv-empty{font-size:.8rem;color:var(--muted);font-style:italic;}
  .inv-value-row{font-family:'Share Tech Mono',monospace;font-size:.75rem;color:var(--muted);margin-top:.4rem;}
  .inv-value-row span{color:var(--emerald);}

  /* ── PANEL ── */
  .upgrade-panel{background:var(--surface);border-left:1px solid var(--border);display:flex;flex-direction:column;overflow:hidden;}
  .panel-tabs{display:flex;border-bottom:1px solid var(--border);}
  .panel-tab{flex:1;padding:.7rem;text-align:center;cursor:pointer;font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.1em;color:var(--muted);border-bottom:2px solid transparent;transition:all .15s;}
  .panel-tab.active{color:var(--gold);border-bottom-color:var(--gold);}
  .panel-content{flex:1;overflow-y:auto;padding:.8rem;}
  .panel-content::-webkit-scrollbar{width:4px;}
  .panel-content::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px;}

  /* Upgrade card */
  .upgrade-card{background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:.9rem;margin-bottom:.6rem;cursor:pointer;transition:all .15s;position:relative;overflow:hidden;}
  .upgrade-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(245,200,66,.05),transparent);opacity:0;transition:opacity .15s;}
  .upgrade-card:hover::before{opacity:1;}
  .upgrade-card.can-afford{border-color:rgba(245,200,66,.4);box-shadow:0 0 8px rgba(245,200,66,.1);}
  .upgrade-card.can-afford:hover{border-color:var(--gold);transform:translateY(-1px);}
  .upgrade-card.maxed{border-color:var(--emerald);opacity:.7;cursor:default;}
  .upgrade-card.cant-afford{opacity:.45;cursor:not-allowed;}
  .upg-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:.4rem;}
  .upg-name{font-weight:700;font-size:.95rem;}
  .upg-level{font-family:'Share Tech Mono',monospace;font-size:.7rem;color:var(--muted);background:var(--border);padding:.1rem .4rem;border-radius:3px;}
  .upg-desc{font-size:.8rem;color:var(--muted);margin-bottom:.5rem;line-height:1.3;}
  .upg-footer{display:flex;justify-content:space-between;align-items:center;}
  .upg-cost{font-family:'Share Tech Mono',monospace;font-size:.85rem;color:var(--gold);}
  .upg-effect{font-size:.75rem;color:var(--emerald);}
  /* AFK badge on upgrade cards */
  .upg-afk-badge{font-size:.65rem;font-family:'Share Tech Mono',monospace;background:rgba(48,217,122,.15);color:var(--emerald);border:1px solid rgba(48,217,122,.3);border-radius:3px;padding:.1rem .4rem;margin-left:.4rem;}

  /* Player rows */
  .player-row{background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:.8rem;margin-bottom:.6rem;}
  .player-row.you-row{border-color:var(--gold);}
  .pr-top{display:flex;align-items:center;gap:.6rem;margin-bottom:.4rem;}
  .pr-avatar{font-size:1.4rem;}
  .pr-name{font-weight:700;flex:1;}
  .pr-gems{font-family:'Share Tech Mono',monospace;font-size:.85rem;color:var(--gold);}
  .pr-bar-wrap{height:4px;background:var(--border);border-radius:2px;overflow:hidden;}
  .pr-bar{height:100%;border-radius:2px;transition:width .5s ease;}
  .pr-stats-row{display:flex;gap:.5rem;margin-top:.5rem;flex-wrap:wrap;}
  .pr-stat{font-size:.7rem;color:var(--muted);background:var(--border);padding:.1rem .4rem;border-radius:3px;font-family:'Share Tech Mono',monospace;}

  /* Achievements */
  .ach-card{background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:.8rem;margin-bottom:.6rem;display:flex;gap:.8rem;align-items:center;}
  .ach-card.unlocked{border-color:var(--gold);}
  .ach-icon{font-size:1.8rem;flex-shrink:0;filter:grayscale(1);transition:filter .3s;}
  .ach-card.unlocked .ach-icon{filter:none;}
  .ach-name{font-weight:700;font-size:.9rem;margin-bottom:.2rem;}
  .ach-desc{font-size:.75rem;color:var(--muted);}
  .ach-status{margin-left:auto;font-size:.7rem;font-family:'Share Tech Mono',monospace;}
  .ach-card.unlocked .ach-status{color:var(--gold);}

  /* Toast */
  #toast-container{position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;}
  .toast{background:var(--surface);border:1px solid var(--gold);border-radius:10px;padding:.8rem 1.2rem;display:flex;align-items:center;gap:.8rem;animation:toastIn .3s ease both;max-width:300px;box-shadow:0 4px 24px rgba(245,200,66,.2);}
  @keyframes toastIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:none}}
  .toast-icon{font-size:1.4rem;}
  .toast-text{font-size:.9rem;line-height:1.3;}
  .toast-title{font-weight:700;color:var(--gold);}
  /* ── CUSTOM CONFIRM DIALOG ── */
  #confirm-overlay {
    position: fixed; inset: 0; z-index: 9000;
    background: rgba(0,0,0,.65); backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none;
    transition: opacity .18s ease;
  }
  #confirm-overlay.visible { opacity: 1; pointer-events: all; }
  #confirm-box {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 16px; padding: 2rem 2rem 1.5rem;
    width: 100%; max-width: 360px; margin: 1rem;
    transform: translateY(12px) scale(.97);
    transition: transform .18s cubic-bezier(.16,1,.3,1);
    text-align: center;
  }
  #confirm-overlay.visible #confirm-box { transform: none; }
  #confirm-icon { font-size: 2.2rem; margin-bottom: .5rem; }
  #confirm-title {
    font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem;
    letter-spacing: .05em; color: var(--text); margin-bottom: .4rem;
  }
  #confirm-msg {
    font-size: .95rem; color: var(--muted); line-height: 1.4;
    margin-bottom: 1.4rem;
  }
  .confirm-btns { display: flex; gap: .7rem; }
  .confirm-btns button {
    flex: 1; padding: .65rem 1rem; border-radius: 10px;
    border: none; font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem; font-weight: 700; letter-spacing: .04em;
    cursor: pointer; transition: filter .15s, transform .1s;
  }
  .confirm-btns button:active { transform: scale(.97); }
  #confirm-cancel {
    background: var(--surface2); color: var(--muted);
    border: 1px solid var(--border);
  }
  #confirm-cancel:hover { filter: brightness(1.2); }
  #confirm-ok { background: var(--ruby); color: #fff; }
  #confirm-ok:hover { filter: brightness(1.15); }
  #confirm-ok.safe { background: var(--emerald); color: #000; }
  #rank-toast{position:fixed;bottom:5.5rem;left:50%;transform:translateX(-50%);z-index:9998;pointer-events:none;display:flex;align-items:center;gap:.6rem;padding:.5rem 1.1rem;border-radius:999px;font-family:'Bebas Neue',sans-serif;font-size:1.05rem;letter-spacing:.12em;white-space:nowrap;opacity:0;}
  #rank-toast.rank-up{background:rgba(48,217,122,.18);border:1.5px solid #30d97a;color:#30d97a;box-shadow:0 0 16px rgba(48,217,122,.25);}
  #rank-toast.rank-down{background:rgba(232,64,64,.15);border:1.5px solid #e84040;color:#e84060;box-shadow:0 0 16px rgba(232,64,64,.2);}
  #rank-toast.rank-show{opacity:1;animation:rankPop .35s cubic-bezier(.16,1,.3,1) both;}
  @keyframes rankPop{from{transform:translateX(-50%) scale(.85)}to{transform:translateX(-50%) scale(1)}}

  /* Server list */
  .server-row{background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:.7rem .9rem;margin-bottom:.4rem;display:flex;align-items:center;gap:.7rem;cursor:pointer;transition:all .12s;}
  .server-row:hover{border-color:var(--gold);}

  /* Notification opt-in button */
  .notif-btn{display:flex;align-items:center;gap:.4rem;background:var(--surface2);border:1px solid var(--border);border-radius:6px;padding:.25rem .65rem;font-size:.78rem;font-family:'Share Tech Mono',monospace;color:var(--muted);cursor:pointer;transition:all .15s;white-space:nowrap;}
  .notif-btn:hover{border-color:var(--gold);color:var(--gold);}
  .notif-btn.granted{color:var(--emerald);border-color:var(--emerald);}
  .notif-btn.denied{color:var(--ruby);border-color:var(--ruby);cursor:default;opacity:.6;}
  .server-row-info{flex:1;}
  .server-row-code{font-family:'Share Tech Mono',monospace;font-size:.85rem;color:var(--gold);}
  .server-row-meta{font-size:.75rem;color:var(--muted);margin-top:.1rem;}
  .server-row-join{font-family:'Bebas Neue',sans-serif;font-size:.9rem;letter-spacing:.08em;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#1a1200;border:none;border-radius:5px;padding:.25rem .7rem;cursor:pointer;}
  .server-empty{font-size:.8rem;color:var(--muted);font-style:italic;text-align:center;padding:.8rem 0;}

  /* Mobile panel hint bar — sits above mine content, only visible on mobile */
  .mobile-panel-hint{display:none;}
  /* ── Small laptop / Chromebook (701px–1100px) ── */
  @media(min-width:701px) and (max-width:1100px){
    .game-layout{grid-template-columns:1fr 280px;}
    .mine-area{padding:.8rem 1rem;gap:.7rem;}
    .orbit-zone{width:240px;height:240px;}
    .mine-button{width:155px;height:155px;}
    .mine-button .pick-icon{font-size:3rem;}
    .stat-box .stat-val{font-size:1.1rem;}
    .mine-scroll-zone{gap:.6rem;}
  }

  @media(max-width:700px){
    .mobile-panel-hint{
      display:flex;align-items:center;justify-content:center;
      width:100%;padding:.35rem;
      background:var(--surface2);border:1px solid var(--border);border-radius:8px;
      font-size:.75rem;letter-spacing:.1em;color:var(--muted);
      font-family:'Share Tech Mono',monospace;cursor:pointer;flex-shrink:0;
    }
    .mobile-panel-hint:hover{color:var(--gold);border-color:var(--gold);}
    .mobile-panel-hint .hint-close-text{display:none;}
    .upgrade-panel.panel-open ~ * .mobile-panel-hint .hint-open-text,
    body.panel-open .mobile-panel-hint .hint-open-text{display:none;}
    body.panel-open .mobile-panel-hint .hint-close-text{display:inline;}
  }

  /* Inventory capacity bar */
  .inv-cap-bar-wrap{width:100%;height:6px;background:var(--border);border-radius:3px;margin-top:.5rem;overflow:hidden;}
  .inv-cap-bar{height:100%;border-radius:3px;transition:width .3s,background .3s;}
  .inv-cap-row{display:flex;justify-content:space-between;align-items:center;margin-top:.3rem;font-size:.72rem;font-family:'Share Tech Mono',monospace;color:var(--muted);}
  .inv-cap-row.full{color:var(--ruby);}

  /* Lobby avatar picker */
  .avatar-picker{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.5rem;}
  .avatar-opt{width:38px;height:38px;border-radius:8px;background:var(--surface2);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1.3rem;cursor:pointer;transition:all .15s;}
  .avatar-opt:hover{border-color:var(--gold);transform:scale(1.1);}
  .avatar-opt.selected{border-color:var(--gold);background:rgba(245,200,66,.15);}

  /* Satchel upgrade in shop */
  .upg-cap-badge{font-size:.65rem;font-family:'Share Tech Mono',monospace;background:rgba(64,144,245,.15);color:var(--sapphire);border:1px solid rgba(64,144,245,.3);border-radius:3px;padding:.1rem .4rem;margin-left:.4rem;}
  .conn-badge{font-family:'Share Tech Mono',monospace;font-size:.7rem;padding:.2rem .6rem;border-radius:4px;border:1px solid;}
  .conn-badge.connected{color:var(--emerald);border-color:var(--emerald);}
  .conn-badge.disconnected{color:var(--ruby);border-color:var(--ruby);}
  .conn-badge.connecting{color:var(--gold);border-color:var(--gold);}

  /* End screen */
  #end-screen{flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:2rem;}
  .end-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:2.5rem;width:100%;max-width:500px;text-align:center;}
  .end-card h2{font-family:'Bebas Neue',sans-serif;font-size:3rem;color:var(--gold);letter-spacing:.1em;margin-bottom:.5rem;}
  .winner-name{font-size:1.5rem;font-weight:700;margin-bottom:1.5rem;}
  .leaderboard{width:100%;margin-bottom:1.5rem;}
  .lb-row{display:flex;align-items:center;gap:1rem;padding:.7rem 1rem;border-radius:8px;margin-bottom:.4rem;background:var(--surface2);border:1px solid var(--border);}
  .lb-row.first{border-color:var(--gold);background:rgba(245,200,66,.05);}
  .lb-rank{font-family:'Bebas Neue',sans-serif;font-size:1.4rem;color:var(--muted);width:2rem;}
  .lb-row.first .lb-rank{color:var(--gold);}
  .lb-name{flex:1;font-weight:700;text-align:left;}
  .lb-gems{font-family:'Share Tech Mono',monospace;color:var(--gold);}
  .lb-sub{font-size:.7rem;color:var(--muted);font-family:'Share Tech Mono',monospace;}
  .topbar-end-btn{font-family:'Bebas Neue',sans-serif;font-size:.95rem;letter-spacing:.1em;background:linear-gradient(135deg,var(--ruby),#c02020);color:#fff;border:none;border-radius:6px;padding:.3rem .9rem;cursor:pointer;transition:all .15s;display:none;}
  .topbar-end-btn:hover{filter:brightness(1.15);}

  /* ── MODE CARDS ── */
  .mode-grid{display:grid;grid-template-columns:1fr;gap:.7rem;margin-bottom:1.2rem;}
  .mode-card{background:var(--surface2);border:2px solid var(--border);border-radius:12px;padding:.9rem 1rem;cursor:pointer;transition:all .15s;position:relative;}
  .mode-card:hover{border-color:rgba(245,200,66,.4);background:rgba(245,200,66,.04);}
  .mode-card.active{border-color:var(--gold);background:rgba(245,200,66,.07);}
  .mode-icon{font-size:1.5rem;margin-bottom:.25rem;}
  .mode-name{font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:.1em;color:var(--text);margin-bottom:.2rem;}
  .mode-desc{font-size:.78rem;color:var(--muted);line-height:1.3;}
  .mode-extra{margin-top:.6rem;}
  .mode-extra select{background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:.3rem .6rem;color:var(--text);font-family:'Barlow Condensed',sans-serif;font-size:.9rem;outline:none;cursor:pointer;}
  .mode-extra select:focus{border-color:var(--gold);}
  /* Timed mode badge in lobby */
  .lobby-mode-badge{font-family:'Share Tech Mono',monospace;font-size:.75rem;color:var(--sapphire);background:rgba(64,144,245,.12);border:1px solid rgba(64,144,245,.3);border-radius:6px;padding:.25rem .7rem;display:inline-block;margin-bottom:1rem;}
  /* Countdown timer in game topbar */
  #game-timer{font-family:'Share Tech Mono',monospace;font-size:1rem;color:var(--gold);background:var(--surface2);border:1px solid var(--border);border-radius:6px;padding:.2rem .7rem;display:none;}
  #game-timer.urgent{color:var(--ruby);border-color:var(--ruby);animation:timerPulse .5s ease-in-out infinite alternate;}
  @keyframes timerPulse{from{opacity:1}to{opacity:.5}}
  /* Teams mode – team labels */
  .team-badge{font-family:'Share Tech Mono',monospace;font-size:.6rem;padding:.1rem .4rem;border-radius:3px;margin-left:.4rem;font-weight:700;}
  .team-badge.team-a{background:rgba(245,200,66,.2);color:var(--gold);}
  .team-badge.team-b{background:rgba(64,144,245,.2);color:var(--sapphire);}
  .team-score-bar{display:flex;gap:.5rem;align-items:center;padding:.5rem .8rem;background:var(--surface2);border:1px solid var(--border);border-radius:8px;font-family:'Share Tech Mono',monospace;font-size:.8rem;margin-bottom:.5rem;}
  .team-score-bar .ts-label{font-weight:700;}
  .team-score-bar .ts-val{flex:1;text-align:right;}

  /* ── SABOTAGE TAB ── */
  .sab-section { margin-bottom: 1rem; }
  .sab-section-title { font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:.5rem; }
  .sab-target-row { display:flex;align-items:center;gap:.5rem;background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:.5rem .7rem;margin-bottom:.4rem; }
  .sab-target-avatar { font-size:1.2rem; }
  .sab-target-name { flex:1;font-weight:700;font-size:.9rem; }
  .sab-btn { font-family:'Bebas Neue',sans-serif;font-size:.8rem;letter-spacing:.08em;background:linear-gradient(135deg,var(--ruby),#c02020);color:#fff;border:none;border-radius:5px;padding:.2rem .6rem;cursor:pointer;transition:all .12s;white-space:nowrap; }
  .sab-btn:hover:not(:disabled) { filter:brightness(1.15);transform:translateY(-1px); }
  .sab-btn:disabled { opacity:.4;cursor:not-allowed; }
  .sab-card { background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:.8rem;margin-bottom:.5rem; }
  .sab-card-header { display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem; }
  .sab-card-name { font-weight:700;font-size:.95rem; }
  .sab-card-cost { font-family:'Share Tech Mono',monospace;font-size:.8rem;color:var(--ruby); }
  .sab-card-desc { font-size:.78rem;color:var(--muted);margin-bottom:.5rem; }
  .sab-card-footer { display:flex;justify-content:space-between;align-items:center;gap:.5rem; }
  .sab-uses { font-family:'Share Tech Mono',monospace;font-size:.7rem;color:var(--muted); }
  .sab-cooldown { font-family:'Share Tech Mono',monospace;font-size:.7rem;color:var(--gold); }
  .sab-no-targets { font-size:.8rem;color:var(--muted);font-style:italic;text-align:center;padding:1rem 0; }

  /* Sabotage hit overlay */
  .sab-hit-overlay { position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;pointer-events:none; }
  .sab-hit-box { background:rgba(232,64,64,.15);border:2px solid var(--ruby);border-radius:16px;padding:1.5rem 2rem;text-align:center;animation:sabHitIn .4s cubic-bezier(.16,1,.3,1) both, sabHitOut .5s 2.5s ease-in forwards; }
  @keyframes sabHitIn  { from{opacity:0;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
  @keyframes sabHitOut { from{opacity:1} to{opacity:0} }
  .sab-hit-icon { font-size:3rem;margin-bottom:.4rem; }
  .sab-hit-title { font-family:'Bebas Neue',sans-serif;font-size:1.6rem;color:var(--ruby);letter-spacing:.1em; }
  .sab-hit-msg { font-size:.9rem;color:var(--text);margin-top:.3rem; }

  /* Rare find broadcast banner */
  .rare-banner { position:fixed;top:4rem;left:50%;transform:translateX(-50%);z-index:8000;background:var(--surface);border:2px solid var(--gold);border-radius:12px;padding:.7rem 1.5rem;text-align:center;animation:rareBannerIn .4s cubic-bezier(.16,1,.3,1) both, rareBannerOut .5s 4s ease-in forwards;pointer-events:none;white-space:nowrap; }
  .rare-banner.void-find { border-color:#a060ff;box-shadow:0 0 30px rgba(160,96,255,.4); }
  @keyframes rareBannerIn  { from{opacity:0;transform:translateX(-50%) translateY(-20px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
  @keyframes rareBannerOut { from{opacity:1} to{opacity:0} }
  .rare-banner-gem { font-size:1.8rem; }
  .rare-banner-text { font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:.08em; }
  .rare-banner-sub { font-size:.8rem;color:var(--muted);margin-top:.15rem; }

  /* Special awards on end screen */
  .awards-section { margin-bottom:1.2rem;text-align:left; }
  .awards-title { font-family:'Bebas Neue',sans-serif;font-size:1.2rem;letter-spacing:.1em;color:var(--gold);margin-bottom:.5rem;text-align:center; }
  .award-row { display:flex;align-items:flex-start;gap:.7rem;background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:.6rem .8rem;margin-bottom:.4rem; }
  .award-emoji { font-size:1.4rem;flex-shrink:0; }
  .award-title { font-weight:700;font-size:.88rem;color:var(--gold); }
  .award-desc { font-size:.78rem;color:var(--muted);margin-top:.1rem; }

  /* Frozen screen tint */
  .frozen-overlay { position:fixed;inset:0;z-index:4000;background:rgba(100,200,255,.06);border:3px solid rgba(100,200,255,.3);pointer-events:none;animation:frozenPulse 1s ease-in-out infinite alternate; }
  @keyframes frozenPulse { from{opacity:.6} to{opacity:1} }
  .frozen-banner { position:fixed;top:4.5rem;left:50%;transform:translateX(-50%);z-index:4001;font-family:'Bebas Neue',sans-serif;font-size:1.2rem;letter-spacing:.15em;color:#80d8ff;background:rgba(0,80,120,.8);border:1px solid #80d8ff;border-radius:8px;padding:.3rem 1rem;pointer-events:none; }

  /* Prestige */
  .prestige-badge{display:inline-flex;align-items:center;gap:.2rem;font-family:'Share Tech Mono',monospace;font-size:.65rem;padding:.1rem .4rem;border-radius:3px;border:1px solid;vertical-align:middle;margin-left:.3rem;font-weight:700;}
  .prestige-btn-wrap{width:100%;max-width:480px;margin-top:.5rem;}
  .prestige-btn{width:100%;padding:.65rem 1rem;border-radius:8px;font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:.15em;cursor:pointer;border:1px solid var(--gold);background:rgba(245,200,66,.07);color:var(--gold);transition:all .2s;display:flex;align-items:center;justify-content:center;gap:.5rem;}
  .prestige-btn:hover:not(:disabled){background:rgba(245,200,66,.15);box-shadow:0 0 20px rgba(245,200,66,.2);}
  .prestige-btn:disabled{opacity:.3;cursor:not-allowed;}
  .prestige-info{font-size:.72rem;color:var(--muted);text-align:center;margin-top:.35rem;font-family:'Share Tech Mono',monospace;}
  .prestige-rank-display{display:flex;flex-direction:column;align-items:center;gap:.2rem;padding:.5rem;background:rgba(245,200,66,.05);border:1px solid rgba(245,200,66,.2);border-radius:8px;margin-bottom:.6rem;}
  .prestige-rank-label{font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:.1em;color:var(--gold);}
  .prestige-rank-bonus{font-family:'Share Tech Mono',monospace;font-size:.75rem;color:var(--emerald);}
  #prestige-overlay{position:fixed;inset:0;z-index:9500;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:0;transition:opacity .3s;}
  #prestige-overlay.show{opacity:1;pointer-events:all;}
  .prestige-modal{background:var(--surface);border:2px solid var(--gold);border-radius:20px;padding:2.5rem 2rem;text-align:center;max-width:340px;width:90%;animation:prestigeIn .5s cubic-bezier(.16,1,.3,1);}
  @keyframes prestigeIn{from{transform:scale(.7) translateY(40px);opacity:0}to{transform:none;opacity:1}}
  .prestige-modal-gem{font-size:4rem;margin-bottom:.5rem;animation:float 2s ease-in-out infinite;}
  .prestige-modal-title{font-family:'Bebas Neue',sans-serif;font-size:2.5rem;letter-spacing:.1em;color:var(--gold);line-height:1;}
  .prestige-modal-sub{font-size:1rem;color:var(--muted);margin:.5rem 0 1rem;}
  .prestige-modal-bonus{font-family:'Share Tech Mono',monospace;font-size:.9rem;color:var(--emerald);background:rgba(48,217,122,.1);border:1px solid rgba(48,217,122,.3);border-radius:6px;padding:.4rem .8rem;margin-bottom:1.2rem;}
  .prestige-modal-btn{font-family:'Bebas Neue',sans-serif;font-size:1.2rem;letter-spacing:.1em;background:linear-gradient(135deg,var(--gold),var(--gold2));color:#1a1200;border:none;border-radius:8px;padding:.7rem 2rem;cursor:pointer;transition:filter .15s;}
  .prestige-modal-btn:hover{filter:brightness(1.1);}
  .prestige-section-header{font-family:'Bebas Neue',sans-serif;font-size:.9rem;letter-spacing:.15em;color:#9040f0;border-bottom:1px solid rgba(144,64,240,.3);padding-bottom:.3rem;margin:1rem 0 .5rem;display:flex;align-items:center;gap:.4rem;}

  @media(max-width:700px){
    #game-screen{height:100dvh;}
    .game-layout{grid-template-columns:1fr;grid-template-rows:1fr auto;height:100%;}
    .mine-area{padding:.5rem .75rem;gap:.4rem;overflow-y:hidden;flex-direction:column;}
    .mine-scroll-zone{gap:.5rem;}
    .upgrade-panel{border-left:none;border-top:1px solid var(--border);flex-shrink:0;transition:height .25s cubic-bezier(.4,0,.2,1);}
    .upgrade-panel.panel-collapsed{height:42px;overflow:hidden;}
    .upgrade-panel.panel-open{height:300px;}
    .mine-button{width:120px;height:120px;}
    .mine-button .pick-icon{font-size:2.2rem;}
    .orbit-zone{width:190px;height:190px;}
    .stats-row{gap:.4rem;}
    .stat-box{padding:.4rem .5rem;}
    .stat-box .stat-val{font-size:.95rem;}
    .stat-box .stat-lbl{font-size:.6rem;}
    .mine-label{display:none;}
    .mine-power{font-size:.75rem;padding:.2rem .6rem;}
    .kbd-hint{display:none;}
    .prestige-btn{font-size:.95rem;padding:.5rem .8rem;}
    .prestige-info{font-size:.65rem;}
  }

  /* ── COUNTDOWN OVERLAY ── */
  #countdown-overlay {
    display: flex;
    position: fixed; inset: 0; z-index: 10000;
    background: rgba(10,12,16,.88);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    align-items: center; justify-content: center;
    flex-direction: column; gap: 1rem;
    /* Use opacity+pointer-events instead of display:none for iOS reliability */
    opacity: 0;
    pointer-events: none;
    transition: opacity .15s;
  }
  #countdown-overlay.active {
    opacity: 1;
    pointer-events: all;
  }
  .countdown-number {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(10rem, 35vw, 22rem);
    line-height: 1;
    background: linear-gradient(135deg, #f5c842, #e8a020, #ff6060);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    /* drop-shadow + -webkit-text-fill-color: transparent breaks on iOS Safari — use text-shadow on a wrapper instead */
  }
  .countdown-number-wrap {
    filter: drop-shadow(0 0 60px rgba(245,200,66,.55));
  }
  .countdown-number.pop {
    animation: countPop .55s cubic-bezier(.16,1,.3,1) both;
  }
  @keyframes countPop {
    0%  { transform: scale(2.2); opacity: 0; }
    60% { transform: scale(.92); opacity: 1; }
    100%{ transform: scale(1);   opacity: 1; }
  }
  .countdown-label {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.4rem; letter-spacing: .4em;
    color: var(--muted); text-transform: uppercase;
  }


  /* ── ACCESSIBILITY ── */
  #a11y-btn {
    position: fixed; top: .8rem; right: .8rem; z-index: 500;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 8px; padding: .35rem .6rem;
    color: var(--muted); font-size: .75rem; letter-spacing: .08em;
    cursor: pointer; font-family: 'Barlow Condensed', sans-serif;
    transition: border-color .2s, color .2s; white-space: nowrap;
    display: none;
  }
  #a11y-btn:hover { border-color: var(--gold); color: var(--gold); }
  #a11y-overlay {
    position: fixed; inset: 0; z-index: 8000;
    background: rgba(0,0,0,.7); backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none; transition: opacity .2s;
  }
  #a11y-overlay.visible { opacity: 1; pointer-events: all; }
  #a11y-box {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 16px; padding: 1.8rem; width: 100%; max-width: 360px;
    margin: 1rem; transform: translateY(10px) scale(.97);
    transition: transform .2s cubic-bezier(.16,1,.3,1);
  }
  #a11y-overlay.visible #a11y-box { transform: none; }
  .a11y-title {
    font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem;
    letter-spacing: .1em; color: var(--gold); margin-bottom: .3rem;
  }
  .a11y-subtitle { font-size: .8rem; color: var(--muted); margin-bottom: 1.2rem; }
  .a11y-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: .7rem 0; border-bottom: 1px solid var(--border);
  }
  .a11y-row:last-of-type { border-bottom: none; }
  .a11y-label { font-size: .95rem; }
  .a11y-label small { display: block; font-size: .72rem; color: var(--muted); margin-top: .1rem; }
  .a11y-toggle {
    width: 44px; height: 24px; border-radius: 12px;
    background: var(--border); border: none; cursor: pointer;
    position: relative; transition: background .2s; flex-shrink: 0;
  }
  .a11y-toggle.on { background: var(--emerald); }
  .a11y-toggle::after {
    content: ''; position: absolute; top: 3px; left: 3px;
    width: 18px; height: 18px; border-radius: 50%; background: #fff;
    transition: transform .2s;
  }
  .a11y-toggle.on::after { transform: translateX(20px); }
  .a11y-close {
    margin-top: 1.2rem; width: 100%; padding: .65rem;
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 8px; color: var(--text); font-family: 'Bebas Neue', sans-serif;
    font-size: 1.1rem; letter-spacing: .1em; cursor: pointer; transition: border-color .2s;
  }
  .a11y-close:hover { border-color: var(--gold); }

  /* ── SPECTATOR MODE ── */
  #spectator-screen { flex-direction:column; align-items:center; justify-content:flex-start; min-height:100vh; background:var(--bg); }
  .spectator-topbar { width:100%; background:var(--surface); border-bottom:1px solid var(--border); padding:.6rem 1.5rem; display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap; }
  .spectator-badge { background:rgba(160,96,240,.15); border:1px solid #9040f0; color:#c080ff; font-family:'Bebas Neue',sans-serif; font-size:.85rem; letter-spacing:.12em; padding:.2rem .7rem; border-radius:5px; }
  .spectator-content { width:100%; max-width:700px; padding:1.5rem; display:flex; flex-direction:column; gap:1rem; }
  .spectator-leaderboard { background:var(--surface); border:1px solid var(--border); border-radius:12px; overflow:hidden; }
  .spectator-lb-header { background:var(--surface2); padding:.7rem 1rem; font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.12em; color:var(--gold); border-bottom:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; }
  .spectator-lb-row { display:flex; align-items:center; gap:.8rem; padding:.75rem 1rem; border-bottom:1px solid var(--border); transition:background .15s; }
  .spectator-lb-row:last-child { border-bottom:none; }
  .spectator-lb-row:nth-child(2) { background:rgba(245,200,66,.04); }
  .spectator-lb-rank { font-family:'Bebas Neue',sans-serif; font-size:1.3rem; width:2rem; text-align:center; color:var(--muted); }
  .spectator-lb-name { flex:1; font-weight:700; font-size:.95rem; }
  .spectator-lb-score { font-family:'Share Tech Mono',monospace; font-size:.9rem; color:var(--emerald); }
  .spectator-lb-sub { font-size:.7rem; color:var(--muted); }
  .spectator-lb-bar-wrap { width:100%; height:3px; background:var(--border); border-radius:2px; margin-top:.3rem; }
  .spectator-lb-bar { height:3px; border-radius:2px; background:var(--gold); transition:width .5s ease; }
  .spectator-info-row { display:flex; gap:.8rem; }
  .spectator-stat { flex:1; background:var(--surface); border:1px solid var(--border); border-radius:10px; padding:.7rem 1rem; text-align:center; }
  .spectator-stat-val { font-family:'Share Tech Mono',monospace; font-size:1.2rem; color:var(--gold); display:block; }
  .spectator-stat-lbl { font-size:.7rem; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); }
  .spectator-exit-btn { font-family:'Bebas Neue',sans-serif; font-size:1rem; letter-spacing:.1em; background:var(--surface2); border:1px solid var(--border); color:var(--muted); border-radius:8px; padding:.5rem 1.2rem; cursor:pointer; transition:all .15s; }
  .spectator-exit-btn:hover { border-color:var(--ruby); color:var(--ruby); }

  /* ── IN-GAME CHAT ── */
  .ingame-chat-panel { display:flex; flex-direction:column; height:100%; }
  .ingame-chat-msgs { flex:1; overflow-y:auto; padding:.6rem .8rem; display:flex; flex-direction:column; gap:.3rem; }
  .ingame-chat-msgs::-webkit-scrollbar { width:3px; }
  .ingame-chat-msgs::-webkit-scrollbar-thumb { background:var(--border); border-radius:2px; }
  .ingame-chat-input-row { display:flex; gap:.4rem; padding:.5rem .7rem; border-top:1px solid var(--border); background:var(--surface2); flex-shrink:0; }
  .ingame-chat-input-row input { flex:1; background:var(--surface); border:1px solid var(--border); border-radius:6px; padding:.4rem .7rem; color:var(--text); font-family:'Barlow Condensed',sans-serif; font-size:.9rem; outline:none; transition:border-color .2s; font-size:16px; }
  .ingame-chat-input-row input:focus { border-color:var(--gold); }
  .ingame-chat-input-row button { background:var(--gold); color:#1a1200; border:none; border-radius:6px; padding:.4rem .8rem; font-family:'Bebas Neue',sans-serif; font-size:.9rem; letter-spacing:.08em; cursor:pointer; transition:filter .15s; white-space:nowrap; }
  .ingame-chat-input-row button:hover { filter:brightness(1.1); }
  .ingame-chat-unread { position:absolute; top:2px; right:2px; background:var(--ruby); color:#fff; font-size:.6rem; font-family:'Share Tech Mono',monospace; padding:.1rem .35rem; border-radius:99px; display:none; }
  .ingame-chat-unread.visible { display:inline-block; }
  .panel-tab-wrap { position:relative; }

  /* ── HOST MANAGEMENT ── */
  .player-slot-actions { display:flex; gap:.4rem; margin-top:.4rem; }
  .slot-action-btn { font-family:'Bebas Neue',sans-serif; font-size:.7rem; letter-spacing:.08em; border-radius:4px; padding:.15rem .5rem; cursor:pointer; border:1px solid; transition:all .12s; white-space:nowrap; }
  .slot-kick-btn { background:rgba(232,64,64,.1); border-color:var(--ruby); color:var(--ruby); }
  .slot-kick-btn:hover { background:var(--ruby); color:#fff; }
  .slot-host-btn { background:rgba(245,200,66,.08); border-color:var(--gold); color:var(--gold); }
  .slot-host-btn:hover { background:rgba(245,200,66,.2); }
  .spectator-list-section { margin-top:.8rem; }
  .spectator-list-title { font-size:.7rem; letter-spacing:.15em; text-transform:uppercase; color:var(--muted); margin-bottom:.4rem; }
  .spectator-chip { display:inline-flex; align-items:center; gap:.3rem; background:rgba(144,64,240,.1); border:1px solid rgba(144,64,240,.3); border-radius:6px; padding:.2rem .6rem; font-size:.8rem; margin:.2rem .2rem 0 0; }
  .spectator-chip-kick { background:none; border:none; color:var(--ruby); cursor:pointer; font-size:.75rem; padding:0 .2rem; line-height:1; }
  .spectator-chip-kick:hover { color:#ff6060; }


  .lobby-chat-wrap {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%; max-width: 560px;
    padding: 0 1.5rem;
    z-index: 100;
  }
  .lobby-chat-toggle {
    width: 100%;
    display: flex; align-items: center; justify-content: space-between;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 10px; padding: .55rem 1rem;
    cursor: pointer; font-family: 'Bebas Neue', sans-serif;
    font-size: 1rem; letter-spacing: .1em; color: var(--muted);
    transition: border-color .2s, color .2s;
    user-select: none;
  }
  .lobby-chat-toggle:hover { border-color: var(--gold); color: var(--gold); }
  .lobby-chat-toggle.has-unread { border-color: var(--gold); color: var(--gold); }
  .chat-unread-badge {
    background: var(--gold); color: #1a1200;
    font-family: 'Share Tech Mono', monospace;
    font-size: .65rem; padding: .1rem .45rem;
    border-radius: 99px; font-weight: 700;
    display: none;
  }
  .chat-unread-badge.visible { display: inline-block; }
  .lobby-chat-box {
    display: none;
    flex-direction: column;
    background: var(--surface);
    border: 1px solid var(--border);
    border-top: none;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
  }
  .lobby-chat-box.open { display: flex; }
  .chat-messages {
    height: 180px;
    overflow-y: auto;
    padding: .6rem .8rem;
    display: flex; flex-direction: column; gap: .35rem;
  }
  .chat-messages::-webkit-scrollbar { width: 3px; }
  .chat-messages::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
  .chat-msg {
    font-size: .82rem; line-height: 1.35;
    word-break: break-word;
  }
  .chat-msg .chat-sender {
    font-weight: 700; margin-right: .35rem;
  }
  .chat-msg.chat-mine .chat-sender { color: var(--gold); }
  .chat-msg.chat-system {
    color: var(--muted); font-style: italic; font-size: .75rem;
    text-align: center;
  }
  .chat-input-row {
    display: flex; gap: .4rem;
    padding: .5rem .7rem;
    border-top: 1px solid var(--border);
    background: var(--surface2);
  }
  .chat-input-row input {
    flex: 1; background: var(--surface);
    border: 1px solid var(--border); border-radius: 6px;
    padding: .45rem .7rem; color: var(--text);
    font-family: 'Barlow Condensed', sans-serif; font-size: .95rem;
    outline: none; transition: border-color .2s;
    /* prevent iOS zoom */
    font-size: max(.95rem, 16px);
  }
  .chat-input-row input:focus { border-color: var(--gold); }
  .chat-input-row button {
    background: linear-gradient(135deg, var(--gold), var(--gold2));
    color: #1a1200; border: none; border-radius: 6px;
    padding: .45rem .85rem; cursor: pointer;
    font-family: 'Bebas Neue', sans-serif; font-size: .95rem;
    letter-spacing: .08em; transition: filter .15s; flex-shrink: 0;
  }
  .chat-input-row button:hover { filter: brightness(1.1); }
  /* On very small screens keep toggle radius intact when closed */
  @media(max-width:480px) {
    .chat-messages { height: 140px; }
    .lobby-chat-wrap { padding: 0 1rem; }
  }

</style>
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
</head>
<body>
<div id="toast-container"></div>
<div id="rank-toast"></div>

<!-- ACCESSIBILITY BUTTON -->
<button id="a11y-btn" onclick="openA11y()" title="Accessibility Settings">♿ Access</button>

<!-- ACCESSIBILITY MODAL -->
<div id="a11y-overlay" onclick="closeA11yBackdrop(event)">
  <div id="a11y-box">
    <div class="a11y-title">♿ Accessibility</div>
    <div class="a11y-subtitle">Reduce visual effects that may cause discomfort.</div>
    <div class="a11y-row">
      <div class="a11y-label">
        Screen Shake
        <small>Shakes on clicks & rare finds</small>
      </div>
      <button class="a11y-toggle" id="toggle-shake" onclick="toggleA11y('shake', this)"></button>
    </div>
    <div class="a11y-row">
      <div class="a11y-label">
        Floating Particles
        <small>Gem drops & +number popups</small>
      </div>
      <button class="a11y-toggle" id="toggle-particles" onclick="toggleA11y('particles', this)"></button>
    </div>
    <button class="a11y-close" onclick="closeA11y()">Done</button>
  </div>
</div>

<!-- TITLE -->
<div id="title-screen" class="screen active">
  <div class="title-logo">
    <div class="gem-row" id="title-gem-row">💎 💠 🔮 ♦️ 🪨</div>
    <h1>GEM<br>RUSH</h1>
    <p>Multiplayer Mining Battle</p>
  </div>

  <!-- Home: choose Host or Join -->
  <div class="title-card" id="home-card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;border-bottom:1px solid var(--border);padding-bottom:.8rem;">
      <h2 style="margin:0;border:none;padding:0;">Enter the Mine</h2>
      <div class="conn-badge connecting" id="conn-badge">Connecting...</div>
    </div>
    <div class="field-group">
      <label>Your Miner Name</label>
      <input type="text" id="player-name" placeholder="e.g. DirtDigger99" maxlength="16">
    </div>
    <button class="btn btn-gold" id="btn-host-pick" onclick="showHostCard()">⚒ Host a Game</button>
    <div class="divider">OR</div>
    <button class="btn btn-outline" id="btn-join-pick" onclick="showJoinCard()">🚪 Join a Game</button>
  </div>

  <!-- Host: pick game mode then create -->
  <div class="title-card" id="host-card" style="display:none;">
    <div style="display:flex;align-items:center;gap:.8rem;margin-bottom:1.5rem;border-bottom:1px solid var(--border);padding-bottom:.8rem;">
      <button onclick="showHomeCard()" style="background:none;border:none;color:var(--muted);font-size:1.2rem;cursor:pointer;line-height:1;">←</button>
      <h2 style="margin:0;border:none;padding:0;">Host a Game</h2>
    </div>
    <div class="field-group">
      <label>Game Mode</label>
      <div class="mode-grid">
        <div class="mode-card active" id="mode-unlimited" onclick="selectMode('unlimited')">
          <div class="mode-icon">♾️</div>
          <div class="mode-name">Unlimited</div>
          <div class="mode-desc">Mine until the host ends the game. Classic freeplay.</div>
        </div>
        <div class="mode-card" id="mode-timed" onclick="selectMode('timed')">
          <div class="mode-icon">⏱️</div>
          <div class="mode-name">Timed Rush</div>
          <div class="mode-desc">Race the clock! Auto-ends when time runs out.</div>
          <div class="mode-extra" id="timed-extra">
            <select id="timed-duration" onclick="event.stopPropagation()" onchange="event.stopPropagation()">
              <option value="180">3 min</option>
              <option value="300" selected>5 min</option>
              <option value="600">10 min</option>
              <option value="900">15 min</option>
            </select>
          </div>
        </div>
        <div class="mode-card" id="mode-teams" onclick="selectMode('teams')">
          <div class="mode-icon">🤝</div>
          <div class="mode-name">Team Dig</div>
          <div class="mode-desc">2v2 — team scores combine. Most gold wins!</div>
        </div>
      </div>
    </div>
    <button class="btn btn-gold" id="btn-create" onclick="createLobby()" disabled>⚒ Create Lobby</button>
  </div>

  <!-- Join card -->
  <div class="title-card" id="join-card" style="display:none;">
    <div style="display:flex;align-items:center;gap:.8rem;margin-bottom:1.5rem;border-bottom:1px solid var(--border);padding-bottom:.8rem;">
      <button onclick="showHomeCard()" style="background:none;border:none;color:var(--muted);font-size:1.2rem;cursor:pointer;line-height:1;">←</button>
      <h2 style="margin:0;border:none;padding:0;">Join a Game</h2>
    </div>
    <div class="field-group">
      <label>Lobby Code</label>
      <input type="text" id="join-code" placeholder="e.g. GOLD-7432" maxlength="9" style="text-transform:uppercase" oninput="formatLobbyCode(this)">
      <div class="error-msg" id="join-error"></div>
    </div>
    <button class="btn btn-gold" id="btn-join" onclick="joinLobby()" disabled>🚪 Join with Code</button>
    <div class="divider">OR BROWSE OPEN LOBBIES</div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;">
      <div style="font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);">Public Lobbies</div>
      <div style="display:flex;gap:.4rem;align-items:center;">
        <button id="notif-btn" class="notif-btn" onclick="requestNotifPermission()" title="Get notified when a public lobby opens">🔔 Notify Me</button>
        <button onclick="refreshServerList()" style="background:none;border:none;color:var(--muted);font-size:.85rem;cursor:pointer;padding:.2rem .5rem;border-radius:4px;border:1px solid var(--border);">🔄 Refresh</button>
      </div>
    </div>
    <div id="server-list" style="min-height:60px;"></div>
  </div>
</div>

<!-- LOBBY -->
<div id="lobby-screen" class="screen">
  <div class="lobby-card">
    <div class="lobby-header">
      <h2>⛏ Waiting Room</h2>
      <div class="lobby-code">Code: <span id="lobby-code-display">----</span></div>
    </div>
    <p class="copy-hint" onclick="copyCode()">📋 Click to copy code and share with friends</p>
    <div id="lobby-mode-display"></div>
    <div class="lobby-name-row">
      <input type="text" id="lobby-name-input" placeholder="Change your name..." maxlength="16">
      <button onclick="updateLobbyName()">✏️ Set Name</button>
    </div>
    <div style="margin-bottom:.8rem;">
      <div style="font-size:.72rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:.4rem;">Choose Your Icon</div>
      <div class="avatar-picker" id="avatar-picker"></div>
    </div>
    <div class="player-slots" id="lobby-slots"></div>
    <p style="font-size:.8rem;color:var(--muted);margin-bottom:1rem;text-align:center;">
      Share the code above with up to 3 friends. Only the host can start the game.
    </p>
    <!-- Host-only controls -->
    <div id="host-controls" style="display:none;margin-bottom:.8rem;">
      <div style="display:flex;gap:.5rem;align-items:center;margin-bottom:.5rem;">
        <button class="btn btn-outline" id="change-mode-btn" onclick="showChangeModePanel()" style="flex:1;font-size:1rem;padding:.5rem;">🎮 Change Mode</button>
        <button class="btn btn-outline" id="toggle-public-btn" onclick="toggleLobbyPublic()" style="flex:1;font-size:1rem;padding:.5rem;">🌐 Make Public</button>
      </div>
    </div>
    <!-- Change Mode Panel (hidden by default) -->
    <div id="change-mode-panel" style="display:none;background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:1rem;margin-bottom:.8rem;">
      <div style="font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:.6rem;">Select New Mode</div>
      <div class="mode-grid" style="gap:.5rem;margin-bottom:.7rem;">
        <div class="mode-card" id="lmode-unlimited" onclick="selectLobbyMode('unlimited')">
          <div class="mode-icon">♾️</div><div class="mode-name">Unlimited</div>
          <div class="mode-desc">Mine until host ends it.</div>
        </div>
        <div class="mode-card" id="lmode-timed" onclick="selectLobbyMode('timed')">
          <div class="mode-icon">⏱️</div><div class="mode-name">Timed Rush</div>
          <div class="mode-desc">Auto-ends when time runs out.</div>
          <div class="mode-extra"><select id="lmode-duration" onclick="event.stopPropagation()" onchange="event.stopPropagation()">
            <option value="180">3 min</option><option value="300" selected>5 min</option>
            <option value="600">10 min</option><option value="900">15 min</option>
          </select></div>
        </div>
        <div class="mode-card" id="lmode-teams" onclick="selectLobbyMode('teams')">
          <div class="mode-icon">🤝</div><div class="mode-name">Team Dig</div>
          <div class="mode-desc">2v2 team scores combine.</div>
        </div>
      </div>
      <div style="display:flex;gap:.5rem;">
        <button class="btn btn-gold" onclick="applyLobbyMode()" style="font-size:1rem;padding:.5rem 1rem;">✅ Apply</button>
        <button class="btn btn-outline" onclick="document.getElementById('change-mode-panel').style.display='none'" style="font-size:1rem;padding:.5rem 1rem;">✕ Cancel</button>
      </div>
    </div>
    <div class="lobby-actions">
      <button class="btn btn-outline" id="leave-lobby-btn" onclick="leaveLobby()" style="flex:0 0 auto;width:auto;padding-left:1.2rem;padding-right:1.2rem;display:none;">🚪 Leave</button>
      <button class="btn" id="end-lobby-btn" onclick="confirmEndLobby()" style="display:none;flex:0 0 auto;width:auto;padding-left:1.2rem;padding-right:1.2rem;background:linear-gradient(135deg,var(--ruby),#c02020);color:#fff;border:none;font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.1em;border-radius:8px;cursor:pointer;">✕ End Lobby</button>
      <button class="btn btn-gold" id="start-btn" onclick="startGame()">▶ Start Game</button>
    </div>
  </div>
</div>

  <!-- LOBBY CHAT -->
  <div class="lobby-chat-wrap" id="lobby-chat-wrap" style="display:none;">
    <button class="lobby-chat-toggle" id="chat-toggle-btn" onclick="toggleChat()">
      <span>💬 Lobby Chat</span>
      <span>
        <span class="chat-unread-badge" id="chat-unread-badge"></span>
        <span id="chat-chevron">▼</span>
      </span>
    </button>
    <div class="lobby-chat-box" id="lobby-chat-box">
      <div class="chat-messages" id="chat-messages"></div>
      <div class="chat-input-row">
        <input type="text" id="chat-input" placeholder="Say something..." maxlength="200" onkeydown="chatKeyDown(event)">
        <button onclick="sendChat()">Send</button>
      </div>
    </div>
  </div>

<!-- SPECTATOR SCREEN -->
<div id="spectator-screen" class="screen">
  <div class="spectator-topbar">
    <div style="display:flex;align-items:center;gap:.8rem;">
      <span style="font-family:'Bebas Neue',sans-serif;font-size:1.4rem;color:var(--gold);">⛏ GEM RUSH</span>
      <span class="spectator-badge">👁 SPECTATING</span>
    </div>
    <div style="display:flex;align-items:center;gap:.7rem;">
      <span id="spectator-timer" style="font-family:'Share Tech Mono',monospace;font-size:.9rem;color:var(--muted);display:none;"></span>
      <span id="spectator-code" style="font-size:.8rem;color:var(--muted);font-family:'Share Tech Mono',monospace;"></span>
    </div>
    <button class="spectator-exit-btn" onclick="exitSpectator()">🚪 Exit</button>
  </div>
  <div class="spectator-content">
    <div class="spectator-info-row">
      <div class="spectator-stat"><span class="spectator-stat-val" id="spec-player-count">0</span><span class="spectator-stat-lbl">Players</span></div>
      <div class="spectator-stat"><span class="spectator-stat-val" id="spec-spectator-count">1</span><span class="spectator-stat-lbl">👁 Watching</span></div>
      <div class="spectator-stat"><span class="spectator-stat-val" id="spec-top-score">$0</span><span class="spectator-stat-lbl">Top Score</span></div>
    </div>
    <div class="spectator-leaderboard">
      <div class="spectator-lb-header">
        <span>📊 Live Leaderboard</span>
        <span id="spec-mode-label" style="font-size:.75rem;color:var(--muted);font-family:'Share Tech Mono',monospace;"></span>
      </div>
      <div id="spectator-lb-rows"></div>
    </div>
    <!-- Spectator chat panel -->
    <div class="spectator-leaderboard" style="min-height:220px;display:flex;flex-direction:column;overflow:hidden;">
      <div class="spectator-lb-header">
        <span>💬 Chat</span>
        <span id="spec-chat-unread" style="background:var(--ruby);color:#fff;font-family:'Share Tech Mono',monospace;font-size:.65rem;padding:.1rem .4rem;border-radius:99px;display:none;"></span>
      </div>
      <div style="flex:1;overflow-y:auto;padding:.6rem .8rem;display:flex;flex-direction:column;gap:.3rem;" id="spectator-chat-msgs"></div>
      <div class="ingame-chat-input-row">
        <input type="text" id="spectator-chat-input" placeholder="Chat as spectator..." maxlength="200" onkeydown="spectatorChatKeyDown(event)">
        <button onclick="sendSpectatorChat()">Send</button>
      </div>
    </div>
  </div>
</div>

  <div class="game-topbar">
    <div class="game-title">⛏ GEM RUSH</div>
    <div style="display:flex;align-items:center;gap:.7rem;">
      <span id="game-timer">⏱ 5:00</span>
      <span id="topbar-spectator-count" style="font-size:.75rem;color:#9040f0;font-family:'Share Tech Mono',monospace;display:none;"></span>
      <div style="font-size:.8rem;color:var(--muted);font-family:'Share Tech Mono',monospace" id="topbar-code"></div>
    </div>
    <button class="topbar-end-btn" id="end-game-btn" onclick="confirmEndGame()" style="display:none;">🏁 End Game</button>
    <button class="topbar-end-btn" id="leave-game-btn" onclick="confirmLeaveGame()" style="display:none;background:linear-gradient(135deg,#555,#333);">🚪 Leave</button>
  </div>
  <div class="game-layout">
    <div class="mine-area">
      <!-- Mobile-only panel hint -->
      <div class="mobile-panel-hint" id="mobile-panel-hint" onclick="toggleMobilePanel()">
        <span class="hint-open-text">▲ tap to open upgrades</span>
        <span class="hint-close-text">▼ tap to close</span>
      </div>
      <div class="stats-row">
        <div class="stat-box"><span class="stat-val" id="stat-gems">0</span><span class="stat-lbl">💎 Gems Mined</span></div>
        <div class="stat-box"><span class="stat-val" id="stat-profit">$0</span><span class="stat-lbl">💰 Cash</span></div>
        <div class="stat-box"><span class="stat-val" id="stat-clicks">0</span><span class="stat-lbl">⚒ Clicks</span></div>
      </div>
      <div class="mine-btn-wrap">
        <!-- Orbit zone holds the button + orbiting miners -->
        <div class="orbit-zone" id="orbit-zone">
          <button class="mine-button" id="mine-btn"
            onmousedown="startCharge(event)" onmouseup="releaseCharge(event)" onmouseleave="cancelCharge()"
            ontouchstart="startCharge(event)" ontouchend="releaseCharge(event)" ontouchcancel="cancelCharge()">
            <span class="pick-icon">⛏</span>
            <div class="charge-ring" id="charge-ring"></div>
            <div class="charge-label" id="charge-label">HOLD TO CHARGE</div>
          </button>
        </div>
        <div class="mine-label">Click to Mine</div>
        <div class="mine-power" id="mine-power-display">+1 gem / click (55% chance)</div>
        <div class="kbd-hint" style="font-size:.7rem;color:var(--muted);letter-spacing:.08em;opacity:.6;"><kbd style="background:var(--surface2);border:1px solid var(--border);border-radius:3px;padding:.1rem .35rem;">Space</kbd> Mine &nbsp; <kbd style="background:var(--surface2);border:1px solid var(--border);border-radius:3px;padding:.1rem .35rem;">S</kbd> Sell All</div>
      </div>

      <!-- Scrollable zone: inventory + status + prestige -->
      <div class="mine-scroll-zone">

      <!-- Inventory + Sell -->
      <div class="inventory-section">
        <div class="inv-header">
          <div class="inv-title">💼 Gem Inventory (click to sell)</div>
          <button class="inv-sell-all-btn" id="sell-all-btn" onclick="sellAll()" disabled>Sell All</button>
        </div>
        <div id="gem-inventory"></div>
        <div class="inv-value-row" id="inv-value-row" style="display:none">
          Inventory value: <span id="inv-total-value">$0</span>
        </div>
        <div class="inv-cap-bar-wrap" id="inv-cap-bar-wrap" style="display:none">
          <div class="inv-cap-bar" id="inv-cap-bar"></div>
        </div>
        <div class="inv-cap-row" id="inv-cap-row" style="display:none">
          <span id="inv-cap-used">0</span>/<span id="inv-cap-max">50</span> gems
          <span id="inv-cap-warn"></span>
        </div>
        <!-- Status indicators -->
        <div id="gem-tax-indicator" style="display:none;margin-top:.4rem;padding:.3rem .7rem;background:rgba(232,64,64,.18);border:1px solid var(--ruby);border-radius:6px;font-size:.78rem;color:var(--ruby);font-family:'Share Tech Mono',monospace;">💸 GEM TAX ACTIVE — 15% of your next sell will be stolen!</div>
        <div id="shield-indicator" style="display:none;margin-top:.4rem;padding:.3rem .7rem;background:rgba(64,144,245,.18);border:1px solid var(--sapphire);border-radius:6px;font-size:.78rem;color:var(--sapphire);font-family:'Share Tech Mono',monospace;">🛡 SABOTAGE SHIELD ACTIVE — next attack will be blocked!</div>
        <div id="bulk-sell-countdown" style="display:none;margin-top:.4rem;padding:.3rem .7rem;background:rgba(48,217,122,.12);border:1px solid rgba(48,217,122,.4);border-radius:6px;font-size:.78rem;color:var(--emerald);font-family:'Share Tech Mono',monospace;"></div>
      </div>
      <!-- Prestige button -->
      <div class="prestige-btn-wrap" id="prestige-btn-wrap" style="display:none">
        <button class="prestige-btn" id="prestige-btn" onclick="doPrestige()">🌑 Go Deeper — Prestige!</button>
        <div class="prestige-info" id="prestige-info"></div>
      </div>

      </div><!-- /mine-scroll-zone -->
    </div>
    <div class="upgrade-panel" id="upgrade-panel">
      <div class="panel-tabs">
        <div class="panel-tab active" onclick="switchTab('upgrades',this)">Upgrades</div>
        <div class="panel-tab" onclick="switchTab('players',this)">Players</div>
        <div class="panel-tab" onclick="switchTab('sabotage',this)">Sabotage</div>
        <div class="panel-tab" onclick="switchTab('achievements',this)">Badges</div>
        <div class="panel-tab panel-tab-wrap" onclick="switchTab('chat',this)" id="chat-panel-tab">Chat<span class="ingame-chat-unread" id="ingame-chat-unread"></span></div>
      </div>
      <div class="panel-content" id="panel-upgrades"></div>
      <div class="panel-content" id="panel-players" style="display:none"></div>
      <div class="panel-content" id="panel-sabotage" style="display:none"></div>
      <div class="panel-content" id="panel-achievements" style="display:none"></div>
      <div class="panel-content ingame-chat-panel" id="panel-chat" style="display:none;padding:0;"></div>
    </div>
  </div>
</div>

<!-- PRESTIGE OVERLAY -->
<div id="prestige-overlay">
  <div class="prestige-modal">
    <div class="prestige-modal-gem" id="prestige-modal-gem">🌑</div>
    <div class="prestige-modal-title" id="prestige-modal-title">PRESTIGE I</div>
    <div class="prestige-modal-sub">Deep Mine unlocked. Your legacy multiplier carries forward.</div>
    <div class="prestige-modal-bonus" id="prestige-modal-bonus">+10% permanent gem value</div>
    <button class="prestige-modal-btn" onclick="dismissPrestige()">Descend Deeper ⛏</button>
  </div>
</div>

<!-- END -->
<div id="end-screen" class="screen">
  <div class="end-card">
    <div style="font-size:3rem">🏆</div>
    <h2>Game Over!</h2>
    <div class="winner-name" id="winner-display"></div>
    <div class="leaderboard" id="final-leaderboard"></div>
    <div class="awards-section" id="final-awards" style="display:none">
      <div class="awards-title">🏅 Special Awards</div>
      <div id="awards-list"></div>
    </div>
    <button class="btn btn-gold" id="return-lobby-btn" onclick="returnToLobby()" style="display:none;">↩ Return to Lobby</button>
    <div id="end-waiting-msg" style="margin-top:.8rem;font-size:.85rem;color:var(--muted);font-family:'Share Tech Mono',monospace;text-align:center;display:none;">⏳ Waiting for host to return to lobby...</div>
  </div>
</div>

<script>
// ─── Constants (mirrors server) ────────────────────────────────────────────────
// Gem SVG icons rendered inline — distinct gem shapes per type
function gemSVG(type) {
  const svgs = {
    'Coal':      `<svg width="18" height="18" viewBox="0 0 18 18"><polygon points="9,1 17,9 9,17 1,9" fill="#5a4a3a" stroke="#8a6a5a" stroke-width="1.5"/></svg>`,
    'Quartz':    `<svg width="18" height="18" viewBox="0 0 18 18"><polygon points="9,1 15,5 15,13 9,17 3,13 3,5" fill="#b0d8f8" stroke="#80b8e8" stroke-width="1.5"/></svg>`,
    'Ruby':      `<svg width="18" height="18" viewBox="0 0 18 18"><polygon points="9,1 16,6 13,16 5,16 2,6" fill="#e03030" stroke="#ff6060" stroke-width="1.5"/><polygon points="9,3 13,7 11,13 7,13 5,7" fill="#ff8080" opacity="0.4"/></svg>`,
    'Emerald':   `<svg width="18" height="18" viewBox="0 0 18 18"><polygon points="5,1 13,1 17,9 13,17 5,17 1,9" fill="#22b860" stroke="#40e880" stroke-width="1.5"/><polygon points="6,4 12,4 15,9 12,14 6,14 3,9" fill="#70ffa0" opacity="0.3"/></svg>`,
    'Sapphire':  `<svg width="18" height="18" viewBox="0 0 18 18"><polygon points="9,1 17,7 14,17 4,17 1,7" fill="#2060d0" stroke="#60a0ff" stroke-width="1.5"/><polygon points="9,4 14,8 12,14 6,14 4,8" fill="#80c0ff" opacity="0.4"/></svg>`,
    'Diamond':   `<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10,1 19,8 10,19 1,8" fill="#a0e8ff" stroke="#d0f8ff" stroke-width="1.5"/><polygon points="10,1 19,8 10,8" fill="#ffffff" opacity="0.5"/><polygon points="10,8 19,8 10,19" fill="#60c8f0" opacity="0.6"/></svg>`,
    'Moonstone': `<svg width="20" height="20" viewBox="0 0 20 20"><ellipse cx="10" cy="10" rx="9" ry="9" fill="#c8b8f8" stroke="#e8d8ff" stroke-width="1.5"/><ellipse cx="8" cy="7" rx="4" ry="3" fill="#ffffff" opacity="0.4"/><circle cx="13" cy="13" r="2" fill="#9070d0" opacity="0.5"/></svg>`,
    'Void Gem':  `<svg width="20" height="20" viewBox="0 0 20 20"><polygon points="10,1 13,7 19,7 14,12 16,19 10,15 4,19 6,12 1,7 7,7" fill="#6020c0" stroke="#a060ff" stroke-width="1.5"/><circle cx="10" cy="10" r="3" fill="#e0c0ff" opacity="0.6"/></svg>`,
  };
  return svgs[type] || `<span>💎</span>`;
}

const GEM_TYPES = [
  { name: 'Coal',      color: '#8a6a5a', value: 1,    rarity: 0.45   },
  { name: 'Quartz',    color: '#80b8e8', value: 3,    rarity: 0.25   },
  { name: 'Ruby',      color: '#e84040', value: 8,    rarity: 0.015   },
  { name: 'Emerald',   color: '#30d97a', value: 18,   rarity: 0.01   },
  { name: 'Sapphire',  color: '#4090f5', value: 40,   rarity: 0.005   },
  { name: 'Diamond',   color: '#a0e8ff', value: 100,  rarity: 0.001  },
  { name: 'Moonstone', color: '#c8b8f8', value: 300,  rarity: 0.0004  },
  { name: 'Void Gem',  color: '#a060ff', value: 1000, rarity: 0.0001  },
];
const UPGRADES = [
  {id:'pickaxe',    name:'Iron Pickaxe',      emoji:'⛏',  baseCost:30,     costMult:2.8,  maxLevel:6,  type:'gemsPerClick',    desc:'Swing harder. +1 gem/click per level.'},
  {id:'gloves',     name:'Miner Gloves',      emoji:'🧤', baseCost:80,     costMult:3.0,  maxLevel:5,  type:'gemsPerClick',    desc:'Better grip. +0.5 gem/click per level.'},
  {id:'helmet',     name:'Miner Helmet',      emoji:'⛑',  baseCost:150,    costMult:3.2,  maxLevel:4,  type:'rarityBonus',     desc:'Reveals rare veins. +12% rare gem chance.'},
  {id:'canary',     name:'Mine Canary',       emoji:'🐦', baseCost:400,    costMult:3.5,  maxLevel:5,  type:'autoMine',        gemEmoji:'🪨', desc:'Tweets when coal is near. +1 gem/sec AFK.'},
  {id:'lamp',       name:'Crystal Lamp',      emoji:'🔦', baseCost:500,    costMult:3.2,  maxLevel:5,  type:'valueMultiplier', desc:'Illuminates gems. +20% gem value per level.'},
  {id:'goblin',     name:'Goblin Miner',      emoji:'👺', baseCost:900,    costMult:4.0,  maxLevel:5,  type:'autoMine',        gemEmoji:'🔹', desc:'Sneaky little digger. +2 gems/sec AFK.'},
  {id:'drill',      name:'Power Drill',       emoji:'🔩', baseCost:1200,   costMult:4.2,  maxLevel:4,  type:'gemsPerClick',    desc:'Industrial might. +3 gems/click per level.'},
  {id:'dwarf',      name:'Dwarf Miner',       emoji:'🧙', baseCost:2500,   costMult:4.5,  maxLevel:5,  type:'autoMine',        gemEmoji:'♦️',  desc:'Expert craftsman. +3 gems/sec AFK.'},
  {id:'radar',      name:'Gem Radar',         emoji:'📡', baseCost:3000,   costMult:4.5,  maxLevel:4,  type:'rarityBonus',     desc:'Tracks rare veins. +20% rare gem find rate.'},
  {id:'cart',       name:'Mine Cart',         emoji:'🛒', baseCost:4000,   costMult:4.8,  maxLevel:4,  type:'autoMine',        gemEmoji:'💚', desc:'Hauls loads automatically. +4 gems/sec AFK.'},
  {id:'tnt',        name:'Mining Charges',    emoji:'💣', baseCost:5000,   costMult:5.5,  maxLevel:3,  type:'gemsPerClick',    desc:'Blast radius! +8 gems/click per level.'},
  {id:'vault',      name:'Gold Vault',        emoji:'🏦', baseCost:8000,   costMult:5.5,  maxLevel:3,  type:'valueMultiplier', desc:'Secure profits. +30% gem sell value.'},
  {id:'robot',      name:'Mining Robot',      emoji:'🤖', baseCost:12000,  costMult:6.0,  maxLevel:4,  type:'autoMine',        gemEmoji:'💎', desc:'Robotic miner. +6 gems/sec AFK.'},
  {id:'lucky_pick', name:'Lucky Pickaxe',     emoji:'🍀', baseCost:15000,  costMult:5.0,  maxLevel:4,  type:'clickChance',     desc:'Fortune favours the bold. +8% click success chance.'},
  {id:'black_mkt',  name:'Black Market',      emoji:'🕵️', baseCost:20000,  costMult:6.0,  maxLevel:3,  type:'valueMultiplier', desc:'No questions asked. +50% gem sell value.'},
  {id:'dragon',     name:'Cave Dragon',       emoji:'🐉', baseCost:35000,  costMult:7.0,  maxLevel:3,  type:'autoMine',        gemEmoji:'🌕', desc:'Ancient hoarding instincts. +12 gems/sec AFK.'},
  {id:'earthquake', name:'Earthquake Drill',  emoji:'🌋', baseCost:50000,  costMult:6.5,  maxLevel:3,  type:'gemsPerClick',    desc:'Shake the mountain. +15 gems/click per level.'},
  {id:'gem_magnet', name:'Gem Magnet',        emoji:'🧲', baseCost:60000,  costMult:7.0,  maxLevel:3,  type:'rarityBonus',     desc:'Attracts only the finest. +35% rare gem rate.'},
  {id:'time_warp',  name:'Time Warp Engine',  emoji:'⏱',  baseCost:80000,  costMult:7.5,  maxLevel:2,  type:'autoMine',        gemEmoji:'🔷', desc:'Mines gems across time. +20 gems/sec AFK.'},
  {id:'void_rig',   name:'Void Drill Rig',    emoji:'🔮', baseCost:100000, costMult:8.5,  maxLevel:2,  type:'autoMine',        gemEmoji:'🔮', desc:'Drills into another dimension. +25 gems/sec AFK.'},
  {id:'gem_forge',    name:'Gem Forge',         emoji:'⚗️',  baseCost:150000, costMult:8.0,  maxLevel:2,  type:'valueMultiplier', desc:'Refine raw gems. +100% sell value per level.'},
  {id:'singularity',  name:'Mining Singularity', emoji:'🌀', baseCost:500000, costMult:10.0, maxLevel:1,  type:'autoMine',        gemEmoji:'🔮', desc:'A point of infinite density. +100 gems/sec AFK.'},
  {id:'satchel',      name:'Gem Satchel',        emoji:'🎒', baseCost:500,    costMult:4.5,  maxLevel:6,  type:'inventoryCap',    desc:'Doubles your bag capacity each upgrade. Starts at 50 slots.'},
  {id:'gem_insurance',name:'Gem Insurance',      emoji:'🛡', baseCost:2500,   costMult:1.0,  maxLevel:1,  type:'sabotageShield',  desc:'Blocks the next sabotage you receive. One-time use — recharge by repurchasing.'},
  {id:'bulk_sell',    name:'Auto Sell',            emoji:'📦', baseCost:3500,   costMult:2.2,  maxLevel:5,  type:'bulkSell',        desc:'Auto-sells when inventory is full. Delay decreases each level.'},
];
const ACHIEVEMENTS = [
  {id:'first_click',   name:'First Strike',         emoji:'⚒',  desc:'Make your first click.'},
  {id:'clicks_50',     name:'Getting Warmed Up',    emoji:'🔥', desc:'Click 50 times.'},
  {id:'clicks_500',    name:'Mining Addict',        emoji:'💪', desc:'Click 500 times.'},
  {id:'clicks_5000',   name:'Carpal Tunnel Club',   emoji:'🖱', desc:'Click 5,000 times.'},
  {id:'gems_100',      name:'Novice Miner',         emoji:'🪨', desc:'Mine 100 total gems.'},
  {id:'gems_1000',     name:'Gem Hunter',           emoji:'💚', desc:'Mine 1,000 total gems.'},
  {id:'gems_10000',    name:'Gem Mogul',            emoji:'💎', desc:'Mine 10,000 total gems.'},
  {id:'gems_100000',   name:'Gem God',              emoji:'🌋', desc:'Mine 100,000 total gems.'},
  {id:'profit_1000',   name:'Side Hustle',          emoji:'💵', desc:'Earn $1,000 in cash.'},
  {id:'profit_50000',  name:'Gem Tycoon',           emoji:'💰', desc:'Earn $50,000 in cash.'},
  {id:'profit_500k',   name:'Mining Baron',         emoji:'🏆', desc:'Earn $500,000 in cash.'},
  {id:'profit_5m',     name:'Gem Billionaire',      emoji:'💸', desc:'Earn $5,000,000 in cash.'},
  {id:'ruby',          name:'Red Vein Found',       emoji:'♦️',  desc:'Find your first Ruby.'},
  {id:'diamond',       name:'Diamond Find',         emoji:'💎', desc:'Find a Diamond.'},
  {id:'moonstone',     name:'Lunar Touch',          emoji:'🌕', desc:'Find a Moonstone.'},
  {id:'void',          name:'Beyond Darkness',      emoji:'🔮', desc:'Find a Void Gem.'},
  {id:'void_x5',       name:'Void Collector',       emoji:'🌀', desc:'Find 5 Void Gems.'},
  {id:'upgrade1',      name:'Tool Time',            emoji:'🔧', desc:'Buy your first upgrade.'},
  {id:'upgrade5',      name:'Workshop Ready',       emoji:'🔩', desc:'Buy 5 upgrades.'},
  {id:'upgrade10',     name:'Full Arsenal',         emoji:'🏗', desc:'Buy 10 upgrades.'},
  {id:'upgrade20',     name:'Max Loadout',          emoji:'🚀', desc:'Buy 20 upgrades.'},
  {id:'auto_mine',     name:'Automation!',          emoji:'🤖', desc:'Unlock auto-mining.'},
  {id:'auto_mine_20',  name:'Factory Floor',        emoji:'🏭', desc:'Reach 20 gems/sec auto-mine.'},
  {id:'auto_mine_100', name:'Infinite Mine',        emoji:'♾',  desc:'Reach 100 gems/sec auto-mine.'},
  {id:'rich_click',    name:'Jackpot Click',        emoji:'🎰', desc:'Reach 20 gems per click.'},
  {id:'sell_spree',    name:'Cash Out King',        emoji:'🏧', desc:'Sell gems 50 times.'},
  {id:'hoarder',       name:'Hoarder',              emoji:'🐲', desc:'Hold 500+ gems in inventory.'},
  {id:'void_rig_max',  name:'Void Lord',            emoji:'👁', desc:'Max out the Void Drill Rig.'},
  {id:'singularity_u', name:'Singularity Achieved', emoji:'🌀', desc:'Unlock the Mining Singularity.'},
];

const SABOTAGES = [
  { id: 'freeze',       name: 'Freeze',       emoji: '🧊', baseCost: 300,  desc: 'Halts their auto-miners for 15 seconds.' },
  { id: 'pickpocket',   name: 'Pickpocket',   emoji: '🪤', baseCost: 500,  desc: 'Steals 8% of their held inventory gems.' },
  { id: 'cursed_vein',  name: 'Cursed Vein',  emoji: '☠️', baseCost: 800,  desc: 'Their next 10 clicks are guaranteed misses.' },
  { id: 'gem_tax',      name: 'Gem Tax',      emoji: '💸', baseCost: 650,  desc: 'Steals 15% of the value of their next sell. Punishes hoarding.' },
  { id: 'pickaxe_jam',  name: 'Pickaxe Jam',  emoji: '🔧', baseCost: 450,  desc: 'Halves their gems per click for 20 seconds. Counters click-heavy players.' },
];
function sabotageCostClient(sab, timesUsed) {
  return Math.floor(sab.baseCost * Math.pow(1 + timesUsed * 0.35, 2));
}

const PRESTIGE_RANKS = [
  { rank: 1,  label: 'I',    emoji: '🌑', threshold: 50000,    bonus: 0.10, color: '#aaaaaa' },
  { rank: 2,  label: 'II',   emoji: '🌒', threshold: 200000,   bonus: 0.10, color: '#aaaaaa' },
  { rank: 3,  label: 'III',  emoji: '🌓', threshold: 750000,   bonus: 0.15, color: '#f5c842' },
  { rank: 4,  label: 'IV',   emoji: '🌔', threshold: 2500000,  bonus: 0.15, color: '#f5c842' },
  { rank: 5,  label: 'V',    emoji: '🌕', threshold: 8000000,  bonus: 0.20, color: '#30d97a' },
  { rank: 6,  label: 'VI',   emoji: '🔮', threshold: 25000000, bonus: 0.25, color: '#9040f0' },
  { rank: 7,  label: 'VII',  emoji: '💀', threshold: 100000000,bonus: 0.30, color: '#e84040' },
];
const PRESTIGE_UPGRADES = [
  { id: 'deep_core',    name: 'Deep Core Drill',   emoji: '⚙️',  baseCost: 5000,   costMult: 5.0, maxLevel: 4, type: 'autoMine',        amount: 8,    desc: 'Drills the deep earth. +8 gems/sec AFK.' },
  { id: 'dark_matter',  name: 'Dark Matter Lens',  emoji: '🌑',  baseCost: 10000,  costMult: 5.5, maxLevel: 3, type: 'rarityBonus',     amount: 0.50, desc: 'Bends reality to find rarer gems. +50% rare gem rate.' },
  { id: 'golden_heart', name: 'Golden Heart',      emoji: '💛',  baseCost: 20000,  costMult: 6.0, maxLevel: 3, type: 'valueMultiplier', amount: 0.75, desc: 'Every gem pulses with gold. +75% sell value per level.' },
  { id: 'void_soul',    name: 'Void Soul',         emoji: '👁',  baseCost: 50000,  costMult: 8.0, maxLevel: 2, type: 'autoMine',        amount: 30,   desc: 'Your very essence mines. +30 gems/sec AFK.' },
];
function upgradeCostClient(upgradeId, level) {
  const u = [...UPGRADES, ...PRESTIGE_UPGRADES].find(x => x.id === upgradeId);
  if (!u) return Infinity;
  return Math.floor(u.baseCost * Math.pow(u.costMult, level));
}
function prestigeBadgeHTML(rank) {
  if (!rank || rank < 1) return '';
  const rd = PRESTIGE_RANKS[rank - 1];
  if (!rd) return '';
  return `<span class="prestige-badge" style="color:${rd.color};border-color:${rd.color};background:${rd.color}18">${rd.emoji} ${rd.label}</span>`;
}

// ─── State ─────────────────────────────────────────────────────────────────────
let socket;
let mySocketId = null;
let isHost = false;
let isSpectator = false;
let spectatorName = '';
let spectatorAvatar = '👁';
let lobbyCode = null;
let selfState = null;
let allPlayers = [];
let myLastRank = null; // tracks position for change announcements
let currentTab = 'upgrades';
let sessionToken = null;
let selectedMode = 'unlimited'; // 'unlimited' | 'timed' | 'teams'
let selectedLobbyMode = 'unlimited'; // mode selector inside lobby change-mode panel
let lobbyIsPublic = false;
let endCountdownInterval = null;
let gameMode = 'unlimited';
let gameTimerInterval = null;
let sabCooldownInterval = null; // ticks the sabotage cooldown display
let frozenOverlayEl = null;
let frozenBannerEl = null;
let frozenCheckInterval = null;
let jamBannerEl = null;
let jamCheckInterval = null;
let _rankToastTimer = null; // timer for hiding the rank change toast
// Track which orbiting miner elements exist
const orbitMiners = {}; // upgradeId -> DOM element
let chatOpen = false;
let chatUnread = 0;
let ingameChatUnread = 0; // unread count for in-game chat tab

// ─── Title nav ─────────────────────────────────────────────────────────────────
// Auto-dash for lobby code input
function formatLobbyCode(input) {
  let val = input.value.replace(/[^A-Za-z0-9]/g,'').toUpperCase();
  if (val.length > 4) val = val.slice(0,4) + '-' + val.slice(4,8);
  input.value = val;
}

// Mobile panel toggle (called from the hint bar in mine-area)
function toggleMobilePanel() {
  const panel = document.getElementById('upgrade-panel');
  const hint = document.getElementById('mobile-panel-hint');
  if (!panel || !isMobile()) return;
  const isOpen = panel.classList.contains('panel-open');
  if (isOpen) {
    panel.classList.remove('panel-open');
    panel.classList.add('panel-collapsed');
    hint.querySelector('.hint-open-text').style.display = '';
    hint.querySelector('.hint-close-text').style.display = 'none';
  } else {
    panel.classList.add('panel-open');
    panel.classList.remove('panel-collapsed');
    hint.querySelector('.hint-open-text').style.display = 'none';
    hint.querySelector('.hint-close-text').style.display = '';
  }
}

// ─── Avatar picker ─────────────────────────────────────────────────────────────
const ALL_AVATARS = ['⛏','🧙','🤠','🤖','👾','🐉','🦊','🏴‍☠️','💎','🔮','⚗️','🌋','🦅','🐺','🐸','🧨','👑','🧲','🪄','⚡','🌀','🔥','❄️','☠️'];
let selectedAvatar = null;

function renderAvatarPicker() {
  const container = document.getElementById('avatar-picker');
  if (!container) return;
  const current = selfState?.avatar || ALL_AVATARS[0];
  container.innerHTML = '';
  ALL_AVATARS.forEach(av => {
    const btn = document.createElement('div');
    btn.className = 'avatar-opt' + (av === current ? ' selected' : '');
    btn.textContent = av;
    btn.onclick = () => pickAvatar(av);
    container.appendChild(btn);
  });
}

function pickAvatar(av) {
  socket.emit('lobby:setAvatar', { avatar: av }, (res) => {
    if (res && res.ok) {
      if (selfState) selfState.avatar = av;
      document.querySelectorAll('.avatar-opt').forEach(el => {
        el.classList.toggle('selected', el.textContent === av);
      });
    }
  });
}

function showHomeCard() {
  document.getElementById('home-card').style.display = '';
  document.getElementById('host-card').style.display = 'none';
  document.getElementById('join-card').style.display = 'none';
}
function showHostCard() {
  document.getElementById('home-card').style.display = 'none';
  document.getElementById('host-card').style.display = '';
  document.getElementById('join-card').style.display = 'none';
  // copy name if entered
  const nameVal = document.getElementById('player-name').value.trim();
  // nothing else needed
}
function showJoinCard() {
  document.getElementById('home-card').style.display = 'none';
  document.getElementById('host-card').style.display = 'none';
  document.getElementById('join-card').style.display = '';
  refreshServerList();
}

// ─── Server Browser ────────────────────────────────────────────────────────────
function refreshServerList() {
  const container = document.getElementById('server-list');
  if (!container) return;
  container.innerHTML = '<div class="server-empty">🔍 Searching...</div>';
  fetch('/api/lobbies').then(r => r.json()).then(lobbies => {
    container.innerHTML = '';
    if (!lobbies.length) {
      container.innerHTML = '<div class="server-empty">No open public lobbies. Be the first to host!</div>';
      return;
    }
    lobbies.forEach(l => {
      const modeLabel = l.gameMode === 'timed' ? `⏱ Timed (${Math.round(l.gameDuration/60)}m)` : l.gameMode === 'teams' ? '🤝 Teams' : '♾️ Unlimited';
      const row = document.createElement('div');
      row.className = 'server-row';
      if (l.inProgress) {
        const specCount = l.spectatorCount ? ` · ${l.spectatorCount} watching` : '';
        row.innerHTML = `
          <div class="server-row-info">
            <div class="server-row-code">${l.code} <span style="font-size:.7rem;color:#9040f0;background:rgba(144,64,240,.1);border:1px solid rgba(144,64,240,.3);border-radius:3px;padding:.05rem .35rem;">IN PROGRESS</span></div>
            <div class="server-row-meta">${l.hostName} · ${modeLabel} · ${l.playerCount} players${specCount}</div>
          </div>
          <button class="server-row-join" style="background:linear-gradient(135deg,#9040f0,#6020c0);" onclick="watchLobby('${l.code}',event)">👁 WATCH</button>`;
      } else {
        row.innerHTML = `
          <div class="server-row-info">
            <div class="server-row-code">${l.code}</div>
            <div class="server-row-meta">${l.hostName} · ${modeLabel} · ${l.playerCount}/${l.maxPlayers} players</div>
          </div>
          <button class="server-row-join" onclick="quickJoin('${l.code}',event)">JOIN</button>`;
      }
      container.appendChild(row);
    });
  }).catch(() => {
    container.innerHTML = '<div class="server-empty">Could not load lobby list.</div>';
  });
}

function quickJoin(code) {
  document.getElementById('join-code').value = code;
  joinLobby();
}

function watchLobby(code) {
  document.getElementById('join-code').value = code;
  joinLobby(); // joinLobby handles spectator path automatically when server is in-progress
}

// ─── Lobby mode change (host in lobby) ─────────────────────────────────────────
function showChangeModePanel() {
  const panel = document.getElementById('change-mode-panel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  // Sync selected state to current gameMode
  selectLobbyMode(gameMode);
}

function selectLobbyMode(mode) {
  selectedLobbyMode = mode;
  document.querySelectorAll('[id^="lmode-"]').forEach(c => c.classList.remove('active'));
  const el = document.getElementById('lmode-' + mode);
  if (el) el.classList.add('active');
}

function applyLobbyMode() {
  const duration = selectedLobbyMode === 'timed'
    ? parseInt(document.getElementById('lmode-duration').value)
    : null;
  socket.emit('lobby:changeMode', { mode: selectedLobbyMode, duration }, (res) => {
    if (!res || !res.ok) { showToast('❌', 'Error', res?.error || 'Failed'); return; }
    gameMode = res.mode;
    document.getElementById('change-mode-panel').style.display = 'none';
    showToast('🎮', 'Mode Changed', `Now playing: ${res.mode}`);
  });
}

function toggleLobbyPublic() {
  const newVal = !lobbyIsPublic;
  socket.emit('lobby:setPublic', { isPublic: newVal }, (res) => {
    if (!res || !res.ok) return;
    lobbyIsPublic = res.isPublic;
    const btn = document.getElementById('toggle-public-btn');
    if (btn) btn.textContent = lobbyIsPublic ? '🔒 Make Private' : '🌐 Make Public';
    showToast(lobbyIsPublic ? '🌐' : '🔒', lobbyIsPublic ? 'Lobby is Public' : 'Lobby is Private',
      lobbyIsPublic ? 'Players can find this in the server list.' : 'Players need your code to join.');
  });
}

async function leaveLobby() {
  if (!await showConfirm({ icon: '🚪', title: 'Leave Lobby?', msg: 'You will be removed from the current lobby.', okText: 'Leave', cancelText: 'Stay' })) return;
  socket.emit('lobby:leave', {}, (res) => {
    if (res && !res.ok) { showToast('❌', 'Cannot Leave', res.error); return; }
    lobbyCode = null; isHost = false; selfState = null; allPlayers = []; myLastRank = null;
    sessionToken = null;
    clearSession();
    const _chatWrap = document.getElementById('lobby-chat-wrap');
    if (_chatWrap) _chatWrap.style.display = 'none';
    clearChat?.();
    showScreen('title-screen');
    showHomeCard();
  });
}

async function confirmLeaveGame() {
  if (!await showConfirm({ icon: '🏃', title: 'Leave Game?', msg: "You'll lose your progress in this round.", okText: 'Leave', cancelText: 'Stay' })) return;
  socket.emit('lobby:leave', {}, (res) => {
    if (res && !res.ok) { showToast('❌', 'Cannot Leave', res.error); return; }
    lobbyCode = null; isHost = false; selfState = null; allPlayers = []; myLastRank = null;
    sessionToken = null;
    stopClientTimer(); stopSabCooldownTick(); removeFrozenOverlay(); clearOrbitMiners();
    clearSession();
    const _chatWrap = document.getElementById('lobby-chat-wrap');
    if (_chatWrap) _chatWrap.style.display = 'none';
    clearChat?.();
    showScreen('title-screen');
    showHomeCard();
  });
}
function selectMode(mode) {
  selectedMode = mode;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active'));
  document.getElementById('mode-' + mode).classList.add('active');
}

// ─── Lobby Chat ────────────────────────────────────────────────────────────────
function toggleChat() {
  chatOpen = !chatOpen;
  const box     = document.getElementById('lobby-chat-box');
  const chevron = document.getElementById('chat-chevron');
  const toggle  = document.getElementById('chat-toggle-btn');
  if (box)     box.classList.toggle('open', chatOpen);
  if (chevron) chevron.textContent = chatOpen ? '▲' : '▼';
  if (chatOpen) {
    clearChatUnread();
    // Scroll to bottom when opening
    const msgs = document.getElementById('chat-messages');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
    // Focus input on non-mobile
    if (!isMobile()) {
      const inp = document.getElementById('chat-input');
      if (inp) inp.focus();
    }
  }
}

function openChat() {
  if (!chatOpen) toggleChat();
}

function clearChatUnread() {
  chatUnread = 0;
  const badge  = document.getElementById('chat-unread-badge');
  const toggle = document.getElementById('chat-toggle-btn');
  if (badge)  { badge.textContent = ''; badge.classList.remove('visible'); }
  if (toggle) toggle.classList.remove('has-unread');
}

function addChatMessage({ name, avatar, color, text, isMe, system }) {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const div = document.createElement('div');
  if (system) {
    div.className = 'chat-msg chat-system';
    div.textContent = text;
  } else {
    div.className = 'chat-msg' + (isMe ? ' chat-mine' : '');
    const sender = document.createElement('span');
    sender.className = 'chat-sender';
    sender.style.color = color || 'var(--gold)';
    sender.textContent = avatar + ' ' + name + ':';
    div.appendChild(sender);
    div.appendChild(document.createTextNode(' ' + text));
  }
  container.appendChild(div);
  // Keep scrolled to bottom
  container.scrollTop = container.scrollHeight;

  // Unread badge when chat is closed
  if (!chatOpen && !system) {
    chatUnread++;
    const badge  = document.getElementById('chat-unread-badge');
    const toggle = document.getElementById('chat-toggle-btn');
    if (badge)  { badge.textContent = chatUnread; badge.classList.add('visible'); }
    if (toggle) toggle.classList.add('has-unread');
  }
}

function sendChat() {
  const inp = document.getElementById('chat-input');
  if (!inp) return;
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  socket.emit('lobby:chat', { text }, (res) => {
    if (res && !res.ok) showToast('❌', 'Chat error', 'Could not send message.');
  });
}

function chatKeyDown(e) {
  if (e.key === 'Enter') { e.preventDefault(); sendChat(); }
}

function clearChat() {
  const container = document.getElementById('chat-messages');
  if (container) container.innerHTML = '';
  clearChatUnread();
}

// ─── In-game Chat (sidebar panel) ──────────────────────────────────────────────
function initIngameChatPanel() {
  const panel = document.getElementById('panel-chat');
  if (!panel || panel.dataset.initialized) return;
  panel.dataset.initialized = '1';
  panel.innerHTML = `
    <div class="ingame-chat-msgs" id="ingame-chat-msgs"></div>
    <div class="ingame-chat-input-row">
      <input type="text" id="ingame-chat-input" placeholder="Chat..." maxlength="200" onkeydown="ingameChatKeyDown(event)" style="font-size:16px">
      <button onclick="sendIngameChat()">Send</button>
    </div>`;
  addIngameChatMessage({ system: true, text: 'Chat is live! 💬' });
}

function addIngameChatMessage({ name, avatar, color, text, isMe, system, isSpectator: fromSpec }) {
  const container = document.getElementById('ingame-chat-msgs');
  if (!container) return;
  const div = document.createElement('div');
  if (system) {
    div.className = 'chat-msg chat-system';
    div.textContent = text;
  } else {
    div.className = 'chat-msg' + (isMe ? ' chat-mine' : '');
    const sender = document.createElement('span');
    sender.className = 'chat-sender';
    sender.style.color = fromSpec ? '#6a7090' : (color || 'var(--gold)');
    sender.textContent = (fromSpec ? '👁 ' : '') + avatar + ' ' + name + ':';
    div.appendChild(sender);
    div.appendChild(document.createTextNode(' ' + text));
  }
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  // Unread badge when not on chat tab
  if (currentTab !== 'chat' && !system) {
    ingameChatUnread++;
    const badge = document.getElementById('ingame-chat-unread');
    if (badge) { badge.textContent = ingameChatUnread; badge.classList.add('visible'); }
  }
}

function clearIngameChatUnread() {
  ingameChatUnread = 0;
  const badge = document.getElementById('ingame-chat-unread');
  if (badge) { badge.textContent = ''; badge.classList.remove('visible'); }
}

function sendIngameChat() {
  const inp = document.getElementById('ingame-chat-input');
  if (!inp) return;
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  socket.emit('lobby:chat', { text }, (res) => {
    if (res && !res.ok) showToast('❌', 'Chat error', 'Could not send message.');
  });
}

function ingameChatKeyDown(e) {
  if (e.key === 'Enter') { e.preventDefault(); sendIngameChat(); }
}

// ─── Spectator Functions ────────────────────────────────────────────────────────
function addSpectatorChatMessage({ name, avatar, color, text, isMe, system, isSpectator: fromSpec }) {
  const container = document.getElementById('spectator-chat-msgs');
  if (!container) return;
  const div = document.createElement('div');
  if (system) {
    div.className = 'chat-msg chat-system';
    div.textContent = text;
  } else {
    div.className = 'chat-msg' + (isMe ? ' chat-mine' : '');
    const sender = document.createElement('span');
    sender.className = 'chat-sender';
    sender.style.color = fromSpec ? '#6a7090' : (color || 'var(--gold)');
    sender.textContent = (fromSpec ? '👁 ' : '') + avatar + ' ' + name + ':';
    div.appendChild(sender);
    div.appendChild(document.createTextNode(' ' + text));
  }
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function clearSpectatorChat() {
  const c = document.getElementById('spectator-chat-msgs');
  if (c) c.innerHTML = '';
}

function sendSpectatorChat() {
  const inp = document.getElementById('spectator-chat-input');
  if (!inp) return;
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  socket.emit('lobby:chat', { text }, (res) => {
    if (res && !res.ok) showToast('❌', 'Chat error', 'Could not send message.');
  });
}

function spectatorChatKeyDown(e) {
  if (e.key === 'Enter') { e.preventDefault(); sendSpectatorChat(); }
}

function renderSpectatorLeaderboard(players) {
  const container = document.getElementById('spectator-lb-rows');
  if (!container) return;
  const sorted = [...players].sort((a, b) =>
    (b.totalEarned + (b.unsoldValue||0)) - (a.totalEarned + (a.unsoldValue||0))
  );
  const topScore = sorted[0] ? (sorted[0].totalEarned + (sorted[0].unsoldValue||0)) : 1;
  const medals = ['🥇','🥈','🥉','4️⃣'];
  container.innerHTML = '';
  sorted.forEach((p, i) => {
    const score = p.totalEarned + (p.unsoldValue||0);
    const pct = topScore > 0 ? Math.max(4, Math.round((score/topScore)*100)) : 4;
    const row = document.createElement('div');
    row.className = 'spectator-lb-row';
    row.innerHTML = `
      <div class="spectator-lb-rank">${medals[i]||i+1}</div>
      <div style="flex:1">
        <div class="spectator-lb-name">${p.avatar} ${p.name}${prestigeBadgeHTML(p.prestigeRank)}</div>
        <div class="spectator-lb-bar-wrap"><div class="spectator-lb-bar" style="width:${pct}%;background:${p.color||'var(--gold)'}"></div></div>
      </div>
      <div style="text-align:right">
        <div class="spectator-lb-score">$${score.toLocaleString()}</div>
        <div class="spectator-lb-sub">⚒ ${p.autoMine}/s auto</div>
      </div>`;
    container.appendChild(row);
  });
  // Update stats
  const pcEl = document.getElementById('spec-player-count');
  const tsEl = document.getElementById('spec-top-score');
  if (pcEl) pcEl.textContent = players.length;
  if (tsEl) tsEl.textContent = '$' + topScore.toLocaleString();
}

function exitSpectator() {
  isSpectator = false;
  lobbyCode = null;
  sessionToken = null;
  clearSession();
  clearSpectatorChat();
  showScreen('title-screen');
  showHomeCard();
}

// ─── Host: Kick & Transfer ──────────────────────────────────────────────────────
async function kickPlayer(targetSocketId, targetName, isSpec) {
  const label = isSpec ? 'spectator' : 'player';
  if (!await showConfirm({
    icon: '🚫',
    title: `Kick ${label}?`,
    msg: `${targetName} will be removed from the lobby.`,
    okText: 'Kick',
    cancelText: 'Cancel'
  })) return;
  socket.emit('lobby:kick', { targetSocketId }, (res) => {
    if (!res?.ok) showToast('❌', 'Error', res?.error || 'Could not kick.');
    else showToast('🚫', 'Kicked', `${targetName} was removed.`);
  });
}

async function transferHost(targetSocketId, targetName) {
  if (!await showConfirm({
    icon: '👑',
    title: 'Transfer Host?',
    msg: `${targetName} will become the new host.`,
    okText: 'Transfer',
    okSafe: true,
    cancelText: 'Cancel'
  })) return;
  socket.emit('lobby:transferHost', { targetSocketId }, (res) => {
    if (!res?.ok) showToast('❌', 'Error', res?.error || 'Could not transfer.');
    else { isHost = false; showToast('👑', 'Transferred', `${targetName} is now host.`); }
  });
}


// ─── Socket setup ──────────────────────────────────────────────────────────────
function initSocket() {
  socket = io();

  socket.on('connect', () => {
    mySocketId = socket.id;
    setBadge('connected', '● Online');
    const bCreate = document.getElementById('btn-create');
    const bJoin = document.getElementById('btn-join');
    const bHost = document.getElementById('btn-host-pick');
    const bJoinPick = document.getElementById('btn-join-pick');
    if (bCreate) bCreate.disabled = false;
    if (bJoin) bJoin.disabled = false;
    if (bHost) bHost.disabled = false;
    if (bJoinPick) bJoinPick.disabled = false;

    // Try to restore session after reconnect
    const storedToken = sessionStorage.getItem('gemrush_token');
    const storedCode  = sessionStorage.getItem('gemrush_code');
    const storedHost  = sessionStorage.getItem('gemrush_host');
    const storedName  = sessionStorage.getItem('gemrush_name');
    if (storedToken && storedCode) {
      socket.emit('session:restore', { token: storedToken }, (res) => {
        if (!res || !res.ok) {
          // Session expired — clear and show title
          clearSession();
          return;
        }
        sessionToken = storedToken;
        lobbyCode = res.code;
        isHost = res.isHost;
        selfState = res.self;
        gameMode = res.mode || 'unlimited';
        document.getElementById('lobby-code-display').textContent = lobbyCode;
        document.getElementById('lobby-name-input').value = selfState?.name || storedName || '';
        updateLobbyModeBadge(res.mode, res.duration);
        if (res.status === 'playing') {
          showScreen('game-screen');
          document.getElementById('topbar-code').textContent = 'Lobby: ' + lobbyCode;
          document.getElementById('end-game-btn').style.display = isHost ? 'block' : 'none';
          document.getElementById('leave-game-btn').style.display = isHost ? 'none' : 'block';
          initMobilePanel();
          updateStats();
          syncOrbitMiners();
          renderUpgrades();
          renderAchievements();
          showToast('🔄', 'Reconnected!', 'Back in the game.');
        } else {
          document.getElementById('start-btn').style.display = isHost ? 'block' : 'none';
          document.getElementById('host-controls').style.display = isHost ? 'block' : 'none';
          document.getElementById('leave-lobby-btn').style.display = isHost ? 'none' : 'block';
          document.getElementById('end-lobby-btn').style.display = isHost ? 'block' : 'none';
          showScreen('lobby-screen');
          showToast('🔄', 'Reconnected!', 'Back in the lobby.');
        }
      });
    }
  });
  socket.on('disconnect', () => {
    setBadge('disconnected', '● Offline');
    const bCreate = document.getElementById('btn-create');
    const bJoin = document.getElementById('btn-join');
    if (bCreate) bCreate.disabled = true;
    if (bJoin) bJoin.disabled = true;
  });
  socket.on('connect_error', () => setBadge('connecting', 'Connecting...'));

  socket.on('lobby:state', (data) => {
    window._lobbyHostId = data.hostId;
    renderLobbySlots(data.players, data.spectators || []);
    renderAvatarPicker();
    // Update mode badge if server pushed updated mode
    if (data.gameMode) updateLobbyModeBadge(data.gameMode, data.gameDuration);
    // Sync host controls
    const isNowHost = data.hostId === mySocketId;
    if (isNowHost !== isHost) isHost = isNowHost;
    document.getElementById('start-btn').style.display = isHost ? 'block' : 'none';
    document.getElementById('host-controls').style.display = isHost ? 'block' : 'none';
    document.getElementById('leave-lobby-btn').style.display = isHost ? 'none' : 'block';
    document.getElementById('end-lobby-btn').style.display = isHost ? 'block' : 'none';
    // Public toggle state
    if (data.isPublic !== undefined) {
      lobbyIsPublic = data.isPublic;
      const btn = document.getElementById('toggle-public-btn');
      if (btn) btn.textContent = lobbyIsPublic ? '🔒 Make Private' : '🌐 Make Public';
    }
  });

  socket.on('lobby:newHost', ({ hostId }) => {
    if (hostId === mySocketId) {
      isHost = true;
      document.getElementById('start-btn').style.display = 'block';
      document.getElementById('end-game-btn').style.display = 'block';
      document.getElementById('leave-game-btn').style.display = 'none';
      document.getElementById('host-controls').style.display = 'block';
      document.getElementById('leave-lobby-btn').style.display = 'none';
      document.getElementById('end-lobby-btn').style.display = 'block';
      showToast('👑','You are now the host!','The previous host disconnected.');
    }
  });

  socket.on('lobby:modeChanged', ({ mode, duration }) => {
    gameMode = mode;
    updateLobbyModeBadge(mode, duration);
    showToast('🎮', 'Mode Changed', `Host set: ${mode}`);
  });

  socket.on('lobby:visibilityChanged', ({ isPublic }) => {
    lobbyIsPublic = isPublic;
    const btn = document.getElementById('toggle-public-btn');
    if (btn) btn.textContent = isPublic ? '🔒 Make Private' : '🌐 Make Public';
  });

  socket.on('lobby:chatMessage', (data) => {
    const isMe = data.socketId === mySocketId;
    // Route to spectator screen chat if spectating
    if (isSpectator && document.getElementById('spectator-screen')?.classList.contains('active')) {
      addSpectatorChatMessage({ ...data, isMe });
      return;
    }
    // Route to in-game chat panel if game is active
    const gameActive = document.getElementById('game-screen')?.classList.contains('active');
    if (gameActive) {
      addIngameChatMessage({ ...data, isMe });
      return;
    }
    addChatMessage({ ...data, isMe });
  });

  socket.on('lobby:returnedFromGame', ({ code, mode, duration }) => {
    const chatWrap = document.getElementById('lobby-chat-wrap');
    if (chatWrap) chatWrap.style.display = 'block';
    clearChat();
    addChatMessage({ system: true, text: 'Back in the lobby — ready for another round?' });
    gameMode = mode;
    lobbyCode = code;
    // Reset game state
    selfState = null; allPlayers = []; myLastRank = null;
    stopClientTimer(); stopSabCooldownTick(); removeFrozenOverlay(); removeJamBanner(); clearOrbitMiners();
    document.getElementById('lobby-code-display').textContent = lobbyCode;
    document.getElementById('host-controls').style.display = isHost ? 'block' : 'none';
    document.getElementById('leave-lobby-btn').style.display = isHost ? 'none' : 'block';
    document.getElementById('start-btn').style.display = isHost ? 'block' : 'none';
    document.getElementById('end-lobby-btn').style.display = isHost ? 'block' : 'none';
    document.getElementById('end-game-btn').style.display = 'none';
    document.getElementById('leave-game-btn').style.display = 'none';
    updateLobbyModeBadge(mode, duration);
    showScreen('lobby-screen');
    renderAvatarPicker();
    showToast('🔄', 'Back to Lobby!', 'Get ready for another round.');
  });

  socket.on('game:countdown', ({ count }) => {
    const overlay = document.getElementById('countdown-overlay');
    const numEl   = document.getElementById('countdown-number');
    if (!overlay || !numEl) return;
    overlay.classList.add('active');

    // iOS-safe animation restart: remove class, force reflow, re-add class
    numEl.textContent = count;
    numEl.classList.remove('pop');
    // Double rAF ensures iOS Safari actually processes the class removal
    // before we add it back — a single void offsetWidth isn't always enough
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        numEl.classList.add('pop');
      });
    });

    // Audio + haptic cue
    AudioEngine.click();
    haptic(count === 1 ? [30,20,40] : 40);
  });

  socket.on('game:started', ({ mode, duration } = {}) => {
    // Hide lobby chat
    const chatWrap = document.getElementById('lobby-chat-wrap');
    if (chatWrap) chatWrap.style.display = 'none';
    clearChat();
    // Dismiss countdown overlay
    const overlay = document.getElementById('countdown-overlay');
    if (overlay) overlay.classList.remove('active');
    gameMode = mode || gameMode;
    myLastRank = null; // reset rank tracking for new game
    showScreen('game-screen');
    document.getElementById('topbar-code').textContent = 'Lobby: ' + lobbyCode;
    document.getElementById('end-game-btn').style.display = isHost ? 'block' : 'none';
    document.getElementById('leave-game-btn').style.display = isHost ? 'none' : 'block';
    initMobilePanel();
    renderUpgrades();
    renderAchievements();
    initIngameChatPanel();
    startSabCooldownTick();
    if (gameMode === 'timed' && duration) startClientTimer(duration);
  });

  socket.on('game:state', ({ players, spectatorCount }) => {
    allPlayers = players;
    checkRankChange();
    // Update spectator count in topbar if present
    const specEl = document.getElementById('topbar-spectator-count');
    if (specEl && spectatorCount > 0) {
      specEl.textContent = `👁 ${spectatorCount}`;
      specEl.style.display = 'inline';
    } else if (specEl) {
      specEl.style.display = 'none';
    }
    // Update spectator screen if active
    if (isSpectator) {
      renderSpectatorLeaderboard(players);
      const scEl = document.getElementById('spec-spectator-count');
      if (scEl) scEl.textContent = spectatorCount || 1;
    }
    if (currentTab === 'players') renderPlayers();
    if (currentTab === 'sabotage') renderSabotage();
  });

  socket.on('player:self', (state) => {
    selfState = state;
    checkRankChange(); // also check rank using latest allPlayers whenever our own score changes
    updateStats();
    syncOrbitMiners();
    if (currentTab === 'upgrades') renderUpgrades();
    if (currentTab === 'players') renderPlayers();
    if (currentTab === 'achievements') renderAchievements();
    if (currentTab === 'sabotage') renderSabotage();
    // Frozen overlay
    if (state.frozenUntil && Date.now() < state.frozenUntil) {
      showFrozenOverlay(state.frozenUntil);
    } else {
      removeFrozenOverlay();
    }
    // Pickaxe jam banner
    if (state.pickaxeJamUntil && Date.now() < state.pickaxeJamUntil) {
      showJamBanner(state.pickaxeJamUntil);
    } else {
      removeJamBanner();
    }
    // Gem tax indicator
    const taxIndicator = document.getElementById('gem-tax-indicator');
    if (taxIndicator) taxIndicator.style.display = state.gemTaxPending > 0 ? 'block' : 'none';
    // Shield indicator
    const shieldIndicator = document.getElementById('shield-indicator');
    if (shieldIndicator) shieldIndicator.style.display = state.sabotageShield ? 'block' : 'none';
    // Bulk sell countdown
    updateBulkSellCountdown(state);
  });

  socket.on('achievements:unlocked', (list) => {
    list.forEach(a => showToast(a.emoji, 'Achievement Unlocked!', a.name));
    if (selfState) selfState.achievementsUnlocked = selfState.achievementsUnlocked || [];
    list.forEach(a => { if (!selfState.achievementsUnlocked.includes(a.id)) selfState.achievementsUnlocked.push(a.id); });
    if (currentTab === 'achievements') renderAchievements();
  });

  socket.on('automine:drops', ({ drops }) => {
    spawnAfkGems(drops);
  });

  socket.on('game:ended', ({ results, mode, awards }) => {
    stopClientTimer();
    clearOrbitMiners();
    stopSabCooldownTick();
    removeFrozenOverlay();
    showEndScreen(results, mode, awards);
    // Host gets the return button; non-hosts see waiting message
    const returnBtn = document.getElementById('return-lobby-btn');
    const waitMsg   = document.getElementById('end-waiting-msg');
    if (returnBtn) returnBtn.style.display = isHost ? 'block' : 'none';
    if (waitMsg)   waitMsg.style.display   = isHost ? 'none'  : 'block';
  });

  socket.on('sabotage:hit', (data) => {
    showSabotageHit(data);
    // The server also emits player:self which will update selfState
  });

  socket.on('sabotage:blocked', (data) => {
    AudioEngine.sell(); // positive ding
    haptic([30, 20, 30]);
    showToast('🛡', 'Sabotage Blocked!', `${data.attackerAvatar} ${data.attackerName}'s ${data.sabotageId.replace('_',' ')} was absorbed by your Gem Insurance!`);
    // Shield is used up — UI will update via player:self
  });

  socket.on('sabotage:tax_triggered', ({ earned }) => {
    showToast('💸', 'Gem Tax Collected!', `-$${earned.toLocaleString()} taken by the taxman!`);
  });

  socket.on('bulksell:triggered', ({ earned }) => {
    AudioEngine.sell();
    haptic([15, 10, 15]);
    showToast('📦', 'Auto Sell!', `Auto-sold inventory for $${earned.toLocaleString()}`);
    if (currentTab === 'upgrades') renderUpgrades();
  });

  socket.on('game:rareFind', (data) => {
    showRareFindBanner(data);
  });

  socket.on('prestige:achieved', ({ rank, label, emoji, bonus, totalBonus, self }) => {
    selfState = self;
    // Update modal
    const modal_gem = document.getElementById('prestige-modal-gem');
    const modal_title = document.getElementById('prestige-modal-title');
    const modal_bonus = document.getElementById('prestige-modal-bonus');
    if (modal_gem) modal_gem.textContent = emoji;
    if (modal_title) modal_title.textContent = `PRESTIGE ${label}`;
    if (modal_bonus) modal_bonus.textContent = `+${Math.round(bonus*100)}% permanent gem value (total: +${Math.round(totalBonus*100)}%)`;
    const overlay = document.getElementById('prestige-overlay');
    if (overlay) overlay.classList.add('show');
    // Confetti burst
    if (typeof confetti === 'function') {
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 }, colors: ['#f5c842','#9040f0','#ffffff','#30d97a'] });
      setTimeout(() => confetti({ particleCount: 80, angle: 60, spread: 70, origin: { x: 0, y: 0.5 } }), 300);
      setTimeout(() => confetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1, y: 0.5 } }), 300);
    }
    haptic([50, 30, 50, 30, 80]);
    AudioEngine.sell();
    updateStats();
    renderUpgrades();
  });

  socket.on('lobby:closed', ({ reason }) => {
    lobbyCode = null; isHost = false; isSpectator = false; selfState = null; allPlayers = []; myLastRank = null;
    sessionToken = null;
    stopClientTimer?.(); stopSabCooldownTick?.(); removeFrozenOverlay?.(); clearOrbitMiners?.();
    clearSession();
    const _chatWrap = document.getElementById('lobby-chat-wrap');
    if (_chatWrap) _chatWrap.style.display = 'none';
    clearChat?.();
    showScreen('title-screen');
    showHomeCard?.();
    showToast('🚪', 'Lobby Closed', reason || 'The host ended the lobby.');
  });

  socket.on('lobby:kicked', ({ reason }) => {
    lobbyCode = null; isHost = false; isSpectator = false; selfState = null; allPlayers = []; myLastRank = null;
    sessionToken = null;
    stopClientTimer?.(); stopSabCooldownTick?.(); removeFrozenOverlay?.(); clearOrbitMiners?.();
    clearSession();
    const _chatWrap = document.getElementById('lobby-chat-wrap');
    if (_chatWrap) _chatWrap.style.display = 'none';
    clearChat?.(); clearSpectatorChat?.();
    showScreen('title-screen');
    showHomeCard?.();
    showToast('🚫', 'Removed', reason || 'You were removed from the lobby.');
  });

  socket.on('spectator:gameDone', ({ message }) => {
    isSpectator = false;
    lobbyCode = null;
    sessionToken = null;
    clearSession();
    clearSpectatorChat();
    showScreen('title-screen');
    showHomeCard();
    showToast('👁', 'Game Over', message || 'The game ended.');
  });
}

function setBadge(cls, text) {
  const b = document.getElementById('conn-badge');
  b.className = 'conn-badge ' + cls;
  b.textContent = text;
}

// ─── Lobby ─────────────────────────────────────────────────────────────────────
function getPlayerName() {
  return document.getElementById('player-name').value.trim() || 'Miner_' + Math.floor(Math.random()*9999);
}
function createLobby() {
  const mode = selectedMode;
  const duration = mode === 'timed' ? parseInt(document.getElementById('timed-duration').value) : null;
  socket.emit('lobby:create', { playerName: getPlayerName(), mode, duration, isPublic: false }, (res) => {
    if (!res.ok) { showToast('❌','Error', res.error); return; }
    lobbyCode = res.code;
    isHost = true;
    selfState = res.self;
    gameMode = res.mode || 'unlimited';
    lobbyIsPublic = false;
    sessionToken = res.token;
    saveSession(res.token, res.code, true, selfState.name);
    document.getElementById('lobby-code-display').textContent = lobbyCode;
    document.getElementById('lobby-name-input').value = selfState.name || getPlayerName();
    document.getElementById('start-btn').style.display = 'block';
    document.getElementById('host-controls').style.display = 'block';
    document.getElementById('leave-lobby-btn').style.display = 'none';
    document.getElementById('end-lobby-btn').style.display = 'block';
    const toggleBtn = document.getElementById('toggle-public-btn');
    if (toggleBtn) toggleBtn.textContent = '🌐 Make Public';
    updateLobbyModeBadge(res.mode, res.duration);
    document.getElementById('lobby-chat-wrap').style.display = 'block';
    clearChat();
    addChatMessage({ system: true, text: 'Welcome to the lobby! Say hello 👋' });
    showScreen('lobby-screen');
    renderAvatarPicker();
  });
}
function joinLobby() {
  const code = document.getElementById('join-code').value.trim().toUpperCase();
  const err = document.getElementById('join-error');
  if (!code) { err.style.display='block'; err.textContent='Enter a code!'; return; }
  socket.emit('lobby:join', { playerName: getPlayerName(), code }, (res) => {
    if (!res.ok) { err.style.display='block'; err.textContent=res.error; return; }
    err.style.display = 'none';

    // ── Spectator path ──────────────────────────────────────────────────
    if (res.isSpectator) {
      isSpectator = true;
      isHost = false;
      lobbyCode = res.code;
      spectatorName = res.spectatorName || getPlayerName();
      spectatorAvatar = res.spectatorAvatar || '👁';
      sessionToken = res.token;
      saveSession(res.token, res.code, false, spectatorName);
      gameMode = res.mode || 'unlimited';
      // Show spectator screen
      document.getElementById('spectator-code').textContent = 'Lobby: ' + res.code;
      const modeLabels = { timed: `⏱ Timed (${Math.round((res.duration||300)/60)}m)`, teams: '🤝 Teams', unlimited: '♾️ Unlimited' };
      const specModeEl = document.getElementById('spec-mode-label');
      if (specModeEl) specModeEl.textContent = modeLabels[gameMode] || gameMode;
      if (gameMode === 'timed' && res.duration) {
        const specTimerEl = document.getElementById('spectator-timer');
        if (specTimerEl) specTimerEl.style.display = 'inline';
      }
      clearSpectatorChat();
      addSpectatorChatMessage({ system: true, text: `You joined as spectator ${spectatorAvatar} ${spectatorName}. Watch and chat!` });
      showScreen('spectator-screen');
      return;
    }

    // ── Regular player path ─────────────────────────────────────────────
    lobbyCode = res.code;
    isHost = false;
    selfState = res.self;
    gameMode = res.mode || 'unlimited';
    sessionToken = res.token;
    saveSession(res.token, res.code, false, selfState.name);
    document.getElementById('lobby-code-display').textContent = lobbyCode;
    document.getElementById('lobby-name-input').value = selfState.name || getPlayerName();
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('host-controls').style.display = 'none';
    document.getElementById('leave-lobby-btn').style.display = 'block';
    document.getElementById('end-lobby-btn').style.display = 'none';
    updateLobbyModeBadge(res.mode, res.duration);
    document.getElementById('lobby-chat-wrap').style.display = 'block';
    clearChat();
    addChatMessage({ system: true, text: 'Welcome to the lobby! Say hello 👋' });
    showScreen('lobby-screen');
    renderAvatarPicker();
  });
}
function updateLobbyName() {
  const newName = document.getElementById('lobby-name-input').value.trim();
  if (!newName) return;
  socket.emit('lobby:rename', { name: newName }, (res) => {
    if (res && res.ok) {
      if (selfState) selfState.name = newName;
      showToast('✏️','Name Updated','You are now: ' + newName);
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lobby-name-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') updateLobbyName();
  });

  // Keyboard shortcuts (only active during gameplay)
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;
    const gameVisible = document.getElementById('game-screen')?.classList.contains('active');
    if (!gameVisible) return;

    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      if (e.repeat) return;
      startCharge(e);
    } else if (e.code === 'KeyS' || e.key === 's' || e.key === 'S') {
      const sellBtn = document.getElementById('sell-all-btn');
      if (sellBtn && !sellBtn.disabled) sellAll();
    }
  });

  document.addEventListener('keyup', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;
    const gameVisible = document.getElementById('game-screen')?.classList.contains('active');
    if (!gameVisible) return;

    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      releaseCharge(e);
    }
  });
});
function startGame() {
  socket.emit('game:start', {}, (res) => {
    if (res && !res.ok) showToast('❌','Error', res.error);
  });
}
async function confirmEndLobby() {
  if (await showConfirm({ icon: '🔴', title: 'End Lobby?', msg: 'All players will be disconnected.', okText: 'End Lobby', cancelText: 'Cancel' })) {
    socket.emit('lobby:end', {}, (res) => {
      if (res && !res.ok) showToast('❌','Error', res.error || 'Could not end lobby.');
    });
  }
}
async function confirmEndGame() {
  if (await showConfirm({ icon: '🏁', title: 'End Game?', msg: 'Final scores will be tallied for all players.', okText: 'End Game', cancelText: 'Cancel' })) {
    socket.emit('game:end', {}, (res) => {
      if (res && !res.ok) showToast('❌','Error', res.error);
    });
  }
}
function returnToLobby() {
  socket.emit('lobby:returnToLobby', {}, (res) => {
    if (res && !res.ok) showToast('❌', 'Error', res.error || 'Could not return to lobby.');
  });
}
function copyCode() {
  navigator.clipboard.writeText(lobbyCode).then(() => showToast('📋','Copied!','Share this code with friends: ' + lobbyCode));
}

function updateLobbyModeBadge(mode, duration) {
  const el = document.getElementById('lobby-mode-display');
  if (!el) return;
  if (mode === 'timed') {
    const mins = Math.round((duration||300)/60);
    el.innerHTML = `<div class="lobby-mode-badge">⏱️ Timed Rush — ${mins} min</div>`;
  } else if (mode === 'teams') {
    el.innerHTML = `<div class="lobby-mode-badge">🤝 Team Dig — 2v2</div>`;
  } else {
    el.innerHTML = `<div class="lobby-mode-badge">♾️ Unlimited Mode</div>`;
  }
}

function startClientTimer(durationSecs) {
  const el = document.getElementById('game-timer');
  if (!el) return;
  el.style.display = 'inline-block';
  let remaining = durationSecs;
  function tick() {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    el.textContent = `⏱ ${m}:${s.toString().padStart(2,'0')}`;
    if (remaining <= 30) el.classList.add('urgent');
    if (remaining <= 0) { clearInterval(gameTimerInterval); return; }
    remaining--;
  }
  tick();
  gameTimerInterval = setInterval(tick, 1000);
}

function stopClientTimer() {
  clearInterval(gameTimerInterval);
  const el = document.getElementById('game-timer');
  if (el) el.style.display = 'none';
}
function renderLobbySlots(players, spectators) {
  const container = document.getElementById('lobby-slots');
  container.innerHTML = '';
  const AVATARS = ['⛏','🧙','🤠','🤖','👾','🐉','🦊','🏴‍☠️'];
  const COLORS  = ['#f5c842','#e84040','#30d97a','#4090f5'];
  for (let i = 0; i < 4; i++) {
    const p = players[i];
    const isYou = p && p.socketId === mySocketId;
    const isThisHost = p && p.socketId === (window._lobbyHostId || null);
    const div = document.createElement('div');
    div.className = 'player-slot ' + (p ? (isYou ? 'you filled' : 'filled') : '');
    if (p) {
      const hostMark = isThisHost ? ' 👑' : '';
      div.innerHTML = `<div class="slot-icon" style="background:${p.color}22;color:${p.color}">${p.avatar}</div>
        <div style="flex:1"><div class="slot-name">${p.name}${hostMark}${isYou?'<span class="you-badge">YOU</span>':''}</div>
        <div class="slot-sub">READY</div>
        ${isHost && !isYou ? `<div class="player-slot-actions">
          <button class="slot-action-btn slot-kick-btn" onclick="kickPlayer('${p.socketId}','${p.name.replace(/'/g,"\\'")}')">🚫 Kick</button>
          ${!isThisHost ? `<button class="slot-action-btn slot-host-btn" onclick="transferHost('${p.socketId}','${p.name.replace(/'/g,"\\'")}')">👑 Make Host</button>` : ''}
        </div>` : ''}
        </div>`;
    } else {
      div.innerHTML = `<div class="slot-icon" style="background:var(--border);color:var(--muted)">+</div><div style="color:var(--muted);font-size:.9rem">Empty Slot</div>`;
    }
    container.appendChild(div);
  }

  // Spectator list
  if (spectators && spectators.length > 0) {
    const specSection = document.createElement('div');
    specSection.className = 'spectator-list-section';
    specSection.style.cssText = 'grid-column:1/-1;';
    specSection.innerHTML = `<div class="spectator-list-title">👁 Spectators (${spectators.length})</div>`;
    spectators.forEach(s => {
      const chip = document.createElement('span');
      chip.className = 'spectator-chip';
      chip.innerHTML = `${s.avatar} ${s.name}${isHost ? `<button class="spectator-chip-kick" onclick="kickPlayer('${s.socketId}','${s.name.replace(/'/g,"\\'")}',true)" title="Remove spectator">✕</button>` : ''}`;
      specSection.appendChild(chip);
    });
    container.appendChild(specSection);
  }
}

// ─── Web Audio Engine ──────────────────────────────────────────────────────────
const AudioEngine = (() => {
  let ctx = null;
  function getCtx() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
    }
    if (ctx && ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function playTone({ freq=440, freq2, type='sine', gain=0.18, duration=0.12, attack=0.005, decay=0.08, detune=0 }) {
    const c = getCtx(); if (!c) return;
    const t = c.currentTime;
    const osc = c.createOscillator();
    const env = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (freq2) osc.frequency.exponentialRampToValueAtTime(freq2, t + duration);
    osc.detune.value = detune;
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(gain, t + attack);
    env.gain.exponentialRampToValueAtTime(0.001, t + attack + decay);
    osc.connect(env); env.connect(c.destination);
    osc.start(t); osc.stop(t + duration + 0.05);
  }

  function playNoise({ gain=0.12, duration=0.08, attack=0.003, decay=0.06, lowpass=800 }) {
    const c = getCtx(); if (!c) return;
    const t = c.currentTime;
    const buf = c.createBuffer(1, c.sampleRate * duration, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i=0;i<d.length;i++) d[i] = Math.random()*2-1;
    const src = c.createBufferSource();
    src.buffer = buf;
    const filt = c.createBiquadFilter();
    filt.type = 'lowpass'; filt.frequency.value = lowpass;
    const env = c.createGain();
    env.gain.setValueAtTime(0,t);
    env.gain.linearRampToValueAtTime(gain, t+attack);
    env.gain.exponentialRampToValueAtTime(0.001, t+attack+decay);
    src.connect(filt); filt.connect(env); env.connect(c.destination);
    src.start(t); src.stop(t+duration+0.05);
  }

  return {
    click() {
      // Quick thud — pickaxe hitting rock
      playNoise({ gain:0.25, duration:0.09, attack:0.002, decay:0.07, lowpass:600 });
      playTone({ freq:180, freq2:100, type:'triangle', gain:0.12, duration:0.08, attack:0.002, decay:0.06 });
    },
    miss() {
      playTone({ freq:220, freq2:180, type:'sawtooth', gain:0.08, duration:0.15, attack:0.005, decay:0.12 });
    },
    gemDiscover(rarity) {
      // Light chime for common gems, richer for rare
      if (rarity <= 0.001) return; // rare fanfare handles these
      const freq = rarity > 0.1 ? 660 : rarity > 0.005 ? 880 : 1100;
      playTone({ freq, type:'sine', gain:0.14, duration:0.18, attack:0.01, decay:0.15 });
      if (rarity < 0.02) {
        setTimeout(()=>playTone({ freq:freq*1.25, type:'sine', gain:0.1, duration:0.14, attack:0.01, decay:0.12 }), 80);
      }
    },
    rareFanfare() {
      // Ascending arpeggio
      const notes = [523, 659, 784, 1047, 1319];
      notes.forEach((f,i)=>{
        setTimeout(()=>playTone({ freq:f, type:'sine', gain:0.18, duration:0.2, attack:0.01, decay:0.18 }), i*70);
        setTimeout(()=>playTone({ freq:f*2, type:'triangle', gain:0.06, duration:0.15, attack:0.01, decay:0.13 }), i*70+35);
      });
    },
    sabotageHit() {
      // Harsh descending sting
      playTone({ freq:400, freq2:120, type:'sawtooth', gain:0.22, duration:0.35, attack:0.005, decay:0.3 });
      playNoise({ gain:0.18, duration:0.2, attack:0.002, decay:0.18, lowpass:1200 });
    },
    sell() {
      // Classic cash register "cha-ching"
      playTone({ freq:1200, type:'triangle', gain:0.12, duration:0.06, attack:0.002, decay:0.05 });
      setTimeout(()=>playTone({ freq:1600, type:'triangle', gain:0.15, duration:0.12, attack:0.002, decay:0.1 }),60);
      setTimeout(()=>playTone({ freq:1400, type:'sine', gain:0.1, duration:0.18, attack:0.005, decay:0.15 }),120);
    },
    powerCharge(level) {
      // Rising hum as charge increases (0..1)
      const freq = 80 + level * 320;
      playTone({ freq, type:'sawtooth', gain:0.04, duration:0.08, attack:0.01, decay:0.07, detune:level*20 });
    },
    powerRelease(multiplier) {
      // Deep thud + sparkle
      playNoise({ gain:0.4, duration:0.18, attack:0.003, decay:0.15, lowpass:400 });
      playTone({ freq:120, freq2:60, type:'triangle', gain:0.25, duration:0.25, attack:0.003, decay:0.22 });
      const sparks = [1200,1500,1800,2200];
      sparks.forEach((f,i)=>setTimeout(()=>playTone({ freq:f, type:'sine', gain:0.08, duration:0.1, attack:0.002, decay:0.09 }),i*30));
    }
  };
})();

// ─── Haptics ───────────────────────────────────────────────────────────────────
function haptic(pattern) {
  try { navigator.vibrate && navigator.vibrate(pattern); } catch(e) {}
}

// ─── Accessibility Settings ────────────────────────────────────────────────────
const A11Y_KEY = 'gemrush_a11y';
function getA11ySettings() {
  try { return JSON.parse(localStorage.getItem(A11Y_KEY) || '{}'); } catch(e) { return {}; }
}
function setA11ySetting(key, val) {
  const s = getA11ySettings();
  s[key] = val;
  localStorage.setItem(A11Y_KEY, JSON.stringify(s));
}
function isShakeEnabled()    { const s = getA11ySettings(); return s.shake    !== false; }
function isParticlesEnabled(){ const s = getA11ySettings(); return s.particles !== false; }

// ─── Screen Shake ──────────────────────────────────────────────────────────────
let _lastShakeTime = 0;
const SHAKE_COOLDOWN_MS = 800; // minimum ms between shakes in late game
function shakeScreen(intensity='normal') {
  if (!isShakeEnabled()) return;
  const now = Date.now();
  // In late game (lots of clicks), throttle shakes so they don't happen every click
  if (now - _lastShakeTime < SHAKE_COOLDOWN_MS) return;
  _lastShakeTime = now;
  const area = document.querySelector('.mine-area');
  if (!area) return;
  area.classList.remove('shake');
  void area.offsetWidth; // reflow
  if (intensity === 'epic') area.style.animationDuration = '0.6s';
  else area.style.animationDuration = '0.45s';
  area.classList.add('shake');
  area.addEventListener('animationend', () => area.classList.remove('shake'), { once:true });
}

// ─── Accessibility Modal ───────────────────────────────────────────────────────
function openA11y() {
  const overlay = document.getElementById('a11y-overlay');
  if (!overlay) return;
  // Sync toggles
  ['shake', 'particles'].forEach(key => {
    const btn = document.getElementById('toggle-' + key);
    if (!btn) return;
    const enabled = key === 'shake' ? isShakeEnabled() : isParticlesEnabled();
    btn.className = 'a11y-toggle' + (enabled ? ' on' : '');
  });
  overlay.classList.add('visible');
}
function closeA11y() {
  const overlay = document.getElementById('a11y-overlay');
  if (overlay) overlay.classList.remove('visible');
}
function closeA11yBackdrop(e) {
  if (e.target === document.getElementById('a11y-overlay')) closeA11y();
}
function toggleA11y(key, btn) {
  const s = getA11ySettings();
  const current = key === 'shake' ? isShakeEnabled() : isParticlesEnabled();
  setA11ySetting(key, !current);
  btn.className = 'a11y-toggle' + (!current ? ' on' : '');
}

// Show/hide accessibility button based on current screen
const _origShowScreen = showScreen;
function showScreen(id) {
  _origShowScreen(id);
  const a11yBtn = document.getElementById('a11y-btn');
  if (a11yBtn) {
    // Show on title and game screens, not in lobby or end
    a11yBtn.style.display = (id === 'title-screen' || id === 'game-screen') ? 'block' : 'none';
  }
}

// ─── Charge Mechanic ───────────────────────────────────────────────────────────
const CHARGE_MAX_MS = 1200; // max hold time for full charge
let chargeStart = null;
let chargeRafId = null;
let chargeEvent = null;

function startCharge(e) {
  if (e.type === 'touchstart') e.preventDefault();
  const btn = document.getElementById('mine-btn');
  if (!btn || btn.disabled) return;
  chargeStart = Date.now();
  chargeEvent = e;
  btn.classList.add('charging');
  btn.style.setProperty('--charge-dur', CHARGE_MAX_MS + 'ms');
  updateChargeRing();
  haptic(10);
}

function updateChargeRing() {
  chargeRafId = requestAnimationFrame(() => {
    if (!chargeStart) return;
    const elapsed = Date.now() - chargeStart;
    const pct = Math.min(100, (elapsed / CHARGE_MAX_MS) * 100);
    const ring = document.getElementById('charge-ring');
    const label = document.getElementById('charge-label');
    if (ring) ring.style.setProperty('--pct', pct + '%');
    const mult = getChargeMultiplier();
    if (label) {
      if (pct < 15) label.textContent = 'HOLD TO CHARGE';
      else label.textContent = `${mult}× POWER STRIKE`;
    }
    // Periodic audio feedback
    if (Math.floor(elapsed / 100) > Math.floor((elapsed - 16) / 100)) {
      AudioEngine.powerCharge(pct / 100);
      if (pct > 5) haptic(5);
    }
    if (pct < 100) updateChargeRing();
    else {
      haptic([30,20,40]); // buzz when fully charged
    }
  });
}

function getChargeMultiplier() {
  if (!chargeStart) return 1;
  const elapsed = Date.now() - chargeStart;
  const pct = Math.min(1, elapsed / CHARGE_MAX_MS);
  if (pct < 0.2) return 1;
  if (pct < 0.6) return 2;
  return 3;
}

function releaseCharge(e) {
  if (e.type === 'touchend') e.preventDefault();
  if (chargeRafId) { cancelAnimationFrame(chargeRafId); chargeRafId = null; }
  const btn = document.getElementById('mine-btn');
  const mult = getChargeMultiplier();
  const wasPowerStrike = chargeStart && (Date.now() - chargeStart) > 200;

  chargeStart = null;
  if (btn) {
    btn.classList.remove('charging');
    if (wasPowerStrike && mult > 1) {
      btn.classList.add('power-strike');
      setTimeout(()=>btn.classList.remove('power-strike'), 300);
    }
  }

  const ring = document.getElementById('charge-ring');
  const label = document.getElementById('charge-label');
  if (ring) ring.style.setProperty('--pct', '0%');
  if (label) label.textContent = 'HOLD TO CHARGE';

  doMine(e || chargeEvent, mult);
}

function cancelCharge() {
  if (chargeRafId) { cancelAnimationFrame(chargeRafId); chargeRafId = null; }
  chargeStart = null;
  const btn = document.getElementById('mine-btn');
  if (btn) btn.classList.remove('charging');
  const ring = document.getElementById('charge-ring');
  const label = document.getElementById('charge-label');
  if (ring) ring.style.setProperty('--pct', '0%');
  if (label) label.textContent = 'HOLD TO CHARGE';
}

// ─── Mining ────────────────────────────────────────────────────────────────────
function doMine(e, chargeMultiplier) {
  const btn = document.getElementById('mine-btn');
  const mult = chargeMultiplier || 1;
  btn.classList.add('clicking');
  setTimeout(() => btn.classList.remove('clicking'), 100);

  // Determine how many times to fire based on charge (1, 2, or 3 hits)
  let shotsLeft = mult;
  function fireShot() {
    socket.emit('game:mine', {}, (res) => {
      if (!res || !res.ok) return;
      selfState = res.self;
      updateStats();
      syncOrbitMiners();

      if (res.full) {
        // inventory full
      } else if (res.miss) {
        AudioEngine.miss();
        haptic(30);
        spawnMissParticle(e);
      } else {
        AudioEngine.click();
        haptic(mult > 1 ? [8, 10, 8] : 8);

        const isRare = res.drops?.some(d => ['Diamond','Moonstone','Void Gem'].includes(d.name));
        const isSemiRare = res.drops?.some(d => ['Sapphire','Emerald','Ruby'].includes(d.name));

        if (isRare) {
          AudioEngine.rareFanfare();
          shakeScreen('epic');
          haptic([80, 40, 80, 40, 120]);
        } else if (isSemiRare) {
          shakeScreen('normal');
          haptic([30, 20, 30]);
        }

        const label = mult > 1 ? `⚡${mult}× +${res.gemsAdded}` : `+${res.gemsAdded}`;
        spawnClickParticle(e, label);
        res.drops?.forEach(d => {
          const gem = GEM_TYPES.find(g => g.name === d.name);
          if (gem) AudioEngine.gemDiscover(gem.rarity);
          spawnGemParticle(e, d.name);
        });
      }
      if (currentTab === 'upgrades') renderUpgrades();
    });

    shotsLeft--;
    if (shotsLeft > 0) setTimeout(fireShot, 80);
  }

  if (mult > 1) {
    AudioEngine.powerRelease(mult);
    haptic([20, 15, 30]);
  }
  fireShot();
}

function getEventCoords(e) {
  if (e.clientX || e.clientY) return { x: e.clientX, y: e.clientY };
  const btn = document.getElementById('mine-btn');
  if (btn) {
    const r = btn.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
}

function spawnClickParticle(e, text) {
  if (!isParticlesEnabled()) return;
  const { x, y } = getEventCoords(e);
  const el = document.createElement('div');
  el.className = 'particle';
  el.textContent = text;
  el.style.cssText = `left:${x-10}px;top:${y-10}px;color:var(--gold)`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}
function spawnGemParticle(e, gemName) {
  if (!isParticlesEnabled()) return;
  const { x, y } = getEventCoords(e);
  const el = document.createElement('div');
  el.className = 'gem-drop';
  el.innerHTML = gemSVG(gemName);
  el.style.cssText = `left:${x-10+(Math.random()-.5)*40}px;top:${y-20}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}
function spawnMissParticle(e) {
  const { x, y } = getEventCoords(e);
  const el = document.createElement('div');
  el.className = 'miss-text';
  el.textContent = '• miss •';
  el.style.cssText = `left:${x-20}px;top:${y-10}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

// AFK gem burst around the orbit zone
function spawnAfkGems(drops) {
  const zone = document.getElementById('orbit-zone');
  if (!zone) return;
  const rect = zone.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const toShow = drops.slice(0, 6);
  toShow.forEach((d, i) => {
    const angle = (Math.random() * Math.PI * 2);
    const dist = 60 + Math.random() * 60;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 40;
    const el = document.createElement('div');
    el.className = 'afk-gem';
    const gemName = d.name || '';
    el.innerHTML = gemSVG(gemName);
    el.style.cssText = `left:${cx + (Math.random()-.5)*20}px;top:${cy + (Math.random()-.5)*20}px;--dx:${dx}px;--dy:${dy}px;animation-delay:${i*60}ms`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  });
}

// ─── Orbit Miners ──────────────────────────────────────────────────────────────
// Each purchased AFK miner gets a little emoji orbiting the mine button.
// Multiple levels = multiple orbiters (capped at 5 per type to avoid chaos).
function syncOrbitMiners() {
  if (!selfState) return;
  const zone = document.getElementById('orbit-zone');
  if (!zone) return;

  // Build desired list of all active afk miners with their emoji
  const desired = []; // [{emoji, id}]
  UPGRADES.forEach(u => {
    if (u.type !== 'autoMine') return;
    const lvl = selfState.upgradeLevels?.[u.id] || 0;
    if (lvl === 0) return;
    // Show up to min(lvl,3) orbiters per upgrade
    const count = Math.min(lvl, 3);
    for (let i = 0; i < count; i++) {
      desired.push({ key: u.id + '_' + i, emoji: u.emoji });
    }
  });

  // Remove old ones no longer needed
  Object.keys(orbitMiners).forEach(key => {
    if (!desired.find(d => d.key === key)) {
      orbitMiners[key]?.remove();
      delete orbitMiners[key];
    }
  });

  // Add new ones
  const total = desired.length;
  desired.forEach((d, idx) => {
    if (orbitMiners[d.key]) return; // already exists
    const el = document.createElement('div');
    el.className = 'orbit-miner';
    el.textContent = d.emoji;
    el.dataset.idx = idx;
    el.dataset.total = total;
    zone.appendChild(el);
    orbitMiners[d.key] = el;
  });

  // Update all positions/animations based on current total
  const allKeys = Object.keys(orbitMiners);
  const n = allKeys.length;
  allKeys.forEach((key, i) => {
    const el = orbitMiners[key];
    if (!el) return;
    const radius = 115 + (i % 2) * 15; // slight alternation for layering
    const speed = 4 + (i * 0.3); // each orbiter slightly different speed
    const offset = (i / n) * 360;
    el.style.cssText = `
      position:absolute;
      font-size:1.4rem;
      pointer-events:none;
      z-index:3;
      animation: orbit${i % 3 === 0 ? 'CW' : 'CCW'} ${speed}s linear infinite;
      --r:${radius}px;
      --offset:${offset}deg;
    `;
  });
}

function clearOrbitMiners() {
  Object.values(orbitMiners).forEach(el => el?.remove());
  Object.keys(orbitMiners).forEach(k => delete orbitMiners[k]);
}

// Inject orbit keyframes dynamically
(function injectOrbitStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes orbitCW {
      from { transform: rotate(calc(var(--offset))) translateX(var(--r)) rotate(calc(-1 * var(--offset))); }
      to   { transform: rotate(calc(var(--offset) + 360deg)) translateX(var(--r)) rotate(calc(-1 * var(--offset) - 360deg)); }
    }
    @keyframes orbitCCW {
      from { transform: rotate(calc(var(--offset))) translateX(var(--r)) rotate(calc(-1 * var(--offset))); }
      to   { transform: rotate(calc(var(--offset) - 360deg)) translateX(var(--r)) rotate(calc(-1 * var(--offset) + 360deg)); }
    }
  `;
  document.head.appendChild(style);
})();

// ─── Sell ──────────────────────────────────────────────────────────────────────
function sellGem(gemName) {
  socket.emit('game:sell', { gemName, quantity: -1 }, (res) => {
    if (!res || !res.ok) { showToast('❌','Cannot sell', res?.error || ''); return; }
    selfState = res.self;
    AudioEngine.sell();
    haptic([15, 10, 15]);
    showToast('💰', 'Gems Sold!', `+$${res.earned.toLocaleString()} from ${gemName}`);
    updateStats();
    if (currentTab === 'upgrades') renderUpgrades();
  });
}
function sellAll() {
  if (!selfState?.inventory) return;
  const gemNames = Object.keys(selfState.inventory).filter(n => (selfState.inventory[n] || 0) > 0);
  if (!gemNames.length) return;
  let remaining = gemNames.length;
  let totalEarned = 0;
  gemNames.forEach(gemName => {
    socket.emit('game:sell', { gemName, quantity: -1 }, (res) => {
      if (res?.ok) { selfState = res.self; totalEarned += res.earned; }
      remaining--;
      if (remaining === 0) {
        AudioEngine.sell();
        haptic([20, 10, 20, 10, 30]);
        showToast('💰','All Gems Sold!', `+$${totalEarned.toLocaleString()} total`);
        updateStats();
        if (currentTab === 'upgrades') renderUpgrades();
      }
    });
  });
}

// ─── Upgrades ──────────────────────────────────────────────────────────────────
function getUpgradeCost(u) {
  const lvl = selfState?.upgradeLevels?.[u.id] || 0;
  return Math.floor(u.baseCost * Math.pow(u.costMult, lvl));
}

function renderUpgrades() {
  const container = document.getElementById('panel-upgrades');
  container.innerHTML = '';
  const cash = selfState?.profit || 0;
  const myPrestigeRank = selfState?.prestigeRank || 0;

  // If player has prestige rank, show prestige status at top
  if (myPrestigeRank > 0) {
    const rd = PRESTIGE_RANKS[myPrestigeRank - 1];
    const display = document.createElement('div');
    display.className = 'prestige-rank-display';
    display.innerHTML = `<div class="prestige-rank-label">${rd.emoji} Prestige ${rd.label}</div><div class="prestige-rank-bonus">+${Math.round((selfState.prestigeBonus||0)*100)}% permanent gem value bonus active</div>`;
    container.appendChild(display);
  }

  // Sort: affordable first (by cost ASC), then unaffordable (by cost ASC), maxed last
  const withMeta = UPGRADES.map(u => {
    const lvl = selfState?.upgradeLevels?.[u.id] || 0;
    const shieldConsumed = u.type === 'sabotageShield' && lvl >= u.maxLevel && !selfState?.sabotageShield;
    const maxed = lvl >= u.maxLevel && !shieldConsumed;
    const cost = maxed ? Infinity : getUpgradeCost(u);
    const canAfford = !maxed && cash >= cost;
    return { u, lvl, maxed, cost, canAfford };
  });
  withMeta.sort((a, b) => {
    if (a.maxed !== b.maxed) return a.maxed ? 1 : -1;
    if (a.canAfford !== b.canAfford) return a.canAfford ? -1 : 1;
    return a.cost - b.cost;
  });

  withMeta.forEach(({ u, lvl, maxed, cost, canAfford }) => {
    const card = document.createElement('div');
    card.className = 'upgrade-card ' + (maxed ? 'maxed' : canAfford ? 'can-afford' : 'cant-afford');
    const isAfk = u.type === 'autoMine';
    const isCap = u.type === 'inventoryCap';
    const isShield = u.type === 'sabotageShield';
    const isBulkSell = u.type === 'bulkSell';
    const shieldActive = isShield && selfState?.sabotageShield;
    const afkBadge = isAfk ? `<span class="upg-afk-badge">AFK ${u.gemEmoji}</span>` : '';
    const capBadge = isCap ? `<span class="upg-cap-badge">🎒 CAP</span>` : '';
    const shieldBadge = isShield ? `<span class="upg-afk-badge" style="background:rgba(64,144,245,.15);color:var(--sapphire);border-color:rgba(64,144,245,.3)">🛡 SHIELD${shieldActive?' ✓':''}</span>` : '';
    const bulkBadge = isBulkSell ? `<span class="upg-afk-badge" style="background:rgba(48,217,122,.15);color:var(--emerald);border-color:rgba(48,217,122,.3)">📦 AUTO</span>` : '';
    const shieldDesc = isShield
      ? ` ${shieldActive ? '<strong style="color:var(--sapphire)">Shield is ACTIVE — ready to block!</strong>' : 'Shield is consumed. Repurchase to recharge.'}`
      : '';
    const bulkDelayNext = isBulkSell && !maxed ? getAutoSellDelay(lvl + 1) : 0;
    const bulkDesc = isBulkSell && lvl > 0
      ? ` <strong style="color:var(--emerald)">Active · ${getAutoSellDelay(lvl) === 0 ? 'INSTANT sell on full' : getAutoSellDelay(lvl) + 's delay on full'}${!maxed ? ' → next: ' + (bulkDelayNext === 0 ? 'instant' : bulkDelayNext + 's') : ''}</strong>` : '';
    card.innerHTML = `
      <div class="upg-header">
        <div class="upg-name">${u.emoji} ${u.name}${afkBadge}${capBadge}${shieldBadge}${bulkBadge}</div>
        <div class="upg-level">${lvl}/${u.maxLevel}</div>
      </div>
      <div class="upg-desc">${u.desc}${isCap ? ` Current: ${(selfState?.inventoryCap||50)} → Next: ${(selfState?.inventoryCap||50)*2} slots.` : ''}${shieldDesc}${bulkDesc}</div>
      <div class="upg-footer">
        <div class="upg-cost">${maxed ? '✅ MAXED' : '$' + cost.toLocaleString()}</div>
        <div class="upg-effect">${maxed ? 'Max level' : canAfford ? '▶ Click to buy' : 'Need more cash'}</div>
      </div>`;
    if (!maxed && canAfford) card.onclick = () => buyUpgrade(u.id);
    container.appendChild(card);
  });

  // Prestige-only upgrades section
  if (myPrestigeRank >= 1) {
    const header = document.createElement('div');
    header.className = 'prestige-section-header';
    header.innerHTML = '🔮 Deep Mine Upgrades';
    container.appendChild(header);

    PRESTIGE_UPGRADES.forEach(u => {
      const lvl = selfState?.upgradeLevels?.[u.id] || 0;
      const maxed = lvl >= u.maxLevel;
      const cost = maxed ? Infinity : upgradeCostClient(u.id, lvl);
      const canAfford = !maxed && cash >= cost;
      const card = document.createElement('div');
      card.className = 'upgrade-card ' + (maxed ? 'maxed' : canAfford ? 'can-afford' : 'cant-afford');
      card.style.borderColor = maxed ? 'var(--emerald)' : canAfford ? '#9040f0' : '';
      const isAfk = u.type === 'autoMine';
      const afkBadge = isAfk ? `<span class="upg-afk-badge" style="background:rgba(144,64,240,.15);color:#c080ff;border-color:rgba(144,64,240,.3)">AFK 🔮</span>` : '';
      card.innerHTML = `
        <div class="upg-header">
          <div class="upg-name">${u.emoji} ${u.name}${afkBadge}</div>
          <div class="upg-level">${lvl}/${u.maxLevel}</div>
        </div>
        <div class="upg-desc">${u.desc}</div>
        <div class="upg-footer">
          <div class="upg-cost" style="color:#c080ff">${maxed ? '✅ MAXED' : '$' + cost.toLocaleString()}</div>
          <div class="upg-effect">${maxed ? 'Max level' : canAfford ? '▶ Click to buy' : 'Need more cash'}</div>
        </div>`;
      if (!maxed && canAfford) card.onclick = () => buyUpgrade(u.id);
      container.appendChild(card);
    });
  }
}

function buyUpgrade(upgradeId) {
  socket.emit('game:upgrade', { upgradeId }, (res) => {
    if (!res.ok) { showToast('❌','Cannot buy', res.error); return; }
    selfState = res.self;
    const u = [...UPGRADES, ...PRESTIGE_UPGRADES].find(x => x.id === upgradeId);
    showToast(u.emoji, 'Upgraded!', `${u.name} is now level ${selfState.upgradeLevels[upgradeId]}`);
    updateStats();
    syncOrbitMiners();
    renderUpgrades();
    updatePrestigeButton();
  });
}

// ─── Stats & UI ────────────────────────────────────────────────────────────────
function updateStats() {
  if (!selfState) return;
  document.getElementById('stat-gems').textContent   = selfState.totalGems.toLocaleString();
  document.getElementById('stat-profit').textContent = '$' + selfState.profit.toLocaleString();
  document.getElementById('stat-clicks').textContent = selfState.totalClicks.toLocaleString();
  const gpc = (selfState.gemsPerClick || 1).toFixed(1);
  const chance = Math.round((selfState.clickChance || 0.55) * 100);
  const auto = selfState.autoMine > 0 ? ` + ${selfState.autoMine}/s AFK` : '';
  document.getElementById('mine-power-display').textContent = `+${gpc}/click (${chance}%)${auto}`;
  renderInventory();
  updatePrestigeButton();
}

function updatePrestigeButton() {
  const wrap = document.getElementById('prestige-btn-wrap');
  const btn = document.getElementById('prestige-btn');
  const info = document.getElementById('prestige-info');
  if (!wrap || !btn || !info || !selfState) return;

  const currentRank = selfState.prestigeRank || 0;
  const nextRankDef = PRESTIGE_RANKS[currentRank];
  if (!nextRankDef) {
    wrap.style.display = 'block';
    btn.disabled = true;
    btn.textContent = '👁 MAX PRESTIGE REACHED';
    info.textContent = 'You have conquered all depths.';
    return;
  }

  // Check if all base upgrades are maxed
  const allMaxed = UPGRADES.every(u => {
    const lvl = selfState.upgradeLevels?.[u.id] || 0;
    if (u.type === 'sabotageShield' || u.type === 'bulkSell') return lvl >= 1;
    return lvl >= u.maxLevel;
  });

  const remaining = UPGRADES.filter(u => {
    const lvl = selfState.upgradeLevels?.[u.id] || 0;
    if (u.type === 'sabotageShield' || u.type === 'bulkSell') return lvl < 1;
    return lvl < u.maxLevel;
  }).length;

  wrap.style.display = 'block';
  btn.disabled = !allMaxed;
  btn.textContent = `${nextRankDef.emoji} Prestige ${nextRankDef.label} — Go Deeper!`;
  if (allMaxed) {
    info.textContent = `All upgrades maxed! Resets upgrades. Grants +${Math.round(nextRankDef.bonus*100)}% permanent gem value.`;
    info.style.color = 'var(--emerald)';
  } else {
    info.textContent = `Max all upgrades to prestige. ${remaining} upgrade${remaining !== 1 ? 's' : ''} remaining.`;
    info.style.color = '';
  }
}

function doPrestige() {
  socket.emit('game:prestige', {}, (res) => {
    if (!res.ok) { showToast('❌', 'Cannot Prestige', res.error); return; }
    // prestige:achieved event will handle the UI
  });
}

function dismissPrestige() {
  const overlay = document.getElementById('prestige-overlay');
  if (overlay) overlay.classList.remove('show');
}

function calcInventoryValueLocal() {
  if (!selfState?.inventory) return 0;
  let total = 0;
  for (const gem of GEM_TYPES) {
    const count = selfState.inventory[gem.name] || 0;
    const mult = selfState.valueMultiplier || 1;
    total += count * Math.floor(gem.value * mult);
  }
  return total;
}

function renderInventory() {
  if (!selfState?.inventory) return;
  const container = document.getElementById('gem-inventory');
  container.innerHTML = '';
  const hasGems = Object.values(selfState.inventory).some(v => v > 0);
  const sellAllBtn = document.getElementById('sell-all-btn');
  sellAllBtn.disabled = !hasGems;
  const totalVal = calcInventoryValueLocal();
  const valRow = document.getElementById('inv-value-row');
  if (hasGems) {
    valRow.style.display = 'block';
    document.getElementById('inv-total-value').textContent = '$' + totalVal.toLocaleString();
  } else {
    valRow.style.display = 'none';
  }

  // Inventory cap display
  const capMax = selfState.inventoryCap || 50;
  const capUsed = Object.values(selfState.inventory).reduce((s,v)=>s+v,0);
  const capPct = Math.min(100, Math.round((capUsed / capMax) * 100));
  const isFull = capUsed >= capMax;
  const capBarWrap = document.getElementById('inv-cap-bar-wrap');
  const capBar = document.getElementById('inv-cap-bar');
  const capRow = document.getElementById('inv-cap-row');
  const capWarn = document.getElementById('inv-cap-warn');
  const capUsedEl = document.getElementById('inv-cap-used');
  const capMaxEl = document.getElementById('inv-cap-max');
  if (capBarWrap) {
    capBarWrap.style.display = 'block';
    capBar.style.width = capPct + '%';
    capBar.style.background = isFull ? 'var(--ruby)' : capPct > 75 ? 'var(--gold)' : 'var(--emerald)';
    capRow.style.display = 'flex';
    capRow.className = 'inv-cap-row' + (isFull ? ' full' : '');
    capUsedEl.textContent = capUsed;
    capMaxEl.textContent = capMax;
    capWarn.textContent = isFull ? '🚫 FULL — sell to mine!' : capPct > 75 ? '⚠️ nearly full' : '';
  }

  // Block/unblock mine button
  const mineBtn = document.getElementById('mine-btn');
  if (mineBtn) {
    mineBtn.disabled = isFull;
    mineBtn.style.opacity = isFull ? '0.45' : '';
    mineBtn.title = isFull ? 'Inventory full! Sell gems to continue mining.' : '';
  }

  if (!hasGems) {
    const empty = document.createElement('div');
    empty.className = 'inv-empty';
    empty.textContent = 'No gems yet — start mining!';
    container.appendChild(empty);
    return;
  }
  GEM_TYPES.forEach(g => {
    const count = selfState.inventory[g.name] || 0;
    if (!count) return;
    const mult = selfState.valueMultiplier || 1;
    const perGem = Math.floor(g.value * mult);
    const total = count * perGem;
    const chip = document.createElement('div');
    chip.className = 'gem-chip';
    chip.style.cssText = `background:${g.color}22;border-color:${g.color}55;color:${g.color};`;
    chip.innerHTML = `<span class="gem-icon">${gemSVG(g.name)}</span> <strong>${count}</strong> <span class="chip-sell">· $${total.toLocaleString()}</span>`;
    chip.title = `${g.name} — $${perGem} each — Click to sell all`;
    chip.onclick = () => sellGem(g.name);
    container.appendChild(chip);
  });
}

function renderPlayers() {
  const container = document.getElementById('panel-players');
  container.innerHTML = '';
  const sorted = [...allPlayers].sort((a,b) => (b.totalEarned||b.profit) - (a.totalEarned||a.profit));
  const maxVal = sorted[0] ? ((sorted[0].totalEarned||0) + (sorted[0].unsoldValue||0)) : 1;

  // In teams mode, show team scores at top
  if (gameMode === 'teams' && allPlayers.length >= 2) {
    const teamA = allPlayers.filter(p => p.team === 'A');
    const teamB = allPlayers.filter(p => p.team === 'B');
    const scoreA = teamA.reduce((s,p)=>(s+(p.totalEarned||0)),0);
    const scoreB = teamB.reduce((s,p)=>(s+(p.totalEarned||0)),0);
    const tsDiv = document.createElement('div');
    tsDiv.innerHTML = `
      <div class="team-score-bar" style="border-color:rgba(245,200,66,.4)">
        <span class="ts-label" style="color:var(--gold)">⛏ Team A</span>
        <span class="ts-val" style="color:var(--gold)">$${scoreA.toLocaleString()}</span>
      </div>
      <div class="team-score-bar" style="border-color:rgba(64,144,245,.4);margin-bottom:1rem">
        <span class="ts-label" style="color:var(--sapphire)">⛏ Team B</span>
        <span class="ts-val" style="color:var(--sapphire)">$${scoreB.toLocaleString()}</span>
      </div>`;
    container.appendChild(tsDiv);
  }

  sorted.forEach((p, rank) => {
    const isYou = p.socketId === mySocketId;
    const div = document.createElement('div');
    div.className = 'player-row ' + (isYou ? 'you-row' : '');
    const netWorth = (p.totalEarned||p.profit||0) + (p.unsoldValue||0);
    const barW = Math.max(2, Math.round((netWorth / maxVal) * 100));
    const teamBadge = gameMode === 'teams' && p.team
      ? `<span class="team-badge team-${p.team.toLowerCase()}">Team ${p.team}</span>` : '';
    div.innerHTML = `<div class="pr-top">
      <div class="pr-avatar">${p.avatar}</div>
      <div class="pr-name" style="color:${p.color}">${p.name}${isYou?' <span style="font-size:.65rem;background:var(--gold);color:#1a1200;padding:.1rem .3rem;border-radius:2px;font-family:Share Tech Mono,monospace">YOU</span>':''}${teamBadge}${prestigeBadgeHTML(p.prestigeRank)}</div>
      <div class="pr-gems">$${(p.profit||0).toLocaleString()}</div></div>
      <div class="pr-bar-wrap"><div class="pr-bar" style="width:${barW}%;background:${p.color}"></div></div>
      <div class="pr-stats-row">
        <div class="pr-stat">⛏ ${(p.totalGems||0).toLocaleString()}</div>
        <div class="pr-stat">🖱 ${(p.totalClicks||0).toLocaleString()}</div>
        ${p.autoMine>0?`<div class="pr-stat">🤖 ${p.autoMine}/s</div>`:''}
        ${p.unsoldValue>0?`<div class="pr-stat">💼 $${p.unsoldValue.toLocaleString()} unsold</div>`:''}
        <div class="pr-stat">🏅 #${rank+1}</div>
      </div>`;
    container.appendChild(div);
  });
}

function renderAchievements() {
  const container = document.getElementById('panel-achievements');
  container.innerHTML = '';
  const unlocked = selfState?.achievementsUnlocked || [];
  ACHIEVEMENTS.forEach(a => {
    const done = unlocked.includes(a.id);
    const div = document.createElement('div');
    div.className = 'ach-card ' + (done ? 'unlocked' : '');
    div.innerHTML = `<div class="ach-icon">${a.emoji}</div>
      <div><div class="ach-name">${a.name}</div><div class="ach-desc">${a.desc}</div></div>
      <div class="ach-status">${done ? '✓ EARNED' : '🔒'}</div>`;
    container.appendChild(div);
  });
}

function isMobile() { return window.innerWidth <= 700; }

function switchTab(tab, el) {
  const panel = document.getElementById('upgrade-panel');
  const hint = document.getElementById('mobile-panel-hint');
  const wasMobile = isMobile();
  const wasCollapsed = wasMobile && panel.classList.contains('panel-collapsed');
  const sameTab = currentTab === tab;

  if (wasMobile) {
    if (wasCollapsed) {
      panel.classList.remove('panel-collapsed');
      panel.classList.add('panel-open');
      if (hint) {
        hint.querySelector('.hint-open-text').style.display = 'none';
        hint.querySelector('.hint-close-text').style.display = '';
      }
    } else if (sameTab) {
      panel.classList.add('panel-collapsed');
      panel.classList.remove('panel-open');
      if (hint) {
        hint.querySelector('.hint-open-text').style.display = '';
        hint.querySelector('.hint-close-text').style.display = 'none';
      }
      return;
    }
  }

  currentTab = tab;
  document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('panel-upgrades').style.display     = tab==='upgrades'     ? 'block':'none';
  document.getElementById('panel-players').style.display      = tab==='players'      ? 'block':'none';
  document.getElementById('panel-sabotage').style.display     = tab==='sabotage'     ? 'block':'none';
  document.getElementById('panel-achievements').style.display  = tab==='achievements' ? 'block':'none';
  document.getElementById('panel-chat').style.display         = tab==='chat'         ? 'flex':'none';
  if (tab==='players') renderPlayers();
  if (tab==='achievements') renderAchievements();
  if (tab==='upgrades') renderUpgrades();
  if (tab==='sabotage') renderSabotage();
  if (tab==='chat') {
    clearIngameChatUnread();
    initIngameChatPanel();
    const msgs = document.getElementById('ingame-chat-msgs');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }
}

function initMobilePanel() {
  const panel = document.getElementById('upgrade-panel');
  const hint = document.getElementById('mobile-panel-hint');
  if (!panel) return;
  if (isMobile()) {
    panel.classList.add('panel-collapsed');
    panel.classList.remove('panel-open');
    if (hint) {
      hint.querySelector('.hint-open-text').style.display = '';
      hint.querySelector('.hint-close-text').style.display = 'none';
    }
  } else {
    panel.classList.remove('panel-collapsed','panel-open');
  }
}

// ─── End screen ────────────────────────────────────────────────────────────────
function showEndScreen(results, mode, awards) {
  const medals = ['🥇','🥈','🥉','4️⃣'];
  const winner = results[0];
  const myName = selfState?.name || '';
  const isYouWinner = winner && winner.name === myName;

  const resolvedMode = mode || gameMode;
  if (resolvedMode === 'teams' && winner?.team) {
    document.getElementById('winner-display').textContent = isYouWinner
      ? `🏆 Your Team Wins! (Team ${winner.team})`
      : `Team ${winner.team} Wins!`;
  } else {
    document.getElementById('winner-display').textContent = isYouWinner ? '🏆 You Win!' : `${winner.avatar} ${winner.name} Wins!`;
  }

  const lb = document.getElementById('final-leaderboard');
  lb.innerHTML = '';
  results.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'lb-row ' + (i===0?'first':'');
    const teamTag = resolvedMode === 'teams' && p.team ? ` <span class="team-badge team-${p.team.toLowerCase()}">Team ${p.team}</span>` : '';
    div.innerHTML = `<div class="lb-rank">${medals[i]||i+1}</div>
      <div class="lb-name">${p.avatar} ${p.name}${teamTag}${prestigeBadgeHTML(p.prestigeRank)}</div>
      <div>
        <div class="lb-gems">$${(p.totalEarned||p.profit||0).toLocaleString()}</div>
        ${(p.unsoldValue||0)>0?`<div class="lb-sub">+$${p.unsoldValue.toLocaleString()} unsold</div>`:''}
      </div>`;
    lb.appendChild(div);
  });
  showScreen('end-screen');

  // Confetti burst for the winner
  if (typeof confetti === 'function') {
    const winnerColor = (isYouWinner || resolvedMode === 'teams') ? '#f5c842' : (winner?.color || '#f5c842');
    const colors = [winnerColor, '#ffffff', '#30d97a', '#4090f5', '#e84040'];
    // Initial big burst from center
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.55 }, colors, startVelocity: 45, gravity: 0.9, scalar: 1.1 });
    // Two side cannons
    setTimeout(() => {
      confetti({ particleCount: 60, angle: 60,  spread: 55, origin: { x: 0, y: 0.6 }, colors });
      confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors });
    }, 250);
    // Final shower
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 120, origin: { y: 0.4 }, colors, gravity: 1.2, scalar: 0.9 });
    }, 600);
  }

  // Special Awards
  const awardsSection = document.getElementById('final-awards');
  const awardsList = document.getElementById('awards-list');
  if (awards && awards.length) {
    awardsList.innerHTML = '';
    awards.forEach(a => {
      const div = document.createElement('div');
      div.className = 'award-row';
      div.innerHTML = `<div class="award-emoji">${a.emoji}</div><div><div class="award-title">${a.title}</div><div class="award-desc">${a.desc}</div></div>`;
      awardsList.appendChild(div);
    });
    awardsSection.style.display = 'block';
  } else {
    awardsSection.style.display = 'none';
  }
}

// ─── Helpers ───────────────────────────────────────────────────────────────────
function saveSession(token, code, host, name) {
  sessionStorage.setItem('gemrush_token', token);
  sessionStorage.setItem('gemrush_code',  code);
  sessionStorage.setItem('gemrush_host',  host ? '1' : '');
  sessionStorage.setItem('gemrush_name',  name || '');
}
function clearSession() {
  sessionStorage.removeItem('gemrush_token');
  sessionStorage.removeItem('gemrush_code');
  sessionStorage.removeItem('gemrush_host');
  sessionStorage.removeItem('gemrush_name');
}
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function goTitle() {
  lobbyCode = null; isHost = false; isSpectator = false; selfState = null; allPlayers = []; myLastRank = null;
  sessionToken = null; gameMode = 'unlimited'; lobbyIsPublic = false;
  const _chatWrap = document.getElementById('lobby-chat-wrap');
  if (_chatWrap) _chatWrap.style.display = 'none';
  clearChat();
  stopClientTimer();
  stopSabCooldownTick();
  removeFrozenOverlay();
  removeJamBanner();
  clearSession();
  clearOrbitMiners();
  showScreen('title-screen');
  showHomeCard();
}
function showToast(icon, title, msg) {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<div class="toast-icon">${icon}</div><div class="toast-text"><div class="toast-title">${title}</div>${msg}</div>`;
  c.appendChild(t);
  setTimeout(() => t.style.opacity='0', 2800);
  setTimeout(() => t.remove(), 3200);
}

// Custom confirm dialog — replaces native confirm()
// showConfirm({ icon, title, msg, okText, okSafe, cancelText }) => Promise<bool>
function showConfirm({ icon = '⚠️', title = 'Are you sure?', msg = '', okText = 'Confirm', okSafe = false, cancelText = 'Cancel' } = {}) {
  return new Promise(resolve => {
    const overlay = document.getElementById('confirm-overlay');
    const okBtn   = document.getElementById('confirm-ok');
    const cancelBtn = document.getElementById('confirm-cancel');
    document.getElementById('confirm-icon').textContent  = icon;
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-msg').textContent   = msg;
    okBtn.textContent     = okText;
    cancelBtn.textContent = cancelText;
    okBtn.className = okSafe ? 'safe' : '';

    overlay.classList.add('visible');

    function finish(result) {
      overlay.classList.remove('visible');
      okBtn.removeEventListener('click', onOk);
      cancelBtn.removeEventListener('click', onCancel);
      overlay.removeEventListener('click', onBackdrop);
      resolve(result);
    }
    function onOk()      { finish(true);  }
    function onCancel()  { finish(false); }
    function onBackdrop(e) { if (e.target === overlay) finish(false); }

    okBtn.addEventListener('click', onOk);
    cancelBtn.addEventListener('click', onCancel);
    overlay.addEventListener('click', onBackdrop);
  });
}

function checkRankChange() {
  // Only meaningful during an active game with multiple players
  if (!mySocketId || !allPlayers || allPlayers.length < 2) return;
  const gameScreen = document.getElementById('game-screen');
  if (!gameScreen || !gameScreen.classList.contains('active')) return;

  // Compute local player's true score the same way the server does:
  //   totalEarned (cumulative cash ever earned) + unsold inventory value
  // selfState.totalEarned tracks all-time earnings; calcInventoryValueLocal() is the held bag value.
  const myTotalEarned = selfState ? (selfState.totalEarned || 0) : 0;
  const myUnsold = selfState ? calcInventoryValueLocal() : 0;
  const myScore = myTotalEarned + myUnsold;

  // Build snapshot: all players from last game:state broadcast, but replace our
  // own entry with the freshest local data so rank is always up-to-date.
  const snapshot = allPlayers.map(p => {
    if (p.socketId === mySocketId) {
      return { ...p, totalEarned: myScore, unsoldValue: 0 };
    }
    return p;
  });

  const sorted = [...snapshot].sort((a, b) =>
    (b.totalEarned + (b.unsoldValue || 0)) - (a.totalEarned + (a.unsoldValue || 0))
  );

  const myIdx = sorted.findIndex(p => p.socketId === mySocketId);
  if (myIdx === -1) return;

  const newRank = myIdx + 1;
  const total = sorted.length;

  if (myLastRank !== null && newRank !== myLastRank) {
    const moved = myLastRank - newRank; // positive = climbed up
    if (moved > 0) {
      const passed = sorted[myIdx + 1]; // player now just below us
      const msg = passed ? `Passed ${passed.avatar} ${passed.name}` : `You're #${newRank}!`;
      showRankToast('up', newRank, total, msg);
    } else {
      const overtaker = sorted[myIdx - 1]; // player now just above us
      const msg = overtaker ? `${overtaker.avatar} ${overtaker.name} overtook you` : `Dropped to #${newRank}`;
      showRankToast('down', newRank, total, msg);
    }
  }

  myLastRank = newRank;
}


function showRankToast(dir, rank, total, detail) {
  const el = document.getElementById('rank-toast');
  if (!el) return;

  // Cancel any pending hide timer
  if (_rankToastTimer) { clearTimeout(_rankToastTimer); _rankToastTimer = null; }

  const medals = ['🥇','🥈','🥉','4️⃣'];
  const medal = medals[rank - 1] || `#${rank}`;
  const arrow = dir === 'up' ? '▲' : '▼';

  // Clear ALL inline styles and classes, force a reflow so the animation
  // restarts cleanly even if called back-to-back
  el.removeAttribute('style');
  el.className = '';
  el.textContent = '';
  void el.offsetWidth; // flush — forces animation keyframe to restart

  el.textContent = `${arrow} ${medal} of ${total}  —  ${detail}`;
  el.className = `rank-${dir} rank-show`;

  _rankToastTimer = setTimeout(() => {
    el.style.transition = 'opacity .3s';
    el.style.opacity = '0';
    setTimeout(() => {
      el.removeAttribute('style');
      el.className = '';
      el.textContent = '';
    }, 320);
    _rankToastTimer = null;
  }, 3500);
}

// ─── Sabotage ──────────────────────────────────────────────────────────────────
function renderSabotage() {
  const container = document.getElementById('panel-sabotage');
  if (!container) return;
  container.innerHTML = '';

  const others = allPlayers.filter(p => p.socketId !== mySocketId);
  if (!others.length) {
    const msg = document.createElement('div');
    msg.className = 'sab-no-targets';
    msg.textContent = 'No other players to target... yet! 😈';
    container.appendChild(msg);
    return;
  }

  const cash = selfState?.profit || 0;
  const now = Date.now();

  SABOTAGES.forEach(sab => {
    const timesUsed = selfState?.sabotageUses?.[sab.id] || 0;
    const cost = sabotageCostClient(sab, timesUsed);
    const cooldownUntil = selfState?.sabotageCooldowns?.[sab.id] || 0;
    const onCooldown = now < cooldownUntil;
    const secsLeft = onCooldown ? Math.ceil((cooldownUntil - now) / 1000) : 0;
    const canAfford = cash >= cost;

    const card = document.createElement('div');
    card.className = 'sab-card';
    card.innerHTML = `
      <div class="sab-card-header">
        <div class="sab-card-name">${sab.emoji} ${sab.name}</div>
        <div class="sab-card-cost">$${cost.toLocaleString()}</div>
      </div>
      <div class="sab-card-desc">${sab.desc}</div>
      <div class="sab-card-footer">
        <div>
          <span class="sab-uses">Used: ${timesUsed}×</span>
          ${onCooldown ? `<span class="sab-cooldown" id="sab-cd-${sab.id}"> · ⏳ ${secsLeft}s</span>` : ''}
        </div>
        <div style="display:flex;flex-direction:column;gap:.3rem">
          ${others.map(p => `
            <button class="sab-btn" id="sab-${sab.id}-${p.socketId}"
              onclick="useSabotage('${sab.id}','${p.socketId}')"
              ${onCooldown || !canAfford ? 'disabled' : ''}>
              ${p.avatar} ${p.name}
            </button>`).join('')}
        </div>
      </div>`;
    container.appendChild(card);
  });
}

function useSabotage(sabotageId, targetSocketId) {
  socket.emit('game:sabotage', { sabotageId, targetSocketId }, (res) => {
    if (!res.ok) { showToast('❌', 'Sabotage Failed', res.error); return; }
    selfState = res.self;
    const sab = SABOTAGES.find(s => s.id === sabotageId);
    const target = allPlayers.find(p => p.socketId === targetSocketId);
    showToast(sab.emoji, sab.name + ' deployed!', `Cost $${res.cost.toLocaleString()} · targeting ${target?.name || 'them'}`);
    updateStats();
    renderSabotage();
  });
}

function startSabCooldownTick() {
  stopSabCooldownTick();
  sabCooldownInterval = setInterval(() => {
    if (currentTab === 'sabotage') renderSabotage();
  }, 1000);
}
function stopSabCooldownTick() {
  if (sabCooldownInterval) { clearInterval(sabCooldownInterval); sabCooldownInterval = null; }
}

// ─── Frozen overlay ─────────────────────────────────────────────────────────────
function showFrozenOverlay(frozenUntil) {
  if (frozenOverlayEl) return; // already showing
  frozenOverlayEl = document.createElement('div');
  frozenOverlayEl.className = 'frozen-overlay';
  document.body.appendChild(frozenOverlayEl);

  frozenBannerEl = document.createElement('div');
  frozenBannerEl.className = 'frozen-banner';
  frozenBannerEl.textContent = '🧊 AUTO-MINERS FROZEN!';
  document.body.appendChild(frozenBannerEl);

  frozenCheckInterval = setInterval(() => {
    if (Date.now() >= frozenUntil) removeFrozenOverlay();
  }, 500);
}
function removeFrozenOverlay() {
  if (frozenOverlayEl) { frozenOverlayEl.remove(); frozenOverlayEl = null; }
  if (frozenBannerEl) { frozenBannerEl.remove(); frozenBannerEl = null; }
  if (frozenCheckInterval) { clearInterval(frozenCheckInterval); frozenCheckInterval = null; }
}

function showJamBanner(jamUntil) {
  if (jamBannerEl) return;
  jamBannerEl = document.createElement('div');
  jamBannerEl.className = 'frozen-banner';
  jamBannerEl.style.background = 'rgba(232,100,40,.9)';
  jamBannerEl.textContent = '🔧 PICKAXE JAMMED! (½ gems/click)';
  document.body.appendChild(jamBannerEl);
  jamCheckInterval = setInterval(() => {
    if (Date.now() >= jamUntil) removeJamBanner();
  }, 500);
}
function removeJamBanner() {
  if (jamBannerEl) { jamBannerEl.remove(); jamBannerEl = null; }
  if (jamCheckInterval) { clearInterval(jamCheckInterval); jamCheckInterval = null; }
}

// Auto-sell delay per level: 1=2s, 2=1.5s, 3=1s, 4=0.5s, 5=instant
const AUTO_SELL_DELAYS = [0, 2, 1.5, 1, 0.5, 0];
function getAutoSellDelay(level) {
  return AUTO_SELL_DELAYS[Math.min(level, AUTO_SELL_DELAYS.length - 1)] || 0;
}
function updateBulkSellCountdown(state) {
  const el = document.getElementById('bulk-sell-countdown');
  if (!el) return;
  const lvl = state.upgradeLevels?.bulk_sell || 0;
  if (lvl > 0) {
    const delay = getAutoSellDelay(lvl);
    const label = delay === 0 ? '📦 Auto Sell: INSTANT' : `📦 Auto Sell active · ${delay}s delay`;
    el.textContent = label;
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

// ─── Sabotage hit notification ──────────────────────────────────────────────────
function showSabotageHit(data) {
  AudioEngine.sabotageHit();
  haptic([100, 50, 100, 50, 200]);
  const msgs = {
    freeze:       `🧊 Your auto-miners are frozen for 15 seconds!`,
    pickpocket:   `🪤 ${data.stolen ?? 'Some'} gems were stolen from your inventory!`,
    cursed_vein:  `☠️ Your next 10 clicks will miss!`,
    gem_tax:      `💸 15% of your next sell will be stolen! Sell wisely!`,
    pickaxe_jam:  `🔧 Your pickaxe is jammed! Gems/click halved for 20 seconds!`,
  };
  const icons = { freeze:'🧊', pickpocket:'🪤', cursed_vein:'☠️', gem_tax:'💸', pickaxe_jam:'🔧' };
  const overlay = document.createElement('div');
  overlay.className = 'sab-hit-overlay';
  overlay.innerHTML = `<div class="sab-hit-box">
    <div class="sab-hit-icon">${icons[data.sabotageId] || '💥'}</div>
    <div class="sab-hit-title">SABOTAGED!</div>
    <div class="sab-hit-msg">${data.attackerAvatar} <strong>${data.attackerName}</strong> used ${data.sabotageId.replace('_',' ')} on you!</div>
    <div class="sab-hit-msg" style="margin-top:.3rem;color:var(--ruby)">${msgs[data.sabotageId] || ''}</div>
  </div>`;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 3200);

  if (data.sabotageId === 'freeze' && selfState?.frozenUntil) {
    showFrozenOverlay(selfState.frozenUntil);
  }
}

// ─── Rare find banner ───────────────────────────────────────────────────────────
function showRareFindBanner(data) {
  // Remove existing banners
  document.querySelectorAll('.rare-banner').forEach(b => b.remove());
  const isMe = data.finderName === (selfState?.name || '');
  if (isMe) {
    AudioEngine.rareFanfare();
    shakeScreen('epic');
    haptic([80, 40, 80, 40, 120]);
  }
  const banner = document.createElement('div');
  banner.className = 'rare-banner' + (data.isVoid ? ' void-find' : '');
  banner.innerHTML = `
    <div class="rare-banner-gem">${data.gemEmoji}</div>
    <div class="rare-banner-text">${data.isVoid ? '🌌' : '✨'} ${data.gemName.toUpperCase()} FOUND!</div>
    <div class="rare-banner-sub">${data.finderAvatar} ${isMe ? 'YOU found it!' : data.finderName + ' found it!'}</div>`;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 4700);
}

// ─── Lobby Notifications ───────────────────────────────────────────────────────
// Fires a desktop notification when a new public lobby appears, but only:
//  1. The tab is hidden (user is elsewhere)
//  2. At most once every 5 minutes (not spammy)
//  3. User has granted browser permission AND hasn't opted out

const NOTIF_COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes
const NOTIF_POLL_INTERVAL_MS = 30 * 1000; // check every 30 seconds
let notifPollTimer = null;
let knownLobbySet = new Set(); // codes we've already seen

function getLastNotifTime() {
  return parseInt(localStorage.getItem('gemrush_last_notif') || '0', 10);
}
function setLastNotifTime() {
  localStorage.setItem('gemrush_last_notif', Date.now().toString());
}
// Opt-out is stored in localStorage so it survives refreshes/updates
function isNotifOptedOut() {
  return localStorage.getItem('gemrush_notif_optout') === '1';
}
function setNotifOptOut(val) {
  if (val) localStorage.setItem('gemrush_notif_optout', '1');
  else localStorage.removeItem('gemrush_notif_optout');
}
function notifEnabled() {
  return 'Notification' in window &&
    Notification.permission === 'granted' &&
    !isNotifOptedOut();
}
function canSendNotif() {
  return notifEnabled() && (Date.now() - getLastNotifTime()) > NOTIF_COOLDOWN_MS;
}

function updateNotifBtn() {
  const btn = document.getElementById('notif-btn');
  if (!btn || !('Notification' in window)) return;
  const perm = Notification.permission;

  if (perm === 'denied') {
    btn.className = 'notif-btn denied';
    btn.textContent = '🔕 Blocked';
    btn.title = 'Notifications are blocked. Enable them in your browser settings.';
    btn.onclick = null;
  } else if (perm === 'granted' && !isNotifOptedOut()) {
    // ON — clicking turns them off
    btn.className = 'notif-btn granted';
    btn.textContent = '🔔 Notifications On';
    btn.title = 'Click to turn off lobby notifications';
    btn.style.cursor = 'pointer';
    btn.onclick = disableNotifs;
  } else {
    // default or opted-out — clicking requests / re-enables
    btn.className = 'notif-btn';
    btn.textContent = '🔔 Notify Me';
    btn.title = 'Get notified when a public lobby opens';
    btn.style.cursor = 'pointer';
    btn.onclick = requestNotifPermission;
  }
}

function disableNotifs() {
  setNotifOptOut(true);
  stopNotifPolling();
  updateNotifBtn();
  showToast('🔕', 'Notifications Off', 'Click "Notify Me" anytime to turn them back on.');
}

async function requestNotifPermission() {
  if (!('Notification' in window)) {
    showToast('⚠️', 'Not Supported', 'This browser does not support notifications.');
    return;
  }
  // If already granted but opted out, just re-enable without re-prompting
  if (Notification.permission === 'granted') {
    setNotifOptOut(false);
    updateNotifBtn();
    startNotifPolling();
    showToast('🔔', 'Notifications On', "Switch tabs and we'll ping you when a public lobby opens.");
    return;
  }
  const perm = await Notification.requestPermission();
  // Chromebook/Chrome sometimes resolves the promise before the browser
  // has updated Notification.permission — re-read it directly as a fallback
  const actual = Notification.permission;
  if (perm === 'granted' || actual === 'granted') {
    setNotifOptOut(false);
    startNotifPolling();
    updateNotifBtn();
    showToast('🔔', 'Notifications On', "Switch tabs and we'll ping you when a public lobby opens.");
  } else if (perm === 'denied' || actual === 'denied') {
    showToast('🔕', 'Blocked', 'Enable notifications in your browser settings to use this feature.');
    updateNotifBtn();
  } else {
    // 'default' — user dismissed the prompt without choosing
    updateNotifBtn();
  }
}

function fireLobbyNotif(lobby) {
  if (!canSendNotif()) return;
  setLastNotifTime();
  const modeLabel = lobby.gameMode === 'timed'
    ? `⏱ Timed (${Math.round(lobby.gameDuration / 60)}m)`
    : lobby.gameMode === 'teams' ? '🤝 Teams' : '♾️ Unlimited';
  const n = new Notification('⛏ GEM RUSH — Lobby Open!', {
    body: `${lobby.hostName} is hosting a ${modeLabel} game · ${lobby.playerCount}/${lobby.maxPlayers} players · Code: ${lobby.code}`,
    icon: '/favicon.svg',
    tag: 'gemrush-lobby',   // replaces previous notif instead of stacking
    renotify: false,
  });
  n.onclick = () => { window.focus(); n.close(); showJoinCard(); };
}

async function pollForLobbies() {
  // Only notify if tab is hidden — no point pinging someone already watching
  if (!document.hidden) return;
  if (!notifEnabled()) return;
  try {
    const lobbies = await fetch('/api/lobbies').then(r => r.json());
    for (const lobby of lobbies) {
      if (!knownLobbySet.has(lobby.code)) {
        fireLobbyNotif(lobby);
      }
    }
    knownLobbySet = new Set(lobbies.map(l => l.code));
  } catch (e) { /* network hiccup, ignore */ }
}

async function startNotifPolling() {
  if (notifPollTimer) return; // already running
  if (!notifEnabled()) return;
  // Seed known lobbies so we only notify about NEW ones going forward
  try {
    const lobbies = await fetch('/api/lobbies').then(r => r.json());
    knownLobbySet = new Set(lobbies.map(l => l.code));
  } catch (e) {
    knownLobbySet = new Set();
  }
  notifPollTimer = setInterval(pollForLobbies, NOTIF_POLL_INTERVAL_MS);
}

function stopNotifPolling() {
  if (notifPollTimer) { clearInterval(notifPollTimer); notifPollTimer = null; }
}

// On load: restore button state and restart polling if still enabled
document.addEventListener('DOMContentLoaded', () => {
  updateNotifBtn();
  if (notifEnabled()) startNotifPolling();
  // Show a11y button on initial title screen
  const a11yBtn = document.getElementById('a11y-btn');
  if (a11yBtn) a11yBtn.style.display = 'block';
});

// ─── Boot ──────────────────────────────────────────────────────────────────────
initSocket();
</script>

<!-- COUNTDOWN OVERLAY -->
<div id="countdown-overlay">
  <div class="countdown-number-wrap">
    <div class="countdown-number" id="countdown-number">3</div>
  </div>
  <div class="countdown-label">GET READY</div>
</div>

<!-- Custom confirm dialog -->
<div id="confirm-overlay">
  <div id="confirm-box">
    <div id="confirm-icon"></div>
    <div id="confirm-title"></div>
    <div id="confirm-msg"></div>
    <div class="confirm-btns">
      <button id="confirm-cancel">Cancel</button>
      <button id="confirm-ok">Confirm</button>
    </div>
  </div>
</div>

</body>
</html>
