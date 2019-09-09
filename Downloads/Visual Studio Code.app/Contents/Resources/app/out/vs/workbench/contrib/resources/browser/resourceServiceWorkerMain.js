/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var e=["require","exports","vs/base/common/platform","vs/base/common/uri","vs/workbench/contrib/resources/browser/resourceServiceWorker"],t=function(t){for(var r=[],n=0,i=t.length;n<i;n++)r[n]=e[t[n]];return r},r=this,n="object"==typeof global?global:{};!function(e){e.global=r;var t=function(){function t(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1}return Object.defineProperty(t.prototype,"isWindows",{get:function(){return this._detect(),this._isWindows},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isNode",{get:function(){return this._detect(),this._isNode},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isElectronRenderer",{get:function(){return this._detect(),this._isElectronRenderer},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isWebWorker",{get:function(){return this._detect(),this._isWebWorker},enumerable:!0,configurable:!0}),t.prototype._detect=function(){
this._detected||(this._detected=!0,this._isWindows=t._isWindows(),this._isNode="undefined"!=typeof module&&!!module.exports,this._isElectronRenderer="undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.electron&&"renderer"===process.type,this._isWebWorker="function"==typeof e.global.importScripts)},t._isWindows=function(){return!!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0)||"undefined"!=typeof process&&"win32"===process.platform},t}();e.Environment=t}(o||(o={}));!function(e){var t=function(){return function(e,t,r){this.type=e,this.detail=t,this.timestamp=r}}();e.LoaderEvent=t;var r=function(){function r(e){this._events=[new t(1,"",e)]}return r.prototype.record=function(r,n){this._events.push(new t(r,n,e.Utilities.getHighPerformanceTimestamp()))},r.prototype.getEvents=function(){return this._events},r}();e.LoaderEventRecorder=r;var n=function(){function e(){}return e.prototype.record=function(e,t){},
e.prototype.getEvents=function(){return[]},e.INSTANCE=new e,e}();e.NullLoaderEventRecorder=n}(o||(o={}));!function(e){var t=function(){function t(){}return t.fileUriToFilePath=function(e,t){if(t=decodeURI(t).replace(/%23/g,"#"),e){if(/^file:\/\/\//.test(t))return t.substr(8);if(/^file:\/\//.test(t))return t.substr(5)}else if(/^file:\/\//.test(t))return t.substr(7);return t},t.startsWith=function(e,t){return e.length>=t.length&&e.substr(0,t.length)===t},t.endsWith=function(e,t){return e.length>=t.length&&e.substr(e.length-t.length)===t},t.containsQueryString=function(e){return/^[^\#]*\?/gi.test(e)},t.isAbsolutePath=function(e){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e)},t.forEachProperty=function(e,t){if(e){var r=void 0;for(r in e)e.hasOwnProperty(r)&&t(r,e[r])}},t.isEmpty=function(e){var r=!0;return t.forEachProperty(e,function(){r=!1}),r},t.recursiveClone=function(e){if(!e||"object"!=typeof e)return e;var r=Array.isArray(e)?[]:{};return t.forEachProperty(e,function(e,n){
r[e]=n&&"object"==typeof n?t.recursiveClone(n):n}),r},t.generateAnonymousModule=function(){return"===anonymous"+t.NEXT_ANONYMOUS_ID+++"==="},t.isAnonymousModule=function(e){return t.startsWith(e,"===anonymous")},t.getHighPerformanceTimestamp=function(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=e.global.performance&&"function"==typeof e.global.performance.now),this.HAS_PERFORMANCE_NOW?e.global.performance.now():Date.now()},t.NEXT_ANONYMOUS_ID=1,t.PERFORMANCE_NOW_PROBED=!1,t.HAS_PERFORMANCE_NOW=!1,t}();e.Utilities=t}(o||(o={}));!function(e){function t(e){if(e instanceof Error)return e;var t=new Error(e.message||String(e)||"Unknown Error");return e.stack&&(t.stack=e.stack),t}e.ensureError=t;var r=function(){function r(){}return r.validateConfigurationOptions=function(r){function n(e){return"loading"===e.phase?(console.error('Loading "'+e.moduleId+'" failed'),console.error(e),console.error("Here are the modules that depend on it:"),
void console.error(e.neededBy)):"factory"===e.phase?(console.error('The factory method of "'+e.moduleId+'" has thrown an exception'),void console.error(e)):void 0}if("string"!=typeof(r=r||{}).baseUrl&&(r.baseUrl=""),"boolean"!=typeof r.isBuild&&(r.isBuild=!1),"object"!=typeof r.paths&&(r.paths={}),"object"!=typeof r.config&&(r.config={}),void 0===r.catchError&&(r.catchError=!1),void 0===r.recordStats&&(r.recordStats=!1),"string"!=typeof r.urlArgs&&(r.urlArgs=""),"function"!=typeof r.onError&&(r.onError=n),Array.isArray(r.ignoreDuplicateModules)||(r.ignoreDuplicateModules=[]),r.baseUrl.length>0&&(e.Utilities.endsWith(r.baseUrl,"/")||(r.baseUrl+="/")),"string"!=typeof r.cspNonce&&(r.cspNonce=""),Array.isArray(r.nodeModules)||(r.nodeModules=[]),r.nodeCachedData&&"object"==typeof r.nodeCachedData&&("string"!=typeof r.nodeCachedData.seed&&(r.nodeCachedData.seed="seed"),("number"!=typeof r.nodeCachedData.writeDelay||r.nodeCachedData.writeDelay<0)&&(r.nodeCachedData.writeDelay=7e3),
!r.nodeCachedData.path||"string"!=typeof r.nodeCachedData.path)){var i=t(new Error("INVALID cached data configuration, 'path' MUST be set"));i.phase="configuration",r.onError(i),r.nodeCachedData=void 0}return r},r.mergeConfigurationOptions=function(t,n){void 0===t&&(t=null),void 0===n&&(n=null);var i=e.Utilities.recursiveClone(n||{});return e.Utilities.forEachProperty(t,function(t,r){"ignoreDuplicateModules"===t&&void 0!==i.ignoreDuplicateModules?i.ignoreDuplicateModules=i.ignoreDuplicateModules.concat(r):"paths"===t&&void 0!==i.paths?e.Utilities.forEachProperty(r,function(e,t){return i.paths[e]=t}):"config"===t&&void 0!==i.config?e.Utilities.forEachProperty(r,function(e,t){return i.config[e]=t}):i[t]=e.Utilities.recursiveClone(r)}),r.validateConfigurationOptions(i)},r}();e.ConfigurationOptionsUtil=r;var n=function(){function t(e,t){if(this._env=e,this.options=r.mergeConfigurationOptions(t),this._createIgnoreDuplicateModulesMap(),this._createNodeModulesMap(),this._createSortedPathsRules(),
""===this.options.baseUrl){if(this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){var n=this.options.nodeRequire.main.filename,i=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\"));this.options.baseUrl=n.substring(0,i+1)}if(this.options.nodeMain&&this._env.isNode){var n=this.options.nodeMain,i=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\"));this.options.baseUrl=n.substring(0,i+1)}}}return t.prototype._createIgnoreDuplicateModulesMap=function(){this.ignoreDuplicateModulesMap={};for(var e=0;e<this.options.ignoreDuplicateModules.length;e++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]]=!0},t.prototype._createNodeModulesMap=function(){this.nodeModulesMap=Object.create(null);for(var e=0,t=this.options.nodeModules;e<t.length;e++){var r=t[e];this.nodeModulesMap[r]=!0}},t.prototype._createSortedPathsRules=function(){var t=this;this.sortedPathsRules=[],e.Utilities.forEachProperty(this.options.paths,function(e,r){
Array.isArray(r)?t.sortedPathsRules.push({from:e,to:r}):t.sortedPathsRules.push({from:e,to:[r]})}),this.sortedPathsRules.sort(function(e,t){return t.from.length-e.from.length})},t.prototype.cloneAndMerge=function(e){return new t(this._env,r.mergeConfigurationOptions(e,this.options))},t.prototype.getOptionsLiteral=function(){return this.options},t.prototype._applyPaths=function(t){for(var r,n=0,i=this.sortedPathsRules.length;n<i;n++)if(r=this.sortedPathsRules[n],e.Utilities.startsWith(t,r.from)){for(var o=[],s=0,a=r.to.length;s<a;s++)o.push(r.to[s]+t.substr(r.from.length));return o}return[t]},t.prototype._addUrlArgsToUrl=function(t){return e.Utilities.containsQueryString(t)?t+"&"+this.options.urlArgs:t+"?"+this.options.urlArgs},t.prototype._addUrlArgsIfNecessaryToUrl=function(e){return this.options.urlArgs?this._addUrlArgsToUrl(e):e},t.prototype._addUrlArgsIfNecessaryToUrls=function(e){if(this.options.urlArgs)for(var t=0,r=e.length;t<r;t++)e[t]=this._addUrlArgsToUrl(e[t]);return e},
t.prototype.moduleIdToPaths=function(t){if(!0===this.nodeModulesMap[t])return this.isBuild()?["empty:"]:["node|"+t];var r,n=t;if(e.Utilities.endsWith(n,".js")||e.Utilities.isAbsolutePath(n))e.Utilities.endsWith(n,".js")||e.Utilities.containsQueryString(n)||(n+=".js"),r=[n];else for(var i=0,o=(r=this._applyPaths(n)).length;i<o;i++)this.isBuild()&&"empty:"===r[i]||(e.Utilities.isAbsolutePath(r[i])||(r[i]=this.options.baseUrl+r[i]),e.Utilities.endsWith(r[i],".js")||e.Utilities.containsQueryString(r[i])||(r[i]=r[i]+".js"));return this._addUrlArgsIfNecessaryToUrls(r)},t.prototype.requireToUrl=function(t){var r=t;return e.Utilities.isAbsolutePath(r)||(r=this._applyPaths(r)[0],e.Utilities.isAbsolutePath(r)||(r=this.options.baseUrl+r)),this._addUrlArgsIfNecessaryToUrl(r)},t.prototype.isBuild=function(){return this.options.isBuild},t.prototype.isDuplicateMessageIgnoredFor=function(e){return this.ignoreDuplicateModulesMap.hasOwnProperty(e)},t.prototype.getConfigForModule=function(e){
if(this.options.config)return this.options.config[e]},t.prototype.shouldCatchError=function(){return this.options.catchError},t.prototype.shouldRecordStats=function(){return this.options.recordStats},t.prototype.onError=function(e){this.options.onError(e)},t}();e.Configuration=n}(o||(o={}));!function(e){var t=function(){function e(e){this._env=e,this._scriptLoader=null,this._callbackMap={}}return e.prototype.load=function(e,t,n,s){var a=this;this._scriptLoader||(this._scriptLoader=this._env.isWebWorker?new i:this._env.isNode?new o(this._env):new r);var u={callback:n,errorback:s};this._callbackMap.hasOwnProperty(t)?this._callbackMap[t].push(u):(this._callbackMap[t]=[u],this._scriptLoader.load(e,t,function(){return a.triggerCallback(t)},function(e){return a.triggerErrorback(t,e)}))},e.prototype.triggerCallback=function(e){var t=this._callbackMap[e];delete this._callbackMap[e];for(var r=0;r<t.length;r++)t[r].callback()},e.prototype.triggerErrorback=function(e,t){var r=this._callbackMap[e]
;delete this._callbackMap[e];for(var n=0;n<r.length;n++)r[n].errorback(t)},e}(),r=function(){function e(){}return e.prototype.attachListeners=function(e,t,r){var n=function(){e.removeEventListener("load",i),e.removeEventListener("error",o)},i=function(e){n(),t()},o=function(e){n(),r(e)};e.addEventListener("load",i),e.addEventListener("error",o)},e.prototype.load=function(e,t,r,n){var i=document.createElement("script");i.setAttribute("async","async"),i.setAttribute("type","text/javascript"),this.attachListeners(i,r,n),i.setAttribute("src",t);var o=e.getConfig().getOptionsLiteral().cspNonce;o&&i.setAttribute("nonce",o),document.getElementsByTagName("head")[0].appendChild(i)},e}(),i=function(){function e(){}return e.prototype.load=function(e,t,r,n){try{importScripts(t),r()}catch(e){n(e)}},e}(),o=function(){function t(e){this._env=e,this._didInitialize=!1,this._didPatchNodeRequire=!1}return t.prototype._init=function(e){this._didInitialize||(this._didInitialize=!0,this._fs=e("fs"),this._vm=e("vm"),
this._path=e("path"),this._crypto=e("crypto"))},t.prototype._initNodeRequire=function(e,t){var r=t.getConfig().getOptionsLiteral().nodeCachedData;if(r&&!this._didPatchNodeRequire){this._didPatchNodeRequire=!0;var i=this,o=e("module");o.prototype._compile=function(e,s){var a,u=o.wrap(e.replace(/^#!.*/,"")),l=t.getRecorder(),d=i._getCachedDataPath(r,s),c={filename:s};try{var h=i._fs.readFileSync(d);a=h.slice(0,16),c.cachedData=h.slice(16),l.record(60,d)}catch(e){l.record(61,d)}var f=new i._vm.Script(u,c),p=f.runInThisContext(c),g=i._path.dirname(s),v=function(e){var t=e.constructor,r=function(t){try{return e.require(t)}finally{}};return r.resolve=function(r){return t._resolveFilename(r,e)},r.main=process.mainModule,r.extensions=t._extensions,r.cache=t._cache,r}(this),_=[this.exports,v,this,s,g,process,n,Buffer],y=p.apply(this.exports,_);return i._handleCachedData(f,u,d,!c.cachedData,t),i._verifyCachedData(f,u,d,a),y}}},t.prototype.load=function(r,n,i,o){
var s=this,a=r.getConfig().getOptionsLiteral(),u=a.nodeRequire||e.global.nodeRequire,l=a.nodeInstrumenter||function(e){return e};this._init(u),this._initNodeRequire(u,r);var d=r.getRecorder();if(/^node\|/.test(n)){var c=n.split("|"),h=null;try{h=u(c[1])}catch(e){return void o(e)}r.enqueueDefineAnonymousModule([],function(){return h}),i()}else{n=e.Utilities.fileUriToFilePath(this._env.isWindows,n);var f=this._path.normalize(n),p=this._getElectronRendererScriptPathOrUri(f),g=Boolean(a.nodeCachedData),v=g?this._getCachedDataPath(a.nodeCachedData,n):void 0;this._readSourceAndCachedData(f,v,d,function(e,n,a,u){if(e)o(e);else{var d;d=n.charCodeAt(0)===t._BOM?t._PREFIX+n.substring(1)+t._SUFFIX:t._PREFIX+n+t._SUFFIX,d=l(d,f);var c={filename:p,cachedData:a},h=s._createAndEvalScript(r,d,c,i,o);s._handleCachedData(h,d,v,g&&!a,r),s._verifyCachedData(h,d,v,u)}})}},t.prototype._createAndEvalScript=function(t,r,n,i,o){var s=t.getRecorder();s.record(31,n.filename)
;var a=new this._vm.Script(r,n),u=a.runInThisContext(n),l=t.getGlobalAMDDefineFunc(),d=!1,c=function(){return d=!0,l.apply(null,arguments)};return c.amd=l.amd,u.call(e.global,t.getGlobalAMDRequireFunc(),c,n.filename,this._path.dirname(n.filename)),s.record(32,n.filename),d?i():o(new Error("Didn't receive define call in "+n.filename+"!")),a},t.prototype._getElectronRendererScriptPathOrUri=function(e){if(!this._env.isElectronRenderer)return e;var t=e.match(/^([a-z])\:(.*)/i);return t?"file:///"+(t[1].toUpperCase()+":"+t[2]).replace(/\\/g,"/"):"file://"+e},t.prototype._getCachedDataPath=function(e,t){var r=this._crypto.createHash("md5").update(t,"utf8").update(e.seed,"utf8").digest("hex"),n=this._path.basename(t).replace(/\.js$/,"");return this._path.join(e.path,n+"-"+r+".code")},t.prototype._handleCachedData=function(e,t,r,n,i){var o=this;e.cachedDataRejected?this._fs.unlink(r,function(n){i.getRecorder().record(62,r),o._createAndWriteCachedData(e,t,r,i),n&&i.getConfig().onError(n)
}):n&&this._createAndWriteCachedData(e,t,r,i)},t.prototype._createAndWriteCachedData=function(e,t,r,n){var i=this,o=Math.ceil(n.getConfig().getOptionsLiteral().nodeCachedData.writeDelay*(1+Math.random())),s=-1,a=0,u=void 0,l=function(){setTimeout(function(){u||(u=i._crypto.createHash("md5").update(t,"utf8").digest());var o=e.createCachedData();0===o.length||o.length===s||a>=5||(s=o.length,i._fs.writeFile(r,Buffer.concat([u,o]),function(e){e&&n.getConfig().onError(e),n.getRecorder().record(63,r),l()}))},o*Math.pow(4,a++))};l()},t.prototype._readSourceAndCachedData=function(e,t,r,n){if(t){var i=void 0,o=void 0,s=void 0,a=2,u=function(e){e?n(e):0==--a&&n(void 0,i,o,s)};this._fs.readFile(e,{encoding:"utf8"},function(e,t){i=t,u(e)}),this._fs.readFile(t,function(e,n){!e&&n&&n.length>0?(s=n.slice(0,16),o=n.slice(16),r.record(60,t)):r.record(61,t),u()})}else this._fs.readFile(e,{encoding:"utf8"},n)},t.prototype._verifyCachedData=function(e,t,r,n){var i=this;n&&(e.cachedDataRejected||setTimeout(function(){
var e=i._crypto.createHash("md5").update(t,"utf8").digest();n.equals(e)||(console.warn("FAILED TO VERIFY CACHED DATA. Deleting '"+r+"' now, but a RESTART IS REQUIRED"),i._fs.unlink(r,function(e){return console.error("FAILED to unlink: '"+r+"'",e)}))},Math.ceil(5e3*(1+Math.random()))))},t._BOM=65279,t._PREFIX="(function (require, define, __filename, __dirname) { ",t._SUFFIX="\n});",t}();e.createScriptLoader=function(e){return new t(e)}}(o||(o={}));!function(e){var t=function(){function t(e){var t=e.lastIndexOf("/");this.fromModulePath=-1!==t?e.substr(0,t+1):""}return t._normalizeModuleId=function(e){var t,r=e;for(t=/\/\.\//;t.test(r);)r=r.replace(t,"/");for(r=r.replace(/^\.\//g,""),t=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;t.test(r);)r=r.replace(t,"/");return r=r.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,"")},t.prototype.resolveModule=function(r){var n=r
;return e.Utilities.isAbsolutePath(n)||(e.Utilities.startsWith(n,"./")||e.Utilities.startsWith(n,"../"))&&(n=t._normalizeModuleId(this.fromModulePath+n)),n},t.ROOT=new t(""),t}();e.ModuleIdResolver=t;var r=function(){function t(e,t,r,n,i,o){this.id=e,this.strId=t,this.dependencies=r,this._callback=n,this._errorback=i,this.moduleIdResolver=o,this.exports={},this.error=null,this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}return t._safeInvokeFunction=function(t,r){try{return{returnedValue:t.apply(e.global,r),producedError:null}}catch(e){return{returnedValue:null,producedError:e}}},t._invokeFactory=function(t,r,n,i){return t.isBuild()&&!e.Utilities.isAnonymousModule(r)?{returnedValue:null,producedError:null}:t.shouldCatchError()?this._safeInvokeFunction(n,i):{returnedValue:n.apply(e.global,i),producedError:null}},t.prototype.complete=function(r,n,i){this._isComplete=!0;var o=null;if(this._callback)if("function"==typeof this._callback){r.record(21,this.strId)
;var s=t._invokeFactory(n,this.strId,this._callback,i);o=s.producedError,r.record(22,this.strId),o||void 0===s.returnedValue||this.exportsPassedIn&&!e.Utilities.isEmpty(this.exports)||(this.exports=s.returnedValue)}else this.exports=this._callback;if(o){var a=e.ensureError(o);a.phase="factory",a.moduleId=this.strId,this.error=a,n.onError(a)}this.dependencies=null,this._callback=null,this._errorback=null,this.moduleIdResolver=null},t.prototype.onDependencyError=function(e){return this._isComplete=!0,this.error=e,!!this._errorback&&(this._errorback(e),!0)},t.prototype.isComplete=function(){return this._isComplete},t}();e.Module=r;var n=function(){function e(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}return e.prototype.getMaxModuleId=function(){return this._nextId},e.prototype.getModuleId=function(e){var t=this._strModuleIdToIntModuleId.get(e);return void 0===t&&(t=this._nextId++,
this._strModuleIdToIntModuleId.set(e,t),this._intModuleIdToStrModuleId[t]=e),t},e.prototype.getStrModuleId=function(e){return this._intModuleIdToStrModuleId[e]},e}(),i=function(){function e(e){this.id=e}return e.EXPORTS=new e(0),e.MODULE=new e(1),e.REQUIRE=new e(2),e}();e.RegularDependency=i;var o=function(){return function(e,t,r){this.id=e,this.pluginId=t,this.pluginParam=r}}();e.PluginDependency=o;var s=function(){function s(t,r,i,o,s){void 0===s&&(s=0),this._env=t,this._scriptLoader=r,this._loaderAvailableTimestamp=s,this._defineFunc=i,this._requireFunc=o,this._moduleIdProvider=new n,this._config=new e.Configuration(this._env),this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[]}return s.prototype.reset=function(){
return new s(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)},s.prototype.getGlobalAMDDefineFunc=function(){return this._defineFunc},s.prototype.getGlobalAMDRequireFunc=function(){return this._requireFunc},s._findRelevantLocationInStack=function(e,t){for(var r=function(e){return e.replace(/\\/g,"/")},n=r(e),i=t.split(/\n/),o=0;o<i.length;o++){var s=i[o].match(/(.*):(\d+):(\d+)\)?$/);if(s){var a=s[1],u=s[2],l=s[3],d=Math.max(a.lastIndexOf(" ")+1,a.lastIndexOf("(")+1);if(a=a.substr(d),(a=r(a))===n){var c={line:parseInt(u,10),col:parseInt(l,10)};return 1===c.line&&(c.col-="(function (require, define, __filename, __dirname) { ".length),c}}}throw new Error("Could not correlate define call site for needle "+e)},s.prototype.getBuildInfo=function(){if(!this._config.isBuild())return null;for(var e=[],t=0,r=0,n=this._modules2.length;r<n;r++){var i=this._modules2[r];if(i){
var o=this._buildInfoPath[i.id]||null,a=this._buildInfoDefineStack[i.id]||null,u=this._buildInfoDependencies[i.id];e[t++]={id:i.strId,path:o,defineLocation:o&&a?s._findRelevantLocationInStack(o,a):null,dependencies:u,shim:null,exports:i.exports}}}return e},s.prototype.getRecorder=function(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new e.LoaderEventRecorder(this._loaderAvailableTimestamp):this._recorder=e.NullLoaderEventRecorder.INSTANCE),this._recorder},s.prototype.getLoaderEvents=function(){return this.getRecorder().getEvents()},s.prototype.enqueueDefineAnonymousModule=function(e,t){if(null!==this._currentAnnonymousDefineCall)throw new Error("Can only have one anonymous define call per script file");var r=null;this._config.isBuild()&&(r=new Error("StackLocation").stack||null),this._currentAnnonymousDefineCall={stack:r,dependencies:e,callback:t}},s.prototype.defineModule=function(e,n,i,o,s,a){var u=this;void 0===a&&(a=new t(e));var l=this._moduleIdProvider.getModuleId(e)
;if(this._modules2[l])this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'");else{var d=new r(l,e,this._normalizeDependencies(n,a),i,o,a);this._modules2[l]=d,this._config.isBuild()&&(this._buildInfoDefineStack[l]=s,this._buildInfoDependencies[l]=(d.dependencies||[]).map(function(e){return u._moduleIdProvider.getStrModuleId(e.id)})),this._resolve(d)}},s.prototype._normalizeDependency=function(e,t){if("exports"===e)return i.EXPORTS;if("module"===e)return i.MODULE;if("require"===e)return i.REQUIRE;var r=e.indexOf("!");if(r>=0){var n=t.resolveModule(e.substr(0,r)),s=t.resolveModule(e.substr(r+1)),a=this._moduleIdProvider.getModuleId(n+"!"+s),u=this._moduleIdProvider.getModuleId(n);return new o(a,u,s)}return new i(this._moduleIdProvider.getModuleId(t.resolveModule(e)))},s.prototype._normalizeDependencies=function(e,t){for(var r=[],n=0,i=0,o=e.length;i<o;i++)r[n++]=this._normalizeDependency(e[i],t);return r},s.prototype._relativeRequire=function(t,r,n,i){
if("string"==typeof r)return this.synchronousRequire(r,t);this.defineModule(e.Utilities.generateAnonymousModule(),r,n,i,null,t)},s.prototype.synchronousRequire=function(e,r){void 0===r&&(r=new t(e));var n=this._normalizeDependency(e,r),i=this._modules2[n.id];if(!i)throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This is the first mention of this module!");if(!i.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This module has not been resolved completely yet.");if(i.error)throw i.error;return i.exports},s.prototype.configure=function(t,r){var n=this._config.shouldRecordStats();this._config=r?new e.Configuration(this._env,t):this._config.cloneAndMerge(t),this._config.shouldRecordStats()&&!n&&(this._recorder=null)},s.prototype.getConfig=function(){return this._config},s.prototype._onLoad=function(e){if(null!==this._currentAnnonymousDefineCall){var t=this._currentAnnonymousDefineCall
;this._currentAnnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(e),t.dependencies,t.callback,null,t.stack)}},s.prototype._createLoadError=function(t,r){var n=this,i=this._moduleIdProvider.getStrModuleId(t),o=(this._inverseDependencies2[t]||[]).map(function(e){return n._moduleIdProvider.getStrModuleId(e)}),s=e.ensureError(r);return s.phase="loading",s.moduleId=i,s.neededBy=o,s},s.prototype._onLoadError=function(e,t){var n=this._createLoadError(e,t);this._modules2[e]||(this._modules2[e]=new r(e,this._moduleIdProvider.getStrModuleId(e),[],function(){},function(){},null));for(var i=[],o=0,s=this._moduleIdProvider.getMaxModuleId();o<s;o++)i[o]=!1;var a=!1,u=[];for(u.push(e),i[e]=!0;u.length>0;){var l=u.shift(),d=this._modules2[l];d&&(a=d.onDependencyError(n)||a);var c=this._inverseDependencies2[l];if(c)for(var o=0,s=c.length;o<s;o++){var h=c[o];i[h]||(u.push(h),i[h]=!0)}}a||this._config.onError(n)},s.prototype._hasDependencyPath=function(e,t){var r=this._modules2[e];if(!r)return!1
;for(var n=[],i=0,o=this._moduleIdProvider.getMaxModuleId();i<o;i++)n[i]=!1;var s=[];for(s.push(r),n[e]=!0;s.length>0;){var a=s.shift().dependencies;if(a)for(var i=0,o=a.length;i<o;i++){var u=a[i];if(u.id===t)return!0;var l=this._modules2[u.id];l&&!n[u.id]&&(n[u.id]=!0,s.push(l))}}return!1},s.prototype._findCyclePath=function(e,t,r){if(e===t||50===r)return[e];var n=this._modules2[e];if(!n)return null;var i=n.dependencies;if(i)for(var o=0,s=i.length;o<s;o++){var a=this._findCyclePath(i[o].id,t,r+1);if(null!==a)return a.push(e),a}return null},s.prototype._createRequire=function(t){var r=this,n=function(e,n,i){return r._relativeRequire(t,e,n,i)};return n.toUrl=function(e){return r._config.requireToUrl(t.resolveModule(e))},n.getStats=function(){return r.getLoaderEvents()},n.__$__nodeRequire=e.global.nodeRequire,n},s.prototype._loadModule=function(e){var t=this;if(!this._modules2[e]&&!this._knownModules2[e]){this._knownModules2[e]=!0;var r=this._moduleIdProvider.getStrModuleId(e),n=this._config.moduleIdToPaths(r)
;this._env.isNode&&(-1===r.indexOf("/")||/^@[^\/]+\/[^\/]+$/.test(r))&&n.push("node|"+r);var i=-1,o=function(r){if(++i>=n.length)t._onLoadError(e,r);else{var s=n[i],a=t.getRecorder();if(t._config.isBuild()&&"empty:"===s)return t._buildInfoPath[e]=s,t.defineModule(t._moduleIdProvider.getStrModuleId(e),[],null,null,null),void t._onLoad(e);a.record(10,s),t._scriptLoader.load(t,s,function(){t._config.isBuild()&&(t._buildInfoPath[e]=s),a.record(11,s),t._onLoad(e)},function(e){a.record(12,s),o(e)})}};o(null)}},s.prototype._loadPluginDependency=function(e,r){var n=this;if(!this._modules2[r.id]&&!this._knownModules2[r.id]){this._knownModules2[r.id]=!0;var i=function(e){n.defineModule(n._moduleIdProvider.getStrModuleId(r.id),[],e,null,null)};i.error=function(e){n._config.onError(n._createLoadError(r.id,e))},e.load(r.pluginParam,this._createRequire(t.ROOT),i,this._config.getOptionsLiteral())}},s.prototype._resolve=function(e){var t=this,r=e.dependencies;if(r)for(var n=0,s=r.length;n<s;n++){var a=r[n]
;if(a!==i.EXPORTS)if(a!==i.MODULE)if(a!==i.REQUIRE){var u=this._modules2[a.id];if(u&&u.isComplete()){if(u.error)return void e.onDependencyError(u.error);e.unresolvedDependenciesCount--}else if(this._hasDependencyPath(a.id,e.id)){console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(a.id)+"' and '"+this._moduleIdProvider.getStrModuleId(e.id)+"'. The cyclic path follows:");var l=this._findCyclePath(a.id,e.id,0)||[];l.reverse(),l.push(a.id),console.warn(l.map(function(e){return t._moduleIdProvider.getStrModuleId(e)}).join(" => \n")),e.unresolvedDependenciesCount--}else if(this._inverseDependencies2[a.id]=this._inverseDependencies2[a.id]||[],this._inverseDependencies2[a.id].push(e.id),a instanceof o){var d=this._modules2[a.pluginId];if(d&&d.isComplete()){this._loadPluginDependency(d.exports,a);continue}var c=this._inversePluginDependencies2.get(a.pluginId);c||(c=[],this._inversePluginDependencies2.set(a.pluginId,c)),c.push(a),this._loadModule(a.pluginId)
}else this._loadModule(a.id)}else e.unresolvedDependenciesCount--;else e.unresolvedDependenciesCount--;else e.exportsPassedIn=!0,e.unresolvedDependenciesCount--}0===e.unresolvedDependenciesCount&&this._onModuleComplete(e)},s.prototype._onModuleComplete=function(e){var t=this,r=this.getRecorder();if(!e.isComplete()){var n=e.dependencies,o=[];if(n)for(var s=0,a=n.length;s<a;s++){var u=n[s];if(u!==i.EXPORTS)if(u!==i.MODULE)if(u!==i.REQUIRE){var l=this._modules2[u.id];o[s]=l?l.exports:null}else o[s]=this._createRequire(e.moduleIdResolver);else o[s]={id:e.strId,config:function(){return t._config.getConfigForModule(e.strId)}};else o[s]=e.exports}e.complete(r,this._config,o);var d=this._inverseDependencies2[e.id];if(this._inverseDependencies2[e.id]=null,d)for(var s=0,a=d.length;s<a;s++){var c=d[s],h=this._modules2[c];h.unresolvedDependenciesCount--,0===h.unresolvedDependenciesCount&&this._onModuleComplete(h)}var f=this._inversePluginDependencies2.get(e.id);if(f){this._inversePluginDependencies2.delete(e.id)
;for(var s=0,a=f.length;s<a;s++)this._loadPluginDependency(e.exports,f[s])}}},s}();e.ModuleManager=s}(o||(o={}));var i,o;!function(e){function t(){if(void 0!==e.global.require||"undefined"!=typeof require){var t=e.global.require||require;if("function"==typeof t&&"function"==typeof t.resolve){var i=function(e){n.getRecorder().record(33,e);try{return t(e)}finally{n.getRecorder().record(34,e)}};e.global.nodeRequire=i,a.nodeRequire=i,a.__$__nodeRequire=i}}r.isNode&&!r.isElectronRenderer?(module.exports=a,require=a):(r.isElectronRenderer||(e.global.define=o),e.global.require=a)}var r=new e.Environment,n=null,o=function(e,t,r){"string"!=typeof e&&(r=t,t=e,e=null),"object"==typeof t&&Array.isArray(t)||(r=t,t=null),t||(t=["require","exports","module"]),e?n.defineModule(e,t,r,null,null):n.enqueueDefineAnonymousModule(t,r)};o.amd={jQuery:!0};var s=function(e,t){void 0===t&&(t=!1),n.configure(e,t)},a=function(){if(1===arguments.length){
if(arguments[0]instanceof Object&&!Array.isArray(arguments[0]))return void s(arguments[0]);if("string"==typeof arguments[0])return n.synchronousRequire(arguments[0])}if(2!==arguments.length&&3!==arguments.length||!Array.isArray(arguments[0]))throw new Error("Unrecognized require call");n.defineModule(e.Utilities.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null)};a.config=s,a.getConfig=function(){return n.getConfig().getOptionsLiteral()},a.reset=function(){n=n.reset()},a.getBuildInfo=function(){return n.getBuildInfo()},a.getStats=function(){return n.getLoaderEvents()},a.define=function(){return o.apply(null,arguments)},e.init=t,"function"==typeof e.global.define&&e.global.define.amd||(n=new e.ModuleManager(r,e.createScriptLoader(r),o,a,e.Utilities.getHighPerformanceTimestamp()),void 0!==e.global.require&&"function"!=typeof e.global.require&&a.config(e.global.require),(i=function(){return o.apply(null,arguments)}).amd=o.amd,"undefined"==typeof doNotInitLoader&&t())}(o||(o={})),
i(e[2],t([0,1]),function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=!1,n=!1,i=!1,o=!1,s=!1,a=void 0,u="en",l=void 0,d=void 0;const c="undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.electron&&"renderer"===process.type;if("object"!=typeof navigator||c){if("object"==typeof process){r="win32"===process.platform,n="darwin"===process.platform,i="linux"===process.platform,a="en",u="en";const e=process.env.VSCODE_NLS_CONFIG;if(e)try{const t=JSON.parse(e),r=t.availableLanguages["*"];a=t.locale,u=r||"en",l=t._translationsConfigFile}catch(e){}o=!0}}else d=navigator.userAgent,r=d.indexOf("Windows")>=0,n=d.indexOf("Macintosh")>=0,i=d.indexOf("Linux")>=0,s=!0,u=a=navigator.language;!function(e){e[e.Web=0]="Web",e[e.Mac=1]="Mac",e[e.Linux=2]="Linux",e[e.Windows=3]="Windows"}(t.Platform||(t.Platform={})),t.PlatformToString=function(e){switch(e){case 0:return"Web";case 1:return"Mac";case 2:return"Linux";case 3:return"Windows"}};let h=0;n?h=1:r?h=3:i&&(h=2),
t.isWindows=r,t.isMacintosh=n,t.isLinux=i,t.isNative=o,t.isWeb=s,t.platform=h,t.userAgent=d,t.isRootUser=function(){return o&&!r&&0===process.getuid()},t.language=u;!function(e){e.value=function(){return t.language},e.isDefaultVariant=function(){return 2===t.language.length?"en"===t.language:t.language.length>=3&&"e"===t.language[0]&&"n"===t.language[1]&&"-"===t.language[2]},e.isDefault=function(){return"en"===t.language}}(t.Language||(t.Language={})),t.locale=a,t.translationsConfigFile=l;const f="object"==typeof self?self:"object"==typeof global?global:{};t.globals=f;let p=null;t.setImmediate=function(e){return null===p&&(p=t.globals.setImmediate?t.globals.setImmediate.bind(t.globals):"undefined"!=typeof process&&"function"==typeof process.nextTick?process.nextTick.bind(process):t.globals.setTimeout.bind(t.globals)),p(e)};!function(e){e[e.Windows=1]="Windows",e[e.Macintosh=2]="Macintosh",e[e.Linux=3]="Linux"}(t.OperatingSystem||(t.OperatingSystem={})),t.OS=n?2:r?1:3}),i(e[3],t([0,1,2]),function(e,t,r){
"use strict";function n(e,t){let r=void 0,n=-1;for(let i=0;i<e.length;i++){const o=e.charCodeAt(i);if(o>=97&&o<=122||o>=65&&o<=90||o>=48&&o<=57||45===o||46===o||95===o||126===o||t&&47===o)-1!==n&&(r+=encodeURIComponent(e.substring(n,i)),n=-1),void 0!==r&&(r+=e.charAt(i));else{void 0===r&&(r=e.substr(0,i));const t=v[o];void 0!==t?(-1!==n&&(r+=encodeURIComponent(e.substring(n,i)),n=-1),r+=t):-1===n&&(n=i)}}return-1!==n&&(r+=encodeURIComponent(e.substring(n))),void 0!==r?r:e}function i(e){let t;return t=e.authority&&e.path.length>1&&"file"===e.scheme?`//${e.authority}${e.path}`:47===e.path.charCodeAt(0)&&(e.path.charCodeAt(1)>=65&&e.path.charCodeAt(1)<=90||e.path.charCodeAt(1)>=97&&e.path.charCodeAt(1)<=122)&&58===e.path.charCodeAt(2)?e.path[1].toLowerCase()+e.path.substr(2):e.path,r.isWindows&&(t=t.replace(/\//g,"\\")),t}function o(e,t){const r=t?function(e){let t=void 0;for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);35===n||63===n?(void 0===t&&(t=e.substr(0,r)),t+=v[n]):void 0!==t&&(t+=e[r])}
return void 0!==t?t:e}:n;let i="",{scheme:o,authority:s,path:a,query:u,fragment:l}=e;if(o&&(i+=o,i+=":"),(s||"file"===o)&&(i+=c,i+=c),s){let e=s.indexOf("@");if(-1!==e){const t=s.substr(0,e);s=s.substr(e+1),-1===(e=t.indexOf(":"))?i+=r(t,!1):(i+=r(t.substr(0,e),!1),i+=":",i+=r(t.substr(e+1),!1)),i+="@"}-1===(e=(s=s.toLowerCase()).indexOf(":"))?i+=r(s,!1):(i+=r(s.substr(0,e),!1),i+=s.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){const e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){const e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}i+=r(a,!0)}return u&&(i+="?",i+=r(u,!1)),l&&(i+="#",i+=t?l:n(l,!1)),i}Object.defineProperty(t,"__esModule",{value:!0});const s=/^\w[\w\d+.-]*$/,a=/^\//,u=/^\/\//;let l=!0;t.setUriThrowOnMissingScheme=function(e){const t=l;return l=e,t};const d="",c="/",h=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class f{
static isUri(e){return e instanceof f||!!e&&("string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"function"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString)}constructor(e,t,r,n,i,o=!1){"object"==typeof e?(this.scheme=e.scheme||d,this.authority=e.authority||d,this.path=e.path||d,this.query=e.query||d,this.fragment=e.fragment||d):(this.scheme=function(e,t){return t||l?e||d:(e||(console.trace("BAD uri lacks scheme, falling back to file-scheme."),e="file"),e)}(e,o),this.authority=t||d,this.path=function(e,t){switch(e){case"https":case"http":case"file":t?t[0]!==c&&(t=c+t):t=c}return t}(this.scheme,r||d),this.query=n||d,this.fragment=i||d,function(e,t){if(!e.scheme){if(t||l)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`)
;console.warn(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`)}if(e.scheme&&!s.test(e.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(e.path)if(e.authority){if(!a.test(e.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(u.test(e.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this,o))}get fsPath(){return i(this)}with(e){if(!e)return this;let{scheme:t,authority:r,path:n,query:i,fragment:o}=e;return void 0===t?t=this.scheme:null===t&&(t=d),void 0===r?r=this.authority:null===r&&(r=d),void 0===n?n=this.path:null===n&&(n=d),void 0===i?i=this.query:null===i&&(i=d),void 0===o?o=this.fragment:null===o&&(o=d),
t===this.scheme&&r===this.authority&&n===this.path&&i===this.query&&o===this.fragment?this:new g(t,r,n,i,o)}static parse(e,t=!1){const r=h.exec(e);return r?new g(r[2]||d,decodeURIComponent(r[4]||d),decodeURIComponent(r[5]||d),decodeURIComponent(r[7]||d),decodeURIComponent(r[9]||d),t):new g(d,d,d,d,d)}static file(e){let t=d;if(r.isWindows&&(e=e.replace(/\\/g,c)),e[0]===c&&e[1]===c){const r=e.indexOf(c,2);-1===r?(t=e.substring(2),e=c):(t=e.substring(2,r),e=e.substring(r)||c)}return new g("file",t,e,d,d)}static from(e){return new g(e.scheme,e.authority,e.path,e.query,e.fragment)}toString(e=!1){return o(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof f)return e;{const t=new g(e);return t._formatted=e.external,t._fsPath=e._sep===p?e.fsPath:null,t}}return e}}t.URI=f;const p=r.isWindows?1:void 0;class g extends f{constructor(){super(...arguments),this._formatted=null,this._fsPath=null}get fsPath(){return this._fsPath||(this._fsPath=i(this)),this._fsPath}toString(e=!1){
return e?o(this,!0):(this._formatted||(this._formatted=o(this,!1)),this._formatted)}toJSON(){const e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=p),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}}const v={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"}});var s=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function s(e){try{u(n.next(e))}catch(e){o(e)}}function a(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(s,a)}u((n=n.apply(e,t||[])).next())})};i(e[4],t([0,1,3]),function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),self.addEventListener("install",e=>{
console.log("SW#install"),self.skipWaiting()}),self.addEventListener("activate",e=>{console.log("SW#activate"),e.waitUntil((()=>s(this,void 0,void 0,function*(){self.registration.navigationPreload&&(yield self.registration.navigationPreload.enable()),yield caches.delete(n),yield self.clients.claim()}))())});const n="vscode-extension-resources",i=new Map;self.addEventListener("message",e=>{const t=i.get(e.data.token);t&&(t(e.data.data,e.data.isExtensionResource),i.delete(e.data.token))}),self.addEventListener("fetch",e=>s(this,void 0,void 0,function*(){const t=r.URI.parse(e.request.url);"/vscode-remote-resource"===t.path?e.respondWith(function(e,t){return s(this,void 0,void 0,function*(){const t=yield caches.open(n).then(t=>t.match(e.request));if(t)return t;const r=(yield e.preloadResponse)||(yield fetch(e.request));return"true"===r.headers.get("X-VSCode-Extension")&&(yield caches.open(n).then(t=>t.put(e.request,r.clone()))),r})}(e)):e.respondWith(function(e){return s(this,void 0,void 0,function*(){
return"only-if-cached"===e.request.cache&&"same-origin"!==e.request.mode?new Response(void 0,{status:504,statusText:"Gateway Timeout (dev tools: https://bugs.chromium.org/p/chromium/issues/detail?id=823392)"}):(yield e.preloadResponse)||(yield fetch(e.request))})}(e))}))});importScripts("../../../../../vs/loader.js"),require.config({baseUrl:"../../../../../",catchError:!0}),require(["vs/workbench/contrib/resources/browser/resourceServiceWorker"],()=>{},e=>console.error(e))}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3db7e09f3b61f915d03bbfa58e258d6eee843f35/core/vs/workbench/contrib/resources/browser/resourceServiceWorkerMain.js.map
