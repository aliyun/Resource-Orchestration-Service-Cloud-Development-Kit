using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `CacheRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICacheRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.CacheRuleProps")]
    public interface ICacheRuleProps
    {
        /// <summary>Property siteId: The site ID, which can be obtained by calling the [ListSites] API.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property additionalCacheablePorts: Enable caching on specified ports.</summary>
        /// <remarks>
        /// Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
        /// </remarks>
        [JsiiProperty(name: "additionalCacheablePorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AdditionalCacheablePorts
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property browserCacheMode: Browser cache mode.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description><c>no_cache</c>no_cache: Do not cache.</description>
        /// <description><c>follow_origin</c>: Follow the origin server's cache policy.</description>
        /// <description><c>override_origin</c>: Override the origin server's cache policy.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "browserCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BrowserCacheMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property browserCacheTtl: Browser cache expiration time in seconds.</summary>
        [JsiiProperty(name: "browserCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BrowserCacheTtl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bypassCache: Set the bypass cache mode.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description><c>cache_all</c>: Cache all requests.</description>
        /// <description><c>bypass_all</c>: Bypass cache for all requests.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "bypassCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BypassCache
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cacheDeceptionArmor: Cache deception protection.</summary>
        /// <remarks>
        /// Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached. Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: Enabled.</description>
        /// <description><c>off</c>: Disabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "cacheDeceptionArmor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CacheDeceptionArmor
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cacheReserveEligibility: Cache retention eligibility.</summary>
        /// <remarks>
        /// Used to control whether user requests bypass the cache retention node when returning to the origin. Possible values:
        ///
        /// <list type="bullet">
        /// <description><c>bypass_cache_reserve</c>: Requests bypass cache retention.</description>
        /// <description><c>eligible_for_cache_reserve</c>: Eligible for cache retention.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "cacheReserveEligibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CacheReserveEligibility
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property checkPresenceCookie: When generating the cache key, check if the cookie exists.</summary>
        /// <remarks>
        /// If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "checkPresenceCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CheckPresenceCookie
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property checkPresenceHeader: When generating the cache key, check if the header exists.</summary>
        /// <remarks>
        /// If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "checkPresenceHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CheckPresenceHeader
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property edgeCacheMode: Edge cache mode.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description><c>follow_origin</c>: Follow the origin server's cache policy (if it exists), otherwise use the default cache policy.</description>
        /// <description><c>no_cache</c>: Do not cache.</description>
        /// <description><c>override_origin</c>: Override the origin server's cache policy.</description>
        /// <description><c>follow_origin_bypass</c>: Follow the origin server's cache policy (if it exists), otherwise do not cache.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "edgeCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EdgeCacheMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property edgeCacheTtl: Edge cache expiration time in seconds.</summary>
        [JsiiProperty(name: "edgeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EdgeCacheTtl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds.</summary>
        /// <remarks>
        /// Multiple values are separated by commas, for example: 4xx=999999,5xx=999998
        /// </remarks>
        [JsiiProperty(name: "edgeStatusCodeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EdgeStatusCodeCacheTtl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property includeCookie: When generating the cache key, add the specified cookie names and their values.</summary>
        /// <remarks>
        /// Multiple values are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "includeCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IncludeCookie
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property includeHeader: When generating the cache key, add the specified header names and their values.</summary>
        /// <remarks>
        /// Multiple values are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "includeHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IncludeHeader
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queryString: Query strings to be reserved or excluded.</summary>
        /// <remarks>
        /// Multiple values are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "queryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueryString
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queryStringMode: The processing mode for query strings when generating the cache key.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description><c>ignore_all</c>: Ignore all.</description>
        /// <description><c>exclude_query_string</c>: Exclude specified query strings.</description>
        /// <description><c>reserve_all</c>: Default, reserve all.</description>
        /// <description><c>include_query_string</c>: Include specified query strings.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "queryStringMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueryStringMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rule: Rule content, using conditional expressions to match user requests.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        ///
        /// <list type="bullet">
        /// <description>Match all incoming requests: value set to true.</description>
        /// <description>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Rule
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleEnable: Rule switch.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set. Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: open.</description>
        /// <description><c>off</c>: close.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleName: Rule name.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sequence: Order of rule execution.</summary>
        /// <remarks>
        /// The smaller the value, the higher the priority for execution.
        /// </remarks>
        [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Sequence
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serveStale: Serve stale cache.</summary>
        /// <remarks>
        /// When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable. Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: Enabled.</description>
        /// <description><c>off</c>: Disabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "serveStale", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServeStale
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property siteVersion: The version number of the site configuration.</summary>
        /// <remarks>
        /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        /// </remarks>
        [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SiteVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sortQueryStringForCache: Query string sorting, disabled by default.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: Enable.</description>
        /// <description><c>off</c>: Disable.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "sortQueryStringForCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SortQueryStringForCache
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userDeviceType: When generating the cache key, add the client device type.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: Enable.</description>
        /// <description><c>off</c>: Disable.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "userDeviceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserDeviceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userGeo: When generating the cache key, add the client's geographic location.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: Enable.</description>
        /// <description><c>off</c>: Disable.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "userGeo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserGeo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userLanguage: When generating cache keys, include the client's language type.</summary>
        /// <remarks>
        /// Possible values:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: Enable.</description>
        /// <description><c>off</c>: Disable.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "userLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserLanguage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CacheRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICacheRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.CacheRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.ICacheRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property siteId: The site ID, which can be obtained by calling the [ListSites] API.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property additionalCacheablePorts: Enable caching on specified ports.</summary>
            /// <remarks>
            /// Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "additionalCacheablePorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AdditionalCacheablePorts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property browserCacheMode: Browser cache mode.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description><c>no_cache</c>no_cache: Do not cache.</description>
            /// <description><c>follow_origin</c>: Follow the origin server's cache policy.</description>
            /// <description><c>override_origin</c>: Override the origin server's cache policy.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "browserCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BrowserCacheMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property browserCacheTtl: Browser cache expiration time in seconds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "browserCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BrowserCacheTtl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bypassCache: Set the bypass cache mode.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description><c>cache_all</c>: Cache all requests.</description>
            /// <description><c>bypass_all</c>: Bypass cache for all requests.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bypassCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BypassCache
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cacheDeceptionArmor: Cache deception protection.</summary>
            /// <remarks>
            /// Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached. Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: Enabled.</description>
            /// <description><c>off</c>: Disabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cacheDeceptionArmor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CacheDeceptionArmor
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cacheReserveEligibility: Cache retention eligibility.</summary>
            /// <remarks>
            /// Used to control whether user requests bypass the cache retention node when returning to the origin. Possible values:
            ///
            /// <list type="bullet">
            /// <description><c>bypass_cache_reserve</c>: Requests bypass cache retention.</description>
            /// <description><c>eligible_for_cache_reserve</c>: Eligible for cache retention.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cacheReserveEligibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CacheReserveEligibility
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property checkPresenceCookie: When generating the cache key, check if the cookie exists.</summary>
            /// <remarks>
            /// If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkPresenceCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckPresenceCookie
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property checkPresenceHeader: When generating the cache key, check if the header exists.</summary>
            /// <remarks>
            /// If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkPresenceHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckPresenceHeader
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property edgeCacheMode: Edge cache mode.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description><c>follow_origin</c>: Follow the origin server's cache policy (if it exists), otherwise use the default cache policy.</description>
            /// <description><c>no_cache</c>: Do not cache.</description>
            /// <description><c>override_origin</c>: Override the origin server's cache policy.</description>
            /// <description><c>follow_origin_bypass</c>: Follow the origin server's cache policy (if it exists), otherwise do not cache.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "edgeCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EdgeCacheMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property edgeCacheTtl: Edge cache expiration time in seconds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "edgeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EdgeCacheTtl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds.</summary>
            /// <remarks>
            /// Multiple values are separated by commas, for example: 4xx=999999,5xx=999998
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "edgeStatusCodeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EdgeStatusCodeCacheTtl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property includeCookie: When generating the cache key, add the specified cookie names and their values.</summary>
            /// <remarks>
            /// Multiple values are supported, separated by spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "includeCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncludeCookie
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property includeHeader: When generating the cache key, add the specified header names and their values.</summary>
            /// <remarks>
            /// Multiple values are supported, separated by spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "includeHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncludeHeader
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queryString: Query strings to be reserved or excluded.</summary>
            /// <remarks>
            /// Multiple values are supported, separated by spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueryString
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queryStringMode: The processing mode for query strings when generating the cache key.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description><c>ignore_all</c>: Ignore all.</description>
            /// <description><c>exclude_query_string</c>: Exclude specified query strings.</description>
            /// <description><c>reserve_all</c>: Default, reserve all.</description>
            /// <description><c>include_query_string</c>: Include specified query strings.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queryStringMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueryStringMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rule: Rule content, using conditional expressions to match user requests.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
            ///
            /// <list type="bullet">
            /// <description>Match all incoming requests: value set to true.</description>
            /// <description>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Rule
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleEnable: Rule switch.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set. Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: open.</description>
            /// <description><c>off</c>: close.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleName: Rule name.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sequence: Order of rule execution.</summary>
            /// <remarks>
            /// The smaller the value, the higher the priority for execution.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sequence
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serveStale: Serve stale cache.</summary>
            /// <remarks>
            /// When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable. Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: Enabled.</description>
            /// <description><c>off</c>: Disabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serveStale", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServeStale
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property siteVersion: The version number of the site configuration.</summary>
            /// <remarks>
            /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SiteVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sortQueryStringForCache: Query string sorting, disabled by default.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: Enable.</description>
            /// <description><c>off</c>: Disable.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortQueryStringForCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortQueryStringForCache
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userDeviceType: When generating the cache key, add the client device type.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: Enable.</description>
            /// <description><c>off</c>: Disable.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userDeviceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserDeviceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userGeo: When generating the cache key, add the client's geographic location.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: Enable.</description>
            /// <description><c>off</c>: Disable.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userGeo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserGeo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userLanguage: When generating cache keys, include the client's language type.</summary>
            /// <remarks>
            /// Possible values:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: Enable.</description>
            /// <description><c>off</c>: Disable.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserLanguage
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
