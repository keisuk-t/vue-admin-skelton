const namespaces = [ "hoge", "keisuk-t" ]

export default {
  get: () => [200, namespaces],

  post: ({ data }) => {
    namespaces.push({
      name: data.name
    })

    return [201]
  }
}
