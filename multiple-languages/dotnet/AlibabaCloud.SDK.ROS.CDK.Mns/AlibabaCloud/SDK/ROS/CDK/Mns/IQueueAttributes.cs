using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    /// <summary>Represents a `Queue`.</summary>
    [JsiiInterface(nativeType: typeof(IQueueAttributes), fullyQualifiedName: "@alicloud/ros-cdk-mns.QueueAttributes")]
    public interface IQueueAttributes
    {
        /// <summary>Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.</summary>
        [JsiiProperty(name: "attrArnWithSlash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArnWithSlash
        {
            get;
        }

        /// <summary>Attribute QueueName: Queue name.</summary>
        [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AttrQueueName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Attribute QueueUrl: URL of created queue.</summary>
        [JsiiProperty(name: "attrQueueUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AttrQueueUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Represents a `Queue`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IQueueAttributes), fullyQualifiedName: "@alicloud/ros-cdk-mns.QueueAttributes")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.IQueueAttributes
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
            [JsiiOptional]
            [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AttrQueueName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Attribute QueueUrl: URL of created queue.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "attrQueueUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AttrQueueUrl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
