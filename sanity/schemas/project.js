export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Sub Title',
      name: 'subTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Project Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'End Date',
      name: 'endDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today'
      },
      validation: Rule => Rule.required().custom((endDate, { document }) => {
        return new Date(endDate).getTime() > new Date(document.startDate).getTime() ? true : 'End Date must be greater than Start Date'
      })
    },
    {
      title: 'Website Link',
      name: 'website',
      type: 'url'
    },
    {
      title: 'Github Link',
      name: 'github',
      type: 'url'
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }],
      validation: Rule => Rule.unique().error('Cannot have duplicate images')
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'tag'
        }
      }],
      validation: Rule => Rule.unique().error('Cannot have duplicate tags')
    }
  ]
}
