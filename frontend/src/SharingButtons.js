import React from 'react';
import ShareTwitter from './micro-components/ShareTwitter';
import ShareWhatsapp from './micro-components/ShareWhatsapp';
import ShareFacebook from './micro-components/ShareFacebook';

const ShareButtons = () => {
    return(
        <section className="sharing-wrapper">
            <ShareTwitter />
            <ShareWhatsapp />
            <ShareFacebook />
        </section>
    );
}

export default ShareButtons;