// interface Starship {
//     name: string;
//     enableHyperjump: boolean;
//     }
//     const updateStarship = (id: number, starship: Starship)
//     => {};
//     updateStarship (1, {
//     name: 'Explorer' // error as Starship have two properties 
//     });
//     if we use partial we won't get any error 
//     const updateStarship = id: number, starship: Partial<Starship>) => {}; 
//     updateStarship (1, {
//     name: 'Explorer' // no error as partial made all property optional
//     });
interface CarInfo{
    brand:string;
    Cylinders: number;
    horsepower: number;
    year: string
}
type name = "civic"|"i20"

let car:Record<name,CarInfo> = {  //  here we need to give all properties of type carinfo
    civic:{
        brand:"string",
        Cylinders:9,
        horsepower:2,
        year:""
    },
   i20:{
        brand:"string",
        Cylinders:9,
        horsepower:2,
        year:""
    }
}

let  car1 : Partial<Record<name,CarInfo>>= { // record with partial allow us to make properties optional
    civic:{
        brand:"string",
        Cylinders:9,
        horsepower:2,
        year:""
    }
}