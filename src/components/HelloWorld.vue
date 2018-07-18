<template>
<div>
<Button @click="test"> test</Button>
{{arr1}}
{{arr2}}
{{obj}}
 <Table height="200" :columns="columns1" :data="data2"></Table>
</div>

</template>
<script>
export default {
  data () {
    return {
      arr1: ['a', 'b', 'c'],
      arr2: ['a', 'b', 'c'],
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data2: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      obj: {
        aaa: 'aa'
      }
    }
  },
  methods: {
    test () {
      this.arr1[0] = 'aaa'
      // this.arr1 = this.arr1.slice(0, 2)
      // this.$set(this.arr2, 0, 'aaa')
      this.$set(this.obj, 'aaa', 'bbb')
      console.log('arr', this.arr1, this.arr2)
    }
  }
}
</script>
