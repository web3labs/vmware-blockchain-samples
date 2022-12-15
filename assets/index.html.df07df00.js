import{_ as p,r,o as l,c,a,b as s,d as t,w as o,e as n}from"./app.e4b6e09b.js";const i={},u=a("h1",{id:"sample-deployment-with-four-replica-nodes-and-one-client-node",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#sample-deployment-with-four-replica-nodes-and-one-client-node","aria-hidden":"true"},"#"),s(" Sample Deployment with Four Replica Nodes and One Client Node")],-1),d=a("p",null,"The sample VMware Blockchain for Ethereum deployment includes a set of Helm charts for four Replica nodes and one Client node. The deployment on Kubernetes must only be on a supported host with a single cluster.",-1),k=a("p",null,"Replica nodes are the participants in the consensus algorithm, concord-bft. Client nodes are the clients in the blockchain network running ethrpc.",-1),m=a("p",null,"The current sample deployment has been tested on the following components:",-1),h=a("ul",null,[a("li",null,"Minikube with VirtualBox, Hyperkit and Docker drivers"),a("li",null,"Hosted on AWS EKS")],-1),b=a("h2",{id:"deployment-prerequisites",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#deployment-prerequisites","aria-hidden":"true"},"#"),s(" Deployment Prerequisites")],-1),g=n(`<h2 id="vmware-blockchain-node-deployment" tabindex="-1"><a class="header-anchor" href="#vmware-blockchain-node-deployment" aria-hidden="true">#</a> VMware Blockchain Node Deployment</h2><p>You can deploy four Replica nodes and one Client node on Minikube or EKS.</p><h4 id="run-the-following-command-to-deploy-minikube" tabindex="-1"><a class="header-anchor" href="#run-the-following-command-to-deploy-minikube" aria-hidden="true">#</a> Run the following command to deploy Minikube.</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm <span class="token function">install</span> <span class="token operator">&lt;</span>name of blockchain<span class="token operator">&gt;</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.registry</span><span class="token operator">=</span><span class="token operator">&lt;</span>registry address<span class="token operator">&gt;</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.username</span><span class="token operator">=</span><span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.password</span><span class="token operator">=</span><span class="token operator">&lt;</span>password<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="run-the-following-command-to-deploy-eks" tabindex="-1"><a class="header-anchor" href="#run-the-following-command-to-deploy-eks" aria-hidden="true">#</a> Run the following command to deploy EKS.</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm <span class="token function">install</span> <span class="token operator">&lt;</span>name of blockchain<span class="token operator">&gt;</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.registry</span><span class="token operator">=</span><span class="token operator">&lt;</span>registry address<span class="token operator">&gt;</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.username</span><span class="token operator">=</span><span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.password</span><span class="token operator">=</span><span class="token operator">&lt;</span>password<span class="token operator">&gt;</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.storageClassName</span><span class="token operator">=</span>gp2 <span class="token parameter variable">--set</span> <span class="token assign-left variable">resources.replica.cpuRequest</span><span class="token operator">=</span>10000m <span class="token parameter variable">--set</span> <span class="token assign-left variable">resources.replica.cpuLimit</span><span class="token operator">=</span>10000m <span class="token parameter variable">--set</span> <span class="token assign-left variable">resources.replica.memoryRequest</span><span class="token operator">=</span>56Gi <span class="token parameter variable">--set</span> <span class="token assign-left variable">resources.replica.memoryLimit</span><span class="token operator">=</span>56Gi <span class="token parameter variable">--set</span> <span class="token assign-left variable">resources.client.cpuRequest</span><span class="token operator">=</span>5000m <span class="token parameter variable">--set</span> <span class="token assign-left variable">resources.client.cpuLimit</span><span class="token operator">=</span>5000m <span class="token parameter variable">--set</span> <span class="token assign-left variable">resources.client.memoryRequest</span><span class="token operator">=</span>28Gi <span class="token parameter variable">--set</span> <span class="token assign-left variable">resources.client.memoryLimit</span><span class="token operator">=</span>28Gi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note that it might take up to 5 mins for the blockchain nodes to be operational after deployment. Open the pod logs <code>vmbc-deployment-client-0-clientservice-xxx-yyy</code> and wait until you see the <code>client_id=8 is serving - the pool is ready</code> notification.</p><h4 id="test-your-deployment" tabindex="-1"><a class="header-anchor" href="#test-your-deployment" aria-hidden="true">#</a> Test your deployment.</h4>`,8),q=n(`<li><p>Get the ethrpc endpoint.</p><p>Run the following command to get ethrpc endpoint on Minikube</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube <span class="token function">service</span> list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Run the following command to get ethrpc endpoint on EKS</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get svc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note: If you do not see a URL, try an alternate <code>minikube service client-0-ethrpc</code> command.</p></li>`,1),f=n(`<p>Run the ethrpc curl command.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;id&quot;: 1, &quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;method&quot;: &quot;eth_getBlockByNumber&quot;, &quot;params&quot;: [&quot;0x00&quot;, true]}&#39;</span> <span class="token operator">&lt;</span>ethrpc url from above<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sample output:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;jsonrpc&quot;</span><span class="token operator">:</span><span class="token string">&quot;2.0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;method&quot;</span><span class="token operator">:</span><span class="token string">&quot;eth_getBlockByNumber&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;result&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;extraData&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;gasLimit&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x7fffffffffffffff&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;gasUsed&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x92e4414494ec1b4752faea0d80e79f618d447743f32eff4153c5e391be1d1a88&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;miner&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x52a06a6cBEF9543244C530F52b602712FE5dfb74&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0000000000000000&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;number&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;parentHash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0000000000000000000000000000000000000000000000000000000000000000&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;stateRoot&quot;</span><span class="token operator">:</span><span class="token string">&quot;0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x1669680399&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;transactions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;blockHash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x92e4414494ec1b4752faea0d80e79f618d447743f32eff4153c5e391be1d1a88&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;blockNumber&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;contractAddress&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;from&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0000000000000000000000000000000000000000&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;gas&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;gasPrice&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;hash&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x77f5bd9e7dbe2c2772f58f53431dfdfa205991ec4ff0b2bc385adecefd8895be&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;input&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;logs&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">&quot;nonce&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;to&quot;</span><span class="token operator">:</span><span class="token string">&quot;0xfb389874fb4e03182a7358275eaf78008775c7ed&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;transactionIndex&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x0000000000000000000000000000000000000000000000007fffffffffffffff&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),y=n(`<h4 id="uninstall-vmware-blockchain-nodes" tabindex="-1"><a class="header-anchor" href="#uninstall-vmware-blockchain-nodes" aria-hidden="true">#</a> Uninstall VMware Blockchain Nodes.</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm uninstall <span class="token operator">&lt;</span>name of blockchain<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="deployment-configuration-and-customization" tabindex="-1"><a class="header-anchor" href="#deployment-configuration-and-customization" aria-hidden="true">#</a> Deployment Configuration and Customization</h3><p>You can customize your deployment configurations. A list of configurations is available in the values.yaml file. You can use the &quot;--set&quot; parameter value for configuration.</p><table><thead><tr><th>Name</th><th>Description</th><th>Value</th><th>Type</th></tr></thead><tbody><tr><td>global.imageCredentials.registry</td><td>Container registry for image downloads</td><td>&quot;&quot;</td><td>Mandatory</td></tr><tr><td>global.imageCredentials.username</td><td>Username to access/download for registry</td><td>&quot;&quot;</td><td>Mandatory</td></tr><tr><td>global.imageCredentials.password</td><td>Password to access/download for registry</td><td>&quot;&quot;</td><td>Mandatory</td></tr><tr><td>global.storageClass</td><td>Storage class for deployment</td><td>standard</td><td>Optional</td></tr><tr><td>global.ethPermissioningWriteEnabled</td><td>Enabled eth write permission</td><td>false</td><td>Optional</td></tr><tr><td>global.ethPermissioningReadEnabled</td><td>Enabled eth read permission</td><td>false</td><td>Optional</td></tr><tr><td>genesisBlock.timestamp</td><td>Blockchain creation time in UTC, 24 hours format - YYYY-MM-DD hh:mm:ss</td><td>2022-12-02 00:01:00</td><td>Optional</td></tr></tbody></table><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>`,6);function v(x,_){const e=r("RouterLink");return l(),c("div",null,[u,d,k,m,h,b,a("p",null,[s("Make sure that you implement all the required prerequisites. See "),t(e,{to:"/vmbc-deployment/"},{default:o(()=>[s("Deployment Prerequisites")]),_:1}),s(".")]),g,a("ul",null,[q,a("li",null,[f,a("p",null,[s("See "),t(e,{to:"/vmbc-deployment/Troubleshooting.html"},{default:o(()=>[s("Troubleshooting")]),_:1}),s(" for any errors.")])])]),y,a("p",null,[s("The most common problems and errors are addressed with probable solutions to troubleshoot the problem. See, "),t(e,{to:"/vmbc-deployment/Troubleshooting.html"},{default:o(()=>[s("Troubleshooting")]),_:1}),s(".")])])}const C=p(i,[["render",v],["__file","index.html.vue"]]);export{C as default};
