using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `CacheRule`.</summary>
    [JsiiInterface(nativeType: typeof(ICacheRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.ICacheRule")]
    public interface ICacheRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AdditionalCacheablePorts: Enable caching on specified ports.</summary>
        [JsiiProperty(name: "attrAdditionalCacheablePorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAdditionalCacheablePorts
        {
            get;
        }

        /// <summary>Attribute BrowserCacheMode: Browser cache mode.</summary>
        [JsiiProperty(name: "attrBrowserCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBrowserCacheMode
        {
            get;
        }

        /// <summary>Attribute BrowserCacheTtl: Browser cache expiration time in seconds.</summary>
        [JsiiProperty(name: "attrBrowserCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBrowserCacheTtl
        {
            get;
        }

        /// <summary>Attribute BypassCache: Set the bypass cache mode.</summary>
        [JsiiProperty(name: "attrBypassCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBypassCache
        {
            get;
        }

        /// <summary>Attribute CacheDeceptionArmor: Cache deception protection.</summary>
        /// <remarks>
        /// Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
        /// </remarks>
        [JsiiProperty(name: "attrCacheDeceptionArmor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCacheDeceptionArmor
        {
            get;
        }

        /// <summary>Attribute CacheReserveEligibility: Cache retention eligibility.</summary>
        /// <remarks>
        /// Used to control whether user requests bypass the cache retention node when returning to the origin.
        /// </remarks>
        [JsiiProperty(name: "attrCacheReserveEligibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCacheReserveEligibility
        {
            get;
        }

        /// <summary>Attribute CacheRuleId: Cache Rule Id.</summary>
        [JsiiProperty(name: "attrCacheRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCacheRuleId
        {
            get;
        }

        /// <summary>Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists.</summary>
        /// <remarks>
        /// If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "attrCheckPresenceCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCheckPresenceCookie
        {
            get;
        }

        /// <summary>Attribute CheckPresenceHeader: When generating the cache key, check if the header exists.</summary>
        /// <remarks>
        /// If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "attrCheckPresenceHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCheckPresenceHeader
        {
            get;
        }

        /// <summary>Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.</summary>
        [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigType
        {
            get;
        }

        /// <summary>Attribute EdgeCacheMode: Edge cache mode.</summary>
        [JsiiProperty(name: "attrEdgeCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEdgeCacheMode
        {
            get;
        }

        /// <summary>Attribute EdgeCacheTtl: Edge cache expiration time in seconds.</summary>
        [JsiiProperty(name: "attrEdgeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEdgeCacheTtl
        {
            get;
        }

        /// <summary>Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.</summary>
        [JsiiProperty(name: "attrEdgeStatusCodeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEdgeStatusCodeCacheTtl
        {
            get;
        }

        /// <summary>Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values.</summary>
        /// <remarks>
        /// Multiple values are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "attrIncludeCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIncludeCookie
        {
            get;
        }

        /// <summary>Attribute IncludeHeader: When generating the cache key, add the specified header names and their values.</summary>
        /// <remarks>
        /// Multiple values are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "attrIncludeHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIncludeHeader
        {
            get;
        }

        /// <summary>Attribute QueryString: Query strings to be reserved or excluded.</summary>
        /// <remarks>
        /// Multiple values are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "attrQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueryString
        {
            get;
        }

        /// <summary>Attribute QueryStringMode: The processing mode for query strings when generating the cache key.</summary>
        [JsiiProperty(name: "attrQueryStringMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueryStringMode
        {
            get;
        }

        /// <summary>Attribute Rule: Rule content, using conditional expressions to match user requests.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRule
        {
            get;
        }

        /// <summary>Attribute RuleEnable: Rule switch.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleEnable
        {
            get;
        }

        /// <summary>Attribute RuleName: Rule name.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleName
        {
            get;
        }

        /// <summary>Attribute Sequence: Order of rule execution.</summary>
        /// <remarks>
        /// The smaller the value, the higher the priority for execution.
        /// </remarks>
        [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSequence
        {
            get;
        }

        /// <summary>Attribute ServeStale: Serve stale cache.</summary>
        /// <remarks>
        /// When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
        /// </remarks>
        [JsiiProperty(name: "attrServeStale", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServeStale
        {
            get;
        }

        /// <summary>Attribute SiteVersion: The version number of the site configuration.</summary>
        /// <remarks>
        /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        /// </remarks>
        [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteVersion
        {
            get;
        }

        /// <summary>Attribute SortQueryStringForCache: Query string sorting, disabled by default.</summary>
        [JsiiProperty(name: "attrSortQueryStringForCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSortQueryStringForCache
        {
            get;
        }

        /// <summary>Attribute UserDeviceType: When generating the cache key, add the client device type.</summary>
        [JsiiProperty(name: "attrUserDeviceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserDeviceType
        {
            get;
        }

        /// <summary>Attribute UserGeo: When generating the cache key, add the client's geographic location.</summary>
        [JsiiProperty(name: "attrUserGeo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserGeo
        {
            get;
        }

        /// <summary>Attribute UserLanguage: When generating cache keys, include the client's language type.</summary>
        [JsiiProperty(name: "attrUserLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserLanguage
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.CacheRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.ICacheRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `CacheRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICacheRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.ICacheRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.ICacheRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AdditionalCacheablePorts: Enable caching on specified ports.</summary>
            [JsiiProperty(name: "attrAdditionalCacheablePorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAdditionalCacheablePorts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BrowserCacheMode: Browser cache mode.</summary>
            [JsiiProperty(name: "attrBrowserCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBrowserCacheMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BrowserCacheTtl: Browser cache expiration time in seconds.</summary>
            [JsiiProperty(name: "attrBrowserCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBrowserCacheTtl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BypassCache: Set the bypass cache mode.</summary>
            [JsiiProperty(name: "attrBypassCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBypassCache
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CacheDeceptionArmor: Cache deception protection.</summary>
            /// <remarks>
            /// Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
            /// </remarks>
            [JsiiProperty(name: "attrCacheDeceptionArmor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCacheDeceptionArmor
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CacheReserveEligibility: Cache retention eligibility.</summary>
            /// <remarks>
            /// Used to control whether user requests bypass the cache retention node when returning to the origin.
            /// </remarks>
            [JsiiProperty(name: "attrCacheReserveEligibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCacheReserveEligibility
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CacheRuleId: Cache Rule Id.</summary>
            [JsiiProperty(name: "attrCacheRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCacheRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists.</summary>
            /// <remarks>
            /// If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
            /// </remarks>
            [JsiiProperty(name: "attrCheckPresenceCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCheckPresenceCookie
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CheckPresenceHeader: When generating the cache key, check if the header exists.</summary>
            /// <remarks>
            /// If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
            /// </remarks>
            [JsiiProperty(name: "attrCheckPresenceHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCheckPresenceHeader
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.</summary>
            [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EdgeCacheMode: Edge cache mode.</summary>
            [JsiiProperty(name: "attrEdgeCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEdgeCacheMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EdgeCacheTtl: Edge cache expiration time in seconds.</summary>
            [JsiiProperty(name: "attrEdgeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEdgeCacheTtl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.</summary>
            [JsiiProperty(name: "attrEdgeStatusCodeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEdgeStatusCodeCacheTtl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values.</summary>
            /// <remarks>
            /// Multiple values are supported, separated by spaces.
            /// </remarks>
            [JsiiProperty(name: "attrIncludeCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIncludeCookie
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IncludeHeader: When generating the cache key, add the specified header names and their values.</summary>
            /// <remarks>
            /// Multiple values are supported, separated by spaces.
            /// </remarks>
            [JsiiProperty(name: "attrIncludeHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIncludeHeader
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueryString: Query strings to be reserved or excluded.</summary>
            /// <remarks>
            /// Multiple values are supported, separated by spaces.
            /// </remarks>
            [JsiiProperty(name: "attrQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueryString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueryStringMode: The processing mode for query strings when generating the cache key.</summary>
            [JsiiProperty(name: "attrQueryStringMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueryStringMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Rule: Rule content, using conditional expressions to match user requests.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleEnable: Rule switch.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiProperty(name: "attrRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleName: Rule name.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Sequence: Order of rule execution.</summary>
            /// <remarks>
            /// The smaller the value, the higher the priority for execution.
            /// </remarks>
            [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSequence
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServeStale: Serve stale cache.</summary>
            /// <remarks>
            /// When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
            /// </remarks>
            [JsiiProperty(name: "attrServeStale", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServeStale
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteVersion: The version number of the site configuration.</summary>
            /// <remarks>
            /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
            /// </remarks>
            [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SortQueryStringForCache: Query string sorting, disabled by default.</summary>
            [JsiiProperty(name: "attrSortQueryStringForCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSortQueryStringForCache
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserDeviceType: When generating the cache key, add the client device type.</summary>
            [JsiiProperty(name: "attrUserDeviceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserDeviceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserGeo: When generating the cache key, add the client's geographic location.</summary>
            [JsiiProperty(name: "attrUserGeo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserGeo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserLanguage: When generating cache keys, include the client's language type.</summary>
            [JsiiProperty(name: "attrUserLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserLanguage
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.CacheRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.ICacheRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.ICacheRuleProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
