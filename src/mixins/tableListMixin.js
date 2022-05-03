import waves from '@/directive/waves' // waves directive

const tableListMixin = {
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      listLoading: false,
      list: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined
      }
    }
  },
  methods: {
  }
}

export default tableListMixin
