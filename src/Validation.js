const Validations = (datas)=>{
    let errors={};
    if(!datas.fullname){
        errors.fullname="FullName is Required."
    }
    // else if(! /\s+[A-Z\s]+\s+[A-Z][A-Za-z]+.test(values.userName)){
    //     errors.userName="User Name must be text."
    // }
    if(!datas.phone){
        errors.phone="Phone no. is required."
    }
    else if(datas.phone.length <10){
        errors.phone="It must be number in digits."
    }
    if(!datas.email){
        errors.email="Email is required."
    }
    else if(!/\S+@\S+\.\S+/.test(datas.email)){
        errors.email="It must be in ( name@gmail.com ) format."
    }
    return errors;
};
export default Validations;