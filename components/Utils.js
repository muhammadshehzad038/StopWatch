const paidToPaid= (number)=>
    (
        number <= 9 ? `0${number}`:number
    );


export const displayTime=(centisecond)=>{
    let minute=0;
    let second=0;

    if (centisecond<0){
        centisecond =0;

    }
    if (centisecond<100){
        return `00:00:${paidToPaid(centisecond)}`
    }

    let remainCentisecond = centisecond%100;
     second = (centisecond-remainCentisecond)/100;

    if (second<60){
        return `00:${paidToPaid(second)}:${paidToPaid(remainCentisecond)}`
    }

    let remainSecond = second % 60
    minute = (second - remainSecond)/ 60
    
    return `${paidToPaid(minute)}:${paidToPaid(remainSecond)}:${paidToPaid(remainCentisecond)}}`
}