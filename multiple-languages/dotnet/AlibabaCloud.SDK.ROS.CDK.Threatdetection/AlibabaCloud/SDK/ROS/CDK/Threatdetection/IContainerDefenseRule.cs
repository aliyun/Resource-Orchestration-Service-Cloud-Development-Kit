using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `ContainerDefenseRule`.</summary>
    [JsiiInterface(nativeType: typeof(IContainerDefenseRule), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IContainerDefenseRule")]
    public interface IContainerDefenseRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Description: Rule description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute RuleAction: The action that is performed when the rule is hit.</summary>
        [JsiiProperty(name: "attrRuleAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleAction
        {
            get;
        }

        /// <summary>Attribute RuleId: Rule Id.</summary>
        [JsiiProperty(name: "attrRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleId
        {
            get;
        }

        /// <summary>Attribute RuleName: The name of the rule.</summary>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleName
        {
            get;
        }

        /// <summary>Attribute RuleSwitch: The switch of the rule.</summary>
        [JsiiProperty(name: "attrRuleSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleSwitch
        {
            get;
        }

        /// <summary>Attribute RuleType: The rule type.</summary>
        [JsiiProperty(name: "attrRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleType
        {
            get;
        }

        /// <summary>Attribute Scope: Rule scope.</summary>
        [JsiiProperty(name: "attrScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScope
        {
            get;
        }

        /// <summary>Attribute Whitelist: The whitelist of rule.</summary>
        [JsiiProperty(name: "attrWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWhitelist
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.ContainerDefenseRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IContainerDefenseRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `ContainerDefenseRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IContainerDefenseRule), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IContainerDefenseRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IContainerDefenseRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Description: Rule description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleAction: The action that is performed when the rule is hit.</summary>
            [JsiiProperty(name: "attrRuleAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleAction
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleId: Rule Id.</summary>
            [JsiiProperty(name: "attrRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleName: The name of the rule.</summary>
            [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleSwitch: The switch of the rule.</summary>
            [JsiiProperty(name: "attrRuleSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleType: The rule type.</summary>
            [JsiiProperty(name: "attrRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Scope: Rule scope.</summary>
            [JsiiProperty(name: "attrScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Whitelist: The whitelist of rule.</summary>
            [JsiiProperty(name: "attrWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWhitelist
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.ContainerDefenseRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IContainerDefenseRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IContainerDefenseRuleProps>()!;
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
