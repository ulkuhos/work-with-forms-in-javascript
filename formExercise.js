//Form submit islemi yapiliyor ve input icindeki deger(value) aliniyor. Bir liste ekleyip forma kaydettigimiz ekledigimiz bilgileri o listenin icinde tutuyor ve bunu ekrana yazdiriyoruz:

/*
Bu formda sirasiyla yaptiklarimiz:

1: Formu sec
2: Input bilgisini UL icerisine ekle
3: Form icindeki bilgiyi sifirla
4: Eger forma bilgi girilmezse kullaniciyi uyar

*/


let userformDOM = document.querySelector("#userForm") 
// form id si ile htmldeki form secilir.
userformDOM.addEventListener('submit', formHandler) 
//formda submit eylemi olursa formHandler fonksiyonunu cagirsin.

const alertFunction = (title, message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
const alertDOM = document.querySelector('#alert') 
// html div in icindeki alert id sini sectik-hata verdiriyoruz

//fonksiyonu tanimlariz
function formHandler(event) { //event parametresi gonderiliyor burada
    event.preventDefault() // default islemi adres cubugunda engelledik(get-post).
    const USER_NAME = document.querySelector("#username") //hmtlden input id- username bil.alinir, input name kismi onemli.
    const SCORE = document.querySelector("#score")//hmtlden input id- score bil.alinir, input name kismi onemli
    
    if (USER_NAME.value && SCORE.value) { //formu calistirdigimizda  veri ekleyince hata vermiyordu bu nedenle asagidaki degerler varsa form calissin yoksa kullanici ekraninda hata versin istiyoruz.
        addItem(USER_NAME.value, SCORE.value) // asagida const addItem fonksiyonunu yazdiktan sonra simdi forma eklenecek bilgileri bu fonskiyondaki liste icine ekleyebiliriz. USER_NAME ve SCORE icindeki value degerini alacgz.
        
        //submit ten sonra formu sifirlama islemi yaptik. 
        USER_NAME.value = ""
        SCORE.value = ""

        //eger forma veri girildiyse ekranda yesil bir uyari ciksin ve tebrikler dogru sekilde bilgi girdiniz yazsin.
        alertDOM.innerHTML = alertFunction(
            "Froma",
            "Dogru sekilde bilgi girdiniz, tebrikler...",
            "success" )//warning-danger-ya da hersey yolundaysa success yaz diyebiliriz class parametresine)    
        
    }else { //diger durumlarda hatali giris yazdiricaz ekrana.
        //console.log ('hatali giris') ocesinde yapmistik bunun yerine alert kismi ile yaptiralim.
        alertDOM.innerHTML = alertFunction(
            "Baslik bilgisi",
            "Eksik bilgi girdiniz...",
            "warning" )//warning-danger-ya da hersey yolundaysa success yaz diyebiliriz class parametresine)    
        }

}


//Tum islemler bittikten sonra en son olarak forma alert verdiriyoruz 
    let userListDOM = document.querySelector("#userList") //ul id sini buraya degiskene tanimladik
    const addItem = (userName, score) => { //bu bilgilri ekleycek bir fonksiyn olstrdk
        let liDOM = document.createElement('li') //li elementi olusturmasini istedik.
        liDOM.innerHTML = `
            ${userName}
             <span class="badge bg-primary rounded-pill">${score}</span>`//liDOMun innerHTMLi icine degisknlri ekleme yapiyruz
         liDOM.classList.add(
            'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')//bizim istedigimiz class listleri ekledik.
        userListDOM.append(liDOM)// u l nin neresine ekeleyecegimize karar veriyoruz. ORN altina ekliyoruz.

    }
