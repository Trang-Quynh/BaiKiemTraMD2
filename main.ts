
import {LoverManager} from "./loverManager";
import {Lover} from "./lover";
// @ts-ignore
let input = require(`readline-sync`);
let loverManager = new LoverManager();
let horoscope:string[] = ['Bạch Dương', 'Kim Ngưu', 'Song Tử', 'Cự Giải', 'Sư Tử', 'Xử Nữ', 'Thiên Bình', 'Thiên Yết', 'Nhân Mã', 'Ma Kết', 'Bảo Bình', 'Song Ngư']

function main(){
    let choice;
    do{
        console.log(`
        1. Hien thi danh sach nguoi yeu
        2. Tim kiem theo ten
        3. Nhap thong tin nguoi yeu moi
        4. Chinh sua thong tin nguoi yeu
        5. Xoa nguoi yeu
         `)
        choice = +input.question(`Nhap lua chon cua ban: `)
    switch (choice){
        case 1:
            showAllLover();
            break;
        case 2:
            findByName();
            break;
        case 3:
            addLover();
            break;
        case 4:
            updateInfor();
            break;
        case 5:
            deleteLover();
             break;
        }
    }while(choice != 0)
}
function showAllLover(){
    if(loverManager.loverList.length == 0){
        console.log('khong co du lieu. ')
    }
    for (let i = 0; i < loverManager.loverList.length; i++) {
        console.log(loverManager.loverList[i])
    }
}
function checkId(id:number){
    for (let i = 0; i < loverManager.loverList.length; i++) {
            if(id == loverManager.loverList[i].getId()){
                console.log(`id da ton tai`)
                return false;
        }
    }
    return true;
}

function addLover() {
    let id: number = +input.question(`Nhap id: `);
    let regexCheckId = /[0-9]/;
    let testId = regexCheckId.test(String(id));
    console.log(testId)
    if(testId == false){
        do{
            id = input.question(`Nhap lai id moi: `)
            testId = regexCheckId.test(String(id));
        }while(testId == false)
    }
    if (checkId(id) == false) {
        do {
            id = +input.question(`Nhap lai id`);
            checkId(id);
        } while (checkId(id) == false)
    }
    let name = input.question(`Nhap name: `);
    let regexCheckName = /^[a-z A-Z ]{5,32}$/
    let testName = regexCheckName.test(name);
    console.log(testName)
    if(testName == false){
        do{
            name = input.question(`Nhap lai ten : `)
            testName = regexCheckName.test(name);
        }while(testName == false)
    }
    let horoscope:string = ''
    console.log(`chon cung hoang dao: 
    0. Bạch Dương
    1. Kim Ngưu
    2. Song Tử
    3. Cự Giải
    4. Sư Tử
    5. Xử Nữ
    6. Thiên Bình
    7. Thiên Yết
    8. Nhân Mã
    9. Ma Kết
    10. Bảo Bình
    11. Song Ngư`)
    let choice = +input.question(`Nhap cung hoang dao: `);
    switch (choice) {
        case 0:
            horoscope = 'Bạch Dương'
            break;
        case 1:
            horoscope = 'kim nguu'
            break;
        case 2:
            horoscope = 'Song tu'
            break;
        case 3:
            horoscope = 'Cu Giai'
            break;
        case 4:
            horoscope = 'Su tu'
            break;
        case 5:
            horoscope = 'Xu nu'
            break;
        case 6:
            horoscope = 'Thien Binh'
            break;
        case 7:
            horoscope = 'Thien Yet'
            break;
        case 8:
            horoscope = 'Nhan Ma'
            break;
        case 9:
            horoscope = 'Ma ket'
            break;
        case 10:
            horoscope = 'Bao Binh'
            break;
        case 11:
            horoscope = 'Song Ngu'
            break;
    }
    let homeTown: string = input.question(`Nhap hometown: `);
    let year: number = input.question(`Nhap nam sinh: `)
    let regex = /[0-9]{4}/;
    let testYear = regex.test(String(year));
    console.log(testYear)
    if(testYear == false){
        do{
            year = input.question(`Nhap lai nam sinh: `)
            testYear = regex.test(String(year));
        }while(testYear == false)
    }
    let favor: string = input.question(`NHap so thich: `)
    let lover = new Lover(id, name, horoscope, homeTown, year, favor);
    loverManager.loverList.push(lover);
    console.log(`them thanh cong`);
}

