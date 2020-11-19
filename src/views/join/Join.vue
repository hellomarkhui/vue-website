<template>
  <div id="app">
     <Banner>
        <img src="../../assets/join/banner-lg.png" alt="">
     </Banner>
     <PublicBlock class="position" title="招聘岗位" padding-top="21.25px">
       <div class="p-width">
          <el-row class="query">
            <el-col :span="24">
              <span>社会招聘</span>
              <el-select class="p-place" v-model="place" placeholder="-工作地点-">
                <el-option
                  v-for="item in places"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select class="p-type" v-model="type" placeholder="-招聘类型-">
                <el-option
                  v-for="item in types"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input v-model="input" class="p-key" placeholder="职位关键字"></el-input>
              <div class="search-icon">
								<i></i>
							</div>
            </el-col>
          </el-row>
          <el-collapse accordion>
            <!-- <el-collapse-item class="title" :disabled="true">
              <template slot="title">
                <div class="col col-1">职位名称</div>
                <div class="col col-2">招聘类别</div>
                <div class="col col-3">工作地点</div>
                <div class="col col-4">招聘人数</div>
              </template>
            </el-collapse-item>
            <el-collapse-item class="item">
              <template slot="title">
                <div class="col col-1">销售经理</div>
                <div class="col col-2">销售类</div>
                <div class="col col-3">深圳</div>
                <div class="col col-4">1</div>
                <i class="icon"></i>
              </template>
              <div class="item-content">
                <h4>工作职责</h4>
                <p>1.负责市场渠道开拓与销售工作，执行并完成公司产品年度销售计划；<br />
                  2.根据公司网络收集客户资源，定期与合作客户进行沟通，试试把我客户需求，挖掘客户潜力；<br />
                  3.负责销售合同的签订，关注产品到货期，按照项目执行节点，完成货款回收；<br />
                  4.负责定期向客户传递公司的最新动态信息，根据公司营销战略，提升销售价值，控制成本。<br />
                </p>
                <h4>任职要求</h4>
                <p>1.本科及以上学历，市场营销、机械电气、工商管理、经济学类相关专业；<br />
                  2.2年以上软件行业、新能源行业、光伏、储能、微电网、物联网、智能设备领域销售工作经验；<br />
                  3.熟练掌握客户分析、客情关系管理、销售方案策划知识和实操技能。<br />
                </p>
                <h4>工作类型</h4>
                <p>全职</p>
						  </div>
            </el-collapse-item> -->
            <el-collapse-item class="title" :disabled="true">
              <template slot="title">
                <div class="col col-1">职位名称</div>
                <div class="col col-2">招聘类别</div>
                <div class="col col-3">工作地点</div>
                <div class="col col-4">招聘人数</div>
              </template>
            </el-collapse-item>
            <el-collapse-item class="item" v-for="(position, index) in curPositions" :key="index">
              <template slot="title">
                <div class="col col-1">{{position.name}}</div>
                <div class="col col-2">{{position.recruittype}}</div>
                <div class="col col-3">{{position.location}}</div>
                <div class="col col-4">{{position.recruitnum}}</div>
                <i class="el-icon-arrow-down"></i>
              </template>
              <div class="item-content">
                <h4>工作职责</h4>
                <p>
                  <template v-for="(desc, order) in position.jobdesc">
                    <span :key="order">{{desc}}<br /></span>
                  </template>
                </p>
                <h4>任职要求</h4>
                <p>
                  <template v-for="(qua, order) in position.qualification">
                    <span :key="order">{{qua}}<br /></span>
                  </template>
                </p>
                <h4>工作类型</h4>
                <p>{{position.jobtype}}</p>
						  </div>
            </el-collapse-item>
            <div class="page-wrap">
              <div class="page">
                <el-pagination
                  background
                  layout="total, prev, pager, next"
                  :total="positionQuery.length" 
                  prev-text="上一页" 
                  next-text="下一页"
                  :background="true"
                  popper-class="my-popper"
                  @current-change="pageChange">
                </el-pagination> 
              </div>
              
            </div>
          </el-collapse>
       </div>
     </PublicBlock>
     <PublicBlock title="精彩瞬间" padding-top="47.5px">
        <ul class="p-width hightlights clearfloat">
          <li v-for="item in hightlights" :key="item.title">
            <img :src="item.img" :alt="item.title">
            <p>{{item.title}}</p>
          </li>
        </ul>
     </PublicBlock>
     <PublicBlock title="联系我们" padding-top="47.5px">
        <div class="p-width contact">
          <img :src="map" alt="量云能源地址图片">
          <div class="contact-detail">
            <h3>深圳量云能源网络科技有限公司</h3>
            <p>
              <span class="color-light">地址：</span>深圳市南山区科技园华润置地大厦E座29A<br>
              <span class="color-light">邮编：</span>518054 
            </p>
            <p class="open-map">
              <i class="map-icon"></i>
              <a href="https://j.map.baidu.com/8a/wtA" target="_blank">查看地图</a>
            </p>
          </div>
        </div>
     </PublicBlock>
  </div>
</template>

<script type="text/javascript">
import Banner from '@/components/Banner.vue'
import PublicBlock from '@/components/PublicBlock.vue'
export default {
  name: "Join",
  data() {
    return {
      places: [{
          value: '0',
          label: '-工作地点-'
        }, {
          value: '深圳',
          label: '深圳市'
        }, {
          value: '中山',
          label: '中山市'
        }
      ],
      types: [{
          value: '0',
          label: '-招聘类别-'
        }, {
          value: '研发类',
          label: '研发类'
        }, {
          value: '工程类',
          label: '工程类'
        }, {
          value: '销售类',
          label: '销售类'
        }, {
          value: '运营类',
          label: '运营类'
        }
      ],
      map: require('@/assets/join/map.png'),
      place: '',
      type: '',
      input: '',
      positions: [],
      curPage: 1,
      hightlights: [
        {title:'不定期主题讨论', img: require('@/assets/join/highlights_01.png')},
        {title:'帆船活动', img: require('@/assets/join/highlights_02.png')},
        {title:'月度happy hour（你画我猜游戏）', img: require('@/assets/join/highlights_03.png')},
        {title:'日常工作讨论', img: require('@/assets/join/highlights_04.png')},
        {title:'内部培训学习', img: require('@/assets/join/highlights_05.png')},
        {title:'量云五周年庆团建', img: require('@/assets/join/highlights_06.png')}
      ]
    }
  },
  components: {
    Banner,
    PublicBlock
  },
  mounted: function(){
    this.positions = require('./positions').data;
    console.log(this.positions.length)
  },
  methods: {
    pageChange(index){
      this.curPage = index;
    }
  },
  computed: {
    positionQuery(){
      let _self = this;
      return this.positions.filter(function(item,index){
          if(_self.place != '0' && item.location.indexOf(_self.place) == -1)
            return false;
          if(_self.type != '0' && item.recruittype.indexOf(_self.type) == -1)
            return false;
          if(_self.input.trim() && item.name.indexOf(_self.input.trim()) == -1)
            return false;
        return true
      })
    },
    curPositions(){
      let _self = this;
      return this.positionQuery.filter(function(item,index){
        return index >= (_self.curPage-1)*10 && index < _self.curPage*10
      })
    }
  }
}
</script>

<style scoped>
@import '../../css/join.css';

</style>
