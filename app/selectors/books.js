import { createSelector } from "reselect";

const getCatalogContent = (state) => state.catalogContent;

export const getContent = createSelector(
  [getCatalogContent],
  (content) => content.map(e => ({
    ...e,
    authorFullName: `${e.author?.firstName} ${e.author?.secondName}`,
    genre: e.genre?.name,
    literatureType: e.literatureType?.name,
  }))
);

export const getBook = (id) => createSelector(
  [getContent],
  (content) => content.find(e => e.id === id)
);