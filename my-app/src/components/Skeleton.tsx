export default function Skeleton({ width = "100%", height = "20px", margin = "8px 0", }) {
    return (
        <div
            style={{
                margin,
                width,
                height,
                borderRadius: "8px",
                background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                backgroundSize: "200% 100%",
                animation: "loading 1.5s infinite",
            }}
        />
    );
}