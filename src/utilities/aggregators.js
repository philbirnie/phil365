const Sum = ( accumulator, currentValue ) => accumulator + currentValue;

const RoundFloat = ( num ) => Math.round( num * 100 ) / 100;

export { Sum, RoundFloat };
