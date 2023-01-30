import { useEffect } from "react"

export interface RippleStyle {
    height: number,
    width: number,
    left: number,
    top: number,
}

export interface RippleEffect {
    id: number,
    style: RippleStyle,
    timestamp: number
  }

export interface RippleProps {
    id: number,
    className: string,
    style: RippleStyle,
    terminate: (id: number) => void
}

export default function Ripple({
    className,
    id,
    style,
    terminate
}: RippleProps) {

    useEffect(() => {
        const timer = setTimeout(() => {
            terminate(id)
        }, 580);
        return () => clearTimeout(timer);
    },[])



    return (
        <span
          className={className}
          style={style}
        ></span>
    )
}