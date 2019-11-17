import MockAdapter from 'axios-mock-adapter';
import createAPI from '../api.js';
import {ActionType, changeGenre, getGenresList} from './actionCreator.js';
import {reducer, Operation} from './reducer.js';

describe(`Action creator works correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
    expect(changeGenre(`Comedy`)).toEqual({
      type: `CHANGE_GENRE`,
      payload: `Comedy`,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer({
      user: {
        genreActive: `All genres`,
      },
      load: {
        films: [],
        genres: [],
      },
    }, {})).toEqual({
      user: {
        genreActive: `All genres`,
      },
      load: {
        films: [],
        genres: [],
      },
    });
  });

  it(`Reducer should change genre by a given value`, () => {
    expect(reducer({
      user: {
        genreActive: `All genres`,
      },
      load: {
        films: [],
        genres: [],
      },
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`,
    })).toEqual({
      user: {
        genreActive: `Comedy`,
      },
      load: {
        films: [],
        genres: [],
      },
    });
  });

  it(`Should make a correct API call to /films`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loaderFilms = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return loaderFilms(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_GENRES,
          payload: getGenresList([{fake: true}]),
        });
      });
  });
});
