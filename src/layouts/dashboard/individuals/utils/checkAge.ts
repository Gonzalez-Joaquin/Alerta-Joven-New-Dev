const checkAge = (date: string) => {
    const [year, month, day] = date.split('-').map(Number);

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    const ageDifference = today.getFullYear() - birthDate.getFullYear();

    if (
        ageDifference < 18 ||
        (ageDifference === 18 &&
            today.getMonth() < birthDate.getMonth()) ||
        (ageDifference === 18 &&
            today.getMonth() === birthDate.getMonth() &&
            today.getDate() < birthDate.getDate())
    ) {
        return true;
    } else {
        return false;
    }
}

export default checkAge;
