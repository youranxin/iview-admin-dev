<template>
    <div class="home-main">
        <Row :gutter="10">
            <Col :md="24" :lg="10">
                <Row class-name="home-page-row1" :gutter="10">
                    <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">
                        <user-info></user-info>
                    </Col>
                    <Col :md="24" :lg="24">
                        <Row :gutter="5">
                            <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                                <info-btn
                                        iconType="edit"
                                        color="#2d8cf0"
                                        btn-text="日志"
                                        @card-click="$router.push('myLog')"></info-btn>
                            </Col>
                            <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                                <info-btn
                                        iconType="clipboard"
                                        color="#19be6b"
                                        btn-text="考勤"
                                        @card-click="$router.push('myAttendance')"></info-btn>
                            </Col>
                            <!--<Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">-->
                                <!--<info-btn-->
                                        <!--iconType="ios-grid-view"-->
                                        <!--color="#ff9900"-->
                                        <!--btn-text="抽奖"-->
                                        <!--@card-click=""></info-btn>-->
                            <!--</Col>-->

                            <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                                <info-btn
                                        iconType="compose"
                                        color="#2d8cf0"
                                        btn-text="请假"
                                        @card-click="$router.push('myLeave')"></info-btn>
                            </Col>
                            <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                                <info-btn
                                        iconType="navicon"
                                        color="#19be6b"
                                        btn-text="排班"
                                        @card-click="$router.push('myArrange')"></info-btn>
                            </Col>
                            <Col :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
                            <info-btn
                                    iconType="cash"
                                    color="#f25e43"
                                    btn-text="金币商城"
                                    @card-click="$router.push('coinShop')"></info-btn>
                            </Col>
                        </Row>
                    </Col>
                    <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">
                        <coin-change></coin-change>
                    </Col>
                    <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">
                        <injob-commemorate></injob-commemorate>
                    </Col>
                </Row>
            </Col>
            <Col :md="24" :lg="14">
                <Row>
                    <Notice></Notice>
                </Row>
                <Row>
                    <people-change></people-change>
                </Row>
            </Col>
        </Row>
    </div>
</template>

<script>
import infoBtn from './components/infoBtn';
import userInfo from './components/userInfo';
import Notice from './components/notice';
import peopleChange from './components/peopleChange';
import injobCommemorate from './components/injobCommemorate';
import coinChange from './components/coinChange';
export default {
    name: 'home_index',
    components: {
        infoBtn,
        Notice,
        peopleChange,
        injobCommemorate,
        coinChange,
        userInfo
    }
};
</script>
