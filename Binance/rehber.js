
let  human=[];
let count=0;

function save(event) {
  const name = document.getElementById("input-name").value;
  const surname= document.getElementById("input-surname").value;
  const phone= document.getElementById("input-phone").value;
  const epost=document.getElementById("input-mail").value;
  count++;
  let person={id:count , adi:name , soyadi:surname , tel:phone , mail:epost}
  human.push(person);
  console.log(human);
  
  const td=` <tr>
              <th  class="count" scope="col">${count}</th>
                 <th class="name"  scope="col">${name}</th>
                <th  class="surname"  scope="col">${surname}</th>
                <th  class="phone" scope="col">${phone}</th>
                   <th  class="epost" scope="col">${epost}</th>
                   <td><button class="btn btn-danger" onclick="deletePerson(event,${count})">Sil</button>
                  <td> <button class="btn btn-warning" onclick="updatePerson(event,${count})">Düzenle</button></td>
</tr>
  `;
const tr= document.createElement("tr");
   tr.setAttribute("id",count);

   tr.innerHTML=td;

   if(count==1){
    document.getElementById("table-people").innerHTML="";
   }
   document.getElementById("table-people").appendChild(tr);

   console.log(human);

}
function deletePerson(event,id) {
  event.target.closest("tr").remove();
  human=human.filter((person)=>person. id!=id);
  console.log(human);
}
  function updatePerson(event,id) {
    const person= human.filter((person)=>person.id==id);

    document.getElementById("input-name").value= person[0].adi;
    document.getElementById("input-surname").value= person[0].soyadi;
    document.getElementById("input-phone").value= person[0].tel;
    document.getElementById("input-mail").value=person[0].mail;
    document.getElementById("Process").innerHTML="Duzenle";
    document.getElementById("Process").
    setAttribute("onclick" ,"javascript: update(event,"+id+")");
    const mymodal = new bootstrap.Modal('#modal', {
      keyboard: false,
    
    });
    mymodal.show('modal');
  }

function update(event,id) {

  human.forEach((person) => {
    if (person.id == id) {
      person.adi = document.getElementById("input-name").value;
      person.soyadi = document.getElementById("input-surname").value;
      person.tel = document.getElementById("input-phone").value;
      person.mail = document.getElementById("input-mail").value;
      
    
      let tr = document.getElementById(id);
      tr.getElementsByClassName("name")[0].innerHTML=person.adi="";
      tr.getElementsByClassName("surname")[0].innerHTML=person.soyadi="";
      tr.getElementsByClassName("phone")[0].innerHTML=person.tel="";
      tr.getElementsByClassName("epost")[0].innerHTML=person.mail="";
    
  }
  
});
}
function modelshow(event){
   document.getElementById("Process").innerHTML="Ekle";
   document.getElementById("Process")
   .setAttribute("onClick: javascript:save(event);");
}
function search(event) {
  const searchName = document.getElementById("search-name").value;
  const person = human.filter((person) => person.adi.includes(searchName));
  document.getElementById("table-people").innerHTML = "";


   person.forEach((val,indx)=>{
    console.log(val);
     const td= `
      <tr>
      <th class="id">${val.id}</th>
      <th class="name">${val.adi}</th>
      <th class=surname>${val.soyadi}</th>
      <th class=phone>${val.tel}</th>
      <th class=mail>${val.mail}</th>
      <td><button class="btn btn-danger" onclick="deletePerson(event,${val.id})">Sil</button>
      <button class="btn btn-primary" onclick="updatePerson(event,${val.id})">Düzenle</button></td>
    </tr>
`;
    const tr=document.createElement("tr");
    tr.setAttribute("id",val.id);
    tr.innerHTML=td;
    document.getElementById("table-people").appendChild(tr);
  
     
   });

  

}
function aa() {
  document.getElementById("Process").innerHTML="Kaydet";
  
}


  
