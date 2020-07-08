import { required, moreThan, equalOrBiggerThan, validate } from '../validations'

describe('validation', () => {
  describe('rules', () => {
    describe('require', () => {
      it('empty', () => {
        expect(required('')).toBe(false)
      })

      it('filled', () => {
        expect(required('wadus')).toBe(true)
      })
    })

    describe('moreThan', () => {
      it('length 3', () => {
        const moreThan3 = moreThan(3)
        expect(moreThan3('')).toBe(false)
        expect(moreThan3('ab')).toBe(false)
        expect(moreThan3('abcd')).toBe(true)
      })
    })

    describe('equalOrBiggerThan', () => {
      it('equal or bigger than 3', () => {
        const equalOrBiggerThan3 = equalOrBiggerThan(3)
        expect(equalOrBiggerThan3('wadus')).toBe(false)
        expect(equalOrBiggerThan3('0')).toBe(false)
        expect(equalOrBiggerThan3('2')).toBe(false)
        expect(equalOrBiggerThan3('3')).toBe(true)
      })
    })
  })

  describe('validate', () => {
    const validations = {
      name: [required, moreThan(3)],
      team: [required, moreThan(3)],
      score: [equalOrBiggerThan(0)]
    }

    it('all fields empty', () => {
      const state = {
        name: '',
        team: '',
        score: ''
      }

      expect(validate(state, validations)).toEqual({
        name: true,
        team: true,
        score: true
      })
    })

    it('all fields filled properly', () => {
      const state = {
        name: 'wadus',
        team: 'wadus',
        score: '10'
      }

      expect(validate(state, validations)).toEqual({})
    })
  })
})
