using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource
{
    /// <summary>Represents a `ConsumerGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IConsumerGroups), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.datasource.IConsumerGroups")]
    public interface IConsumerGroups : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConsumerGroupIds: The list of consumer group IDs.</summary>
        [JsiiProperty(name: "attrConsumerGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConsumerGroupIds
        {
            get;
        }

        /// <summary>Attribute ConsumerGroups: The list of consumer groups.</summary>
        [JsiiProperty(name: "attrConsumerGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConsumerGroups
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-rocketmq5.datasource.ConsumerGroupsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource.IConsumerGroupsProps Props
        {
            get;
        }

        /// <summary>Represents a `ConsumerGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConsumerGroups), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.datasource.IConsumerGroups")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource.IConsumerGroups
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConsumerGroupIds: The list of consumer group IDs.</summary>
            [JsiiProperty(name: "attrConsumerGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConsumerGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConsumerGroups: The list of consumer groups.</summary>
            [JsiiProperty(name: "attrConsumerGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConsumerGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-rocketmq5.datasource.ConsumerGroupsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource.IConsumerGroupsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource.IConsumerGroupsProps>()!;
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
