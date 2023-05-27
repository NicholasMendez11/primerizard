export default {
  name: 'Orders',
  title: 'Orders',
  type: 'document',
  fields: [
    //Here we put all fields por the schema,
    {
      name: 'demoID',
      title: 'demo',
      type: 'string',
    },
    {
      name: 'courseId',
      title: 'Course',
      type: 'string',
    },
    {
      name: 'customerEmail',
      title: 'customerEmail',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'purchaseDate',
      title: 'Purchase Date',
      type: 'string',
    },
    {
      name: 'courseName',
      title: 'Course Name',
      type: 'string',
    },
  ],
}
