import JSONNode from "./JSONNode";

export type JsonValue =
    | string
    | number
    | boolean
    | null
    | JsonValue[]
    | { [key: string]: JsonValue };

export default function JSONViewer({ data }: { data: JsonValue }) {
    console.log("JSONViewer data:", data);

    return (
        <section style={{ textAlign: 'left', marginLeft: '20px' }} id="json-viewer">
            <JSONNode label="root" value={data} depth={0} />
        </section>
    );
}