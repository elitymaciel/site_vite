import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const API_KEY = '9E49B7510753-49F9-BA8B-C7B1274BC97C';
const INSTANCE = 'maciel_erp';
const TARGET_NUMBER = '5594984231245';
const EVOLUTION_URL = `https://evolutionapi.solartechsolutions.com.br/message/sendText/${INSTANCE}`;

// Using a public counter API to maintain global count across all users
const COUNTER_API = 'https://api.counterapi.dev/v1/solartechsolutions/visits/up';
const STATS_API = 'https://api.counterapi.dev/v1/solartechsolutions/visits';

export default function VisitTracker() {
    const location = useLocation();

    useEffect(() => {
        // 1. Silent increment of the global counter on every distinct session
        const hasCountedSession = sessionStorage.getItem('v_counted');

        const trackVisit = async () => {
            try {
                if (!hasCountedSession) {
                    await fetch(COUNTER_API).catch(() => { });
                    sessionStorage.setItem('v_counted', 'true');
                }

                // 2. Check if it's time to send the 2-hour report
                // We use localStorage to coordinate which "client" sends the report
                const lastReport = localStorage.getItem('v_last_report');
                const now = Date.now();
                const twoHours = 2 * 60 * 60 * 1000;

                if (!lastReport || (now - parseInt(lastReport)) > twoHours) {
                    // Update timestamp immediately to prevent race conditions as much as possible in frontend
                    localStorage.setItem('v_last_report', now.toString());

                    // Get current global count
                    const statsRes = await fetch(STATS_API);
                    const statsData = await statsRes.json();
                    const totalVisits = statsData?.count || 0;

                    // Send WhatsApp message silently
                    const message = `📊 *Relatório de Visitas - ${new Date().toLocaleDateString('pt-BR')}*\n\n` +
                        `📈 *Total de acessos acumulados:* ${totalVisits}\n` +
                        `🕒 *Status:* Atualizado a cada 2 horas\n` +
                        `🌐 *Página Atual:* ${location.pathname}`;

                    await fetch(EVOLUTION_URL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'apikey': API_KEY
                        },
                        body: JSON.stringify({
                            "number": TARGET_NUMBER,
                            "text": message
                        }),
                    }).catch(() => { });
                }
            } catch (error) {
                // Silently fail as requested
            }
        };

        trackVisit();
    }, [location.pathname]); // Runs on every page navigation

    return null; // Silent component
}
