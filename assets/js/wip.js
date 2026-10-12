(() => {
  const player = document.querySelector('.wip-player');
  const play = player?.querySelector('.wip-play');
  if (!play) return;

  const fullscreen = document.querySelector('.wip-fullscreen');
  const restart = document.querySelector('.wip-restart');
  const note = document.querySelector('.wip-note');

  function startGame() {
    const frame = document.createElement('iframe');
    frame.title = player.dataset.gameTitle;
    frame.allow = 'autoplay; fullscreen';
    frame.allowFullscreen = true;
    frame.src = player.dataset.gameSrc;
    frame.addEventListener('load', () => frame.focus(), { once: true });
    player.replaceChildren(frame);

    restart.hidden = false;
    if (document.fullscreenEnabled && player.requestFullscreen) fullscreen.hidden = false;
  }

  play.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    startGame();
  });

  restart.addEventListener('click', startGame);

  fullscreen.addEventListener('click', async () => {
    try {
      await player.requestFullscreen();
      player.querySelector('iframe')?.focus();
    } catch {
      note.textContent = 'Fullscreen could not start. You can keep playing here or open the game in a new tab.';
    }
  });
})();
