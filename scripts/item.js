const validateName = (name) => {
    if (name === "") throw new Error('Name must not be blank');
}

const create = (name) => {
    return {id: cuid(), name: name, checked: false};
}

export default {
    validateName,
    create
}