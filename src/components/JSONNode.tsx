import { useState } from "react";

export type JsonValue =
    | string
    | number
    | boolean
    | null
    | JsonValue[]
    | { [key: string]: JsonValue };

type Props = {
    label: string | number;
    value: JsonValue;
    depth: number;
};

export default function JSONNode({
    label,
    value,
    depth,
}: Props) {
    const [expanded, setExpanded] = useState(true);

    const style = {
        marginLeft: depth * 20,
    };

    console.log({
        label,
        value,
        isArray: Array.isArray(value),
        isObject: value !== null && typeof value === "object",
    });

    console.log(value);

    if (Array.isArray(value)) {
        return (
            <div style={style}>
                <strong className="array" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "▼" : "▶"} {label}: {"[]"}
                </strong>

                {expanded &&
                    value.map((item, index) => (
                        <JSONNode
                            key={index}
                            label={index}
                            value={item}
                            depth={depth + 1}
                        />
                    ))}
            </div>
        );
    }

    if (value !== null && typeof value === 'object') {
        console.log("entries", Object.entries(value));

        return (
            <div style={style}>
                <strong className="object" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "▼" : "▶"} {label}: {"{}"}
                </strong>
                {expanded &&
                    Object.entries(value).map(([childKey, childValue]) => (
                        <JSONNode
                            key={childKey}
                            label={childKey}
                            value={childValue}
                            depth={depth + 1}
                        />
                    ))}
            </div>
        );
    }

    return (
        <div style={style}>
            <strong>{label}:</strong> {String(value)}
        </div>
    );
}