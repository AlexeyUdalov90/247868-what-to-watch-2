import {reducer, ActionCreator, filterFilms} from './reducer.js';

it(`Filter films works correctly`, () => {
  expect(filterFilms([{genre: `Comedy`}, {genre: `Horror`}, {genre: `Drama`}], `Horror`)).toMatchObject([{
    genre: `Horror`,
  }]);
});

describe(`Action creator works correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Comedy`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `Comedy`,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer({
      genreActive: `All genres`,
      films: [],
      genres: [],
    }, {})).toEqual({
      genreActive: `All genres`,
      films: [],
      genres: [],
    });
  });

  it(`Reducer should change genre by a given value`, () => {
    expect(reducer({
      genreActive: `All genres`,
      films: [],
      genres: []
    }, {
      type: `CHANGE_GENRE`,
      payload: `Comedy`,
    })).toEqual({
      genreActive: `Comedy`,
      films: [],
      genres: [],
    });
  });
});
