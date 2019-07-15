import { getIdentity,getUser ,getViewAuthority,getApiAuthority,AddUser} from '../services/index'

export default {
  namespace: 'user',
  state: {
    identityData: [],
    userData:[],
    viewauthorityData:[],
    apiauthorityData:[]
  },

  effects: {
    *Identity({ payload }, { call, put }) { 
      let data= yield call(getIdentity);
      yield put({ type: 'setIdentity' ,payload:data.data});
    },
    *getuser({ payload }, { call, put }) { 
      let data= yield call(getUser);
      yield put({ type: 'setUser' ,payload:data.data});
    },
    *getviewauthority({ payload }, { call, put }) { 
      let data= yield call(getViewAuthority);
      yield put({ type: 'setviewauthority' ,payload:data.data});
    },
    *getapiauthority({ payload }, { call, put }) { 
      let data= yield call(getApiAuthority);
      yield put({ type: 'setapiauthority' ,payload:data.data});
    },
    *Adduser({ payload }, { call, put }) { 
      let data= yield call(AddUser,payload);
    },
  },

  reducers: {
    setIdentity(state, { payload }) {
      return { ...state, identityData: payload }
    },
    setUser(state, { payload }){
      return { ...state, userData: payload }
    },
    setviewauthority(state, { payload }){
      return { ...state, viewauthorityData: payload }
    },
    setapiauthority(state, { payload }){
      return { ...state, apiauthorityData: payload }
    }
  },

};
