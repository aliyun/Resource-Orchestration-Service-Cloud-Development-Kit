using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `RewriteUrlRule`.</summary>
    [JsiiInterface(nativeType: typeof(IRewriteUrlRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.IRewriteUrlRule")]
    public interface IRewriteUrlRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConfigId: The configuration ID.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigId
        {
            get;
        }

        /// <summary>Attribute ConfigType: Configuration type.</summary>
        /// <remarks>
        /// This parameter determines whether to query global configurations or feature-specific configurations. Note: This logic only takes effect if the functionName parameter is also provided.
        /// </remarks>
        [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigType
        {
            get;
        }

        /// <summary>Attribute QueryString: The desired query string to which you want to rewrite the query string in the original request.</summary>
        [JsiiProperty(name: "attrQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueryString
        {
            get;
        }

        /// <summary>Attribute RewriteQueryStringType: Query string rewrite type.</summary>
        [JsiiProperty(name: "attrRewriteQueryStringType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRewriteQueryStringType
        {
            get;
        }

        /// <summary>Attribute RewriteUriType: URI rewrite type.</summary>
        [JsiiProperty(name: "attrRewriteUriType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRewriteUriType
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

        /// <summary>Attribute Sequence: Rule execution order.</summary>
        /// <remarks>
        /// The smaller the value, the higher the priority of execution.
        /// </remarks>
        [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSequence
        {
            get;
        }

        /// <summary>Attribute SiteVersion: Version number of the site configuration.</summary>
        /// <remarks>
        /// For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
        /// </remarks>
        [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteVersion
        {
            get;
        }

        /// <summary>Attribute Uri: The desired URI to which you want to rewrite the path in the original request.</summary>
        [JsiiProperty(name: "attrUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUri
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.RewriteUrlRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IRewriteUrlRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `RewriteUrlRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRewriteUrlRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.IRewriteUrlRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRewriteUrlRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConfigId: The configuration ID.</summary>
            [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigType: Configuration type.</summary>
            /// <remarks>
            /// This parameter determines whether to query global configurations or feature-specific configurations. Note: This logic only takes effect if the functionName parameter is also provided.
            /// </remarks>
            [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueryString: The desired query string to which you want to rewrite the query string in the original request.</summary>
            [JsiiProperty(name: "attrQueryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueryString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RewriteQueryStringType: Query string rewrite type.</summary>
            [JsiiProperty(name: "attrRewriteQueryStringType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRewriteQueryStringType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RewriteUriType: URI rewrite type.</summary>
            [JsiiProperty(name: "attrRewriteUriType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRewriteUriType
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

            /// <summary>Attribute Sequence: Rule execution order.</summary>
            /// <remarks>
            /// The smaller the value, the higher the priority of execution.
            /// </remarks>
            [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSequence
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SiteVersion: Version number of the site configuration.</summary>
            /// <remarks>
            /// For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
            /// </remarks>
            [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Uri: The desired URI to which you want to rewrite the path in the original request.</summary>
            [JsiiProperty(name: "attrUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUri
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.RewriteUrlRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IRewriteUrlRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IRewriteUrlRuleProps>()!;
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
