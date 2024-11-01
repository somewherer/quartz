import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
    Component.Search(),
    Component.DesktopOnly(Component.FeaturedLinks()),
  ],
  afterBody: [
    Component.MobileOnly(Component.FeaturedLinks()),
    Component.MobileOnly(Component.Graph()),
    Component.MobileOnly(Component.RecentNotes()),
  ],
  footer: Component.Footer({
    links: {
      // "♡ somewherer ♡": "https://github.com/somewherer",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  right: [
    Component.DesktopOnly(
      Component.Graph({
        localGraph: {
          drag: true, // whether to allow panning the view around
          zoom: true, // whether to allow zooming in and out
          depth: 1, // how many hops of notes to display
          scale: 1.5, // default view scale
          repelForce: 2, // how much nodes should repel each other
          centerForce: 0.3, // how much force to use when trying to center the nodes
          linkDistance: 20, // how long should the links be by default?
          fontSize: 0.3, // what size should the node labels be?
          opacityScale: 5, // how quickly do we fade out the labels when zooming out?
          removeTags: [], // what tags to remove from the graph
          showTags: true, // whether to show tags in the graph
        },
        globalGraph: {
          drag: true, // whether to allow panning the view around
          zoom: true, // whether to allow zooming in and out
          depth: 4, // how many hops of notes to display
          scale: 1.6, // default view scale
          repelForce: 2, // how much nodes should repel each other
          centerForce: 0.8, // how much force to use when trying to center the nodes
          linkDistance: 40, // how long should the links be by default?
          fontSize: 0.25, // what size should the node labels be?
          opacityScale: 5, // how quickly do we fade out the labels when zooming out?
          removeTags: [], // what tags to remove from the graph
          showTags: true, // whether to show tags in the graph
        }
      }),
    ),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  right: [],
}
