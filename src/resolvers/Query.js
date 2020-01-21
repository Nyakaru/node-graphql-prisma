// function feed (parent, args, context, info) {
//     return context.prisma.links()
// }

// module.exports = {
//     feed,
// }

async function feed(parent, args, context, info) {
    const where = args.filter ? {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
      ],
    } : {}
  
    const links = await context.prisma.links({
      where,
      skip: args.skip,
      first: args.first,
    })
    const count = await context.prisma
        .linksConnection({
            where,
        })
        .aggregate()
        .count()

    return {
        links,
        count,
    }
  }
