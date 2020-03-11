<template>
    <v-layout>
    <template slot="necker">
        <banner :img="'member_banner.jpg'"></banner>
    </template>
    <template slot="page-title">
    </template>
    <template slot="body">
      <div class="container-fluid">
          <el-table
            :data="invoiceList"
            style="width:100%"
            border
          >
            <el-table-column
                prop="no"
                label="訂單"
            >
            </el-table-column>
            <el-table-column
                prop="memberProfile.memberAccount"
                label="帳號"
            >
            </el-table-column>
            <el-table-column
                label="建立時間"
            >
            <template slot-scope="scope">
                 <span style="margin-left: 10px">{{ new Date(Date.parse(scope.row.dateCreated)).toLocaleString() }}</span>
            </template>
            </el-table-column>
            <el-table-column
                prop="plan.name"
                label="產品名稱"
            >
            </el-table-column>
            <el-table-column
                prop="message"
                label="交易結果"
            >
            </el-table-column>
            <el-table-column
                prop="memo"
                label="備註"
            >
            </el-table-column>
             <el-table-column label="操作">
                 
             </el-table-column>
          </el-table>
      </div>
    </template>
    </v-layout>
</template>
<script>
import banner from '@/pages/_part/banner';
import VLayout from '@/layouts/Default';
import { mapGetters } from 'vuex';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
export default {
    name: 'invoice-index',
    created () {
        /*
        const myself = this;
        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user);
            myself.$store.dispatch('invoice/fetchInvoiceList', null, {
            root: true
        });
        })
        */
    },
    computed: {
        ...mapGetters({
            // 取得資料夾列表
            invoiceList: 'invoice/invoiceList',
        })
    },
    components: {
        VLayout, banner
    },
};
</script>