export default {
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Program Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: ["Beginner", "Intermediate", "Advanced", "All Levels"],
        layout: "radio",
      },
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "outcomes",
      title: "Learning Outcomes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Lucide icon name e.g. Palette, Monitor, Trophy",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower number shows first",
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};