import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'statItem',
  title: 'Stat',
  type: 'document',
  fields: [
    defineField({
      name: 'target',
      title: 'Number',
      type: 'number',
      description: 'The number to count up to (e.g. 200)',
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'Text after the number (e.g. "+" or "%"). Leave empty if none.',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Text below the number (e.g. "Videos delivered")',
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
    select: { title: 'label', subtitle: 'target' },
    prepare({ title, subtitle }) {
      return { title, subtitle: `${subtitle}` };
    },
  },
});
