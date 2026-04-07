using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `WaitingRoomRule`.</summary>
    [JsiiInterface(nativeType: typeof(IWaitingRoomRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.IWaitingRoomRule")]
    public interface IWaitingRoomRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Rule: The content of the rule, the implemented policy or conditional expression.</summary>
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

        /// <summary>Attribute RuleName: Rule name, optional, used to query by waiting room bypass rule name.</summary>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleName
        {
            get;
        }

        /// <summary>Attribute WaitingRoomRuleId: The rule ID, which can be used to query a specific rule.</summary>
        [JsiiProperty(name: "attrWaitingRoomRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWaitingRoomRuleId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.WaitingRoomRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `WaitingRoomRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWaitingRoomRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.IWaitingRoomRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Rule: The content of the rule, the implemented policy or conditional expression.</summary>
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

            /// <summary>Attribute RuleName: Rule name, optional, used to query by waiting room bypass rule name.</summary>
            [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WaitingRoomRuleId: The rule ID, which can be used to query a specific rule.</summary>
            [JsiiProperty(name: "attrWaitingRoomRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWaitingRoomRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.WaitingRoomRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomRuleProps>()!;
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
