class History{
    constructor(key){
        this.key = key || "history";
        this.limit = 10;
        this.jsonData = null;
        this.cacheTimeDay = 7 ;//days.
    }
    setCookie(name,value,expireDays){
        if(name==null || value == null) return;
        var cookieStr = name+"="+encodeURIComponent(value);
        if(isNaN(expireDays)){
            expireDays = this.cacheTimeDay;
        }
        else{
            expireDays = parseInt(expireDays);
            this.cacheTimeDay = expireDays;
        }
        var d = new Date();
        d.setTime(d.getTime()+expireDays*24*3600*1000);
        cookieStr = cookieStr + "; expires="+d.toUTCString();
        console.log("cookie str "+cookieStr);
        document.cookie=cookieStr;
        console.log(document.cookie);  //cookie 好像只能在以server起起来的状态才能用。。我真是。。
    }
    getCookie(name){
        var cookieArr = document.cookie ? document.cookie.split(";"): [],
            val="", tmpArr=[];
        for(var i = 0 ; i < cookieArr.length ; i ++){
            tmpArr = cookieArr[i].split("=");
            if(tmpArr[0].trim()==name){
                val = decodeURIComponent(tmpArr[1]);
                break;
            }
        }
        console.log("get cookie "+val.toString());
        return val.toString();
    }
    deleteCookie(name){
        this.setCookie(name,'',-1);
    }
    initStr(keyword){
        return '{"title":"'+keyword+'"}';//build stting, need to verify this.
    }
    addCookie(keyword){
        var jsonStr = this.getCookie(this.key);
        console.log("keyword is "+keyword);
        if(jsonStr!=""){
           var jsonObj = JSON.parse(jsonStr);
            for(var i = 0 ; i < jsonObj.length; i ++){
                if(keyword==jsonObj[i]['title']){
                    return false;
                }
            }
            jsonStr = "["+this.initStr(keyword)+",";
            var limit = jsonObj.length>this.limit-1 ? this.limit-1:jsonObj.length;
            for(var i = 0 ; i < limit ; i ++){
              jsonStr+=this.initStr(jsonObj[i]['title'])+",";
            }
            jsonStr = jsonStr.substring(0,jsonStr.length-1);
            jsonStr+="]";
        }
        else{
            jsonStr = "["+this.initStr(keyword)+"]";
        }
        this.jsonData = JSON.parse(jsonStr);
        console.log(jsonStr);
        this.setCookie(this.key,jsonStr, this.cacheTimeDay);
    }
    getHistoryList(){
        console.log("get history list triggered");
        if(this.jsonData!=null){
            return this.jsonData;
        }
        else{
            var jsonStr = this.getCookie(this.key);
            if(jsonStr!=""){
                console.log("json str is "+jsonStr);
                this.jsonData=JSON.parse(jsonStr);
            }
            return this.jsonData;
        }
    }
    clearHistory(){
        this.deleteCookie(this.key);
        this.jsonData = null;
    }

}

//export {History} ; import那边可以取消这个
