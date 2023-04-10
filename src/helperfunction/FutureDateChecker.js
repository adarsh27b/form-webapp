const FutureDateChecker = (bdate) => {
    const date = new Date(bdate);
    const now = new Date();
    return (date > now);
};
export default FutureDateChecker;