import { createSelector } from "reselect";

const getCatalogContent = (state) => state.catalogContent;

export const getContent = createSelector(
      [getCatalogContent],
      (content) => {
        return content.map(e => ({
          ...e,
          authorFullName: `${e.author?.firstName} ${e.author?.secondName}`,
          genre: e.genre?.name,
          literatureType: e.literatureType?.name,
        }));
      }
    );