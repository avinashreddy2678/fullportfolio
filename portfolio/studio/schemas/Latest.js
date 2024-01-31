import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'Latest',
  title: 'Latest',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'imageurl1',
        title: 'imageurl1',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'overview',
        title: 'overview',
        type: 'text',
      }),
      defineField({
        name: 'createdAt',
        title: 'createdAt',
        type: 'datetime',
      }),
      defineField({
        name: 'live',
        title: 'live',
        type: 'url',
      }),
      defineField({
        name: 'github',
        title: 'github',
        type: 'url',
      }),
      defineField({
        title: 'TechStack',
        name: 'TechStack',
        description: 'Select pages for the top menu',
        type: 'array',
        of: [
          {
            type: 'string'
          },
        ]
        }),
  ],
})
