using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `TrafficQosQueue`.</summary>
    [JsiiInterface(nativeType: typeof(ITrafficQosQueue), fullyQualifiedName: "@alicloud/ros-cdk-vpc.ITrafficQosQueue")]
    public interface ITrafficQosQueue : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BandwidthPercent: QoS queue bandwidth percentage.</summary>
        [JsiiProperty(name: "attrBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthPercent
        {
            get;
        }

        /// <summary>Attribute QosId: The ID of the QoS policy.</summary>
        [JsiiProperty(name: "attrQosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQosId
        {
            get;
        }

        /// <summary>Attribute QueueDescription: The description of the QoS queue.</summary>
        [JsiiProperty(name: "attrQueueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueDescription
        {
            get;
        }

        /// <summary>Attribute QueueId: The ID of the QoS queue.</summary>
        [JsiiProperty(name: "attrQueueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueId
        {
            get;
        }

        /// <summary>Attribute QueueName: The name of the QoS queue.</summary>
        [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueName
        {
            get;
        }

        /// <summary>Attribute QueueType: QoS queue type.</summary>
        [JsiiProperty(name: "attrQueueType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.TrafficQosQueueProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosQueueProps Props
        {
            get;
        }

        /// <summary>Represents a `TrafficQosQueue`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITrafficQosQueue), fullyQualifiedName: "@alicloud/ros-cdk-vpc.ITrafficQosQueue")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosQueue
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BandwidthPercent: QoS queue bandwidth percentage.</summary>
            [JsiiProperty(name: "attrBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthPercent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QosId: The ID of the QoS policy.</summary>
            [JsiiProperty(name: "attrQosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQosId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueDescription: The description of the QoS queue.</summary>
            [JsiiProperty(name: "attrQueueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueId: The ID of the QoS queue.</summary>
            [JsiiProperty(name: "attrQueueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueName: The name of the QoS queue.</summary>
            [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueType: QoS queue type.</summary>
            [JsiiProperty(name: "attrQueueType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.TrafficQosQueueProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosQueueProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosQueueProps>()!;
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
