using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eventbridge
{
    /// <summary>Represents a `Rule`.</summary>
    [JsiiInterface(nativeType: typeof(IRule), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.IRule")]
    public interface IRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute EventBusName: The name of the event bus.</summary>
        [JsiiProperty(name: "attrEventBusName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEventBusName
        {
            get;
        }

        /// <summary>Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule.</summary>
        /// <remarks>
        /// The ARN is used for authorization.
        /// </remarks>
        [JsiiProperty(name: "attrRuleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleArn
        {
            get;
        }

        /// <summary>Attribute RuleName: The name of the event rule.</summary>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Eventbridge.IRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `Rule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRule), fullyQualifiedName: "@alicloud/ros-cdk-eventbridge.IRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eventbridge.IRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute EventBusName: The name of the event bus.</summary>
            [JsiiProperty(name: "attrEventBusName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEventBusName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule.</summary>
            /// <remarks>
            /// The ARN is used for authorization.
            /// </remarks>
            [JsiiProperty(name: "attrRuleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleName: The name of the event rule.</summary>
            [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Eventbridge.IRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Eventbridge.IRuleProps>()!;
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
