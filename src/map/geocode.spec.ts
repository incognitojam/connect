import { afterEach, describe, expect, test, vi } from 'vitest'

import { getFullAddress, getPlaceName, reverseGeocode } from './geocode'

// reverseGeocode() casts the parsed JSON to the Mapbox response type, so these
// fixtures only need to carry the fields our code actually reads.
function stubGeocodeResponse(properties: Record<string, unknown> | null): void {
  const features = properties ? [{ type: 'Feature', properties }] : []
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => ({ ok: true, json: async () => ({ type: 'FeatureCollection', features }) })),
  )
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('reverseGeocode', () => {
  test('returns null at null island without hitting the API', async () => {
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)
    expect(await reverseGeocode([0, 0])).toBeNull()
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  test('returns the feature from the response', async () => {
    stubGeocodeResponse({ full_address: '1 Test Road' })
    const feature = await reverseGeocode([-0.10664, 51.514209])
    expect(feature?.properties.full_address).toBe('1 Test Road')
  })

  test('returns null when the response has no features', async () => {
    stubGeocodeResponse(null)
    expect(await reverseGeocode([-0.10664, 51.514209])).toBeNull()
  })
})

describe('getFullAddress', () => {
  test('returns null at null island', async () => {
    expect(await getFullAddress([0, 0])).toBeNull()
  })

  test('returns the feature full_address', async () => {
    stubGeocodeResponse({ full_address: '133 Fleet Street, City of London, London, EC4A 2BB, United Kingdom' })
    expect(await getFullAddress([-0.10664, 51.514209])).toBe('133 Fleet Street, City of London, London, EC4A 2BB, United Kingdom')
  })
})

describe('getPlaceName', () => {
  test('returns null at null island', async () => {
    expect(await getPlaceName([0, 0])).toBeNull()
  })

  test('prefers the most specific context entry', async () => {
    stubGeocodeResponse({
      context: {
        neighborhood: { name: 'Little Italy' },
        place: { name: 'San Diego' },
        country: { name: 'United States' },
      },
    })
    expect(await getPlaceName([-117.168638, 32.723695])).toBe('Little Italy')
  })

  test('falls back to a less specific entry when more specific ones are absent', async () => {
    stubGeocodeResponse({
      context: {
        region: { name: 'England' },
        country: { name: 'United Kingdom' },
      },
    })
    expect(await getPlaceName([-0.113643, 51.504546])).toBe('England')
  })

  test('returns an empty string when no named context is present', async () => {
    stubGeocodeResponse({ context: {} })
    expect(await getPlaceName([-0.10664, 51.514209])).toBe('')
  })
})
