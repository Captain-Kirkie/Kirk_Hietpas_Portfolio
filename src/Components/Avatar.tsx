import { useEffect, useRef, useState } from "react";

type Offset = { x: number; y: number };

export default function AvatarFollowEyes() {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

    useEffect(() => {
        let rafId: number | null = null;
        let lastMouseEvent: MouseEvent | null = null;

        const handleMouseMove = (e: MouseEvent) => {
            lastMouseEvent = e;
            if (rafId !== null) return;

            rafId = requestAnimationFrame(() => {
                rafId = null;
                if (!svgRef.current || !lastMouseEvent) return;

                const rect = svgRef.current.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;

                const dx = lastMouseEvent.clientX - cx;
                const dy = lastMouseEvent.clientY - cy;

                const max = 5;
                const dist = Math.min(Math.sqrt(dx * dx + dy * dy), 120) || 1;

                setOffset({
                    x: (dx / dist) * max,
                    y: (dy / dist) * max,
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <svg
            ref={svgRef}
            width="220"
            height="260"
            viewBox="0 0 220 260"
            style={{ overflow: "visible" }}
        >
            {/* Hat */}
            <path
                d="M40 55 Q110 10 180 55 L180 80 Q110 65 40 80 Z"
                fill="#d6c2a1"
            />
            <rect x="60" y="48" width="100" height="22" rx="6" fill="#c3ad8a" />

            {/* Head */}
            <circle cx="110" cy="120" r="70" fill="#f1c9a5" />

            {/* Eyes */}
            <g>
                <ellipse cx="85" cy="110" rx="14" ry="10" fill="white" />
                <ellipse cx="135" cy="110" rx="14" ry="10" fill="white" />

                {/* Pupils */}
                <circle
                    cx={85 + offset.x}
                    cy={110 + offset.y}
                    r="5"
                    fill="#222"
                />
                <circle
                    cx={135 + offset.x}
                    cy={110 + offset.y}
                    r="5"
                    fill="#222"
                />
            </g>

            {/* Eyebrows */}
            <path
                d="M70 95 Q85 88 100 95"
                stroke="#3b2b22"
                strokeWidth="4"
                fill="none"
            />
            <path
                d="M120 95 Q135 88 150 95"
                stroke="#3b2b22"
                strokeWidth="4"
                fill="none"
            />

            {/* Beard */}
            <path
                d="M70 135 Q110 175 150 135 Q150 185 110 195 Q70 185 70 135"
                fill="#6b4a3a"
            />

            {/* Mouth */}
            <path
                d="M90 145 Q110 155 130 145"
                stroke="#222"
                strokeWidth="3"
                fill="none"
            />

            {/* Jacket */}
            <path
                d="M35 200 Q110 230 185 200 L185 260 L35 260 Z"
                fill="#2a2a2a"
            />
            <path
                d="M70 200 Q110 215 150 200 L150 240 L70 240 Z"
                fill="#7a2e3a"
            />
            <path
                d="M85 200 Q110 205 135 200 L135 230 L85 230 Z"
                fill="#6b8f3a"
            />
        </svg>
    );
}
