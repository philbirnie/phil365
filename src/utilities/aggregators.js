const Sum = (accumulator, currentValue) => accumulator + currentValue;

const RoundFloat = (num) => Math.round(num * 100) / 100;

const SpliceByMonth = (accumulator, currentRun) => {

    const month = parseInt(currentRun.date.substr(5, 2), 10);

    if (!accumulator[month]) {
        accumulator[month] = [];
    }

    accumulator[month].push(currentRun);
    return accumulator;
};

const GetMonthName = (monthNumber) => {
    switch (monthNumber) {
    case 1:
        return 'Jan';
    case 2:
        return 'Feb';
    case 3:
        return 'Mar';
    case 4:
        return 'Apr';
    case 5:
        return 'May';
    case 6:
        return 'Jun';
    case 7:
        return 'Jul';
    case 8:
        return 'Aug';
    case 9:
        return 'Sep';
    case 10:
        return 'Oct';
    case 11:
        return 'Nov';
    case 12:
        return 'Dec';
    default:
        return '';
    }
}

export {Sum, RoundFloat, SpliceByMonth, GetMonthName};
