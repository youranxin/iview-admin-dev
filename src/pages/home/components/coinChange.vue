<template>
    <Card class="coin-change">
        <Row type="flex" justify="space-between" class="coin-change-header">
            <Col>
                <p class="coin-change-title">金币奖惩记录</p>
            </Col>
            <Col>
                <Button type="primary"
                        shape="circle"
                        icon="ios-flag-outline"
                        style="margin-right: 8px;"
                        @click.stop="modelCoinFlag = true">金币排行</Button>
                <Button type="primary"
                        shape="circle"
                        icon="ios-search"
                        @click.stop="modelFlag = true">我的金币动态</Button>
            </Col>
        </Row>
        <div class="coin-change-list">
            <fs-table-page :columns="coinRecordCol"
                           url="/coin/getCredit"></fs-table-page>
        </div>
        <Modal v-model="modelCoinFlag" width="800" :mask-closable="false">
            <p slot="header" style="color:#495060;text-align:center;font-size: 18px">
                <span>金币排行榜</span>
            </p>
            <Row :gutter="5" style="margin-bottom: 10px;">
                <Col :md="12" :lg="12">
                    <coin-ranking
                            :loading="coinLoadingFlag"
                            tag-color="#19be6b"
                            coin-title="金币排行红榜"
                            :row-data="rankDataRed">
                    </coin-ranking>
                </Col>
                <Col :md="12" :lg="12">
                    <coin-ranking
                            :loading="coinLoadingFlag"
                            tag-color="#ed3f14"
                            coin-title="金币排行黑榜"
                            :row-data="rankDataBlack">
                    </coin-ranking>
                </Col>
            </Row>
            <div slot="footer">
            </div>
        </Modal>
        <Modal v-model="modelFlag" width="800" :mask-closable="false">
            <p slot="header" style="color:#495060;text-align:center;font-size: 18px">
                <span>我的金币动态</span>
            </p>
            <fs-table-page :columns="columns"
                           url="/main/getMyCoinLogList"></fs-table-page>
            <div slot="footer">
            </div>
        </Modal>
    </Card>
</template>
<style lang="less">
    .coin-change {
        user-select: none;
        &-header {
            margin-bottom: 10px;
        }
        &-title {
            font-size: 18px;
            font-weight: 700;
        }
    }
</style>
<script>
    import coinRanking from './coinRanking';
    import fsTablePage from '@/baseComponents/fs-table-page';
    export default {
        data () {
            return {
                loading: false,
                modelCoinFlag: false,
                coinLoadingFlag: false,
                rankDataRed: [],
                rankDataBlack: [],
                modelFlag: false,
                itemData: [],
                columns: [
                    {
                        title: '金币变更',
                        width: 100,
                        key: 'opt_num',
                        align: 'center',
                        render: (h, params) => {
                            return h('span', {
                                style: {
                                    color: Number(params.row.opt_num) > 0 ? '#19be6b' : '#ed3f14'
                                }
                            }, params.row.opt_num);
                        }
                    },
                    {
                        title: '属性',
                        key: 'property',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: '说明',
                        key: 'reason'
                    },
                    {
                        title: '日期',
                        key: 'opt_time',
                        width: 180,
                        align: 'center'
                    },
                    {
                        title: '操作人',
                        key: 'opter',
                        width: 80
                    }
                ],
                coinRecordCol: [
                    {
                        title: '姓名',
                        key: 'user_name',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: '金币动态',
                        key: 'opt_num',
                        width: 100,
                        align: 'center',
                        render: (h, params) => {
                            let color = params.row.flag ? '#ed3f14' : '#19be6b';
                            return h('span', {
                                style: {
                                    color: color
                                }
                            }, params.row.opt_num);
                        }
                    },
                    {
                        title: '说明',
                        key: 'reason'
                    },
                    {
                        title: '日期',
                        key: 'opt_time',
                        width: 180,
                        align: 'center'
                    }
                ],
                rowData: []
            };
        },
        created() {
            this._getRankData();
        },
        methods: {
            _getRankData() {
                this.coinLoadingFlag = true;
                this.$http
                    .all([this.$http.get('/main/Ranking?page=1&pageSize=10000&type=1'), this.$http.get('/main/Ranking?page=1&pageSize=10000&type=2')])
                    .then(this.$http.spread((res1, res2) => {
                        if (res1.success) {
                            this.rankDataBlack = res1.data;
                        }
                        if (res2.success) {
                            this.rankDataRed = res2.data;
                        }
                    })).finally(() => {
                        this.coinLoadingFlag = false;
                    });
            }
        },
        components: {
            coinRanking,
            fsTablePage
        }
    };
</script>
