import MockAdapter from 'axios-mock-adapter';
import createAPI from '../api.js';
import {ActionType, changeGenre, setFilms, getGenres, requireAuthorization, saveUserData, setPromoFilm, setReviews} from './actionCreator.js';
import {reducer, Operation} from './reducer.js';

describe(`Action creator works correctly`, () => {
  it(`Action creator for change genre returns correct action`, () => {
    expect(changeGenre(`Comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`,
    });
  });
  it(`Action creator for set films returns correct action`, () => {
    expect(setFilms([])).toEqual({
      type: ActionType.SET_FILMS,
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
    expect(requireAuthorization(true)).toEqual({
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
  it(`Action creator for set promo film returns correct action`, () => {
    expect(setPromoFilm({})).toEqual({
      type: ActionType.SET_PROMO_FILM,
      payload: {},
    });
  });
  it(`Action creator for set reviews returns correct action`, () => {
    expect(setReviews({})).toEqual({
      type: ActionType.SET_REVIEWS,
      payload: {},
    });
  });
  // it(`Action creator for load films return correct action`, () => {
  //   const dispatch = jest.fn();
  //   const api = createAPI(dispatch);
  //   const apiMock = new MockAdapter(api);
  //   const filmLoader = loadFilms();

  //   apiMock
  //     .onget(`/films`)
  //     .reply(200, {fake: true});

  //   return filmLoader(dispatch, null, api)
  // });
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
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SAVE_USER_DATA,
          payload: {fake: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTH,
          payload: false,
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
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SAVE_USER_DATA,
          payload: {fake: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTH,
          payload: false,
        });
      });
  });
});
