import Test from 'ava';
import Pokemon from '../src';

Test(`all()`, async t => {
  const response = await Pokemon.all();
  t.truthy(response instanceof Array);
});

Test(`startsWith()`, async t => {
  const response = await Pokemon.startsWith('bu');
  console.log(response);
  t.truthy(response instanceof Array);
});

Test(`endsWith()`, async t => {
  const response = await Pokemon.endsWith('om');
  console.log(response);
  t.truthy(response instanceof Array);
});
