const CHANGE_CURRENCY = 'CHANGE-CURRENCY';

const initialState = {
    result: null,
    rates: {
        UAH: {
            USD: 0.038,
            EUR: 0.033
        },
        USD: {
            UAH: 26.34,
            EUR: 0.86
        },
        EUR: {
            UAH: 30.54,
            USD: 1.16
        }
    }
}

export const currencyReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_CURRENCY: {
            let from;
            let to;
            const amount = action.amount;
            let changeResult;
            for (let rate in initialState.rates) {
                if (rate === action.from) {
                    from = rate;
                    to = initialState.rates[from][action.to];
                }
            }
            if (to === null || to === undefined) {
                to = 1;
            }
            changeResult = action.amount * to;
            console.log(from, to, amount)

            return {
                ...state,
                result: changeResult
            }
        }

        default: {
            return state;
        }
    }
};

export const changeCurrency = (from, to, amount) => {
    return {
        type: CHANGE_CURRENCY,
        from,
        to,
        amount
    }
}