
function newLinkSubscription(parent,args,context){
    return context.prisma.$subscribe.link({ mutation_in: ['CREATED']}).node()
}

const newLink = {
    subscribe: newLinkSubscription,
    resolve: payload => {
        return payload
    },
}

module.exports = {
    newLink
}
