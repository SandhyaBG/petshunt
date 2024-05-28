export const getStatus = (status) => {
    if(status === 'available') return 'Available'
    else if( status === 'pending') return 'Pending'
    else if ( status === 'sold') return 'Sold'
    else return 'Not Available'
}