interface IRoutes {
  index: string
  writing: string
  post: (slug: string) => string
}

export const routes: IRoutes = {
  index: '/',
  writing: 'writing',
  post: (slug) => `/${slug}`,
}
