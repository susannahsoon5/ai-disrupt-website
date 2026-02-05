"use client";

import { useEffect } from 'react';

export function SessionizeEmbed() {
    useEffect(() => {
        // Load Sessionize script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://sessionize.com/api/v2/v08m222o/view/GridSmart';
        script.async = true;
        
        const container = document.getElementById('sessionize-container');
        if (container) {
            container.appendChild(script);
        }

        return () => {
            // Cleanup
            if (container && script.parentNode === container) {
                container.removeChild(script);
            }
        };
    }, []);

    return <div id="sessionize-container"></div>;
}
