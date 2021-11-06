export default {
    data:{
        cities:['北京','上海','广州','深圳'],
        city:"",
        city_num:0,
    },
    onInit(){
        this.city = this.cities[this.city_num];
    },
    NextCity(e){
        if(e.direction == 'down'){
            if(this.city_num == this.cities.length){
                this.city_num = 0;
            }
            else{
                this.city_num = this.city_num + 1;
            }
            this.city = this.cities[this.city_num];
        }
        if(e.direction == 'up'){
            if(this.city_num == 0){
                this.city_num = this.cities.length;
            }

            else {
                this.city_num = this.city_num - 1;
            }
            this.city = this.cities[this.city_num];
        }
    }
}