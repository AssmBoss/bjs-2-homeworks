class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(alarmTime, execFunc){
        if(alarmTime === null || alarmTime === undefined || execFunc === null || execFunc === undefined) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        for (let alarm of this.alarmCollection) {
            if(alarm.time.localeCompare(alarmTime)===0) {
                console.warn('Уже присутствует звонок на это же время');
            }
        }
        this.alarmCollection.push({time: alarmTime, canCall: true, callback:execFunc});
    }

    removeClock(delTime) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== delTime);
    }

    getCurrentFormattedTime(){
        // текущая дата
        let date = new Date();
        // час в текущей временной зоне
        //alert( date.getHours() );
        return date.getHours()+":"+date.getMinutes();
    }
    
    start() {
        if(this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall){
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
                alarm.canCall = true;
            })
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}