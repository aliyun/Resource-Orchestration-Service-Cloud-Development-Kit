using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Represents a `ConsumerGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IConsumerGroup), fullyQualifiedName: "@alicloud/ros-cdk-dts.IConsumerGroup")]
    public interface IConsumerGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConsumerGroupID: Consumer group ID.</summary>
        [JsiiProperty(name: "attrConsumerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConsumerGroupId
        {
            get;
        }

        /// <summary>Attribute ConsumerGroupName: Consumer group name.</summary>
        [JsiiProperty(name: "attrConsumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConsumerGroupName
        {
            get;
        }

        /// <summary>Attribute SubscriptionInstanceId: Subscription instance ID.</summary>
        [JsiiProperty(name: "attrSubscriptionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSubscriptionInstanceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.ConsumerGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dts.IConsumerGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `ConsumerGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConsumerGroup), fullyQualifiedName: "@alicloud/ros-cdk-dts.IConsumerGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IConsumerGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConsumerGroupID: Consumer group ID.</summary>
            [JsiiProperty(name: "attrConsumerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConsumerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConsumerGroupName: Consumer group name.</summary>
            [JsiiProperty(name: "attrConsumerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConsumerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SubscriptionInstanceId: Subscription instance ID.</summary>
            [JsiiProperty(name: "attrSubscriptionInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSubscriptionInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.ConsumerGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dts.IConsumerGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dts.IConsumerGroupProps>()!;
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
