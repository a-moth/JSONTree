import { useState } from "react";
import type { JsonValue } from "./JSONViewer";

export default function JSONInput({ onParse }: { onParse: (json: JsonValue) => void }) {
    const [value, setValue] = useState('');

    const handleParse = () => {
        try {
            const errorContainer = document.getElementById('json-input-error');
            if (errorContainer) {
                errorContainer.innerHTML = ``;
            }

            const parsed = JSON.parse(value);

            console.log(parsed);
            console.log(Object.entries(parsed));

            onParse(parsed);
        } catch (err) {
            onParse(null as unknown as JsonValue); // Pass null to indicate parsing failure

            const error = err as unknown;
            const message = error instanceof Error ? error.message : String(error);
            console.error('Invalid JSON', error);
            const errorContainer = document.getElementById('json-input-error');
            if (errorContainer) {
                errorContainer.innerHTML = `<div style="color: red;">Invalid JSON: ${message}</div>`;
            }
        }
    };

    return (
        <div id="json-input">
            <textarea
                style={{
                    height: "150px",
                    width: "500px",
                    resize: "vertical"
                }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Paste your JSON here..."
            />
            <br />
            <button onClick={handleParse}>Parse JSON</button>
            <div id="json-input-error"> </div>
        </div>
    );
}
