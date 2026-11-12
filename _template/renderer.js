/* Grupo DOISM — Link Page Renderer (shared) */

var ICONS = {
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  youtube:   '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>',
  linkedin:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a6 6 0 0 1 2-2z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  whatsapp:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  tiktok:    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>',
  facebook:  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>'
};

var LOGO_SVG = '<svg viewBox="0 0 72 72" width="68" height="68" xmlns="http://www.w3.org/2000/svg" aria-label="Grupo DOISM"><rect x="6" y="6" width="28" height="5" fill="#fff"/><rect x="6" y="6" width="5" height="28" fill="#fff"/><rect x="6" y="29" width="20" height="5" fill="#fff"/><rect x="20" y="18" width="14" height="5" fill="#fff"/><rect x="29" y="6" width="5" height="17" fill="#fff"/><rect x="6" y="40" width="20" height="5" fill="#29ABE2"/><rect x="6" y="40" width="5" height="10" fill="#29ABE2"/><rect x="6" y="50" width="20" height="5" fill="#29ABE2"/><rect x="21" y="55" width="5" height="11" fill="#29ABE2"/><rect x="6" y="61" width="20" height="5" fill="#29ABE2"/><rect x="38" y="40" width="5" height="26" fill="#fff"/><rect x="43" y="40" width="11" height="5" fill="#fff"/><rect x="49" y="40" width="5" height="11" fill="#fff"/><rect x="54" y="40" width="12" height="5" fill="#fff"/><rect x="61" y="40" width="5" height="26" fill="#fff"/></svg>';

function getCount(id) { try { return parseInt(localStorage.getItem('click_'+id)||'0'); } catch { return 0; } }
function incCount(id) { try { localStorage.setItem('click_'+id, getCount(id)+1); } catch {} }

function render(profile, links, socials) {
  document.title = profile.title;

  /* ── Background image / color ── */
  if (profile.bgColor) document.body.style.setProperty('--bg', profile.bgColor);
  if (profile.bgImage) {
    document.body.style.backgroundImage = 'url("'+profile.bgImage+'")';
    document.body.classList.add('has-bg');
  }

  /* ── Avatar ── */
  var avatarEl = document.getElementById('avatar-inner');
  var ringEl   = document.getElementById('avatar-ring');
  if (avatarEl) {
    if (profile.avatar) {
      /* Photo — round shape */
      if (ringEl) ringEl.classList.add('round');
      var img = document.createElement('img');
      img.src = profile.avatar; img.alt = profile.name + profile.nameSuffix;
      avatarEl.appendChild(img);
    } else {
      avatarEl.innerHTML = profile.showLogo
        ? LOGO_SVG
        : '<span class="initials">'+profile.initials+'</span>';
    }
  }

  var nameEl = document.getElementById('profile-name');
  if (nameEl) nameEl.innerHTML = profile.name + '<span style="color:var(--accent)">'+profile.nameBlue+'</span>'+profile.nameSuffix;

  var bioEl = document.getElementById('profile-bio');
  if (bioEl) bioEl.innerHTML = profile.bio;

  var footerEl = document.getElementById('footer');
  if (footerEl) footerEl.textContent = profile.footer;

  var linksEl = document.getElementById('links-container');
  if (linksEl) links.forEach(function(item) {
    var count = getCount(item.id);
    var a = document.createElement('a');
    a.href = item.url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.className = 'link-btn';
    a.innerHTML =
      '<span class="link-icon" style="background:'+item.color+'1a;color:'+item.color+'">'+item.icon+'</span>'+
      '<span class="link-label">'+item.label+'</span>'+
      (count > 0 ? '<span class="link-count" id="cnt-'+item.id+'">'+count+'</span>' : '<span class="link-count" id="cnt-'+item.id+'" style="display:none">0</span>')+
      '<span class="link-arrow">&#8594;</span>';
    a.addEventListener('click', function() {
      incCount(item.id);
      var b = document.getElementById('cnt-'+item.id);
      if (b) { b.style.display=''; b.textContent = getCount(item.id); }
    });
    linksEl.appendChild(a);
  });

  var socialsEl = document.getElementById('socials-container');
  if (socialsEl) socials.forEach(function(item) {
    var a = document.createElement('a');
    a.href = item.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.className = 'social-btn'; a.title = item.label;
    a.innerHTML = ICONS[item.icon] || item.icon;
    socialsEl.appendChild(a);
  });
}
