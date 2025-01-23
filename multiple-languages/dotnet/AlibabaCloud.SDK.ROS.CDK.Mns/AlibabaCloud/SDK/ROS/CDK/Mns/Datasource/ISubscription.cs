using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Represents a `Subscription`.</summary>
    [JsiiInterface(nativeType: typeof(ISubscription), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.ISubscription")]
    public interface ISubscription : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The time when the subscription was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Endpoint: The endpoint that is used by the subscriber to receive messages.</summary>
        [JsiiProperty(name: "attrEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndpoint
        {
            get;
        }

        /// <summary>Attribute FilterTag: Describes the labels by which messages are filtered in this subscription (only messages with consistent labels are pushed).</summary>
        [JsiiProperty(name: "attrFilterTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFilterTag
        {
            get;
        }

        /// <summary>Attribute LastModifyTime: The time when the subscription was last modified.</summary>
        [JsiiProperty(name: "attrLastModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastModifyTime
        {
            get;
        }

        /// <summary>Attribute NotifyContentFormat: The format of the message that is pushed to the endpoint.</summary>
        [JsiiProperty(name: "attrNotifyContentFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNotifyContentFormat
        {
            get;
        }

        /// <summary>Attribute NotifyStrategy: The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint.</summary>
        [JsiiProperty(name: "attrNotifyStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNotifyStrategy
        {
            get;
        }

        /// <summary>Attribute SubscriptionName: The name of the subscription.</summary>
        [JsiiProperty(name: "attrSubscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSubscriptionName
        {
            get;
        }

        /// <summary>Attribute SubscriptionURL: TThe URL of the subscription.</summary>
        [JsiiProperty(name: "attrSubscriptionUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSubscriptionUrl
        {
            get;
        }

        /// <summary>Attribute TopicName: The name of the topic.</summary>
        [JsiiProperty(name: "attrTopicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTopicName
        {
            get;
        }

        /// <summary>Attribute TopicOwner: The owner of the topic.</summary>
        [JsiiProperty(name: "attrTopicOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTopicOwner
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.datasource.SubscriptionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ISubscriptionProps Props
        {
            get;
        }

        /// <summary>Represents a `Subscription`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISubscription), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.ISubscription")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ISubscription
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The time when the subscription was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Endpoint: The endpoint that is used by the subscriber to receive messages.</summary>
            [JsiiProperty(name: "attrEndpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FilterTag: Describes the labels by which messages are filtered in this subscription (only messages with consistent labels are pushed).</summary>
            [JsiiProperty(name: "attrFilterTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFilterTag
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastModifyTime: The time when the subscription was last modified.</summary>
            [JsiiProperty(name: "attrLastModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastModifyTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NotifyContentFormat: The format of the message that is pushed to the endpoint.</summary>
            [JsiiProperty(name: "attrNotifyContentFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNotifyContentFormat
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NotifyStrategy: The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint.</summary>
            [JsiiProperty(name: "attrNotifyStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNotifyStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SubscriptionName: The name of the subscription.</summary>
            [JsiiProperty(name: "attrSubscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSubscriptionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SubscriptionURL: TThe URL of the subscription.</summary>
            [JsiiProperty(name: "attrSubscriptionUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSubscriptionUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TopicName: The name of the topic.</summary>
            [JsiiProperty(name: "attrTopicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TopicOwner: The owner of the topic.</summary>
            [JsiiProperty(name: "attrTopicOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTopicOwner
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.datasource.SubscriptionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ISubscriptionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ISubscriptionProps>()!;
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
