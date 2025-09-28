using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `OriginRule`.</summary>
    [JsiiInterface(nativeType: typeof(IOriginRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.IOriginRule")]
    public interface IOriginRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConfigId: Back-to-source rule configuration ID.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigId
        {
            get;
        }

        /// <summary>Attribute ConfigType: The configuration type.</summary>
        /// <remarks>
        /// You can use this parameter to check the global configuration or rule configuration.
        /// </remarks>
        [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigType
        {
            get;
        }

        /// <summary>Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.</summary>
        [JsiiProperty(name: "attrDnsRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDnsRecord
        {
            get;
        }

        /// <summary>Attribute Follow302Enable: Return Source 302 follow switch.</summary>
        [JsiiProperty(name: "attrFollow302Enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFollow302Enable
        {
            get;
        }

        /// <summary>Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].</summary>
        [JsiiProperty(name: "attrFollow302MaxTries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFollow302MaxTries
        {
            get;
        }

        /// <summary>Attribute Follow302RetainArgs: Retain the original request parameter switch.</summary>
        [JsiiProperty(name: "attrFollow302RetainArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFollow302RetainArgs
        {
            get;
        }

        /// <summary>Attribute Follow302RetainHeader: Retain the original request header switch.</summary>
        [JsiiProperty(name: "attrFollow302RetainHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFollow302RetainHeader
        {
            get;
        }

        /// <summary>Attribute Follow302TargetHost: Modify the source host after 302.</summary>
        [JsiiProperty(name: "attrFollow302TargetHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFollow302TargetHost
        {
            get;
        }

        /// <summary>Attribute OriginHost: The HOST carried in the back-to-origin request.</summary>
        [JsiiProperty(name: "attrOriginHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginHost
        {
            get;
        }

        /// <summary>Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.</summary>
        [JsiiProperty(name: "attrOriginHttpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginHttpPort
        {
            get;
        }

        /// <summary>Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.</summary>
        [JsiiProperty(name: "attrOriginHttpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginHttpsPort
        {
            get;
        }

        /// <summary>Attribute OriginMtls: The mtls switch.</summary>
        [JsiiProperty(name: "attrOriginMtls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginMtls
        {
            get;
        }

        /// <summary>Attribute OriginReadTimeout: Read timeout interval of the source station (s).</summary>
        [JsiiProperty(name: "attrOriginReadTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginReadTimeout
        {
            get;
        }

        /// <summary>Attribute OriginScheme: The protocol used by the back-to-origin request.</summary>
        [JsiiProperty(name: "attrOriginScheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginScheme
        {
            get;
        }

        /// <summary>Attribute OriginSni: SNI carried in the back-to-origin request.</summary>
        [JsiiProperty(name: "attrOriginSni", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginSni
        {
            get;
        }

        /// <summary>Attribute OriginVerify: Source station certificate verification switch.</summary>
        [JsiiProperty(name: "attrOriginVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOriginVerify
        {
            get;
        }

        /// <summary>Attribute Range: Use the range sharding method to download the file from the source.</summary>
        [JsiiProperty(name: "attrRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRange
        {
            get;
        }

        /// <summary>Attribute RangeChunkSize: range shard size.</summary>
        [JsiiProperty(name: "attrRangeChunkSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRangeChunkSize
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

        /// <summary>Attribute SiteVersion: The version number of the site configuration.</summary>
        /// <remarks>
        /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        /// </remarks>
        [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSiteVersion
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IOriginRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `OriginRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IOriginRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.IOriginRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConfigId: Back-to-source rule configuration ID.</summary>
            [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigType: The configuration type.</summary>
            /// <remarks>
            /// You can use this parameter to check the global configuration or rule configuration.
            /// </remarks>
            [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.</summary>
            [JsiiProperty(name: "attrDnsRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDnsRecord
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Follow302Enable: Return Source 302 follow switch.</summary>
            [JsiiProperty(name: "attrFollow302Enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFollow302Enable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].</summary>
            [JsiiProperty(name: "attrFollow302MaxTries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFollow302MaxTries
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Follow302RetainArgs: Retain the original request parameter switch.</summary>
            [JsiiProperty(name: "attrFollow302RetainArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFollow302RetainArgs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Follow302RetainHeader: Retain the original request header switch.</summary>
            [JsiiProperty(name: "attrFollow302RetainHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFollow302RetainHeader
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Follow302TargetHost: Modify the source host after 302.</summary>
            [JsiiProperty(name: "attrFollow302TargetHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFollow302TargetHost
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginHost: The HOST carried in the back-to-origin request.</summary>
            [JsiiProperty(name: "attrOriginHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginHost
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.</summary>
            [JsiiProperty(name: "attrOriginHttpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginHttpPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.</summary>
            [JsiiProperty(name: "attrOriginHttpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginHttpsPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginMtls: The mtls switch.</summary>
            [JsiiProperty(name: "attrOriginMtls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginMtls
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginReadTimeout: Read timeout interval of the source station (s).</summary>
            [JsiiProperty(name: "attrOriginReadTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginReadTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginScheme: The protocol used by the back-to-origin request.</summary>
            [JsiiProperty(name: "attrOriginScheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginScheme
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginSni: SNI carried in the back-to-origin request.</summary>
            [JsiiProperty(name: "attrOriginSni", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginSni
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OriginVerify: Source station certificate verification switch.</summary>
            [JsiiProperty(name: "attrOriginVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOriginVerify
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Range: Use the range sharding method to download the file from the source.</summary>
            [JsiiProperty(name: "attrRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRange
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RangeChunkSize: range shard size.</summary>
            [JsiiProperty(name: "attrRangeChunkSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRangeChunkSize
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

            /// <summary>Attribute SiteVersion: The version number of the site configuration.</summary>
            /// <remarks>
            /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
            /// </remarks>
            [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSiteVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IOriginRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IOriginRuleProps>()!;
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
