let openView = false;
let btn = document.getElementsByClassName("button");
const mouseTarget = document.getElementById('mouseTarget');

let ulList = document.getElementById("ul-container")

let addInput = document.getElementById("inputButt");
let caption = document.getElementById("caption-text");

document.addEventListener("DOMContentLoaded", ready);

let textAddTarget = document.getElementById("targetCreate");
let inputAddTarget = document.getElementById("inputAddTarget");
let calendar = document.getElementById("text-calendar");

inputAddTarget.addEventListener("click", addTargetToProgress);

function addTargetToProgress() {
    let target = textAddTarget.value;
    console.log(target);
    if(target!=""){
        addItemToInProgress(target);
        textAddTarget.value="";
    }

}
//add new

function ready() {
    let day = new Date();
    // console.log(day.getDate());
    calendar.innerHTML =day.getDate();
    btn.item(1).classList.add("active");
    viewInProgressTargets();
}

btn.item(0).addEventListener("click", viewCompletedTargets);

function viewCompletedTargets() {
    caption.innerHTML = "Completed list";
    clearTargets();
    loadFullTargetsToCompleted(targetsInComplete);
}

btn.item(1).addEventListener("click", viewInProgressTargets);

function viewInProgressTargets() {
    caption.innerHTML = "Upcoming To-do’s";
    clearTargets();
    loadFullTargets(targetsInProgress);
}

btn.item(2).addEventListener("click", viewInRemoveTargets);

function viewInRemoveTargets() {
    caption.innerHTML = "Removed Targets";
    clearTargets();
    loadFullTargetsToRemove(targetsInRemoved);
}


function  clearTargets() {
    ulList.innerHTML = '';
}

let targetsInProgress = [
    'Запись номер 1',
    'Запись номер 2',
    'Запись номер 3',
    'Запись номер 4'
];

let targetsInComplete = [
    'Запись номер 1 выполнена',
    'Запись номер 2 выполнена',
    'Запись номер 3 выполнена',
    'Запись номер 4 выполнена'
];

let targetsInRemoved = [
    'Запись номер 1 выполнена',
    'Запись номер 2 выполнена',
    'Запись номер 2 выполнена',
    'Запись номер 2 выполнена',
    'Запись номер 2 выполнена',
    'Запись номер 2 выполнена',
    'Запись номер 2 выполнена',

];
//test data


function loadFullTargets(arr){
    arr.forEach(element =>  addItemToInProgress(element));
}

function loadFullTargetsToCompleted(arr){
    arr.forEach(element =>  loadItemToCompleted(element));
}
function loadFullTargetsToRemove(arr){
    arr.forEach(element =>  loadItemTargetsToRemove(element));
}


function addItem(target,arr){
    arr.push(target);
}

ulList.addEventListener("click", deleteAndCheckItem);

function deleteAndCheckItem(e) {
    let item = e.target;
    console.log(item.parentElement);

    if(item.classList[0] === 'trashButton-default'){
        deleteByTrashButton(item);
    }
    if(item.parentElement.classList[0] === 'forInProgress'){
        console.log(item);
        moveToComplete(item);
    }

}

function deleteByTrashButton(item){
    let  value = item.parentElement.children.item(2).innerHTML;
    targetsInRemoved.push(value);
    deleteByValue(targetsInProgress,value);
    item.parentElement.parentElement.parentElement.removeChild(item.parentElement.parentElement);
}


function moveToComplete(item){
    let  value = item.parentElement.parentElement.children.item(2).innerHTML;
    console.log(value);
    targetsInComplete.push(value);
    deleteByValue(targetsInProgress,value);
    item.parentElement.parentElement.parentElement.parentElement.removeChild(item.parentElement.parentElement.parentElement);
}


function  deleteByValue(arr, value) {
    let index = arr.indexOf(value);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}

function addItemToInProgress(content){

    let completeLi = document.createElement("li");

    completeLi.classList.add("task-item");
    addInput.classList.remove("addNone");
    completeLi.innerHTML =
      '                <div class="completeButton-default item-container">\n' +
        '                    <div class="forInProgress"><img src="../images/img-made.png" alt=""></div>\n' +
        '                    <svg width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5.5" stroke="#447B75"/>\n' +
        '                    </svg>\n' +
        '                    <text>'+content+'</text>\n' +
        '                    <div class="trashButton-default"><svg width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="8.99999" r="5.5" transform="rotate(45 9 8.99999)" stroke="#EB3D3D"/><rect x="10.6971" y="6.73724" width="0.8" height="5.6" rx="0.4" transform="rotate(45 10.6971 6.73724)" fill="#EB3D3D"/><rect x="6.73726" y="7.30292" width="0.8" height="5.6" rx="0.4" transform="rotate(-45 6.73726 7.30292)" fill="#EB3D3D"/></svg></div>\n' +
        '  </div>';
    ulList.appendChild(completeLi);
}


function  loadItemToCompleted(content){
    let completeLi = document.createElement("li");
    completeLi.classList.add("task-item");
    completeLi.classList.add("task-item-completed");
    addInput.classList.add("addNone");
    completeLi.innerHTML =
        '                <div class="completeButton-default item-container">\n' +
        '                    <img src="../images/img-made.png" alt="">\n' +
        '                    <text>'+content+'</text>\n' +
        '                </div>\n';
        ulList.appendChild(completeLi);
}


function  loadItemTargetsToRemove(content){

    let completeLi = document.createElement("li");
    completeLi.classList.add("task-item");
    addInput.classList.add("addNone");
    completeLi.classList.add("task-item-completed");
    completeLi.innerHTML =
        '                <div class="completeButton-default item-container">\n' +
        '                   <svg width="19" height="19" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="8.99999" r="5.5" transform="rotate(45 9 8.99999)" stroke="#EB3D3D"/><rect x="10.6971" y="6.73724" width="0.8" height="5.6" rx="0.4" transform="rotate(45 10.6971 6.73724)" fill="#EB3D3D"/><rect x="6.73726" y="7.30292" width="0.8" height="5.6" rx="0.4" transform="rotate(-45 6.73726 7.30292)" fill="#EB3D3D"/></svg>\n'+
        // '                    <img src="../images/img-made.png" alt="">\n' +
        '                    <text class="forDeleted">'+content+'</text>\n' +
        '                </div>\n';
    ulList.appendChild(completeLi);
}


function viewDiv(){
    let button =  document.getElementById("divWithButtons");
    let input =document.getElementById("triangleDown");
    if(!openView) {
        button.style.display = "block";
        input.setAttribute("src","../images/img_3.png")
    }else {
        button.style.display = "none";
        input.setAttribute("src","../images/img_2.png")
    }
    openView=!openView;
}

for (let i = 0; i < 3; i++) {
    btn.item(i).addEventListener("click", function() {
        for (let j = 0; j < 3; j++){
            btn.item(j).classList.remove("active");
        }
        this.classList.add("active");
    });
}