export const incrementCounter = (counter) => ({
    type: 'INCREMENT_COUNTER',
    counter
});

export const deleteCounter = (counterId) => ({
    type: 'DELETE_COUNTER',
    counterId
});

export const resetCounters = () => ({
    type: 'RESET_COUNTERS'
});