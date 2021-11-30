//import prompt from '@system.prompt';
//
//export default {
//    data: {
//        calc_history: "",
//        calc_in: "",
//        calc_out: "",
//    },
//    onClick3() {
//        this.op = '+';
//
////        this.op = this.value;
//    },
//}
export default {
    data: {
        calc_in: "",
        calc_out: "",
        num1:0,
        num2:0,
        num:0,
        befirst:true,
    },
    onClick1() {
        if(this.befirst)
        this.num1 = 1;
        else
        this.num2 = 1;
        this.calc_in += "1";
        this.befirst=false;
    },
    onClick2() {
        if(this.befirst) {
            this.num1 = 2;
        }
        else{
            this.num2 = 2;
        }
        this.calc_in += "2";
        this.befirst=false;
    },
    onClick3() {
        if(this.befirst) {
            this.num1 = 3;
        }
        else{
            this.num2 = 3;
        }
        this.calc_in += "3";
        this.befirst=false;
    },
    onClick4() {
        if(this.befirst) {
            this.num1 = 4;
        }
        else{
            this.num2 = 4;
        }
        this.calc_in += "4";
        this.befirst=false;
    },
    onClick5() {
        if(this.befirst) {
            this.num1 = 5;
        }
        else{
            this.num2 = 5;
        }
        this.calc_in += "5";
        this.befirst=false;
    },
    onClick6() {
        if(this.befirst) {
            this.num1 = 6;
        }
        else{
            this.num2 = 6;
        }
        this.calc_in += "6";
        this.befirst=false;
    },
    onClick7() {
        if(this.befirst) {
            this.num1 = 7;
        }
        else{
            this.num2 = 7;
        }
        this.calc_in += "7";
        this.befirst=false;
    },
    onClick8() {
        if(this.befirst) {
            this.num1 = 8;
        }
        else{
            this.num2 = 8;
        }
        this.calc_in += "8";
        this.befirst=false;
    },
    onClick9() {
        if(this.befirst) {
            this.num1 = 9;
        }
        else{
            this.num2 = 9;
        }
        this.calc_in += "9";
        this.befirst=false;
    },
    onClick0() {
        if(this.befirst) {
            this.num1 = 0;
        }
        else{
            this.num2 = 0;
        }
        this.calc_in += "0";
        this.befirst=false;
    },
    onClick10() {
        this.op = '+';
        this.calc_in += '+';
    },
    onClick11() {
        this.op = '-';
        this.calc_in += '-';
    },
    onClick12() {
        this.op = '*';
        this.calc_in += '×';
    },onClick13() {
        this.op = '/';
        this.calc_in += '÷';
    },
    onClick14() {
        this.befirst=true;
        if(this.op=='+'){
            this.num=this.num1+this.num2;
        }
        else if(this.op=='-'){
            this.num=this.num1-this.num2;
        }
        else if(this.op=='*'){
            this.num=this.num1*this.num2;
        }
        else if(this.op=='/'){
            this.num=this.num1/this.num2;
        }
        this.calc_out=this.num;
    },
    onClick15() {
        this.calc_in="";
        this.calc_out="";
        this.num1=0;
        this.num2=0;
        this.num=0;
        this.befirst=true;
    },
}


