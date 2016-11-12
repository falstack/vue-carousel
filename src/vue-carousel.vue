<style lang="scss" rel="scss" scoped>
    #vue-carousel {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

        .carousel-prev-btn {
            left: 0;
        }

        .carousel-next-btn {
            right: 0;
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
            <div id="vue-carousel" :style="outerStyle" @mouseover="stop" @mouseout="auto">\
                <div :style="warpStyle" ref="warp">\
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
            outerStyle () {
                return {
                    width : this.status.overHidden || this.status.vertical ? '100%' : this.data.length * 100 + '%',
                    height : !this.status.overHidden && this.status.vertical ? this.data.length * 100 + '%' : '100%',
                    position: 'relative',
                    overflow: this.status.overHidden ? 'hidden' : 'visible'
                }
            },
            warpStyle () {
                return {
                    height: this.status.vertical && this.status.overHidden ? this.data.length * 100 + '%' : '100%',
                    width: this.status.vertical || !this.status.overHidden ? '100%' : this.data.length * 100 + '%',
                    transition : this.status.fade + "s",
                    cursor: this.data[0].link === undefined ? 'default' : 'pointer',
                    position: 'absolute',
                    left : 0,
                    top : 0
                }
            }
        },
        data () {
            return {
                status : {
                    move : false,
                    vertical : false,
                    fade : 1,
                    timeOut : 1,
                    now : 1,
                    timer : null,
                    autoPlay : true,
                    hoverStop : true,
                    showPrevNext : true,
                    showBtnList : true,
                    loop : true,
                    overHidden : true,
                    keyCode : false
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

                if (typeof obj.item === 'string') {
                    this.item = obj.item
                }

                if (typeof obj.tool=== 'string') {
                    this.tool = obj.tool
                }

                if (typeof obj.timeOut === 'number' && obj.timeOut >= 0) {
                    this.status.timeOut = obj.timeOut
                }

                if (typeof obj.fade === 'number' && obj.fade >= 0) {
                    this.status.fade = obj.fade
                }

                if (typeof obj.autoPlay === 'boolean') {
                    this.status.autoPlay = obj.autoPlay
                }

                if (typeof obj.overHidden === 'boolean') {
                    this.status.overHidden = obj.overHidden
                }

                if (typeof obj.vertical === 'boolean') {
                    this.status.vertical = obj.vertical
                }

                if (typeof obj.loop === 'boolean') {
                    this.status.loop = obj.loop
                }

                if (typeof obj.keyCode === 'boolean') {
                    this.status.keyCode = obj.keyCode
                }

                if (typeof obj.hoverStop === 'boolean') {
                    this.status.hoverStop = obj.hoverStop
                }

                if (typeof obj.showPrevNext === 'boolean') {
                    this.status.showPrevNext = obj.showPrevNext
                }

                if (typeof obj.showBtnList === 'boolean') {
                    this.status.showBtnList = obj.showBtnList
                }

                this.$options.template = this.$options.template.split('<item>').shift() + "<div @click='open(item)' :style='itemStyle(item)' v-for='item in data'>" + (this.item === null ? '' : this.item) + "</div>" + this.$options.template.split('</item>').pop();

                this.$options.template = this.$options.template.split('<tool>').shift() + (this.tool === null ? '' : this.tool) + this.$options.template.split('</tool>').pop();

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
                        if (this.status.loop) {
                            this.status.now = this.data.length;
                            this.scroll(this.status.now - 1)
                        }
                    } else {
                        this.status.now--;
                        this.scroll(this.status.now - 1)
                    }
                }
            },
            next () {
                if (!this.status.move) {
                    if (this.status.now === this.data.length) {
                        if (this.status.loop) {
                            this.status.now = 0;
                            this.scroll(this.status.now ++)
                        }
                    } else {
                        this.scroll(this.status.now ++)
                    }
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
                this.status.vertical ? this.$refs.warp.style.top = arg * -(this.status.overHidden ? 100 : 100 / this.data.length) + "%" : this.$refs.warp.style.left = arg * -(this.status.overHidden ? 100 : 100 / this.data.length) + "%";
                let self = this;
                setTimeout(function () {
                    self.status.move = false
                }, this.status.fade * 1000)
            },
            open (item) {
                if (item.link !== undefined) {
                    window.open(item.link)
                }
            },
            itemStyle (item) {
                return {
                    float: this.status.vertical ? "none" : "left",
                    height: this.status.vertical ? 100 / this.data.length + "%" : "100%",
                    width: this.status.vertical ? "100%" : 100 / this.data.length + "%",
                    background: "url(" + item.img + ")" + " center center / cover no-repeat",
                    position : "relative"
                }
            }
        },
        mounted () {
            // keyCode事件
            // 40：下，38：上，39：右，37：左，32：空格
            let self = this;
            document.addEventListener("keydown", function(e) {
                if (self.status.keyCode) {
                    let code = e.keyCode;
                    if (code === 40 || code === 39) {
                        e.preventDefault();
                        self.next()
                    }
                    else if (code === 38 || code == 37) {
                        e.preventDefault();
                        self.prev();
                    }
                }
            });
            // 滚轮事件
        }
    }
</script>