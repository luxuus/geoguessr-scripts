// ==UserScript==
// @name         Geoguessr Dark Mode
// @description  Dark Mode for Geoguessr
// @version      1.0
// @author       luxus
// @run-at       document-start
// @match        *://*.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?domain=geoguessr.com
// @grant        none
// ==/UserScript==

let primary="black";
let secondary="#080b0c";

let theme="#7950e5";
let text="white";
let text_variant="#a19bd9";
let level="#fecd19";
let validation="#6cb928";
let link="#fff";


const primary_bg=`background:${primary}`;
const secondary_bg=`background:${secondary}`;
const modal=`background: rgb(0 0 0 / 95%);`;


let style = document.createElement('style');
style.innerHTML = `

:root{

--background-color:${primary};
--variant-background-color:${primary};
--ds-color-black:${primary};
--ds-color-purple-80:${primary};
--color-grey-0:white;

--ds-color-black-70:${secondary};
--ds-color-purple-100:${secondary};
--ds-color-white-10:${secondary};

--ds-color-white:${text};
--ds-color-yellow-50:${level};
--ds-color-purple-50:${theme};
--ds-color-purple-20:${text_variant};
--ds-color-green-80:${validation};
--ds-color-black-80:${modal};
--color-beige-10:${secondary};
--color-beige-20:${secondary};
--color-grey-90:${text};

}

.friend-chat_overlay__0RbAc{${modal}}
.friend-chat_chatModal__8wlvi{${primary_bg}}
.competitive-banner_secondCircle__AEYW0:before{background-color:transparent}
.qualifiers_wrapper__w0FqD{background:none}
.sidebar_container__eNBoP{${primary_bg}}
.map-maker-map_container__SEscx{${primary_bg}}
.background_colorPurpleTurquoise__6wdKt{${primary_bg}}
.card--white{${secondary_bg}}
.classic_explorerCard__Lahkb{${secondary_bg}}
.slanted-wrapper_variantPurple__95_Ub{--variant-background-color:${primary}}
.edit-round_main__ZJS54{${secondary_bg}}
.game-editor_roundPanel__K4Dp5{${secondary_bg}}
.game-editor_root__afDeb{${primary_bg}}
.modal_colorPurple__5Aqu3{${secondary_bg}}
.styles_root__xtFFF{${primary_bg}}
.button--primary{color:${text}}
.highlighted-quiz_root__lqRha{z-index:99}
.title{color:${level}}
.take-over-modal_circle__JCDuk.take-over-modal_type1__I4OZh{${primary_bg}}
.styles_label__66OQc{color:${text}}
.highlight-label_highlightLabel__PAfx8{color:${level}}
.hud_root__zV1Pe{color:${text}}
.game-summary_selectedRound__BnoqV, .game-summary_selectedRound__BnoqV:hover{background:${secondary}}
.game-summary_bottom__PMrfV{box-shadow:0 -1.5rem 3rem rgb(0 0 0 / 60%);background:linear-gradient(0deg,#040404,rgb(0 0 0 / 50%))}
.game-summary_container__Aeqxl{background:${primary}}
.game-finished_bottom__EB5Jx{box-shadow:0 -1.5rem 3rem rgb(0 0 0 / 60%);background:linear-gradient(0deg,#040404,rgb(0 0 0 / 50%))}
.health-bar_slant__Va1GK{background:${primary}}
.health-bar_barInnerContainer__eCair{background:${primary}}
.quiz-friend-leaderboard_leaderboardRow__pnMtc.quiz-friend-leaderboard_highlighted__yeEba{background:${secondary}}
.official-quiz-game-finished_root__7lJzo{background:none}
.quiz-question_layout__lJwUy{background:none}
.overlays_backdrop__sIb35{background:none}
div[class^="quick-search"]{--background-color:${primary};z-index:99}
.active-events_event__zuer_>div{background:${secondary};background-image:none !important}
.grid_gapSizeLarge__DIJSo>div{z-index:1}
.competitive-banner_secondCircle__EylnD:before{background:none}
.gmnoprint path{fill:${primary}}
.table_tr__17BnR{--highlight-color:${secondary}}
.styles_variantPurple__puakw{--variant-background-color:${primary}}
.link{color:${link}}
.results_selected___yiF6{${secondary_bg}}
p{color:${text}}
div[class^="form-field_label"]{color:${text}}
span[class^="checkbox__mark"]{color:${text}}
main[class^="version3"]{${primary_bg}}
.header_header__BxMhs{${secondary_bg}}
.side-tray_body__Uy1NP{${secondary_bg}}
.footer_footer__NmtmJ{${secondary_bg}}
.sidebar_sidebar__9LNRl{${secondary_bg}}
.overlay-modal_variantPurpleTransparent__IVpWk{${modal}}
.modal_contentContainer__jOaNm{${modal}}
.modal_colorBlack__dy2cr{${primary_bg}}
.classic_main__JenaD{${primary_bg}}
.result-layout_content__jAHfP{${primary_bg}}
.fullscreen-spinner_backgroundSolid__kZ0BT{${primary_bg}}
.lobby_bottom__261lZ{box-shadow:0 -1.5rem 3rem rgb(0 0 0 / 60%);background:linear-gradient(0deg,#040404,rgb(0 0 0 / 50%))}
.confirmation-dialog_confirmationDialog__inOcr{background:rgb(0 0 0 / 80%)}
.leagues__divider-block{${primary_bg};border:none}
.no-context-layout_content__SBpzx{${primary_bg}}
.video-card_description__EHMXF{color:${text}}
.body-2{color:${text}}
.body-2 a{color:${link}}
.maps_center__qgEot{color:${text}}
body{color:${text}}
.game-list-item{background:white;color:white}
.game-list-item:hover{background:white}
.game-list-item__footer{box-shadow:none}
.game-list-item a{color:var(--color-blue-70)}
.grid .grid--gutter-size-medium .grid--num-columns-4{background:white}}
.classic_explorerCard__Lahkb{background:#080b0c}
`;
document.body.append(style);