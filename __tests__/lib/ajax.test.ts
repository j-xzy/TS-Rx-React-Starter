import { normalizeUrl } from '@/lib/ajax';

describe('lib.ajax', () => {

  it('normalizeUrl', () => {
    expect(normalizeUrl('/user/{name}', {
      params: {
        name: 'foo'
      }
    })).toBe('/user/foo');

    expect(normalizeUrl('{name}', {
      params: {
        name: 'foo'
      }
    })).toBe('foo');

    expect(normalizeUrl('/user', {
      params: {
        name: 'foo'
      }
    })).toBe('/user');

    expect(normalizeUrl('/user/{name}', {
      //
    })).toBe('/user/{name}');

    expect(normalizeUrl('/user/{name}/{age}', {
      params: {
        age: '99'
      }
    })).toBe('/user/{name}/99');

    expect(normalizeUrl('/{user}/{name}/{age}', {
      params: {
        age: '99',
        name: 'foo',
        user: 'bar'
      }
    })).toBe('/bar/foo/99');

    expect(normalizeUrl('/user?id', {
      queries: {
        id: '123'
      }
    })).toBe('/user?id=123');

    expect(normalizeUrl('', {
      queries: {
        id: '123'
      }
    })).toBe('?id=123');

    expect(normalizeUrl('/user', {
      queries: {
        id: '123'
      }
    })).toBe('/user?id=123');

    expect(normalizeUrl('/user?id', {
      queries: {
        id: null as any
      }
    })).toBe('/user');

    expect(normalizeUrl('/user?id', {
      queries: {
        id: undefined as any
      }
    })).toBe('/user');

    expect(normalizeUrl('/user?id', {
      queries: {
        id: ''
      }
    })).toBe('/user');

    expect(normalizeUrl('/user?id', {
      queries: {
        id: '',
        name: null as any
      }
    })).toBe('/user');

    expect(normalizeUrl('/user?id&name', {
      queries: {
        id: undefined as any,
        name: 'xxx'
      }
    })).toBe('/user?name=xxx');

    expect(normalizeUrl('/user', {
      queries: {
        id: '123',
        type: 'red',
        height: '170'
      }
    })).toBe('/user?id=123&type=red&height=170');

    expect(normalizeUrl('/{name}/user/{age}?id&type&age', {
      params: {
        name: 'tom',
        age: '99'
      },
      queries: {
        id: '123',
        type: 'red',
        age: '27'
      }
    })).toBe('/tom/user/99?id=123&type=red&age=27');

    expect(normalizeUrl('/user?id', {
      queries: {
        name: 'abc'
      }
    })).toBe('/user?name=abc');

    expect(normalizeUrl('/user?id=abc', {
      queries: { }
    })).toBe('/user?id=abc')    

    expect(normalizeUrl('/user?id=abc', {})).toBe('/user?id=abc')    

    expect(normalizeUrl('/user?id=abc&foo=123', {
      queries: {
        id: '123',
        height: '170'
      }
    })).toBe('/user?foo=123&id=123&height=170')

    expect(normalizeUrl('/user?id=abc&foo=', {
      queries: {
        id: '123',
        height: '170'
      }
    })).toBe('/user?id=123&height=170')

    expect(normalizeUrl('/user?id&foo=123', {
      queries: {
        height: '170'
      }
    })).toBe('/user?foo=123&height=170')

    expect(normalizeUrl('/user?id&foo=123', {
      queries: {
        id: 'abc',
        height: '170'
      }
    })).toBe('/user?foo=123&id=abc&height=170')
  });

});
