export default function ConveyorBelt() {
    return (
        <div className="overflow-hidden w-full h-12 bg-[--color-background] flex items-center">
            <div className="flex gap-20 animate-marquee">
                {[...Array(100)].map((_, i) => (
                    <div key={i} className="w-40 h-2 bg-fluent-red rounded-full"></div>
                ))}
            </div>
        </div>
    );
}