function updateInfor(){
    let inputId = +input.question(`Nhap id nguoi yeu: `);
    let regexCheckId = /[0-9]/;
    let testId = regexCheckId.test(String(inputId));
    console.log(testId)
    if(testId == false){
        do{
            inputId = input.question(`Nhap lai id moi: `)
            testId = regexCheckId.test(String(inputId));
        }while(testId == false)
    }
    let check:boolean = false;
    let index:number = -1;
    let lover:Lover = loverManager.loverList[0];
    for (let i = 0; i < loverManager.loverList.length; i++) {
        if(inputId == loverManager.loverList[i].getId()){
            check = true;
            index = i;
            lover = loverManager.loverList[i]
        }
    }
    if(check == true){
        inputId = +input.question(`Nhap lai id moi: `);
        if (checkId(inputId) == false) {
            do {
                inputId = +input.question(`Nhap lai id`);
                checkId(inputId);
            } while (checkId(inputId) == false)
        }
        let name = input.question(`Nhap name: `);
        let regexCheckName = /^[a-z A-Z ]{5,32}$/
        let testName = regexCheckName.test(name);
        console.log(testName)
        if(testName == false){
            do{
                name = input.question(`Nhap lai ten : `)
                testName = regexCheckName.test(name);
            }while(testName == false)
        }
        let horoscope:string = ''
        console.log(`chon cung hoang dao moi: 
    0. Bạch Dương
    1. Kim Ngưu
    2. Song Tử
    3. Cự Giải
    4. Sư Tử
    5. Xử Nữ
    6. Thiên Bình
    7. Thiên Yết
    8. Nhân Mã
    9. Ma Kết
    10. Bảo Bình
    11. Song Ngư`)
        let choice1 = +input.question(`Nhap cung hoang dao: `);
        switch (choice1) {
            case 0:
                horoscope = 'Bạch Dương'
                break;
            case 1:
                horoscope = 'kim nguu'
                break;
            case 2:
                horoscope = 'Song tu'
                break;
            case 3:
                horoscope = 'Cu Giai'
                break;
            case 4:
                horoscope = 'Su tu'
                break;
            case 5:
                horoscope = 'Xu nu'
                break;
            case 6:
                horoscope = 'Thien Binh'
                break;
            case 7:
                horoscope = 'Thien Yet'
                break;
            case 8:
                horoscope = 'Nhan Ma'
                break;
            case 9:
                horoscope = 'Ma ket'
                break;
            case 10:
                horoscope = 'Bao Binh'
                break;
            case 11:
                horoscope = 'Song Ngu'
                break;
        }
        let homeTown: string = input.question(`Nhap hometown moi: `);
        let year: number = input.question(`Nhap nam sinh moi: `)
        let regex = /[0-9]{4}/;
        let testYear = regex.test(String(year));
        console.log(testYear)
        if(testYear == false){
            do{
                year = input.question(`Nhap lai nam sinh moi: `)
                testYear = regex.test(String(year));
            }while(testYear == false)
        }
        let favor: string = input.question(`Nhap so thich moi: `);
        lover.setId(inputId);
        lover.setName(name);
        lover.setHoroscope(horoscope);
        lover.setYear(year);
        lover.setHometown(homeTown);
        lover.setFavor(favor);
        console.log(lover);
        console.log(`cap nhat thanh cong`);
    }else{
        console.log('Khong co du lieu phu hop. ')
    }
}

function deleteLover(){
    let id = +input.question(`Nhap id nguoi yeu: `);
    let check:boolean = false;
    let index:number = -1;
    for (let i = 0; i < loverManager.loverList.length; i++) {
        if(id == loverManager.loverList[i].getId()){
            check = true;
            index = i;
        }
    }
    if(check == true){
        loverManager.loverList.splice(index,1);
        console.log(`Xoa thanh cong`)
    }else{
        console.log('Khong ton tai nguoi yeu can xoa. ')
    }
}
//var m = str.includes("world", 12); // true
function findByName(){
    let name = input.question(`Nhap name ban muon tim: `);
    let check:boolean = false;
    for (let i = 0; i < loverManager.loverList.length; i++) {
        // @ts-ignore
        check = loverManager.loverList[i].getName().includes(name);
        if(check == true) {
            console.log(loverManager.loverList[i])
        }else{
            console.log(`Khong co ten. `)
            return;
        }
    }
}

main();


