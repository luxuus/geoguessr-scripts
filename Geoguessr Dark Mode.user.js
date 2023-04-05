// ==UserScript==
// @name         Geoguessr Dark Mode
// @description  Dark Mode for Geoguessr
// @version      1.1
// @author       luxus
// @namespace    luxuus.dev
// @run-at       document-start
// @match        *://*.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?domain=geoguessr.com
// @grant        none
// ==/UserScript==

let primary="black";
let secondary="#0f0f0f";
let secondary_hover="#141414";
let primary90="rgba(0, 0, 0, 0.9)";
let modal="linear-gradient(0deg,rgb(0 0 0 / 70%),rgb(0 0 0 / 70%))";
let content="white";
let link="#49c7ff";
let title="#8d8d8d";
let warning="#3a3a3a";


let style = document.createElement('style');
style.innerHTML = `

:root{
--page-background-color:${primary};
--ds-color-purple-100: ${secondary};
--ds-color-white-10: ${secondary};
--ds-color-black-80: ${secondary};
--color-blue-70: ${title};
--ds-color-black-70:${warning};
}

.background_backgroundClassic__ySr_Z,
.background_backgroundHome__lurxW,
.background_backgroundProfile__EY4oP,
.background_backgroundMultiplayer__TLhIS,
.party_root__EQz_N,
.party-footer_root__Rz_io,
.vertical_root__zz5g3,
.modal_colorBlack__dy2cr,
.confirmation-dialog_content__cwdow,
.result-layout_contentNew__dDdP0,
.fullscreen-spinner_root__IwRRr,
.fullscreen-spinner_backgroundSolid__kZ0BT,
.quiz_root__IJGS_,
.game-editor_root__afDeb,
.preview-overlay_root__Uj38k,
.no-context-layout_wrapper__4P7rz,
.background_backgroundCareer__yuR0i,
.background_backgroundGroupEvents__FqBS3,
.background_backgroundParty__5s7oG,
.lobby_bottom__261lZ,
.version4-in-game_backgroundCups__jO0My
{
    background:${primary};
}


.game-editor_roundPanel__K4Dp5,
.edit-round_main__ZJS54,
.team-friend-card_friendCard__Xp0Sz,
.waiting-message_roundStatusMessage__McbU_,
.friend-card_friendCard__V5XsF
{
    background:${secondary}
}

.side-tray_body__pV6bt,
.overlay-modal_backlight__Ekx7t,
.game-menu_gameMenu__8ON8f,
.friend-chat_chatModal__8wlvi,
.quick-search_resultList__cLjml,
.team-friends-modal_modal__9Gla_
{
    background:${primary90};
}

.modal_backlight__kSwcy,
.friend-chat_overlay__0RbAc,
.confirmation-dialog_confirmationDialog__inOcr,
.team-friends-modal_overlay__2e_Y_{
    background:${modal};
}

.slanted-wrapper_variantGrayTransparent__aufaF
{
    --variant-background-color:${secondary};
}

.slanted-wrapper_variantGrayTransparent__aufaF.slanted-wrapper_interactive__JJn8d:hover,
.slanted-wrapper_variantGrayTransparent__aufaF.slanted-wrapper_interactive__JJn8d:focus-within
{
    --variant-background-color:${secondary_hover};
}


.lobby_bottom__261lZ{
    box-shadow:none;
}

.version4-in-game_backgroundDefault__EdFDb{
    --background:${primary};
}

.profile-settings__link,
.checklist_checklist__prLBn a,
.link,
.card__content>a,
.gift-card-iframe_white__Ix_zz,
.terms_part__fPXk2 a{
    color:${link};
}

.slanted-wrapper_variantPurple__95_Ub
{
    --variant-background-color:${primary};
    --variant-box-shadow:none;
}

.panorama-compass_compassContainer__MEnh0{
    background:#0000004f;
}

.panorama-compass_compass__MrdBa,
.edit-profile__section,
.subscription__section{
    background:none;
}

.edit-profile__section,
.subscription__section
{
    border-color:transparent;
}

.body-1,
.body-2
{
    color:${content};
}


.card{
    --background-color: ${secondary};
    --color: ${content};
}

.card.card--white.card--medium-spacing{
    border:.0625rem solid var(--ds-color-white-20);
}

.flash_typeInfo__NpA4k{
    --color:var(--ds-color-yellow-50);
}



`;
document.body.append(style);