export default {
    name: 'comunity',
    title: 'Comunity ',
    type: 'document',
    fields: [ //Here we put all fields por the schema,
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}], //Como vamos a usar varias imagenes, especificamos que este field tendra un array, y debajo le decimos que el type es image
            options: {
                hotspot: true,
            } 
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'string'
        },
        {
            name: 'slug', //Los slugs son identificadores
            title: 'Slug',
            type: 'slug',
            options:{
                source:'name', // Le indicamos que el identificador (slug) va a aplicarse al campo del nombre,
                maxLength:90,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'content',
            title: 'Content Text',
            type: 'text'
        },
        {
            title: 'Release date',
            name: 'releaseDate',
            type: 'date',
            options: {
              dateFormat: 'YYYY-MM-DD',
              calendarTodayLabel: 'Today'
            }
          }
    ]
}