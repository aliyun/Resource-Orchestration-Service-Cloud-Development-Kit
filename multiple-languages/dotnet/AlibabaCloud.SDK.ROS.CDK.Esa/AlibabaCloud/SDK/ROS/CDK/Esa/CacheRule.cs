using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ESA::CacheRule`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCacheRule`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Esa.CacheRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.CacheRule", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-esa.CacheRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class CacheRule : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Esa.ICacheRule
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public CacheRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.ICacheRuleProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.ICacheRuleProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CacheRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected CacheRule(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AdditionalCacheablePorts: Enable caching on specified ports.</summary>
        [JsiiProperty(name: "attrAdditionalCacheablePorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAdditionalCacheablePorts
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BrowserCacheMode: Browser cache mode.</summary>
        [JsiiProperty(name: "attrBrowserCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBrowserCacheMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BrowserCacheTtl: Browser cache expiration time in seconds.</summary>
        [JsiiProperty(name: "attrBrowserCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBrowserCacheTtl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BypassCache: Set the bypass cache mode.</summary>
        [JsiiProperty(name: "attrBypassCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBypassCache
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CacheDeceptionArmor: Cache deception protection.</summary>
        /// <remarks>
        /// Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
        /// </remarks>
        [JsiiProperty(name: "attrCacheDeceptionArmor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCacheDeceptionArmor
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CacheReserveEligibility: Cache retention eligibility.</summary>
        /// <remarks>
        /// Used to control whether user requests bypass the cache retention node when returning to the origin.
        /// </remarks>
        [JsiiProperty(name: "attrCacheReserveEligibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCacheReserveEligibility
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CacheRuleId: Cache Rule Id.</summary>
        [JsiiProperty(name: "attrCacheRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCacheRuleId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists.</summary>
        /// <remarks>
        /// If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "attrCheckPresenceCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCheckPresenceCookie
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CheckPresenceHeader: When generating the cache key, check if the header exists.</summary>
        /// <remarks>
        /// If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "attrCheckPresenceHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCheckPresenceHeader
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.</summary>
        [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EdgeCacheMode: Edge cache mode.</summary>
        [JsiiProperty(name: "attrEdgeCacheMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEdgeCacheMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EdgeCacheTtl: Edge cache expiration time in seconds.</summary>
        [JsiiProperty(name: "attrEdgeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEdgeCacheTtl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.</summary>
        [JsiiProperty(name: "attrEdgeStatusCodeCacheTtl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEdgeStatusCodeCacheTtl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values.</summary>
        /// <remarks>
        /// Multiple values are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "attrIncludeCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIncludeCookie
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IncludeHeader: When generating the cache key, add the specified header names and their values.</summary>
        /// <remarks>
        /// Multiple values are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "attrIncludeHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIncludeHeader
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute QueryString: Query strings to be reserved or excluded.</summary>
        /// <remarks>
        /// Multiple values are supported, separated by spaces.
        /// </remarks>
        [JsiiProperty(name: "attrQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQueryString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute QueryStringMode: The processing mode for query strings when generating the cache key.</summary>
        [JsiiProperty(name: "attrQueryStringMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQueryStringMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Rule: Rule content, using conditional expressions to match user requests.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRule
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleEnable: Rule switch.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleEnable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleName: Rule name.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Sequence: Order of rule execution.</summary>
        /// <remarks>
        /// The smaller the value, the higher the priority for execution.
        /// </remarks>
        [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSequence
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServeStale: Serve stale cache.</summary>
        /// <remarks>
        /// When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
        /// </remarks>
        [JsiiProperty(name: "attrServeStale", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServeStale
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SiteVersion: The version number of the site configuration.</summary>
        /// <remarks>
        /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        /// </remarks>
        [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSiteVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SortQueryStringForCache: Query string sorting, disabled by default.</summary>
        [JsiiProperty(name: "attrSortQueryStringForCache", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSortQueryStringForCache
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserDeviceType: When generating the cache key, add the client device type.</summary>
        [JsiiProperty(name: "attrUserDeviceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserDeviceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserGeo: When generating the cache key, add the client's geographic location.</summary>
        [JsiiProperty(name: "attrUserGeo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserGeo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserLanguage: When generating cache keys, include the client's language type.</summary>
        [JsiiProperty(name: "attrUserLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserLanguage
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.CacheRuleProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Esa.ICacheRuleProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.ICacheRuleProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
