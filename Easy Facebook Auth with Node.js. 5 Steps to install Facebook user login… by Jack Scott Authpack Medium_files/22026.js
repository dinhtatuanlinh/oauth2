(self.webpackChunklite=self.webpackChunklite||[]).push([[22026],{68312:(e,n,i)=>{"use strict";i.d(n,{c:()=>s,a:()=>c});var a=i(319),t=i.n(a),d=i(61598),l=i(2275),o=i(11676),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogCovers_catalogItemV2"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CatalogItemV2"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"Field",name:{kind:"Name",value:"entity"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"BookEdition"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"BookCover_bookEdition"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"alt"}}]}}]}}]}}]}}].concat(t()(o.l.definitions))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItemCovers_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"listItemsConnection"},name:{kind:"Name",value:"itemsConnection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"pagingOptions"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogCovers_catalogItemV2"}}]}}]}}]}}].concat(t()(m.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItem_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"FragmentSpread",name:{kind:"Name",value:"catalogUrl_catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"formatItemsCount_catalog"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CatalogsListItemCovers_catalog"}}]}}].concat(t()(d.Ui.definitions),t()(l.BR.definitions),t()(k.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogsListItem_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat(t()(d.$m.definitions))}},2275:(e,n,i)=>{"use strict";i.d(n,{hz:()=>c,BR:()=>s,nf:()=>k});var a=i(319),t=i.n(a),d=i(61598),l=i(16831),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Voter_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}].concat(t()(d.$m.definitions),t()(l.W.definitions))},m=i(2022),k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"getCatalogMiroURLForMetadata_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"thumbnailImage"}}]}}]},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"formatItemsCount_catalog"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Catalog"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postItemsCount"}},{kind:"Field",name:{kind:"Name",value:"bookEditionItemsCount"}}]}}]},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CatalogVotersDialog_catalogClapperConnection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CatalogClapperConnection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"clappers"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"user"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"Voter_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}},{kind:"Field",name:{kind:"Name",value:"paging"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nextPageCursor"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}}].concat(t()(o.definitions),t()(m.s.definitions))}},68058:(e,n,i)=>{"use strict";i.d(n,{J:()=>l,b:()=>o});var a=i(319),t=i.n(a),d=i(85785),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MetaHeaderBackground_imageMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ImageMetadata"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"originalWidth"}}]}}]},o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MetaHeaderBackground_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"header"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"headerScale"}},{kind:"Field",name:{kind:"Name",value:"backgroundImageDisplayMode"}},{kind:"Field",name:{kind:"Name",value:"backgroundImageVerticalAlignment"}},{kind:"Field",name:{kind:"Name",value:"backgroundColorDisplayMode"}},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"getHexFromColorValue_colorValue"}},{kind:"FragmentSpread",name:{kind:"Name",value:"getOpaqueHexFromColorValue_colorValue"}}]}},{kind:"Field",name:{kind:"Name",value:"secondaryBackgroundColor"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"getHexFromColorValue_colorValue"}}]}},{kind:"Field",name:{kind:"Name",value:"postBackgroundColor"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"getHexFromColorValue_colorValue"}}]}},{kind:"Field",name:{kind:"Name",value:"backgroundImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MetaHeaderBackground_imageMetadata"}}]}}]}}]}}].concat(t()(d.xW.definitions),t()(d.hB.definitions),t()(l.definitions))}},85785:(e,n,i)=>{"use strict";i.d(n,{xW:()=>d,hB:()=>l});var a=i(319),t=i.n(a),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"getHexFromColorValue_colorValue"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorValue"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rgb"}},{kind:"Field",name:{kind:"Name",value:"alpha"}}]}}]},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"getOpaqueHexFromColorValue_colorValue"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ColorValue"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rgb"}}]}}]};[{kind:"FragmentDefinition",name:{kind:"Name",value:"getHasCustomPrimaryColor_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"getHasCustomPrimaryColor_customStyleSheet"}}]}}]}}].concat(t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"getHasCustomPrimaryColor_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"global"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"primary"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rgb"}}]}}]}}]}}]}}])),[{kind:"FragmentDefinition",name:{kind:"Name",value:"getHasCustomBackgroundColor_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"getHasCustomBackgroundColor_customStyleSheet"}}]}}]}}].concat(t()([{kind:"FragmentDefinition",name:{kind:"Name",value:"getHasCustomBackgroundColor_customStyleSheet"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CustomStyleSheet"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"global"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorPalette"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"background"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"rgb"}}]}}]}}]}}]}}]))}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/22026.6d1fc7a4.chunk.js.map