import { ArrowRightIcon, Globe, Moon} from "lucide-react"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"


const MoreOpts: React.FC = () => {
  return (
     <div className="absolute h-24 md:h-36 w-60 bg-[#F3F4F6] top-14 right-5 md:p-2 rounded-lg shadow-lg">
        <div className="h-full w-full flex flex-col gap-1 md:gap-3">
            <div className="h-1/2 w-full flex items-center justify-center gap-2 px-2 md:px-4 hover:bg-plum-light/10 transition-colors rounded-lg">
                <Moon size={18} />
                <span className="flex flex-1 items-center justify-between">
                  <Label htmlFor="switch-mode" className=" text-center">Appearance</Label>
                  <Switch size="default" id="switch-mode"/>
                </span>
                
            </div>
            
            <div className="h-1/2 w-full flex items-center justify-center gap-2 px-2 md:px-4 hover:bg-plum-light/10 transition-colors rounded-lg">
                <Globe size={18} />
                <div className="flex flex-1 items-center justify-between">
                  <p className=" text-center">Language</p>
                  <span className="flex items-center justify-center gap-2 cursor-pointer">
                    <p className="font-semibold text-sm">English </p>
                    <ArrowRightIcon size={16} />
                  </span>
                </div>
                
            </div>
           
        </div>
        </div>
  )
}

export default MoreOpts