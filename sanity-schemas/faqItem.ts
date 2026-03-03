import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faqItem',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      description: 'Which page this FAQ belongs to (e.g. "home", "explainer")',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'Explainer', value: 'explainer' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'question', subtitle: 'page' },
  },
});
