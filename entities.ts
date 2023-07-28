export interface User{
    _id?:any;
    name:string;
    firstName:string;
    address:string;
    email:string;
    password:string;
}

export interface Annonces{
    _id?:any;
    name:string;
    type:string;
    msg:string;
    owner:{
        _id:any;
        name:string;
        address:string;
    };
    status:boolean;
}

export interface Emprunts{
    _id?:any;
    status:string;
    dateDebut:string;
    dateFin:string;
    msgEmprunts:string;
    emObjet:{
        _id:any;
        name:string;
        owner:{
            _id:any;
            name:string;
            address:string
        }
    };
    borrower:{
        _id:any;
        name:string
    };
}