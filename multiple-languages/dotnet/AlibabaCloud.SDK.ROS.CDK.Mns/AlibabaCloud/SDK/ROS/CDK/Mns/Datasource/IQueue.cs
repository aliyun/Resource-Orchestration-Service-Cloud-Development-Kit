using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Represents a `Queue`.</summary>
    [JsiiInterface(nativeType: typeof(IQueue), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.IQueue")]
    public interface IQueue : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ActiveMessages: The total number of active messages in the queue.</summary>
        [JsiiProperty(name: "attrActiveMessages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrActiveMessages
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the queue was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DelayMessages: The total number of delayed messages in the queue.</summary>
        [JsiiProperty(name: "attrDelayMessages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDelayMessages
        {
            get;
        }

        /// <summary>Attribute DelaySeconds: The delay time after which all messages that are sent to the queue can be consumed.</summary>
        [JsiiProperty(name: "attrDelaySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDelaySeconds
        {
            get;
        }

        /// <summary>Attribute InactiveMessages: The total number of inactive messages in the queue.</summary>
        [JsiiProperty(name: "attrInactiveMessages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInactiveMessages
        {
            get;
        }

        /// <summary>Attribute LastModifyTime: The most recent time when the queue was modified.</summary>
        [JsiiProperty(name: "attrLastModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastModifyTime
        {
            get;
        }

        /// <summary>Attribute LoggingEnabled: Specifies whether to enable the log management feature.</summary>
        [JsiiProperty(name: "attrLoggingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoggingEnabled
        {
            get;
        }

        /// <summary>Attribute MaximumMessageSize: The maximum size of a message that can be sent to the queue.</summary>
        [JsiiProperty(name: "attrMaximumMessageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaximumMessageSize
        {
            get;
        }

        /// <summary>Attribute MessageRetentionPeriod: The maximum lifetime of a message in the queue.</summary>
        /// <remarks>
        /// After the time that is specified by this parameter expires, the message is deleted, regardless of whether the message has been consumed.
        /// </remarks>
        [JsiiProperty(name: "attrMessageRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMessageRetentionPeriod
        {
            get;
        }

        /// <summary>Attribute PollingWaitSeconds: The maximum time period that a ReceiveMessage request can wait till a message is in the queue.</summary>
        [JsiiProperty(name: "attrPollingWaitSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPollingWaitSeconds
        {
            get;
        }

        /// <summary>Attribute QueueInternalUrl: The internal URL of the queue.</summary>
        [JsiiProperty(name: "attrQueueInternalUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueInternalUrl
        {
            get;
        }

        /// <summary>Attribute QueueName: The name of the MNS queue.</summary>
        [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueName
        {
            get;
        }

        /// <summary>Attribute QueueUrl: The URL of the queue.</summary>
        [JsiiProperty(name: "attrQueueUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueUrl
        {
            get;
        }

        /// <summary>Attribute VisibilityTimeout: The duration for which a message stays in the Inactive state after it is consumed from the queue.</summary>
        [JsiiProperty(name: "attrVisibilityTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVisibilityTimeout
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.datasource.QueueProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IQueueProps Props
        {
            get;
        }

        /// <summary>Represents a `Queue`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IQueue), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.IQueue")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IQueue
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ActiveMessages: The total number of active messages in the queue.</summary>
            [JsiiProperty(name: "attrActiveMessages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrActiveMessages
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the queue was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DelayMessages: The total number of delayed messages in the queue.</summary>
            [JsiiProperty(name: "attrDelayMessages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDelayMessages
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DelaySeconds: The delay time after which all messages that are sent to the queue can be consumed.</summary>
            [JsiiProperty(name: "attrDelaySeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDelaySeconds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InactiveMessages: The total number of inactive messages in the queue.</summary>
            [JsiiProperty(name: "attrInactiveMessages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInactiveMessages
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastModifyTime: The most recent time when the queue was modified.</summary>
            [JsiiProperty(name: "attrLastModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastModifyTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoggingEnabled: Specifies whether to enable the log management feature.</summary>
            [JsiiProperty(name: "attrLoggingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoggingEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaximumMessageSize: The maximum size of a message that can be sent to the queue.</summary>
            [JsiiProperty(name: "attrMaximumMessageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaximumMessageSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MessageRetentionPeriod: The maximum lifetime of a message in the queue.</summary>
            /// <remarks>
            /// After the time that is specified by this parameter expires, the message is deleted, regardless of whether the message has been consumed.
            /// </remarks>
            [JsiiProperty(name: "attrMessageRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMessageRetentionPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PollingWaitSeconds: The maximum time period that a ReceiveMessage request can wait till a message is in the queue.</summary>
            [JsiiProperty(name: "attrPollingWaitSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPollingWaitSeconds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueInternalUrl: The internal URL of the queue.</summary>
            [JsiiProperty(name: "attrQueueInternalUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueInternalUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueName: The name of the MNS queue.</summary>
            [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueUrl: The URL of the queue.</summary>
            [JsiiProperty(name: "attrQueueUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VisibilityTimeout: The duration for which a message stays in the Inactive state after it is consumed from the queue.</summary>
            [JsiiProperty(name: "attrVisibilityTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVisibilityTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.datasource.QueueProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IQueueProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IQueueProps>()!;
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
