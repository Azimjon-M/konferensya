import axiosInstance from ".";

const endPoint = "talab/otganvoqea/"

const getOtganVaqealar = () => axiosInstance.get(endPoint)

const APIOtganVoqealar = {getOtganVaqealar}

export default APIOtganVoqealar