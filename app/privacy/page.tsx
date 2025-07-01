import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, MessageSquare } from "lucide-react"
import { NetworkMesh } from "@/components/network-mesh"
import { GlitchText } from "@/components/glitch-text"
import { Button } from "@/components/ui/button"
import { HoverGlowButton } from "@/components/hover-glow-button"
import { TerminalOutput } from "@/components/terminal-output"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-[#ff0066]/20 backdrop-blur-sm bg-black/50 fixed w-full z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/kusama-logo-canary-white.png"
              alt="Kusama"
              width={60}
              height={15}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-mono tracking-wider">

            <Link href="/smart-contracts" className="text-[#ff0066] transition-colors">
              CONTRACTS
            </Link>

            <Link href="https://docs.polkadot.com/" className="text-white/80 hover:text-[#ff0066] transition-colors">
              DEVELOPMENT DOCS
            </Link>
            <Link href="https://wiki.polkadot.network/kusama/kusama-getting-started/" className="text-white/80 hover:text-[#ff0066] transition-colors">
              KUSAMA GUIDE
            </Link>

            <div className="flex items-center space-x-4 ml-4">
              <Link href="https://x.com/kusamanetwork" className="text-white/70 hover:text-[#ff0066]">
                <Twitter size={18} />
              </Link>
              <Link href="https://forum.polkadot.network/tag/kusama" className="text-white/70 hover:text-[#ff0066]">
                <MessageSquare size={18} />
              </Link>
              <Link href="https://github.com/paritytech/polkadot-sdk" className="text-white/70 hover:text-[#ff0066]">
                <Github size={18} />
              </Link>
            </div>
          </nav>

          <HoverGlowButton href="https://kusama.subsquare.io/referenda/498" className="hidden md:flex">
            THE NEW VISION
          </HoverGlowButton>

          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>




      <main className="flex-1 pt-16">

        <section className="py-24 px-4 bg-gradient-to-b from-black to-[#110011]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-white/70 mb-6 font-mono leading-relaxed">
<p>Privacy Policy<br />Last Updated: November 25, 2024</p>
<p><br />Welcome<br />With this privacy policy (&ldquo;Privacy Policy&rdquo;), Web 3.0 Technologies Foundation (&ldquo;the Foundation&rdquo; or &ldquo;we&rdquo;) informs you how we collect, use, disclose and otherwise process Personal Data (as defined under Section 3.1) in accordance with the Swiss Federal Act on Data Protection (FADP), the European General Data Protection Regulations (GDPR) and other applicable data protection legislation (&ldquo;Data Protection Laws&rdquo;), as applicable, when you use our website http://web3.foundation (&ldquo;Website&rdquo;) communicate with us, subscribe to our newsletter, interact with other ecosystem-related initiatives or projects launched in relation to the Polkadot Network and/or Kusama Network (hereinafter jointly and individually referred to as the &ldquo;Ecosystem Initiatives&rdquo;), or any of the other situations set out in Section 3 below.</p>
<p>Our Website may contain links to third-party websites. If you follow a link to any third-party websites, please note that they have their own privacy policies and that we do not accept any responsibility or liability for their policies or their processing of your data.</p>
<p>1. Data Controller and Data Processor<br />If you visit our Website or interact with the Ecosystem Initiatives, we act as the &ldquo;Data Controller&rdquo; of your Personal Data. As the Data Controller, we determine the purposes for which and the means by which your Personal Data is processed.</p>
<p>You can notify us of any data protection-related concerns using the following contact details:</p>
<p>Web 3.0 Technologies Foundation<br />Gotthardstrasse 3<br />6300 Zug<br />Switzerland</p>
<p>E-Mail: legal@web3.foundation</p>
<p>2. Your responsibilities<br />It is your responsibility to read this Privacy Policy.</p>
<p>If you share Personal Data regarding any person other than yourself, we assume that the data is correct. By sharing such data with us, you confirm that you are authorized to do so and that you have informed the affected individuals about this Privacy Policy and our processing of their Personal Data.</p>
<p>Please note that the internet is generally not a secure environment, because it is an open network that can be accessed by anyone. Therefore, we appeal to your personal responsibility with regard to the handling of your Personal Data. To the extent permitted by law, we exclude liability for the security of data that you transmit to us via the internet (e.g. by e-mail) or other electronic channels and for any direct or indirect damage.</p>
<p>3. Collection and processing of Personal Data<br />3.1 Personal Data<br />&ldquo;Personal Data&rdquo; means all data relating to identified or identifiable individuals, which means that the relevant data, in combination with additional data, make it possible to draw conclusions about the identity of these individuals.</p>
<p>3.2 Principles of Personal Data processing<br />We adhere to the principles to the protection of the Personal Data as envisaged in the Data Protection Laws. In accordance with these principles, Personal Data shall:</p>
<p>be processed fairly, lawfully and transparently;<br />be processed for specified, explicit and legitimate purposes only and not further processed in a manner that is incompatible with those purposes;<br />be adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed;<br />be kept accurate and up to date;<br />not be retained longer than necessary;<br />be processed in a manner that ensures their appropriate security;<br />not be transferred outside the European Economic Area (EEA) or the EU without adequate protection.<br />3.3 Sources<br />We collect and process Personal Data that we:</p>
<p>receive from you when you visit our Website or interact with the Ecosystem Initiatives;<br />receive from you when you apply for an open position at the Foundation;<br />receive from our business partners;<br />receive when participating in events or courses;<br />receive from authorities, courts or other third parties;<br />obtain from publicly accessible sources, as far as this is permitted to us.<br />3.4 Categories of Personal Data<br />To the extent applicable, the categories of Personal Data that we collect and process may include in particular the following data:</p>
<p>Personal information and contact details, such as name, address, telephone number, e-mail address, date of birth, nationality, gender, pictures, professional functions and activities, education, qualifications, affiliations with third parties.<br />Information relating to agreements, such as contracts and contractual obligations, project details, scope of work, claims, communication relating to mandates and other agreements.<br />Information contained in communication and other interactions with us, such as correspondence by letter or e-mail or through other means of communication with you or with third parties, meetings, call history, notes relating to communication, access logs, inquiries, social media activities.<br />Financial information, such as invoicing information, payment details, bank details, information relating to insurance, financial situation, accounting information, creditworthiness, debt enforcement and bankruptcy information.<br />Information relating to administrative, court or other proceedings, such as information on claims and defenses, persons involved and the matter at issue, criminal prosecution and conviction.<br />Information to perform KYC/KYB procedure, such as name, date of birth, nationality, country of residence, contact details, identification number, VAT number (if the company is registered in Switzerland), employment details and corporate documents.<br />Data related to marketing activities, such as preferences and interests, newsletter opt-ins and opt-outs, responses to marketing activities, invitations and participation in events and activities.<br />Data related to the use of our Website, such as connection data, IP address and other identifiers, date and time of the visit to our Website, duration of the visit to the website, requested internet address (URL), referrer URL (i.e. the internet address of the website from which you accessed our Website), browser type and version, operating system used, amount of data sent in bytes, and the search term used, location data, pages and content accessed, functions used.<br />Data obtained from public registers and other public sources, such as the debt enforcement register, credit rating directories, land register, commercial register, media and internet.<br />3.5 Sensitive data<br />We do not collect any sensitive data about you (such as racial or ethnic origin, political opinions, religious belief, trade union membership, genetic data, biometric data, health data, data about your sexual life or orientation, and offenses or alleged offenses) except if we have your specific consent, or when we must comply with the law.<br />Our services are directed to and intended for use only by those who are 18 years of age or over. We do not knowingly collect any Personal Data from any person under 18 years of age.<br />4. Processed data, purpose and legal basis<br />We only process your Personal Data for specific reasons and where we have a legal basis to do so.</p>
<p>4.1 Use of our Website<br />Processed data<br />The following data is collected automatically when you visit our Website: the country from where you accessed the Website, the type of device you used, the browser you used and the address of the website from which you were redirected to our Website.</p>
<p>Purpose<br />We process your Personal Data in order to operate and secure our Website, in particular for security reasons to ensure the stability and integrity of our system, and to ensure a smooth connection of the Website. In addition, we use Simple Analytics to perform basic web analysis to optimize the Website regarding usability and to gain insights about the use of our Website.</p>
<p>Legal basis<br />The processing of your Personal Data is based on our legitimate interests (Art. 6 para. 1 lit. f GDPR).</p>
<p>4.2 Communication<br />Processed data<br />If you send us an e-mail or another form of electronic message (or a hardcopy message, e.g. a letter), we may collect such information as your name, e-mail address (or other form of communication identifier, e.g. username or messenger nickname), phone number, subject matter, message content, related metadata and any other information you choose to disclose in your communication to us.</p>
<p>Purpose<br />We process your Personal Data in order to process your inquiry and any possible further questions you might have in relation to your interactions with the Ecosystem Initiatives ; and any other related questions and matters based on the content of your communication with us. We may keep this data to document our communication with you, for training purposes, for quality assurance, for follow-up inquiries and for regulatory purposes.</p>
<p>Legal basis<br />Depending on the situation, the processing of your Personal Data is based on your consent (Art. 6 para. 1 lit. a GDPR), necessary for the performance of a contract (Art. 6 para. 1 lit. b GDPR), necessary for compliance with legal obligations (Art. 6 para. 1 lit. c GDPR) and/or based on our legitimate interests (Art. 6 para. 1 lit. f GDPR). You will be informed about the specific legal basis for the processing of your data before sharing it with us.</p>
<p>4.3 Recruitment<br />Processed data<br />If you apply for a job vacancy at the Foundation, we may collect such information as your name, contact details, photo, information about your work permit situation, your education, your professional experience and other information you choose to provide to us in connection with your application.</p>
<p>Purpose<br />We process your Personal Data for the assessment of your application and potential negotiation, preparation, conclusion and performance of an employment contract with you.</p>
<p>Legal basis<br />The processing of your Personal Data is necessary for the performance of a possible employment contract (Art. 6 para. 1 lit. b GDPR). In case no employment contract is concluded, we may retain your application for further job vacancies, if you have provided us with your consent to do so (Art. 6 para. 1 lit. a GDPR).</p>
<p>4.4 Ecosystem Initiatives (Polkadot Network and Kusama Network)<br />Processed data<br />In connection with any of the Ecosystem Initiatives organized by us, we may collect information that we require in order to be able to facilitate your participation or use of the Ecosystem Initiatives, such as name, date of birth, nationality, identity document details, title, profession, role and function, e-mail address, phone number, social media handles, VAT number (if the company is registered in Switzerland) and blockchain account number. Furthermore, when dealing with us, we may process e-mails, text messages, letters and other communications information relating to your interactions with the Ecosystem Initiatives and any further information contained in case files or related otherwise to the Ecosystem Initiatives.</p>
<p>Purpose<br />We process your Personal Data in order to facilitate your use or participation in the Ecosystem Initiatives and to comply with applicable legal requirements and internal regulations. We may also process your Personal Data to document your use of the Ecosystem Initiatives, for training purposes or for quality assurance as well as for market research to improve the Ecosystem Initiatives and operations and for product and service development.</p>
<p>Legal basis<br />Depending on the situation, the processing of your Personal Data is necessary for the performance of a contract (Art. 6 para. 1 lit. b GDPR), necessary for compliance with a legal obligation (Art. 6 para. 1 lit. c GDPR) and/or based on our legitimate interest (Art. 6 para. 1 lit. f GDPR).</p>
<p>4.5 Contracts<br />Processed data<br />If we enter into or negotiate a contract with you, we may collect data in relation to the conclusion and performance of such contract, such as your name, address, e-mail address, financial information and information about your employer.</p>
<p>Purpose<br />We process your Personal Data for the preparation, conclusion, performance and administration of our contractual relationships and any questions or inquiries that may arise in that relation. Such processing may further be required to comply with legal requirements and internal regulations.</p>
<p>Legal basis<br />Depending on the situation, the processing of your Personal Data is necessary for the performance of a contract (Art. 6 para. 1 lit. b GDPR), necessary for compliance with a legal obligation (Art. 6 para. 1 lit. c GDPR) and/or based on our legitimate interest (Art. 6 para. 1 lit. f GDPR).</p>
<p>4.6 Web 3.0 Technologies Foundation Grant Programs<br />Processed data<br />If you enter the application process, we may collect data in relation to such application, such as your personal details, contact information, project details, financial information and information that will be requested from you during the KYC process.</p>
<p>Purpose<br />We process your Personal Data for the purpose of evaluating your grant application, establishing your identity and performing KYC procedure, keeping track of the status of your application, the subsequent performance of the grant agreement (should your application be successful) and collecting statistical data about the program.</p>
<p>Legal basis<br />Depending on the circumstances, the processing of your Personal Data is based on your consent (Art. 6 para. 1 lit. a GDPR), necessary for the performance of a contract (Art. 6 para. 1 lit. b GDPR), necessary for compliance with legal obligations (Art. 6 para. 1 lit. c GDPR) and/or based on our legitimate interests (Art. 6 para. 1 lit. f GDPR).</p>
<p>4.7 Decentralized Nodes Program<br />Processed data<br />If you enter the application process, we may collect data in relation to such application, such as your personal details, contact information, matrix handle, X handle, VAT number (if the company is registered in Switzerland) and blockchain account addresses.</p>
<p>Please note that the blockchain account addresses and on-chain identity of the selected and backup nodes will be made public once the selection has been completed.</p>
<p>Purpose<br />We process your Personal Data for the purpose of evaluating your application, establishing your identity and performing KYC procedure, keeping track of the status of your application and the subsequent performance of the agreement (should your application be successful).</p>
<p>Legal basis<br />Depending on the circumstances, the processing of your Personal Data is based on your consent (Art. 6 para. 1 lit. a GDPR), necessary for the performance of a contract (Art. 6 para. 1 lit. b GDPR), necessary for compliance with legal obligations (Art. 6 para. 1 lit. c GDPR) and/or based on our legitimate interests manage your participation in the Decentralized Nodes Program (Art. 6 para. 1 lit. f GDPR).</p>
<p>4.8 Marketing, events and newsletters<br />Processed data If you sign up for our newsletter, participate in events or other activities, we may collect data such as your contact information, preferences (e.g. your areas of interest), information relating to your participation in events (including photos), as well as references provided by you.</p>
<p>Purpose<br />We process your Personal Data for marketing purposes and relationship management, for example to send personalized advertising, e.g. in the form of newsletters or via other communication channels for which we have contact information from you and by any other marketing means (e.g. through events, fairs, etc.), or to publish photos of events on our Website or in other media.</p>
<p>Legal basis<br />Depending on the situation, the processing of your Personal Data is based on your consent (Art. 6 para. 1 lit. a GDPR) and/or on our legitimate interests (Art. 6 para. 1 lit. f GDPR). In either case, you can object at any time, or refuse or withdraw your consent to be contacted for marketing purposes.</p>
<p>4.9 Web3 Summit<br />Processed data<br />Session submissions: If you have expressed your interest in participating in the Web3 Summit as a speaker or contributing in a similar manner, we will process your data collected through the respective submission form. This may include your name, e-mail, job title, company or project name, session title, session abstract, social handles and headshot and any other information you decided to share with us;<br />Newsletter: If you subscribe to our newsletter, we will collect your name and e-mail;<br />Ticketing: In order to facilitate your ticket purchase, we may collect information such as your name, e-mail, job title and organization (please note that our vendors and partners may collect further information from you and process it in accordance with the terms of their own privacy policies);<br />Discounted Ticket Application Form: We will process your data collected through the aforementioned form. This could be your name, e-mail, job title, company/university, country, city, how you are currently contributing to building a decentralized web, and any other information you decided to share with us;<br />Event App: When you create an account with our event app powered by Bizzaboo, we may collect certain Personal Data from you, such as your name, e-mail and any additional information you choose to share with us during the account creation process or while using the app.<br />Purpose<br />We process your Personal Data in order to facilitate your participation in the Web3 Summit, to promote your session through various public channels, to send you information about upcoming events, and to facilitate your ticket purchases. The data collected via the event app is used to enhance your experience with the app, specifically to enable and improve your access to and use of the app&rsquo;s features, ensure a smooth and personalized experience at the Web3 Summit (including event registration, communication, and networking opportunities) and to send you important updates, notifications, and other information relevant to your participation in the Web3 Summit.</p>
<p>Legal basis<br />Depending on the situation, the processing of your Personal Data is based on your consent (Art. 6 para. 1 lit. a GDPR), necessary for the performance of a contract (Art. 6 para. 1 lit. b GDPR), and/or based on our legitimate interests (Art. 6 para. 1 lit. f GDPR).</p>
<p>5. Cookies, tracking and other technologies related to the use of our Website<br />We use cookies and similar technologies on our Website that allow us to store information on your device and/or access information stored on your device. This allows us to better understand user behaviour and preferences, e.g. to provide our services in a technically error-free, secure, user-friendly and demand-oriented manner.</p>
<p>5.1 What are cookies?<br />Cookies are small text files that are permanently or temporarily stored on your device (computer, laptop, tablet, smartphone, etc.) when you visit our Website. This enables the Website to remember specific entries and settings (e.g. language, preferences, statistics) over a certain period of time, so you don&rsquo;t have to re-enter them when you use our Website.</p>
<p>First party cookies are cookies set by our Website and therefore, only our Website can read them. In addition, a Website may potentially use external services which also set their own cookies. These are called third-party cookies.<br />Permanent cookies remain on your device after you close your session until you delete them, while session cookies expire when you close your browser.<br />5.2 Which cookies do we use and why?<br />Essential cookies: These cookies are technically required for the functionality of the Website and the provision of the Website content and services.<br />Statistical cookies: These cookies gather information about your technical behavior on the Website (e.g. how often the Website is visited, the security of the Website, error messages and the Website display in different browsers).<br />Within and to the extent under the scope of application of the GDPR, the data processed by cookies for the aforementioned purposes is based on our legitimate interests (Art. 6 para. 1 lit. f GDPR).</p>
<p>5.3 Simple Analytics<br />To obtain information about the user&rsquo;s behavior on our Website, we use Simple Analytics. This analytics software only gives us insight about the user in general, but not about individuals, as it does not track visitors and does not store any personal identifiable information.</p>
<p>5.4 How can you disable cookies?<br />You may refuse the use of any cookies by selecting the appropriate settings on your browser. Most browsers allow you to delete cookies, prevent their installation or generate a warning before a cookie is installed. You can obtain further information on this subject from the relevant browser instructions. Note, however, that this may affect your experience of our Website.</p>
<p>To find out more about cookies, including how to manage, reject and delete cookies, visit www.allaboutcookies.org.</p>
<p>5.5 Changes to the Cookie Policy<br />We reserve the right to update this Cookie Policy at any time without prior notice. Any such changes will become binding on you on your first use of our Website after the changes have been made. We therefore advise you to check this Privacy Policy from time to time.</p>
<p>6. Disclosure and transfer of Personal Data<br />We may disclose your Personal Data (in compliance with the applicable legal requirements) to recipients as set out below, which may include cross-border data transfers.</p>
<p>6.1 Categories of recipients<br />We may disclose your Personal Data to the following recipients:</p>
<p>contractual partners (to the extent the disclosure results from such contracts);<br />other involved parties where relevant (e.g. if your participation or use of the Ecosystem Initiatives requires the disclosure of certain Personal Data to counterparties, legal representatives, insurance companies, etc.);<br />external service providers (e.g. IT and communication services providers, marketing and event management services providers, administrative services providers, including providers of digital signature services and document destruction services, debt collection agencies, etc.);<br />legal and professional advisors, including accountants and auditors;<br />competent authorities (if it is necessary for your participation or use of the Ecosystem Initiatives, we are legally obliged or entitled to such disclosure or it appears necessary to protect our interests);<br />the general public, if Personal Data is published on our Website or in other media (in compliance with the applicable legal requirements).<br />6.2 Cross-border transfer of Personal Data<br />In connection with the disclosures described above, we may transfer Personal Data to the following countries that offer adequate protection pursuant to the FADP and GDPR:</p>
<p>EEA member states<br />UK<br />USA (provided they are certified; please read the Data Privacy Framework for more information)<br />In certain circumstances, we may disclose Personal Data to third countries.</p>
<p>A third country is defined as a country outside of Switzerland or the EEA, in which Swiss data protection law or the European GDPR is not directly applicable.<br />To the extent such countries do not offer adequate protection, the transfer is secured by appropriate safeguards (such as Standard Contractual Clauses) or based on a statutory exemption (e.g. if the transfer is necessary for the establishment, exercise or enforcement of legal claims before a foreign authority).<br />Within the scope of the GDPR, you may ask us for a copy of the relevant safeguards by contacting us as indicated in Section 1.<br />6.3 Special provisions<br />The following third-party processors are currently assigned with processing activities on our behalf:</p>
<p>a) Use of our Website</p>
<p>Name of processor Country Activity Privacy Information International Data Transfer Mechanism<br />Parity Technologies Deutschland GmbH Germany Assist and/or follow up with you and coordinate that assistance/follow-up where you have shown interest in the Polkadot network. Privacy policy Adequacy decision of the Swiss Federal Council<br />b) Recruitment</p>
<p>Recruitment</p>
<p>Name of processor Country Activity Privacy Information International Data Transfer Mechanism OBT AG Switzerland Technical support Privacy policy -</p>
<p>Name of processor Country Activity Privacy Information International Data Transfer Mechanism<br />OBT AG Switzerland Technical support Privacy policy -<br />c) Polkadot Network</p>
<p>Name of processor Country Activity Privacy Information International Data Transfer Mechanism<br />Parity Technologies Ltd. UK UK Assist and/or follow up with you and coordinate that assistance/follow-up where you have shown interest in the Polkadot network. Privacy policy Adequacy decision of the Swiss Federal Council<br />d) User Support</p>
<p>Name of processor Country Activity Privacy Information International Data Transfer Mechanism<br />Google Ireland Limited Ireland E-mail provider Privacy policy Adequacy decision of the Swiss Federal Council<br />Freshworks Inc. USA Ticketing system Privacy notice Adequacy decision of the Swiss Federal Council<br />Grammarly, Inc. USA Quality of writing Privacy policy Adequacy decision of the Swiss Federal Council<br />e) Contracts</p>
<p>Name of processor Country Activity Privacy Information International Data Transfer Mechanism<br />Docusign International (EMEA) Ltd. Ireland Contract management Privacy notice Adequacy decision of the Swiss Federal Council<br />Google Ireland Limited Ireland Contract management Privacy policy Adequacy decision of the Swiss Federal Council<br />f) Web 3.0 Technologies Foundation Grants Programs</p>
<p>Name of processor Country Activity Privacy Information International Data Transfer Mechanism<br />Google Ireland Limited Ireland E-mail provider Privacy policy Adequacy decision of the Swiss Federal Council<br />Parity Technologies Deutschland GmbH Germany Grant evaluation Privacy policy Data processing agreement<br />Parity Technologies Limited UK Grant evaluation Privacy policy Data processing agreement<br />Sum and Substance UK KYC of grantees Privacy notice Data processing agreement<br />g) Decentralized Nodes Program</p>
<p>Name of processor Country Activity Privacy Information International Data Transfer Mechanism<br />Google Ireland Limited Ireland Application form Privacy policy Adequacy decision of the Swiss Federal Council<br />Sum and Substance UK KYC of grantees Privacy notice Data processing agreement<br />h) Web3 Summit</p>
<p>Name of processor Country Activity Privacy Information International Data Transfer Mechanism<br />Google Ireland Limited Ireland E-mail provider Privacy policy Adequacy decision of the Swiss Federal Council<br />Team Tito Limited Ireland Ticketing system Privacy policy Adequacy decision of the Swiss Federal Council<br />HubSpot, Inc. USA Data storage Privacy policy Adequacy decision of the Swiss Federal Council<br />Bizzabo Inc. USA Event app Privacy policy Adequacy decision of the Swiss Federal Council<br />Please be aware that this overview may not always be up to date. If you would like to obtain the current list of third-party providers, please send an e-mail to: legal@web3.foundation.</p>
<p>7. Retention period and deletion<br />We process and store your Personal Data only for as long as our processing purposes and our legitimate interests regarding documentation require it. In addition, there may be a contractual or legal obligation to retain or document the Personal Data.<br />If the Personal Data is no longer required, it will be deleted or anonymized as far as possible.<br />Subject to an express written agreement, we are under no obligation to you to retain your Personal Data for a specific period of time.<br />8. Data security<br />We take adequate technical and organizational precautions and security measures to prevent accidental or intentional manipulation, unauthorized access, disclosure, unauthorized destruction, partial or complete loss, misuse or alteration of your Personal Data. Accordingly, we store all the data you provide on secure servers. Our security measures are continuously improved in line with technical developments.<br />Access to Personal Data is limited to those employees and/or third parties assigned with processing tasks who therefore need to know about this data. These employees and/or third parties are subject to confidentiality undertakings and/or data processing agreements and must comply with applicable data protection laws.<br />We use SSL encryption for reasons of security and to protect the transmission of confidential content, such as the requests you send to us as an investment operator. You can recognize an encrypted connection by the fact that the address line of the browser changes from &ldquo;http://&rdquo; to &ldquo;https://&rdquo; and by the lock symbol in your browser line. If SSL encryption is activated, third parties cannot read the data that you transmit to us.<br />However, it must be stated that no technical and organizational measures can fully eliminate security risks connected with transmission of information over the internet.<br />You are responsible for keeping the account information for accessing any of our networks operated confidential. You are in particular responsible for securing your private keys.<br />9. Rights of Data Subjects<br />9.1 General provisions<br />A &ldquo;Data Subject&rdquo; is any natural person to whom the Person Data refers to.<br />As the Data Subject, you may assert various claims against us in accordance with the applicable national and international law. To meet these claims, we will need to process your Personal Data again.<br />To exercise these rights, please contact us as specified in Section 1. Exercising these rights requires that you are able to prove your identity (e.g., by a copy of identification documents when your identity is not evident otherwise or cannot be verified in another way).<br />Any requests will be free of charge, provided we do not incur unexpected and inadequate costs for providing you with details of your Personal Data. If exercising certain rights incurs costs for you, we will notify you thereof in advance.<br />Where possible, we will fulfill such a request within thirty (30) days (art. 25 para. 7 FADP, art. 12 para. 3 GDPR).<br />9.2 Your rights<br />a) Right to request information (art. 25 FADP, art. 15 GDPR) relating to you. In particular, you may request information about:</p>
<p>the identity and the contact details of the controller;<br />the processed personal data as such;<br />the purposes of the data processing;<br />the retention period for the personal data or, if this is not possible, the criteria for determining this period;<br />the origin of your data if it has not been collected by us;<br />the existence of automated decision-making, including profiling and, where appropriate, meaningful information on its details;<br />the categories of recipients to whom your information has been or will be disclosed;<br />the existence of a right to rectification, deletion, restriction of or to object to data processing;<br />the existence of a right to lodge a complaint. &rarr; Templates are available on the website of the Federal Data Protection and Information Commissioner (German, English).<br />b) You can immediately request the rectification of incorrect or incomplete Personal Data stored by us (art. 32 para. 1 FADP, art. 16 GDPR). You will be informed of the rectification, unless this is impossible or involves disproportionate effort.</p>
<p>c) You can request the deletion of your Personal Data, unless the processing is necessary for the exercise of the right to freedom of opinion and information, for the fulfillment of a legal obligation, for reasons of public interest or to assert exercise or defend legal claims (art. 17 GDPR).</p>
<p>d) If your personal data is processed on the basis of legitimate interests pursuant to art. 6 para. 1 lit. f GDPR, you have the right to object to the processing of your personal data if there are reasons for doing so which arise from your particular situation or if the objection is to the direct advertising. In the latter case, you have a general right to object, which is implemented by us without stating a special situation (art. 32 para. 2 lit. a FADP, art. 21 GDPR).</p>
<p>e) You can request the restriction of the processing of your Personal Data if the accuracy of the data is disputed by you, the processing is unlawful but you refuse to delete it, we no longer need the data but you need it to assert, exercise or defend legal claims or you have lodged a complaint to the processing pursuant to art. 21 GDPR (Art. 32 para. 3 FADP, Art. 18 GDPR).</p>
<p>f) You can receive the Personal Data that you have provided to us, in a structured, common and machine-readable format or request its transmission to another controller (art. 28 para. 2 FADP, art. 20 GDPR).</p>
<p>g) You can withdraw your consent to us at any time. As a result, we may no longer continue the data processing based on this consent in the future (art. 7 para. 3 GDPR).</p>
<p>Please note that we reserve the right to enforce statutory restrictions on our part, for example if we are obliged to retain or process certain data, have an overriding interest (insofar as we may invoke such interests), are bound to maintain confidentiality or need the data for asserting claims (art. 26 para. 1 and 2 FADP, art. 27 FADP).</p>
<p>10. Regulatory authority<br />If you believe that our processing of your Personal Data contradicts the applicable Data Protection Laws, you have the possibility to lodge a complaint with the appropriate data protection authority (art. 77 GDPR).</p>
<p>The competent data protection authority in Switzerland is the Federal Data Protection and Information Commissioner:</p>
<p>Office of the Federal Data Protection and Information Commissioner<br />Feldeggweg 1<br />3003 Bern<br />Switzerland</p>
<p>Tel. +41 58 462 43 95<br />http://www.edoeb.admin.ch</p>
<p>11. Modification of the Privacy Policy<br />We reserve the right to change this Privacy Policy or to adapt it to new processing methods at any time without prior notice. The current version published under https://web3.foundation/privacy-and-cookies/ shall apply.</p>

		</p>
                <div className="flex space-x-4">
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ff0066]/20 py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/kusama-logo-canary-white.png"
                alt="Kusama"
                width={100}
                height={25}
                className="opacity-70"
              />
            </div>
            <div className="flex space-x-8 text-xs font-mono text-white/50">
              <Link href="/terms" className="hover:text-[#ff0066]">
                LEGAL DISCLOSURES
              </Link>
              <Link href="/privacy" className="hover:text-[#ff0066]">
                PRIVACY POLICY
              </Link>
              <Link href="/disclaimer" className="hover:text-[#ff0066]">
                DISCLAIMER
              </Link>
              <span>© {new Date().getFullYear()} KUSAMA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
