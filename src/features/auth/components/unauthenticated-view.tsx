import { Button } from "@/components/ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { SignInButton, SignUpButton } from "@clerk/nextjs"
import { ShieldAlertIcon } from "lucide-react"

export const UnauthenticatedView=()=>{
    return(
        <div>
            <div>
                <Item variant={"outline"}>
                    <ItemMedia variant={"icon"}>
                        <ShieldAlertIcon/>
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>
                            Unauthorized Access
                        </ItemTitle>
                        <ItemDescription>
                            you are not authorized to access this resource.
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <SignInButton>
                            <Button>
                                Sign In
                            </Button>
                        </SignInButton>

                        <SignUpButton>
                            <Button>
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </ItemActions>
                </Item>
            </div>
        </div>
    )
}