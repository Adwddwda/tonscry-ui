import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand(); // Разворачивает WebApp на весь экран
    }
  }, []);

  const changeColor = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.setBackgroundColor('#222222'); // Меняем фон Telegram WebApp
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>TonScry Mini App</h1>
      <button
        style={{
          padding: '12px 24px',
          backgroundColor: '#0088cc',
          color: '#fff',
          fontSize: 16,
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
        }}
        onClick={changeColor}
      >
        Сменить цвет Telegram
      </button>
    </div>
  );
}

