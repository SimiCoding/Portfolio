import {config} from "../../../data/config.js";

export function titleHandler (){
    let i = 0;
    document.title=config.titles[0];

    setInterval(() => {
        i++;
        if(i>config.titles.length - 1){
            i=0;
        }
        document.title=config.titles[i];
    },5000);
}