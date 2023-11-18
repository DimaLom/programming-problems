const obj = {
    foo: 'abc',
    bar: 781,
    baz: 1337n,
    foz: '123'
}


const serializer = (data) => JSON.stringify(data, (_, v) => typeof v === 'bigint' ? `${v.toString()}n` : v);
const parser = (json) => JSON.parse(json, (_, v) => typeof v === 'string' && /\d+n/g.test(v) ? BigInt(v.substring(0, v.indexOf('n'))) : v );

const serialized = serializer(obj);
const parsed = parser(serialized);