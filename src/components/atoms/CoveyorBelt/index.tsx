export default function ConveyorBelt() {
    return (
        <div className="overflow-hidden w-full h-1 bg-fluent-blue flex items-center">
            <div className="flex gap-40 animate-marquee">
                {[...Array(100)].map((_, i) => (
                    <div key={i} className="w-40 h-2 bg-fluent-red"></div>
                ))}
            </div>
        </div>
    );
}
