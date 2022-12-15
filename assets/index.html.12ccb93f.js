import{_ as r,r as t,o as d,c,a as n,b as e,d as a,w as s,e as l}from"./app.e4b6e09b.js";const u={},p=n("h1",{id:"nft-platform",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nft-platform","aria-hidden":"true"},"#"),e(" NFT Platform")],-1),h=n("p",null,"The goal of this project is to build an NFT platform, conforming to ERC 721 standards, on top of VMware Blockchain (Concord).Developed a client-side application that communicates with VMware Blockchain to mint and transfer NFTs. The platform allows users to create digital art NFTs on VMware blockchain by providing a title, an image URL and artist name.",-1),m=n("h2",{id:"pre-requisites",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pre-requisites","aria-hidden":"true"},"#"),e(" Pre-requisites")],-1),f=n("li",null,"VMware Blockchain has been deployed",-1),b=n("li",null,"MAC Operating System",-1),v=n("li",null,"Google Chrome browser",-1),g={href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"},w=l(`<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li>View all NFTs in the Platform</li><li>Mint an NFT</li><li>Transfer an NFT</li><li>View History of an NFT</li></ul><h4 id="notes-about-nft-platform-and-write-permissioning" tabindex="-1"><a class="header-anchor" href="#notes-about-nft-platform-and-write-permissioning" aria-hidden="true">#</a> Notes about NFT Platform and Write Permissioning</h4><ul><li>NFT Platform Sample dApp supports running with Write Permissioning enabled in VMware Blockchain</li><li>With default Admin Account <ul><li>Both Command Line and Helm Based Running of dApp is supported</li></ul></li><li>If a non-default Admin Account is used only Command Line Running of dApp is supported</li></ul><h2 id="running-dapp" tabindex="-1"><a class="header-anchor" href="#running-dapp" aria-hidden="true">#</a> Running dApp</h2><p>There are two ways to run this dApp</p><h3 id="command-line-based" tabindex="-1"><a class="header-anchor" href="#command-line-based" aria-hidden="true">#</a> Command Line Based</h3><ul><li>This option is only supported for MAC Operating System</li><li>Execute following commands to run the dApp through command line</li><li>At command line, this app defaults to port <code>4200</code></li></ul><h4 id="installing-node-js-with-nvm" tabindex="-1"><a class="header-anchor" href="#installing-node-js-with-nvm" aria-hidden="true">#</a> Installing Node.js with NVM</h4><p>Node.js version 14.20 and up is preferred. If Node.js is not available in your environment, you can install it easily with NVM:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token comment">##  ! IMPORTANT: close the bash session and reopen so that the</span>
<span class="token comment">## \`nvm\` command can be available in the new and all future sessions.</span>
<span class="token comment">## If you don&#39;t want to close and reopen the terminal, you can run:</span>
<span class="token comment">## source ~/.bashrc or source ~/.bash_profile to make the nvm command available</span>

nvm <span class="token function">install</span> <span class="token number">14.20</span>         <span class="token comment"># installs node v14</span>
nvm <span class="token builtin class-name">alias</span> default <span class="token number">14.20</span>   <span class="token comment"># sets default system node version to 14</span>

<span class="token function">node</span> <span class="token parameter variable">-v</span>                   <span class="token comment"># should print v14.20.X</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>                    <span class="token comment"># should print v6.14.X</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="installing-dependencies-and-running" tabindex="-1"><a class="header-anchor" href="#installing-dependencies-and-running" aria-hidden="true">#</a> Installing dependencies and running</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Change to Source Directory of NFT Platform dApp</span>
<span class="token builtin class-name">cd</span> vmware-blockchain-samples/vmbc-ethereum/sample-dapps/nft-platform/source/artemis

<span class="token comment"># Install the dependencies</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># Export the VMBC_URL to the URL of deployed instance of VMware Blockchain</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VMBC_URL</span><span class="token operator">=</span>http://127.0.0.1:8545

<span class="token comment"># If Write Permissioning is enabled and using non-default Admin Account</span>
<span class="token function">vim</span> vmware-blockchain-samples/vmbc-ethereum/sample-dapps/nft-platform/source/artemis/hardhat.config.js
<span class="token comment"># Edit the accounts section of the network to the private key of your non-default admin account</span>

<span class="token comment"># Run the dApp</span>
<span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The dApp website will be available on <code>http://localhost:4200</code></p><h3 id="helm-based" tabindex="-1"><a class="header-anchor" href="#helm-based" aria-hidden="true">#</a> Helm Based</h3>`,15),k=l('<h2 id="using-dapp" tabindex="-1"><a class="header-anchor" href="#using-dapp" aria-hidden="true">#</a> Using dApp</h2><p>On the top right corner of the screen you would see Contract with Address. This is the Smart Contract address of this NFT Platform.</p><h3 id="navigating-dapp" tabindex="-1"><a class="header-anchor" href="#navigating-dapp" aria-hidden="true">#</a> Navigating dApp</h3><p>Regarding various Tabs in dApp,</p><ul><li><code>All NFTs</code>: shows all the NFTs minted on the NFT Platform</li><li><code>Owned NFTs</code>: showes NFTs owned by you</li><li><code>Minted by You</code>: shows NFTs minted by you</li><li><code>Transfered</code>: shows NFTs transferred by you</li></ul><h3 id="minting-an-nft" tabindex="-1"><a class="header-anchor" href="#minting-an-nft" aria-hidden="true">#</a> Minting an NFT</h3><ul><li>Click on <code>MINT NEW TOKEN</code> button on the top right</li><li>On the pop up window, <ul><li>Enter Title of the NFT to be Minted</li><li>Enter name of the Artist</li><li>Enter URL of an image</li></ul></li><li>Click on <code>MINT</code> button</li><li>Interact with Metamask Pop Up Window to complete this Transaction</li><li>You would see result of Miniting in a Pop Up Window <ul><li>On Success: you would be able to see transaction details</li><li>On Failure: you would see appropriate error message</li></ul></li></ul><h3 id="transfering-an-nft" tabindex="-1"><a class="header-anchor" href="#transfering-an-nft" aria-hidden="true">#</a> Transfering an NFT</h3><ul><li>Pre-requisite for this operation is to Own an NFT</li><li>Click on any one of your owned NFTs</li><li>Click on <code>TRANSFER NFT</code> button</li><li>On the pop up window, <ul><li>Enter the address to which you would like to transfer this NFT</li></ul></li><li>Click on <code>TRANSFER</code> button</li><li>Interact with Metamask Pop Up Window to complete this Transaction</li><li>You would see result of Transfer in a Pop Up Window <ul><li>On Success: you would be able to see transaction details</li><li>On Failure: you would see appropriate error message</li></ul></li></ul><h3 id="details-about-an-nft" tabindex="-1"><a class="header-anchor" href="#details-about-an-nft" aria-hidden="true">#</a> Details about an NFT</h3><ul><li>Click on any of the NFT</li><li>Here you would see details about the NFT such as, <ul><li>NFT Name</li><li>NFT Artist</li><li>Current Owner of this NFT</li><li>Original Minter of this NFT</li><li>Number of times this NFT was transferred</li></ul></li></ul><h3 id="notes-about-using-this-dapp-when-write-permissioning-is-enabled" tabindex="-1"><a class="header-anchor" href="#notes-about-using-this-dapp-when-write-permissioning-is-enabled" aria-hidden="true">#</a> Notes about using this dApp when Write Permissioning is enabled:</h3>',12);function T(N,F){const o=t("ExternalLinkIcon"),i=t("RouterLink");return d(),c("div",null,[p,h,m,n("ul",null,[f,n("li",null,[e("Suggested and Supported Stack "),n("ul",null,[b,v,n("li",null,[e("Metamask Wallet - "),n("a",g,[e("https://metamask.io/"),a(o)])])])]),n("li",null,[e("Setting up Metamask for VMware Blockchain "),n("ul",null,[n("li",null,[e("Connecting Metamask to VMware Blockchain- "),a(i,{to:"/appendix.html#connecting-metamask-to-vmware-blockchain"},{default:s(()=>[e("See Appendix")]),_:1})]),n("li",null,[e("Reset Metamask Accounts - "),a(i,{to:"/appendix.html#resetting-account-in-metamask"},{default:s(()=>[e("See Appendix")]),_:1})])])])]),w,n("p",null,[e("Follow the instructions in "),a(i,{to:"/sample-dapps/nft-platform/helm-chart/"},{default:s(()=>[e("helm-chart/README")]),_:1})]),k,n("ul",null,[n("li",null,[e("If Write Permissioning is enabled, to perform any write based interactions with VMware Blockchain such as Minting an NFT and Transferring an NFT can be only performed when the provided account has Write Permissions. For more information on how to provide Write Permissions to an Ethereum Account, read more about Permissioning "),a(i,{to:"/permissioning/"},{default:s(()=>[e("here")]),_:1})])])])}const y=r(u,[["render",T],["__file","index.html.vue"]]);export{y as default};