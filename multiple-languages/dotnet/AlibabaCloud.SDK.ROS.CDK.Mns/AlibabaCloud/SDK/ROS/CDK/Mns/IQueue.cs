using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    /// <summary>Represents a `Queue`.</summary>
    [JsiiInterface(nativeType: typeof(IQueue), fullyQualifiedName: "@alicloud/ros-cdk-mns.IQueue")]
    public interface IQueue : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.</summary>
        [JsiiProperty(name: "attrArnWithSlash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArnWithSlash
        {
            get;
        }

        /// <summary>Attribute QueueName: Queue name.</summary>
        [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueName
        {
            get;
        }

        /// <summary>Attribute QueueUrl: URL of created queue.</summary>
        [JsiiProperty(name: "attrQueueUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueUrl
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.QueueProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mns.IQueueProps Props
        {
            get;
        }

        /// <summary>Represents a `Queue`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IQueue), fullyQualifiedName: "@alicloud/ros-cdk-mns.IQueue")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.IQueue
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.</summary>
            [JsiiProperty(name: "attrArnWithSlash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArnWithSlash
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueName: Queue name.</summary>
            [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueUrl: URL of created queue.</summary>
            [JsiiProperty(name: "attrQueueUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.QueueProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mns.IQueueProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mns.IQueueProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
