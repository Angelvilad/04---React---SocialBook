export const fullName = ({name:{first}, name:{last}}) => {
    const fullName = `${first} ${last}`;
    return fullName;
}

export default fullName;