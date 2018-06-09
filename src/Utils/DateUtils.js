export default class DateUtils {
    constructor(){

    }

    static dateTimeToDate = (dateTimeObj) => {
        console.log("date received ");
        console.log(dateTimeObj);
        var dateObj = new Date(dateTimeObj)
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        return   year + "/" + month + "/" + day;
    }
}
