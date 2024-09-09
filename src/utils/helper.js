export const copyToClipBoard = (value)=>{
    if(value){
        navigator.clipboard.writeText(value).then(() => {},
        (err) => console.error('Failed to copy text: ', err))
    }

}
