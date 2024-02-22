const odate = new Date('2023-10-31 10:47:17');
const ndate = new Date();
const diffDate = ndate.getTime() - odate.getTime();

const diffDay = Math.abs(diffDate / (1000 * 60 * 60 * 24));
if(diffDay > 1) {
    console.log("하루지남");
}else{
    console.log("하루안됨");
}