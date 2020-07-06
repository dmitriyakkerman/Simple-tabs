class Tabs {
  constructor(options = {}) {
    this.tabLinks = options.tabLinks;
    this.tabPanels = options.tabPanels;

    this.addClassesOnInit();
    this.setCurrent();
  }

  static clearClasses() {

    let tabLinks = document.querySelectorAll('.tabs__link');
    tabLinks.forEach(function(tabLink) {
      tabLink.classList.remove('active');
    });
  }

    addClassesOnInit() {

        let that = this;

        that.tabLinks.forEach(function(tabLink, index) {
            tabLink.classList.add('tabs__link');

            if(index === 0) {
                tabLink.classList.add('active');
            }
        })

        that.tabPanels.forEach(function(tabPanel, index) {
            tabPanel.classList.add('tabs__panel');

            if(index === 0) {
                tabPanel.classList.add('active');
            }
        })
    }

  setCurrent() {

    let that = this;

    that.tabLinks.forEach(function(tabLink, tabLinkIndex) {
      tabLink.addEventListener('click', function(e) {
        e.preventDefault();

        that.constructor.clearClasses();
        tabLink.classList.add('active');

        that.tabPanels.forEach(function(tabPanel, tabPanelIndex) {
         if(tabLinkIndex === tabPanelIndex) {
           tabPanel.classList.add('active')
         }
         else {
           tabPanel.classList.remove('active')
         }
        })
      })
    })
  }
}