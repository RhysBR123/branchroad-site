import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton: only one of these
  fields: [
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'URL', type: 'string' }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        },
      ],
    }),
    defineField({
      name: 'footerHeading',
      title: 'Footer Heading',
      type: 'string',
    }),
    defineField({
      name: 'footerCopy',
      title: 'Footer Copy',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'footerCompanyLinks',
      title: 'Footer Company Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'URL', type: 'string' }),
          ],
          preview: { select: { title: 'label' } },
        },
      ],
    }),
    defineField({
      name: 'footerContactLinks',
      title: 'Footer Contact Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'URL', type: 'string' }),
          ],
          preview: { select: { title: 'label' } },
        },
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    }),
    defineField({
      name: 'privacyLabel',
      title: 'Privacy Policy Label',
      type: 'string',
    }),
    defineField({
      name: 'privacyHref',
      title: 'Privacy Policy URL',
      type: 'string',
    }),
    defineField({
      name: 'creditsLabel',
      title: 'Site Credits Label',
      type: 'string',
    }),
    defineField({
      name: 'creditsHref',
      title: 'Site Credits URL',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
