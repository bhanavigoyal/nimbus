import { Spinner } from "@/components/ui/spinner"

export const AuthLoadingView=()=>{
    return (
        <div>
            <Spinner className="size-10 text-ring"/>
        </div>
    )
}