/* eslint-disable */
 <template>
        <li class="horizontal-list"  > 
            <a class="horizontal-name" :href="list.homelink">
            <p class="horizontal-number"> <span class="num">{{list.number>999?"999+":list.number}}</span></p>
            <p class="name" >{{list.name}}</p>
           </a>
            <ul class="vertical-list-container"  >
                <li v-for="(item,index) in list.content" v-bind:key="index" class="vertical-list" v-on:mouseover="showMove(location,index)" 
                v-on:mouseout="backToInitial(location,index)" > 
                <a class="link-style"  :class="list.tclass[index]" :href="list.link[index]" >
                <div class="iconBefore"> </div>
                <span>{{item}} 
                <transition name="fade"> 
                 <div class="iconAfter" v-show="list.show[index]"></div>
                </transition>
                </span>
                </a>
                </li> 
            </ul>
        </li>
        </template>
        <script>
        export default{
            name:'nested-list',
           props:['list','location','show','show2'],
             methods:{
           showList(location){
             console.log("locations is "+location);
             this.$emit('showlist',location);
           },
           hideList(location){
            console.log("locations is "+location);
             this.$emit('hidelist',location);
           },
           showListTwo(location){
            console.log("ul on mouse over");
            this.$emit('showlist2',location);
           },
           hideListTwo(location){
            console.log("ul on mouse out");
            this.$emit('hidelist2',location);
           },
           showMove:function(loc,secondloc){
            console.log(" move loc and secloc are"+loc+" "+secondloc);
            this.$emit('move',loc,secondloc);
           },
           backToInitial:function(loc,secondloc){
            console.log(" back loc and secloc are"+loc+" "+secondloc);
            this.$emit('back',loc,secondloc);
           }
        }
        }
</script>


/*this is used to show the 2-dimension array  horizontal-list is used to show the menu, vertical-list-container is used
to show the options beneath each menu. This is at the very beginning of the whole exercise. I used event mouseover/mouseout to show/hide the list.
and the move of the arrow is accomplished by the "transition" provided by vue. Later this has been done by CSS only.
*/
        