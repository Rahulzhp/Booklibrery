
function items(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}


function storeData(e){
    e.preventDefault();
    let form=document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    console.log(type,desc,price,image);
    let Ps= new items(type,desc,price,image);
    let data=JSON.parse(localStorage.getItem("products")) || [];
    data.push(Ps);
    localStorage.setItem("products",JSON.stringify(data));
}