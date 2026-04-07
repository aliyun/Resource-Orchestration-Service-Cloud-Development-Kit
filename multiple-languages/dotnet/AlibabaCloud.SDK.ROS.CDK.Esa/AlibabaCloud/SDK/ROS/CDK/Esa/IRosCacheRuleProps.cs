using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosCacheRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCacheRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosCacheRuleProps")]
    public interface IRosCacheRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: siteId: The site ID, which can be obtained by calling the [ListSites] API.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: additionalCacheablePorts: Enable caching on specified ports. Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
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

        /// <remarks>
        /// <strong>Property</strong>: browserCacheMode: Browser cache mode. Possible values:
        /// - `no_cache`no_cache: Do not cache.
        /// - `follow_origin`: Follow the origin server's cache policy.
        /// - `override_origin`: Override the origin server's cache policy.
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

        /// <remarks>
        /// <strong>Property</strong>: browserCacheTtl: Browser cache expiration time in seconds.
        /// </remarks>
        [JsiiProperty(name: "browserCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BrowserCacheTtl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: bypassCache: Set the bypass cache mode. Possible values:
        /// - `cache_all`: Cache all requests.
        /// - `bypass_all`: Bypass cache for all requests.
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

        /// <remarks>
        /// <strong>Property</strong>: cacheDeceptionArmor: Cache deception protection. Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached. Value range:
        /// - `on`: Enabled.
        /// - `off`: Disabled.
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

        /// <remarks>
        /// <strong>Property</strong>: cacheReserveEligibility: Cache retention eligibility. Used to control whether user requests bypass the cache retention node when returning to the origin. Possible values:
        /// - `bypass_cache_reserve`: Requests bypass cache retention.
        /// - `eligible_for_cache_reserve`: Eligible for cache retention.
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

        /// <remarks>
        /// <strong>Property</strong>: checkPresenceCookie: When generating the cache key, check if the cookie exists. If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
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

        /// <remarks>
        /// <strong>Property</strong>: checkPresenceHeader: When generating the cache key, check if the header exists. If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
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

        /// <remarks>
        /// <strong>Property</strong>: edgeCacheMode: Edge cache mode. Possible values:
        /// - `follow_origin`: Follow the origin server's cache policy (if it exists), otherwise use the default cache policy.
        /// - `no_cache`: Do not cache.
        /// - `override_origin`: Override the origin server's cache policy.
        /// - `follow_origin_bypass`: Follow the origin server's cache policy (if it exists), otherwise do not cache.
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

        /// <remarks>
        /// <strong>Property</strong>: edgeCacheTtl: Edge cache expiration time in seconds.
        /// </remarks>
        [JsiiProperty(name: "edgeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EdgeCacheTtl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: edgeStatusCodeCacheTtl: Status code cache expiration time in seconds. Multiple values are separated by commas, for example: 4xx=999999,5xx=999998
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

        /// <remarks>
        /// <strong>Property</strong>: includeCookie: When generating the cache key, add the specified cookie names and their values. Multiple values are supported, separated by spaces.
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

        /// <remarks>
        /// <strong>Property</strong>: includeHeader: When generating the cache key, add the specified header names and their values. Multiple values are supported, separated by spaces.
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

        /// <remarks>
        /// <strong>Property</strong>: queryString: Query strings to be reserved or excluded. Multiple values are supported, separated by spaces.
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

        /// <remarks>
        /// <strong>Property</strong>: queryStringMode: The processing mode for query strings when generating the cache key. Possible values:
        /// - `ignore_all`: Ignore all.
        /// - `exclude_query_string`: Exclude specified query strings.
        /// - `reserve_all`: Default, reserve all.
        /// - `include_query_string`: Include specified query strings.
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

        /// <remarks>
        /// <strong>Property</strong>: rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        /// - Match all incoming requests: value set to true.
        /// - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
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

        /// <remarks>
        /// <strong>Property</strong>: ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        /// - `on`: open.
        /// - `off`: close.
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

        /// <remarks>
        /// <strong>Property</strong>: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
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

        /// <remarks>
        /// <strong>Property</strong>: sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
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

        /// <remarks>
        /// <strong>Property</strong>: serveStale: Serve stale cache. When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable. Value range:
        /// - `on`: Enabled.
        /// - `off`: Disabled.
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

        /// <remarks>
        /// <strong>Property</strong>: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
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

        /// <remarks>
        /// <strong>Property</strong>: sortQueryStringForCache: Query string sorting, disabled by default. Possible values:
        /// - `on`: Enable.
        /// - `off`: Disable.
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

        /// <remarks>
        /// <strong>Property</strong>: userDeviceType: When generating the cache key, add the client device type. Possible values:
        /// - `on`: Enable.
        /// - `off`: Disable.
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

        /// <remarks>
        /// <strong>Property</strong>: userGeo: When generating the cache key, add the client's geographic location. Possible values:
        /// - `on`: Enable.
        /// - `off`: Disable.
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

        /// <remarks>
        /// <strong>Property</strong>: userLanguage: When generating cache keys, include the client's language type. Possible values:
        /// - `on`: Enable.
        /// - `off`: Disable.
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

        /// <summary>Properties for defining a `RosCacheRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCacheRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosCacheRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosCacheRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: The site ID, which can be obtained by calling the [ListSites] API.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: additionalCacheablePorts: Enable caching on specified ports. Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "additionalCacheablePorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AdditionalCacheablePorts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: browserCacheMode: Browser cache mode. Possible values:
            /// - `no_cache`no_cache: Do not cache.
            /// - `follow_origin`: Follow the origin server's cache policy.
            /// - `override_origin`: Override the origin server's cache policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "browserCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BrowserCacheMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: browserCacheTtl: Browser cache expiration time in seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "browserCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BrowserCacheTtl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bypassCache: Set the bypass cache mode. Possible values:
            /// - `cache_all`: Cache all requests.
            /// - `bypass_all`: Bypass cache for all requests.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bypassCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BypassCache
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cacheDeceptionArmor: Cache deception protection. Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached. Value range:
            /// - `on`: Enabled.
            /// - `off`: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cacheDeceptionArmor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CacheDeceptionArmor
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cacheReserveEligibility: Cache retention eligibility. Used to control whether user requests bypass the cache retention node when returning to the origin. Possible values:
            /// - `bypass_cache_reserve`: Requests bypass cache retention.
            /// - `eligible_for_cache_reserve`: Eligible for cache retention.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cacheReserveEligibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CacheReserveEligibility
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: checkPresenceCookie: When generating the cache key, check if the cookie exists. If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkPresenceCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckPresenceCookie
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: checkPresenceHeader: When generating the cache key, check if the header exists. If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkPresenceHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckPresenceHeader
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: edgeCacheMode: Edge cache mode. Possible values:
            /// - `follow_origin`: Follow the origin server's cache policy (if it exists), otherwise use the default cache policy.
            /// - `no_cache`: Do not cache.
            /// - `override_origin`: Override the origin server's cache policy.
            /// - `follow_origin_bypass`: Follow the origin server's cache policy (if it exists), otherwise do not cache.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "edgeCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EdgeCacheMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: edgeCacheTtl: Edge cache expiration time in seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "edgeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EdgeCacheTtl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: edgeStatusCodeCacheTtl: Status code cache expiration time in seconds. Multiple values are separated by commas, for example: 4xx=999999,5xx=999998
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "edgeStatusCodeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EdgeStatusCodeCacheTtl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: includeCookie: When generating the cache key, add the specified cookie names and their values. Multiple values are supported, separated by spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "includeCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncludeCookie
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: includeHeader: When generating the cache key, add the specified header names and their values. Multiple values are supported, separated by spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "includeHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IncludeHeader
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: queryString: Query strings to be reserved or excluded. Multiple values are supported, separated by spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueryString
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: queryStringMode: The processing mode for query strings when generating the cache key. Possible values:
            /// - `ignore_all`: Ignore all.
            /// - `exclude_query_string`: Exclude specified query strings.
            /// - `reserve_all`: Default, reserve all.
            /// - `include_query_string`: Include specified query strings.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queryStringMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueryStringMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
            /// - Match all incoming requests: value set to true.
            /// - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Rule
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
            /// - `on`: open.
            /// - `off`: close.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sequence
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serveStale: Serve stale cache. When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable. Value range:
            /// - `on`: Enabled.
            /// - `off`: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serveStale", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServeStale
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SiteVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sortQueryStringForCache: Query string sorting, disabled by default. Possible values:
            /// - `on`: Enable.
            /// - `off`: Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sortQueryStringForCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SortQueryStringForCache
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userDeviceType: When generating the cache key, add the client device type. Possible values:
            /// - `on`: Enable.
            /// - `off`: Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userDeviceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserDeviceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userGeo: When generating the cache key, add the client's geographic location. Possible values:
            /// - `on`: Enable.
            /// - `off`: Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userGeo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserGeo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userLanguage: When generating cache keys, include the client's language type. Possible values:
            /// - `on`: Enable.
            /// - `off`: Disable.
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
