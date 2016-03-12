Package.describe({
  name: 'ericmcgregor:bvstrap',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.onUse(function(api) {

  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
  	'fourseven:scss@3.4.1',
    'jquery',
  ]);

  api.add_files('Chart.js', "client");
  api.add_files('tether.js', "client");
  api.add_files('d3.js', "client");
  api.add_files('c3.js', "client");
  api.add_files('pyramid.js', "client");
  api.add_files('pyramid.css', "client");
  api.add_files('c3.css', "client");
  api.add_files('bvbootstrap/node_modules/bootstrap/dist/js/bootstrap.js', "client");

  api.add_files([

    'bvbootstrap/node_modules/bootstrap/scss/mixins/_alert.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_background-variant.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_border-radius.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_breakpoints.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_buttons.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_cards.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_center-block.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_clearfix.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_forms.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_gradients.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_grid-framework.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_grid.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_hover.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_image.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_label.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_list-group.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_lists.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_nav-divider.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_navbar-align.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_pagination.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_progress.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_pulls.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_reset-filter.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_reset-text.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_resize.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_screen-reader.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_size.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_tab-focus.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_table-row.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_text-emphasis.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_text-hide.scss',
    'bvbootstrap/node_modules/bootstrap/scss/mixins/_text-truncate.scss'
    ],
    "client", {
      isImport: true
    }
  )

  api.addFiles([

    'bvbootstrap/node_modules/bootstrap/scss/_alert.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_animation.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_breadcrumb.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_button-group.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_buttons.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_card.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_carousel.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_close.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_code.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_custom-forms.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_dropdown.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_forms.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_grid.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_images.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_input-group.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_jumbotron.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_labels.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_list-group.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_media.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_mixins.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_modal.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_nav.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_navbar.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_normalize.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_pager.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_pagination.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_popover.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_print.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_progress.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_reboot.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_responsive-embed.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_tables.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_tooltip.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_type.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_utilities-background.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_utilities-responsive.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_utilities-spacing.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_utilities.scss',
    'bvbootstrap/node_modules/bootstrap/scss/_variables.scss',
    'bvbootstrap/node_modules/bootstrap/scss/bootstrap-grid.scss',
    'bvbootstrap/node_modules/bootstrap/scss/bootstrap-reboot.scss',
    ],
    "client", {
      isImport: true
    }
  )

  // api.add_files('bvbootstrap/dist/bvbootstrap.css', "client");
  api.add_files([
    'bvbootstrap/_variables.scss',
    'bvbootstrap/_fonts.scss',
    'bvbootstrap/_layout.scss',
    'bvbootstrap/_mixins.scss',
    // 'node_modules/bootstrap/scss/bootstrap',
    'bvbootstrap/_custom-styles.scss',
    '_bootstrap.scss',
    '_bvbootstrap.scss',
  ], "client", {
    isImport:true
  });

});
