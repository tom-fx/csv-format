const path = require('path');
const { exec } = require('child_process');

describe('csv-format', () => {
  const cli = path.resolve(__dirname, '../csv-format.js')
  const input = path.resolve(__dirname, 'fixtures/testEmails.csv')

  it('does reformat', (done) => {
    exec(`${cli} ${input}`, () => {
      console.log('WRITE SOME TESTS');
      done()
    })
  })
})
