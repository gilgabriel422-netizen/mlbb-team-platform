import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    wins: 27,
    losses: 8,
    winRate: '77%',
    tournamentsPlayed: 5,
    championships: 2
  };

  const roster = [
    { id: 1, name: 'Noxir', role: 'Jungler', kda: 4.8, hero: 'Ling', status: 'Titular' },
    { id: 2, name: 'Player2', role: 'Gold Laner', kda: 3.9, hero: 'Claude', status: 'Titular' },
    { id: 3, name: 'Player3', role: 'Mid Laner', kda: 3.5, hero: 'Pharsa', status: 'Titular' },
    { id: 4, name: 'Player4', role: 'Exp Laner', kda: 3.2, hero: 'Yu Zhong', status: 'Titular' },
    { id: 5, name: 'Player5', role: 'Roamer', kda: 3.0, hero: 'Tigreal', status: 'Titular' },
    { id: 6, name: 'SubPlayer', role: 'Substituto', kda: 2.8, hero: 'Valentina', status: 'Suplente' },
  ];

  const recentMatches = [
    { id: 1, opponent: 'Team Shadow', result: 'Victoria', score: '2 - 0', type: 'Torneo Oficial - Semifinal' },
    { id: 2, opponent: 'Vortex Gaming', result: 'Victoria', score: '2 - 1', type: 'Scrim de Práctica' },
    { id: 3, opponent: 'Astral Esports', result: 'Derrota', score: '1 - 2', type: 'Torneo Oficial - Fase de Grupos' },
    { id: 4, opponent: 'Zenith Clan', result: 'Victoria', score: '2 - 0', type: 'Scrim de Práctica' },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col font-sans">
      {/* HEADER */}
      <header className="border-b border-gray-800 bg-[#131b2e]/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-500/20 p-2.5 rounded-xl border border-purple-500/40 text-purple-400 font-black">
              ⚡
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                TEAM NOXIR
              </h1>
              <p className="text-xs text-gray-400">Mobile Legends: Bang Bang Esports</p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="flex gap-2 bg-[#0b0f19] p-1.5 rounded-xl border border-gray-800">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'overview' ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30' : 'text-gray-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('roster')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'roster' ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30' : 'text-gray-400 hover:text-white'
              }`}
            >
              Roster
            </button>
            <button
              onClick={() => setActiveTab('matches')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'matches' ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30' : 'text-gray-400 hover:text-white'
              }`}
            >
              Partidas
            </button>
          </nav>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Tarjetas de Estadísticas Globales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#131b2e] border border-gray-800 p-6 rounded-2xl">
                <p className="text-sm text-gray-400 font-medium">Victorias / Derrotas</p>
                <h3 className="text-3xl font-bold mt-1 text-green-400">
                  {stats.wins} <span className="text-gray-600 font-normal">/</span> <span className="text-red-400">{stats.losses}</span>
                </h3>
              </div>

              <div className="bg-[#131b2e] border border-gray-800 p-6 rounded-2xl">
                <p className="text-sm text-gray-400 font-medium">Win Rate Global</p>
                <h3 className="text-3xl font-bold mt-1 text-cyan-400">{stats.winRate}</h3>
              </div>

              <div className="bg-[#131b2e] border border-gray-800 p-6 rounded-2xl">
                <p className="text-sm text-gray-400 font-medium">Torneos Jugados</p>
                <h3 className="text-3xl font-bold mt-1 text-purple-400">{stats.tournamentsPlayed}</h3>
              </div>

              <div className="bg-[#131b2e] border border-gray-800 p-6 rounded-2xl">
                <p className="text-sm text-gray-400 font-medium">Campeonatos</p>
                <h3 className="text-3xl font-bold mt-1 text-yellow-400">{stats.championships} ⭐</h3>
              </div>
            </div>

            {/* Vista Previa de Roster */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-[#131b2e] border border-gray-800 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-white">KDA del Roster Principal</h2>
                  <button onClick={() => setActiveTab('roster')} className="text-xs text-cyan-400 hover:underline">Ver todos</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-800 text-xs text-gray-400">
                        <th className="pb-3 font-semibold">Jugador</th>
                        <th className="pb-3 font-semibold">Rol</th>
                        <th className="pb-3 font-semibold">Main Hero</th>
                        <th className="pb-3 font-semibold text-right">KDA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50 text-sm">
                      {roster.slice(0, 5).map((player) => (
                        <tr key={player.id} className="hover:bg-black/20">
                          <td className="py-3 font-bold text-white flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                            {player.name}
                          </td>
                          <td className="py-3 text-gray-300">{player.role}</td>
                          <td className="py-3 text-purple-400">{player.hero}</td>
                          <td className="py-3 font-mono font-bold text-right text-green-400">{player.kda}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Últimas Partidas */}
              <div className="bg-[#131b2e] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold mb-4 text-white">Últimos Resultados</h2>
                  <div className="space-y-3">
                    {recentMatches.slice(0, 3).map((match) => (
                      <div key={match.id} className="p-3 bg-[#0b0f19] border border-gray-800 rounded-xl flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-400">{match.opponent}</p>
                          <p className="text-sm font-bold text-white">{match.score}</p>
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                          match.result === 'Victoria' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {match.result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roster' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Gestión de Roster</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roster.map((player) => (
                <div key={player.id} className="bg-[#131b2e] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full font-medium">
                        {player.role}
                      </span>
                      <span className="text-xs text-gray-400">{player.status}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{player.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">Héroe Principal: <span className="text-cyan-400 font-medium">{player.hero}</span></p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-xs text-gray-400">KDA Promedio</span>
                    <span className="text-lg font-mono font-bold text-green-400">{player.kda}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'matches' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Historial de Partidas y Scrims</h2>
            <div className="bg-[#131b2e] border border-gray-800 rounded-2xl p-6">
              <div className="space-y-4">
                {recentMatches.map((match) => (
                  <div key={match.id} className="p-4 bg-[#0b0f19] border border-gray-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-cyan-400 font-medium">{match.type}</span>
                      <h4 className="text-lg font-bold text-white mt-0.5">TEAM NOXIR vs {match.opponent}</h4>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                      <span className="font-mono text-xl font-black">{match.score}</span>
                      <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                        match.result === 'Victoria' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}>
                        {match.result}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        TEAM NOXIR Dashboard &copy; 2026 — Creado para Portafolio de Esports
      </footer>
    </div>
  );
}