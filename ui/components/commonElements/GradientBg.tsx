import {  ReactNode } from "react";
import { json } from "stream/consumers";


interface gradientBgProps{
    colours: string | null,
    children: ReactNode
}



function define_bg_colours(colours: string | null){
    
    let coloursArr = ['000000'];
    
    if (colours){
        coloursArr = JSON.parse(colours);
    }

    if (coloursArr.length > 1){
        
        // Transform array into string of colours for css
        const gradient_colour_def = coloursArr.reduce(
            (gradient_string:string, colour:string, idx:number) =>{ 
                
                let current_colour_def = `${gradient_string} #${colour}`;
                
                if(idx < coloursArr.length -1){
                    current_colour_def += ", "
                }

                return current_colour_def


            }, ""
        )
        
        const gradient_css = `linear-gradient(to bottom, ${gradient_colour_def})`

        return gradient_css
        // return "#000";
    }  else{

        return "#000";
    }


}

function GradientBg({colours, children}:gradientBgProps) {

    const bg_colour:string = define_bg_colours(colours);
    console.log(bg_colour);
    if(!bg_colour){return null}
    return (
        <>  
            <div style={{background:bg_colour}}>

                {children}
            </div>
        </>
    )
} 

export default GradientBg;