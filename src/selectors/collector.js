import moment from 'moment';

//get visible expenses
export default (collector, {text, sortBy, startDate, endDate}) => {    
    return collector.filter((item,idx)=>{
        const createdAtMoment = moment(item.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment) : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true;
        const textMatch = !text || item.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};
