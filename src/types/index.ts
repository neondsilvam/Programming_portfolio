export type Lang = 'es' | 'en'

export type Page = 'profile' | 'webExp' | 'gameExp' | 'contact'

export interface HighlightProjects {
  id: string
  title: string
  description: string
  imgSrc: string
  posInList: number
  section: Page
}

export interface Project {
  id: string
  title: string
  description: string
  isProjectDeployed: boolean
  iframeSrc: string
  imageSrc: string
  section: string
  hasExternalLinks: boolean
  externalLinks: string
  isShowingTheProcess: boolean
  process: {
    sections:  {
      preproduction: {
        title: string
        description: string []
        media: string []
      }
      production: {
        title: string
        description: string []
        media: string []
      }
      postproduction: {
        title: string
        description: string []
        media: string []
      }
    }
    sectionFooter: string,
    footerHasLink: boolean,
    footerLink: string,
    itHasBeenPublished: boolean
    publishedLink: string
  }
  CaseStudy: CaseStudy[]
}

export interface ProjectTranslation {
    id: string
    title: string
    description: string
}

export interface Section {
  id: string
  label: string
}

export interface Translations {
  nav: {
    logo: string
    profile: string
    web: string
    mobile: string
    gameExp: string
    uiExp: string
    contact: string
    langBtn: string
  }
  profilePage: {
    catchPhrase: string
    identitySentence: string
    name: string
    role: string
    description: string
    tags: string[]
    Highlights: {
      title: string
      subTitle: string
    }
    seeMore: string
  }
  webProjects: {
      sections: Section[]
      clarification: string,
      projects: ProjectTranslation[]
      showingProcessButtonTextFalse: string
      showingProcessButtonTextTrue: string
      CVText: string
  }
  gameExp: {
    sections: Section[]
    clarification: string,
    projects: ProjectTranslation[]
    showingProcessButtonTextFalse: string
    showingProcessButtonTextTrue: string
    CVText: string
  }
  contactPage: {
    title: string
    subtitle1: string
    subtitle2: string
    ShortSubtitle: string
    labels: {
      email: string
      phoneCol: string
      phoneCad: string
      location: string
      linkedin: string
      MainGithub: string
      SecondaryGithub: string
    }
  }
}

export type PagePops = {
  currentPage: Page;
}

export type GameWidgetProps = {
  id: string
}

export type CaseStudy = {
  id: string
  title: string
  description: {
    context: string
    problem: string
    possibilities: string
    decision: string
    outcome: string
  }
}