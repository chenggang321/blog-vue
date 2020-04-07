import * as types from '@/store/mutation-types'
import {getArticleDetail,getCategoryList} from '@/api'

const state = {
    articleForm:null
}

const getters = {
    articleForm: state => state.articleForm
}

const mutations = {
    [types.SET_ARTICLE_FORM](state,articleForm){
        state.articleForm = articleForm;
    }
}

const actions = {
    async initArticleForm({commit},params){
        if(!params){
            return commit(types.SET_ARTICLE_FORM,{
                category: '',
                title: '',
                author: '',
                keyword: '',
                desc: '',
                img_url: '',
                tags: '',
                type: '0',
                state: '0',
                origin: '0',
                content: ''
            })
        }
        return getArticleDetail(params).then(res => {
            if(res.data.code === 200){
                commit(types.SET_ARTICLE_FORM,{...res.data.data,...params,category: res.data.data.category[0]._id});
            }
        })
    }
}

export {
    state,
    getters,
    mutations,
    actions
}


