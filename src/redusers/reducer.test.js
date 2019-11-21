import MockAdapter from 'axios-mock-adapter';
import createAPI from '../api.js';
import {ActionType, changeGenre, getGenresList, loadFilms, getGenres, requireAuthorization, saveUserData} from './actionCreator.js';
import {reducer, Operation} from './reducer.js';

describe(`Action creator works correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
    expect(changeGenre(`Comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`,
    });
  });
  it(`Action creator for load films returns correct action`, () => {
    expect(loadFilms([])).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: [],
    });
  });
  it(`Action creator for get genres returns correct action`, () => {
    expect(getGenres([{genre: `1`}, {genre: `2`}, {genre: `1`}])).toEqual({
      type: ActionType.GET_GENRES,
      payload: [`1`, `2`],
    });
  });
  it(`Action creator for require authorization returns correct action`, () => {
    expect(requireAuthorization()).toEqual({
      type: ActionType.REQUIRE_AUTH,
      payload: true,
    });
  });
  it(`Action creator for save user data returns correct action`, () => {
    expect(saveUserData({})).toEqual({
      type: ActionType.SAVE_USER_DATA,
      payload: {},
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

  it(`Should make a correct API call to /login, for authorization`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const authorization = Operation.authorization(`email@email.ru`, `password`);

    apiMock
      .onPost(`/login`, {email: `email@email.ru`, password: `password`})
      .reply(200, {fake: true});

    return authorization(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SAVE_USER_DATA,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct API call to /login, for check authorization`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const checkerAuthorization = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, {fake: true});

    return checkerAuthorization(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SAVE_USER_DATA,
          payload: {fake: true},
        });
      });
  });
});
