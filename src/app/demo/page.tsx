"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react"

export default function DemoPage(){
    const [loading, setLoading] = useState(false);

    const handleClick=async()=>{
        setLoading(true);
        await fetch("api/demo/background",
            {method:"POST"}
        );
        setLoading(false);
    }
    return <div>
        <Button onClick={handleClick}>Background Job</Button>
    </div>
}