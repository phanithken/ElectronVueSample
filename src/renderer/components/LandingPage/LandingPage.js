module.exports = {
  data: function () {
    return {
      tabs: [
        {
          name: 'Page1',
          title: 'Page1'
        },
        {
          name: 'Page2',
          title: 'Page2'
        },
        {
          name: 'Page3',
          title: 'Page3'
        }
      ],
      activeTabName: null,
      page3Data: null,
      message: null
    }
  },
  mounted() {
    this.activeTabName = this.tabs[0].name;
  },
  methods: {
    setActiveTabName(name) {
      this.activeTabName = name;
    },
    displayTab(name) {
      return this.activeTabName === name;
    },
    setPage3(value) {
      console.log(value)
      this.page3Data = value;
    }
  },
}