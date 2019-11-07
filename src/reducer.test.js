import {reducer, ActionCreator} from './reducer.js';

import films from './moks/films.js';

describe(`Action creator works correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Comedy`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `Comedy`,
    });
  });
  it(`Action creator for change films list with All genre returns correct action`, () => {
    expect(ActionCreator.changeFilmList(`All genres`, [
      {
        genre: `Comedy`,
      },
      {
        genre: `Horror`,
      },
    ])).toEqual({
      type: `RESET_FILTER`,
    });
  });
  it(`Action creator for change films list with genre returns correct action`, () => {
    expect(ActionCreator.changeFilmList(`Comedy`, [
      {
        genre: `Comedy`,
      },
      {
        genre: `Horror`,
      },
    ])).toEqual({
      type: `CHANGE_FILM_LIST`,
      payload: [{
        genre: `Comedy`,
      }],
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genreActive: `All genres`,
      films,
    });
  });

  it(`Reducer should change genre by a given value`, () => {
    expect(reducer({
      genreActive: `All genres`,
      films,
    }, {
      type: `CHANGE_GENRE`,
      payload: `Comedy`,
    })).toEqual({
      genreActive: `Comedy`,
      films,
    });
  });

  it(`Reducer should change films by a given value`, () => {
    expect(reducer({
      genreActive: `All genres`,
      films,
    }, {
      type: `CHANGE_FILM_LIST`,
      payload: [{
        id: 5,
        name: ``,
        imageUrl: ``,
        genre: ``,
        video: {
          url: ``,
          type: ``,
        },
      }],
    })).toEqual({
      genreActive: `All genres`,
      films: [{
        id: 5,
        name: ``,
        imageUrl: ``,
        genre: ``,
        video: {
          url: ``,
          type: ``,
        },
      }],
    });
  });
});
