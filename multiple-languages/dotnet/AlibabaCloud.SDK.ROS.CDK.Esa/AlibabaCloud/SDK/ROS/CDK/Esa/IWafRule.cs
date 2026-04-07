using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `WafRule`.</summary>
    [JsiiInterface(nativeType: typeof(IWafRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.IWafRule")]
    public interface IWafRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Config: The configuration of the rule.</summary>
        [JsiiProperty(name: "attrConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfig
        {
            get;
        }

        /// <summary>Attribute Phase: The version of the website.</summary>
        [JsiiProperty(name: "attrPhase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPhase
        {
            get;
        }

        /// <summary>Attribute RulesetId: The ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https://www.alibabacloud.com/help/en/doc-detail/2850233.html) operation.</summary>
        [JsiiProperty(name: "attrRulesetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRulesetId
        {
            get;
        }

        /// <summary>Attribute UpdateTime: The time when the rule was last modified.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        /// <summary>Attribute WafRuleId: WafRule Id.</summary>
        [JsiiProperty(name: "attrWafRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWafRuleId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.WafRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IWafRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `WafRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWafRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.IWafRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IWafRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Config: The configuration of the rule.</summary>
            [JsiiProperty(name: "attrConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Phase: The version of the website.</summary>
            [JsiiProperty(name: "attrPhase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPhase
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RulesetId: The ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https://www.alibabacloud.com/help/en/doc-detail/2850233.html) operation.</summary>
            [JsiiProperty(name: "attrRulesetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRulesetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: The time when the rule was last modified.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WafRuleId: WafRule Id.</summary>
            [JsiiProperty(name: "attrWafRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWafRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.WafRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IWafRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IWafRuleProps>()!;
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
