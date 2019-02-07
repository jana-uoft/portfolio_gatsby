export default {
  title: 'Tag',
  name: 'tag',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url'
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
