export const convertMovieToId = (item) => {
    return `${item.title.replace(/\s/g, '-')}-${item.year}`;
}

export const normalize = (data) => {
    const allIds = [];
    const items = {};
    data.forEach(item => {
        let id = convertMovieToId(item);
        item = {
            ...item,
            id,
        }
        allIds.push(id);
        items[id] = item;
    });
    return {
        byIds: items,
        allIds,
    }
}