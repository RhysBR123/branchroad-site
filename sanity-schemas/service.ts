import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      description: 'e.g. "Customer Story Videos"',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'emphasis',
      title: 'Emphasis Text',
      type: 'string',
      description: 'The italicised part of the heading (e.g. "& storytelling")',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'sectionId',
      title: 'Section ID',
      type: 'string',
      description: 'HTML anchor ID for in-page navigation (e.g. "customer-stories")',
    }),
    defineField({
      name: 'jumpLabel',
      title: 'Jump Nav Label',
      type: 'string',
      description: 'Label shown in the page jump navigation',
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Dark', value: 'dark' },
          { title: 'Light', value: 'light' },
        ],
        layout: 'radio',
      },
      initialValue: 'dark',
    }),
    defineField({
      name: 'description',
      title: 'Description Paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
      description: 'Each item becomes a separate paragraph',
    }),
    defineField({
      name: 'subtleLink',
      title: 'Subtle Link (optional)',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Label', type: 'string' }),
        defineField({ name: 'href', title: 'URL', type: 'string' }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Checklist items shown below the description',
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3 }),
        defineField({ name: 'author', title: 'Author', type: 'string' }),
        defineField({ name: 'company', title: 'Company', type: 'string' }),
      ],
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Button Label', type: 'string' }),
            defineField({ name: 'src', title: 'Video URL', type: 'url' }),
          ],
          preview: { select: { title: 'label' } },
        },
      ],
    }),
    defineField({
      name: 'exampleText',
      title: 'Example Project Text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'priceFrom',
      title: 'Price From',
      type: 'string',
      description: 'e.g. "£4,500"',
    }),
    defineField({
      name: 'priceNote',
      title: 'Price Note',
      type: 'string',
    }),
    defineField({
      name: 'cta',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get in touch',
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
    select: { title: 'title', subtitle: 'label' },
  },
});
