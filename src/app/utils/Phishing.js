const domains = [
    'steewit.com',
    'śteemit.com',
    'ŝteemit.com',
    'şteemit.com',
    'šteemit.com',
    'sţeemit.com',
    'sťeemit.com',
    'șteemit.com',
    'sleemit.com',
    'aba.ae',
    'autobidbot.cf',
    'autobidbot.ga',
    'autobidbot.gq',
    'autobotvoilk.cf',
    'autobotvoilk.ga',
    'autobotvoilk.gq',
    'autobotvoilk.ml',
    'autovoilk.info',
    'autovoilkbot.cf',
    'autovoilkbot.ga',
    'autovoilkbot.gq',
    'autovoilkbot.ml',
    'autovoilknetwork.wapka.mobi',
    'boostbot.ga',
    'boostbot.gq',
    'boostwhaleup.cf',
    'cutt.us',
    'dereferer.me',
    'eb2a.com',
    'lordlinkers.tk',
    'nullrefer.com',
    'steeemit.ml',
    'steeemitt.aba.ae',
    'voilkart.ga',
    'voilkautobot.bid',
    'voilkautobot.cf',
    'voilkautobot.trade',
    'voilkers.aba.ae',
    'voilkiit.cf',
    'voilkiit.ga',
    'voilkij.tk',
    'voilkik.ga',
    'voilkik.tk',
    'voilkil.com',
    'voilkil.ml',
    'voilkir.tk',
    'voilknetworkou.co.nf',
    'voilknetworkservices.ga',
    'voilknetworkservices.gq',
    'voilkiz.tk',
    'voilknow.cf',
    'voilknow.ga',
    'voilknow.gq',
    'voilknow.ml',
    'voilkpostupper.win',
    'voilkrewards.ml',
    'voilkrobot.ga',
    'voilkrobot.ml',
    'voilkupgot.cf',
    'voilkupgot.ga',
    'voilkupgot.gq',
    'voilkupper.cf',
    'voilkupper.ga',
    'voilkupper.gq',
    'voilkupper.ml',
    'steenit.cf',
    'stemit.com',
    'stssmater.aba.ae',
    'uppervotes.ga',
    'uppervotes.gq',
    'upperwhaleplus.cf',
    'upperwhaleplus.ga',
    'upperwhaleplus.gq',
    'upvoteme.cf',
    'upvoteme.ga',
    'upvoteme.gq',
    'upvoteme.ml',
    'url.rw',
    'us.aba.ae',
    'whaleboostup.ga',
    'whaleboostup.ml',
];

/**
 * Does this URL look like a phishing attempt?
 *
 * @param {string} questionableUrl
 * @returns {boolean}
 */
export const looksPhishy = questionableUrl => {
    for (let domain of domains) {
        if (questionableUrl.toLocaleLowerCase().indexOf(domain) > -1)
            return true;
    }

    return false;
};