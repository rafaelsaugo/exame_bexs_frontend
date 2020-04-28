const size = {
  mobileV: '320px',
  mobileH: '480px',
  tabletV: '720px',
  tabletH: '960px',
  desktop: '1366px',
}

export const MediaQuery = Object.keys(size).reduce((acc, key) => {
  acc[key] = style => `
    @media (min-width: ${size[key]}) {
      ${style};
    }
  `
  return acc
}, {})
