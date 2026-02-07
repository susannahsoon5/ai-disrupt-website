"use client";

import { useEffect, useRef } from 'react';

export function SessionizeEmbed() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) return;

        // Write the HTML content with the Sessionize script
        iframeDoc.open();
        iframeDoc.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        margin: 0;
                        padding: 20px;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    }
                </style>
            </head>
            <body>
                <div id="sessionize-container"></div>
                <script type="text/javascript" src="https://sessionize.com/api/v2/v08m222o/view/GridSmart"></script>
            </body>
            </html>
        `);
        iframeDoc.close();
    }, []);

    return (
        <iframe
            ref={iframeRef}
            style={{
                width: '100%',
                minHeight: '800px',
                border: 'none',
                overflow: 'auto'
            }}
            title="Sessionize Speaker Grid"
        />
    );
}
