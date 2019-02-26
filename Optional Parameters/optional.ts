function display(id:number, name:string, mail?:string){     //Mail is Optional Parameter
    console.log("ID :"+id);
    console.log("Name :"+name);

    if(mail != undefined)
    console.log("Email ID :"+mail);
}

display(123,"Safnaj");
display(111,'Noman',"noman.sliit@gmail.com")