import{_ as e,o as a,c as n,e as s}from"./app.e4b6e09b.js";const i={},t=s(`<h1 id="wip-artemis" tabindex="-1"><a class="header-anchor" href="#wip-artemis" aria-hidden="true">#</a> (WIP) Artemis</h1><h2 id="nft-platform-on-vmware-blockchain" tabindex="-1"><a class="header-anchor" href="#nft-platform-on-vmware-blockchain" aria-hidden="true">#</a> NFT platform on VMware Blockchain</h2><p>The goal of this project is to build an NFT platform, conforming to ERC 721 standards, on top of VMware Blockchain (Concord).Developed a client-side application that communicates with VMware Blockchain to mint and transfer NFTs. The platform allows users to create digital art NFTs on VMware blockchain by providing a title, an image URL and artist name.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li>View all NFTs in the Platform</li><li>Mint an NFT</li><li>Transfer an NFT</li><li>View History of an NFT</li></ul><h2 id="running-dapp" tabindex="-1"><a class="header-anchor" href="#running-dapp" aria-hidden="true">#</a> Running dApp</h2><p>There are two ways to run this dApp</p><h3 id="command-line-based" tabindex="-1"><a class="header-anchor" href="#command-line-based" aria-hidden="true">#</a> Command Line Based</h3><ul><li>This option is only supported for MAC Operating System</li><li>Execute following commands to run the dApp through command line</li><li>At command line, this app defaults to port <code>4200</code></li></ul><h4 id="installing-node-js-with-nvm" tabindex="-1"><a class="header-anchor" href="#installing-node-js-with-nvm" aria-hidden="true">#</a> Installing Node.js with NVM</h4><p>Node.js version 14.20 and up is preferred. If Node.js is not available in your environment, you can install it easily with NVM:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token comment">##  ! IMPORTANT: close the bash session and reopen so that the</span>
<span class="token comment">## \`nvm\` command can be available in the new and all future sessions.</span>
<span class="token comment">## If you don&#39;t want to close and reopen the terminal, you can run:</span>
<span class="token comment">## source ~/.bashrc or source ~/.bash_profile to make the nvm command available</span>

nvm <span class="token function">install</span> <span class="token number">14.20</span>         <span class="token comment"># installs node v14</span>
nvm <span class="token builtin class-name">alias</span> default <span class="token number">14.20</span>   <span class="token comment"># sets default system node version to 14</span>

<span class="token function">node</span> <span class="token parameter variable">-v</span>                   <span class="token comment"># should print v14.20.X</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>                    <span class="token comment"># should print v6.14.X</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="installing-dependencies-and-running" tabindex="-1"><a class="header-anchor" href="#installing-dependencies-and-running" aria-hidden="true">#</a> Installing dependencies and running</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Install the dependencies</span>
<span class="token function">npm</span> <span class="token function">install</span>

<span class="token comment"># Export the VMBC_URL to the URL of deployed instance of VMware Blockchain</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VMBC_URL</span><span class="token operator">=</span>http://127.0.0.1:8545

<span class="token comment"># Run the dApp</span>
<span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The dApp website will be available on <code>http://localhost:4200</code></p><h3 id="helm-based" tabindex="-1"><a class="header-anchor" href="#helm-based" aria-hidden="true">#</a> Helm Based</h3><h4 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h4><ul><li><p>Pre-requisites</p><ul><li>Have a running Kuberenetes instance</li><li>Install Helm (https://helm.sh/docs/intro/install/)</li><li>Install kubectl (https://kubernetes.io/docs/tasks/tools/#kubectl)</li></ul></li><li><p>Once above pre-requisites are met, you can execute following command with replacing of various variables appropriately</p><ul><li><code>&lt;registry-url&gt;</code>: URL of the Registry containing Docker image of the dApp</li><li><code>&lt;registry-username&gt;</code>: Username for registry</li><li><code>&lt;registry-password&gt;</code>: Password for registry</li><li><code>&lt;blockchain-url&gt;</code>: URL of VMware Blockchain</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Helm install the dApp</span>
helm <span class="token function">install</span> artemis <span class="token builtin class-name">.</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.registry</span><span class="token operator">=</span><span class="token operator">&lt;</span>registry-url<span class="token operator">&gt;</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.username</span><span class="token operator">=</span><span class="token operator">&lt;</span>registry-username<span class="token operator">&gt;</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.password</span><span class="token operator">=</span><span class="token operator">&lt;</span>registry-password<span class="token operator">&gt;</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.image.repository</span><span class="token operator">=</span>vmbc-eth-artemis <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.image.tag</span><span class="token operator">=</span><span class="token operator">&lt;</span>image-tag<span class="token operator">&gt;</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">blockchainUrl</span><span class="token operator">=</span><span class="token operator">&lt;</span>blockchain-url<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reaching-ui-of-the-dapp" tabindex="-1"><a class="header-anchor" href="#reaching-ui-of-the-dapp" aria-hidden="true">#</a> Reaching UI of the dApp</h4><h5 id="minkube" tabindex="-1"><a class="header-anchor" href="#minkube" aria-hidden="true">#</a> Minkube</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># This command will take the control to the webpage of the dApp in default browser</span>
minikube <span class="token function">service</span> artemis-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="standard-kubernetes-deployment-with-external-ip-support" tabindex="-1"><a class="header-anchor" href="#standard-kubernetes-deployment-with-external-ip-support" aria-hidden="true">#</a> Standard Kubernetes Deployment (with External IP support)</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Use the External IP and the Port provided in the output of following command</span>
kubectl get <span class="token function">service</span> artemis-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="using-dapp" tabindex="-1"><a class="header-anchor" href="#using-dapp" aria-hidden="true">#</a> Using dApp</h2><p>On the top right corner of the screen you would see Contract with Address. This is the Smart Contract address of this NFT Platform.</p><h3 id="navigating-dapp" tabindex="-1"><a class="header-anchor" href="#navigating-dapp" aria-hidden="true">#</a> Navigating dApp</h3><p>Regarding various Tabs in dApp,</p><ul><li><code>All NFTs</code>: shows all the NFTs minted on the NFT Platform</li><li><code>Owned NFTs</code>: showes NFTs owned by you</li><li><code>Minted by You</code>: shows NFTs minted by you</li><li><code>Transfered</code>: shows NFTs transferred by you</li></ul><h3 id="minting-an-nft" tabindex="-1"><a class="header-anchor" href="#minting-an-nft" aria-hidden="true">#</a> Minting an NFT</h3><ul><li>Click on <code>MINT NEW TOKEN</code> button on the top right</li><li>On the pop up window, <ul><li>Enter Title of the NFT to be Minted</li><li>Enter name of the Artist</li><li>Enter URL of an image</li></ul></li><li>Click on <code>MINT</code> button</li><li>Interact with Metamask Pop Up Window to complete this Transaction</li><li>You would see result of Miniting in a Pop Up Window <ul><li>On Success: you would be able to see transaction details</li><li>On Failure: you would see appropriate error message</li></ul></li></ul><h3 id="transfering-an-nft" tabindex="-1"><a class="header-anchor" href="#transfering-an-nft" aria-hidden="true">#</a> Transfering an NFT</h3><ul><li>Pre-requisite for this operation is to Own an NFT</li><li>Click on any one of your owned NFTs</li><li>Click on <code>TRANSFER NFT</code> button</li><li>On the pop up window, <ul><li>Enter the address to which you would like to transfer this NFT</li></ul></li><li>Click on <code>TRANSFER</code> button</li><li>Interact with Metamask Pop Up Window to complete this Transaction</li><li>You would see result of Transfer in a Pop Up Window <ul><li>On Success: you would be able to see transaction details</li><li>On Failure: you would see appropriate error message</li></ul></li></ul><h3 id="details-about-an-nft" tabindex="-1"><a class="header-anchor" href="#details-about-an-nft" aria-hidden="true">#</a> Details about an NFT</h3><ul><li>Click on any of the NFT</li><li>Here you would see details about the NFT such as, <ul><li>NFT Name</li><li>NFT Artist</li><li>Current Owner of this NFT</li><li>Original Minter of this NFT</li><li>Number of times this NFT was transferred</li></ul></li></ul><h1 id="appendix" tabindex="-1"><a class="header-anchor" href="#appendix" aria-hidden="true">#</a> Appendix</h1><h2 id="connecting-metamask" tabindex="-1"><a class="header-anchor" href="#connecting-metamask" aria-hidden="true">#</a> Connecting Metamask</h2><p>Metamask is available on Google Chrome as an extension, and this is a key requirement to this NFT sample.</p><p>If you have never added your blockchain&#39;s EthRPC URL and the chain Id (default 5000) as a separate network on Metamask, you can click on user profile picture to open the dropdown menu and click <code>Settings</code> &gt; <code>Networks</code> &gt; <code>Add Network</code> &gt; <code>Add Network Manually</code> and provide:</p><ul><li>Network Name: (Can be freely chosen)</li><li>New RPC URL: (Your blockchain&#39;s EthRPC URL aka. <code>VMBC_URL</code>)</li><li>Chain ID: (Your blockchain&#39;s <code>chainId</code>, default is usually 5000)</li><li>Currency Symbol: (Can be freely chosen)</li><li>Block explorer URL: (optional)</li></ul><p>Metamask might not have connected ever on localhost:4200 site, if this is the case, you can connect Metamask to the dev site by clicking on <code>Not Connected</code> status icon and clicking <code>Connect</code></p>`,41),l=[t];function o(r,d){return a(),n("div",null,l)}const p=e(i,[["render",o],["__file","index.html.vue"]]);export{p as default};
