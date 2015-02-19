
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* Linkificator preferences - Linkificator's module
 * author: MarkaPola */

pref("extensions.linkificator@markapola.activated", true);
pref("extensions.linkificator@markapola.displayWidget", true);
pref("extensions.linkificator@markapola.contextMenuIntegration", true);
pref("extensions.linkificator@markapola.widgetMiddleClick", "toggle");
pref("extensions.linkificator@markapola.widgetRightClick", "none");
pref("extensions.linkificator@markapola.hotkeyName", "hotkeyToggle");
pref("extensions.linkificator@markapola.hotkeyValue", "control-shift-y");
pref("extensions.linkificator@markapola.hotkeyToggle", "control-shift-y");
pref("extensions.linkificator@markapola.hotkeyManage", "control-shift-x");
pref("extensions.linkificator@markapola.hotkeyParse", "control-shift-u");
pref("extensions.linkificator@markapola.useRegExp", true);
pref("extensions.linkificator@markapola.filterMode", "black");
pref("extensions.linkificator@markapola.whitelist", "");
pref("extensions.linkificator@markapola.blacklist", "^about: localhost www\\.google\\..* www\\.yahoo\\..* www\\.yandex\\..* www\\.deezer\\.com.*");
pref("extensions.linkificator@markapola.overrideTextColor", false);
pref("extensions.linkificator@markapola.linkColor", "#006620");
pref("extensions.linkificator@markapola.overrideBackgroundColor", false);
pref("extensions.linkificator@markapola.backgroundColor", "#fff9ab");
pref("extensions.linkificator@markapola.supportEmail", true);
pref("extensions.linkificator@markapola.emailUseTLD", true);
pref("extensions.linkificator@markapola.supportAbout", false);
pref("extensions.linkificator@markapola.supportStandardURLs", true);
pref("extensions.linkificator@markapola.standardURLUseSubdomains", true);
pref("extensions.linkificator@markapola.standardURLUseTLD", true);
pref("extensions.linkificator@markapola.standardURLLinkifyAuthority", false);
pref("extensions.linkificator@markapola.supportInlineElements", true);
pref("extensions.linkificator@markapola.automaticLinkification", true);
pref("extensions.linkificator@markapola.autoLinkificationInterval", true);
pref("extensions.linkificator@markapola.autoLinkificationIntervalValue", 2000);
pref("extensions.linkificator@markapola.autoLinkificationThreshold", true);
pref("extensions.linkificator@markapola.autoLinkificationThresholdValue", 500);
pref("extensions.linkificator@markapola.autoLinkificationDelay", 300);
pref("extensions.linkificator@markapola.supportCustomRulesBefore", false);
pref("extensions.linkificator@markapola.supportCustomRulesAfter", false);
pref("extensions.linkificator@markapola.customRules", "{\"beforeList\":[],\"afterList\":[{\"name\":\"URN:NBN Resolver, Redirect to document itself\",\"pattern\":\"urn:nbn:[a-z0-9]{2,}[:-][^[\\\\]{}<>\\\\\\\\|~^\\\"`\\\\s]+\",\"url\":\"http://nbn-resolving.org/redirect/$&\",\"active\":true},{\"name\":\"URN:NBN Resolver, All Links\",\"pattern\":\"urn:nbn:[a-z0-9]{2,}[:-][^[\\\\]{}<>\\\\\\\\|~^\\\"`\\\\s]+\",\"url\":\"http://nbn-resolving.org/$&\",\"active\":false}]}");
pref("extensions.linkificator@markapola.requiredCharacters", ":@/?#");
pref("extensions.linkificator@markapola.protocols", "h..p~http#2;h..ps~https#2;ftp~ftp#2;nntp~nntp#2;telnet~telnet#2;irc~irc#2;file~file#3");
pref("extensions.linkificator@markapola.subdomains", "www~www\\d{0,3}~http://;ftp~ftp~ftp://;irc~irc~irc://");
pref("extensions.linkificator@markapola.excludedElements", "a;applet;area;audio;embed;frame;frameset;head;iframe;img;map;meta;noscript;object;option;param;pre;script;select;style;textarea;title;video;@onclick;@onmousedown;@onmouseup");
pref("extensions.linkificator@markapola.inlineElements", "b;i;big;small;em;strong;tt;span;wbr");
pref("extensions.linkificator@markapola.maxDataSize", 20000);
pref("extensions.linkificator@markapola.sync", false);
pref("extensions.linkificator@markapola.processing", "{\"interval\":10,\"iterations\":40}");
pref("extensions.linkificator@markapola.useGTLDs", true);
pref("extensions.linkificator@markapola.gTLDs", "academy;accountants;active;actor;adult;aero;agency;airforce;allfinanz;archi;army;arpa;asia;associates;attorney;auction;audio;autos;band;bargains;beer;best;bid;bike;bio;biz;black;blackfriday;blue;boo;boutique;build;builders;business;buzz;cab;camera;camp;cancerresearch;capital;cards;care;career;careers;casa;cash;cat;catering;center;ceo;channel;cheap;christmas;church;citic;city;claims;cleaning;click;clinic;clothing;club;codes;coffee;college;com;community;company;computer;construction;contractors;cooking;cool;coop;country;credit;creditcard;cricket;cruises;dance;dating;day;deals;degree;delivery;democrat;dental;dentist;desi;dev;diamonds;diet;digital;direct;directory;discount;docs;domains;eat;edu;education;email;energy;engineer;engineering;enterprises;equipment;esq;estate;events;exchange;expert;exposed;fail;farm;fashion;feedback;finance;financial;fish;fishing;fitness;flights;florist;flowers;fly;foo;forsale;foundation;frogans;fund;furniture;futbol;gallery;garden;gift;gifts;gives;glass;global;globo;gmo;gop;gov;graphics;gratis;gripe;guide;guitars;guru;haus;healthcare;help;here;hiphop;hiv;holdings;holiday;homes;horse;host;hosting;house;how;immo;immobilien;industries;info;ing;institute;insure;int;international;investments;jetzt;jobs;juegos;kaufen;kim;kitchen;kiwi;kred;land;law;lease;legal;life;lighting;limited;limo;link;loans;lotto;luxe;luxury;management;mango;market;marketing;media;meet;meme;memorial;menu;mil;mobi;moda;moe;monash;money;mortage;museum;motorcycles;mov;name;navy;net;network;neustar;new;ninja;ong;onl;org;organic;partners;parts;party;photo;photography;photos;pics;pictures;pink;plumbing;porn;post;press;pro;prod;productions;prof;properties;property;pub;qpon;recipes;red;rehab;reise;reisen;ren;rentals;repair;report;rest;reviews;rich;rip;rocks;rodeo;rsvp;ruhr;ryukyu;saarland;sale;science;schule;services;sew;sexy;shiksha;shoes;singles;social;software;sohu;solar;solutions;soy;space;supplies;supply;support;surgery;systems;tattoo;tax;technology;tel;tienda;tips;tires;today;tools;top;town;toys;trade;training;travel;trust;university;uno;vacations;vegas;ventures;versicherung;vet;viajes;video;villas;vision;vodka;vote;voting;voto;voyage;wang;watch;webcam;website;wed;wedding;wiki;work;works;world;wtc;wtf;xxx;xyz;yachts;yoga;zip;zone");
pref("extensions.linkificator@markapola.useCcTLDs", true);
pref("extensions.linkificator@markapola.ccTLDs", "ac;ad;ae;af;ag;ai;al;am;an;ao;aq;ar;as;at;au;aw;ax;az;ba;bb;bd;be;bf;bg;bh;bi;bj;bm;bn;bo;br;bs;bt;bv;bw;by;bz;ca;cc;cd;cf;cg;ch;ci;ck;cl;cm;cn;co;cr;cu;cv;cw;cx;cy;cz;de;dj;dk;dm;do;dz;ec;ee;eg;er;es;et;eu;fi;fj;fk;fm;fo;fr;ga;gb;gd;ge;gf;gg;gh;gi;gl;gm;gn;gp;gq;gr;gs;gt;gu;gw;gy;hk;hm;hn;hr;ht;hu;id;ie;il;im;in;io;iq;ir;is;it;je;jm;jo;jp;ke;kg;kh;ki;km;kn;kp;kr;kw;ky;kz;la;lb;lc;li;lk;lr;ls;lt;lu;lv;ly;ma;mc;md;me;mg;mh;mk;ml;mm;mn;mo;mp;mq;mr;ms;mt;mu;mv;mw;mx;my;mz;na;nc;ne;nf;ng;ni;nl;no;np;nr;nu;nz;om;pa;pe;pf;pg;ph;pk;pl;pm;pn;pr;ps;pt;pw;py;qa;re;ro;rs;ru;rw;sa;sb;sc;sd;se;sg;sh;si;sj;sk;sl;sm;sn;so;sr;st;su;sv;sx;sy;sz;tc;td;tf;tg;th;tj;tk;tl;tm;tn;to;tp;tr;tt;tv;tw;tz;ua;ug;uk;us;uy;uz;va;vc;ve;vg;vi;vn;vu;wf;ws;ye;yt;za;zm;zw");
pref("extensions.linkificator@markapola.useGeoTLDs", true);
pref("extensions.linkificator@markapola.geoTLDs", "abudhabi;africa;alsace;amsterdam;aquitaine;bar;barcelona;bayern;berlin;boston;brussels;budapest;bzh;capetown;catalonia;cologne;cymru;dohaa;dubai;durban;frl;gent;hamburg;helsinki;istanbul;joburg;koeln;kyoto;london;madrid;melbourne;miami;moscow;nagoya;nrw;nyc;okinawa;osaka;paris;place;quebec;rio;roma;saarland;scot;stockholm;sydney;taipei;tirol;tokyo;tui;vlaanderen;wales;wien;zuerich;yokohama");
pref("extensions.linkificator@markapola.useCommunityTLDs", true);
pref("extensions.linkificator@markapola.communityTLDs", "abogado;aco;adac;android;aquarelle;archi;art;audi;axa;bank;bbb;bloomberg;bmw;bnpparibas;bugatti;bzh;cal;caravan;catholic;cartier;cern;chrome;coach;corp;corsica;cpa;crs;cuisinella;dad;doosan;dvag;eco;edeka;emerck;eurovision;eus;everbank;firmdale;flsmidth;gal;gay;gea;gbiz;ggee;gle;gmail;gmbh;gmx;google;gree;green;halal;hotel;ibm;ieee;ikano;immo;inc;insurance;irish;islam;ismaili;iwc;kids;krd;lacaixa;lamborghini;latrobe;lds;leclerc;lgbt;lidl;llc;llp;ltda;med;merck;mini;mls;mma;mormon;music;nexus;ngo;nhk;nra;ong;ooo;otsuka;ovh;pars;pharmacy;physio;pizza;poker;pohl;praxi;radio;realtor;reit;republican;restaurant;samsung;sarl;sca;scb;schmidt;schwarz;shia;shop;shriram;ski;sky;spa;spiegel;sport;stada;surf;suzuki;swiss;taxi;tatar;tennis;thai;uol;versicherung;webs;whoswho;williamhill;wme;yandex;youtube");
// sync management, deactivated by default
pref("services.sync.prefs.sync.extensions.linkificator@markapola.displayWidget", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.contextMenuIntegration", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.widgetMiddleClick", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.widgetRightClick", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.hotkeyName", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.hotkeyValue", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.hotkeyToggle", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.hotkeyManage", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.hotkeyParse", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.useRegExp", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.filterMode", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.whitelist", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.blacklist", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.overrideTextColor", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.linkColor", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.overrideBackgroundColor", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.backgroundColor", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportEmail", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.emailUseTLD", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportAbout", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportStandardURLs", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.standardURLUseSubdomains", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.standardURLUseTLD", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.standardURLLinkifyAuthority", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportInlineElements", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.automaticLinkification", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.autoLinkificationInterval", true);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.autoLinkificationIntervalValue", 2000);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.autoLinkificationThreshold", true);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.autoLinkificationThresholdValue", 500);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.autoLinkificationDelay", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportCustomRulesBefore", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.supportCustomRulesAfter", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.customRules", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.requiredCharacters", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.protocols", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.subdomains", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.excludedElements", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.inlineElements", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.maxDataSize", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.useGTLDs", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.gTLDs", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.useCcTLDs", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.ccTLDs", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.useGeoTLDs", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.geoTLDs", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.useCommunityTLDs", false);
pref("services.sync.prefs.sync.extensions.linkificator@markapola.communityTLDs", false);
