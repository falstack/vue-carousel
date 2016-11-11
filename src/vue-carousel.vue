<style lang="scss" rel="scss" scoped>
    #vue-carousel {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

        .carousel-warp {
            position: absolute;
            left: 0;
            top: 0;
        }

        .carousel-item {
            position: relative;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            float: left;
            cursor: pointer;
        }

        .carousel-prev-btn, .carousel-next-btn, .carousel-control {
            position: absolute;
        }

        .carousel-hover-show {
            opacity: 0;
            visibility: hidden;
        }

        &:hover .carousel-hover-show {
            opacity: 1;
            visibility: visible;
        }
    }
</style>

<script lang="babel">

    export default {
        template : '\
            <div id="vue-carousel" @mouseover="stop" @mouseout="auto">\
                <div class="carousel-warp" :style="warpStyle" ref="box">\
                    <item></item>\
                </div>\
                <button class="carousel-prev-btn" @click="prev" v-if="status.showPrevNext">«</button>\
                <button class="carousel-next-btn" @click="next" v-if="status.showPrevNext">»</button>\
                <div class="carousel-control">\
                    <span class="carousel-btn-menu" v-if="status.showBtnList">\
                        <em :class="[ \'carousel-btn\', item === status.now ? \'carousel-btn-now\' : \'\' ]" v-for="item in data.length" @click="jump(item)"></em>\
                    </span>\
                </div>\
                <tool></tool>\
            </div>\
        ',
        props : {
            init : {
                required : true,
                type: Object
            }
        },
        computed: {
            warpStyle () {
                return {
                    height: '100%',
                    width: this.data.length * 100 + '%',
                    transition : this.status.fade + "s"
                }
            }
        },
        data () {
            return {
                status : {
                    move : false,
                    orz : true,
                    fade : 1,
                    timeOut : 1,
                    now : 1,
                    timer : null,
                    autoPlay : true,
                    hoverStop : true,
                    showPrevNext : true,
                    showBtnList : true
                },
                item : null,
                tool : null,
                data : null
            }
        },
        created () {
            this.initData(this.init)
        },
        methods: {
            initData (obj) {
                if (obj === undefined) {
                    console.error('vue-carousel: ' + '未初始化数据');
                    return false
                }

                if (obj.data !== undefined) {
                    this.data = obj.data
                } else {
                    console.error('vue-carousel：初始化数据错误');
                    return
                }

                if (obj.item !== undefined) {
                    this.item = obj.item
                }

                if (obj.tool !== undefined) {
                    this.tool = obj.tool
                }

                if (obj.timeOut !== undefined && typeof obj.timeOut === 'number' && obj.timeOut >= 0) {
                    this.status.timeOut = obj.timeOut
                }

                if (obj.fade !== undefined && typeof obj.fade === 'number' && obj.fade >= 0) {
                    this.status.fade = obj.fade
                }

                if (obj.autoPlay !== undefined && typeof obj.autoPlay === 'boolean') {
                    this.status.autoPlay = obj.autoPlay
                }

                if (obj.hoverStop !== undefined && typeof obj.hoverStop === 'boolean') {
                    this.status.hoverStop = obj.hoverStop
                }

                if (obj.showPrevNext !== undefined && typeof obj.showPrevNext === 'boolean') {
                    this.status.showPrevNext = obj.showPrevNext
                }

                if (obj.showBtnList !== undefined && typeof obj.showBtnList === 'boolean') {
                    this.status.showBtnList = obj.showBtnList
                }

                this.$options.template = this.$options.template.split('<item>').shift() + "<div class='carousel-item' @click='open(item)' :style='itemStyle(item)' v-for='item in data'>" + (this.item === null ? '' : this.item) + "</div>" + this.$options.template.split('</item>').pop();

                if (this.tool !== null) {
                    this.$options.template = this.$options.template.split('<tool>').shift() + this.tool + this.$options.template.split('</tool>').pop();
                }

                this.auto()
            },
            auto () {
                if (this.status.autoPlay && this.status.timer === null) {
                    let self = this;
                    this.status.timer = setInterval(function () {
                        self.next()
                    }, self.status.timeOut * 1000)
                }
            },
            stop () {
                if (this.status.autoPlay && this.status.hoverStop) {
                    clearInterval(this.status.timer);
                    this.status.timer = null
                }
            },
            prev () {
                if (!this.status.move) {
                    if (this.status.now === 1) {
                        this.status.now = this.data.length
                    } else {
                        this.status.now--
                    }
                    this.scroll(this.status.now - 1)
                }
            },
            next () {
                if (!this.status.move) {
                    if (this.status.now === this.data.length) {
                        this.status.now = 0
                    }
                    this.scroll(this.status.now ++)
                }
            },
            jump (arg) {
                if (!this.status.move) {
                    if (this.status.now === arg) return;
                    this.status.now = arg;
                    this.scroll(arg - 1)
                }
            },
            scroll (arg) {
                this.status.move = true;
                this.$refs.box.style.left = arg * -100 + "%";
                let self = this;
                setTimeout(function () {
                    self.status.move = false
                }, this.status.fade * 1000)
            },
            open (item) {
                window.open(item.link);
            },
            itemStyle (item) {
                return {
                    height: "100%",
                    width : 100 / this.data.length + "%",
                    backgroundImage : "url(" + item.img + ")"
                }
            }
        },
        mounted () {

        }
    }
</script>