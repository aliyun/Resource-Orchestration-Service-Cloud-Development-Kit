using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Represents a `Topic`.</summary>
    [JsiiInterface(nativeType: typeof(ITopic), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.ITopic")]
    public interface ITopic : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The time when the topic was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute LastModifyTime: The time when the topic was last modified.</summary>
        [JsiiProperty(name: "attrLastModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastModifyTime
        {
            get;
        }

        /// <summary>Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.</summary>
        [JsiiProperty(name: "attrLoggingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoggingEnabled
        {
            get;
        }

        /// <summary>Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.</summary>
        [JsiiProperty(name: "attrMaxMessageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaxMessageSize
        {
            get;
        }

        /// <summary>Attribute MessageCount: The number of messages in the topic.</summary>
        [JsiiProperty(name: "attrMessageCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMessageCount
        {
            get;
        }

        /// <summary>Attribute MessageRetentionPeriod: The retention period of the message in the topic.</summary>
        [JsiiProperty(name: "attrMessageRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMessageRetentionPeriod
        {
            get;
        }

        /// <summary>Attribute TopicInnerUrl: The internal URL of the topic.</summary>
        [JsiiProperty(name: "attrTopicInnerUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTopicInnerUrl
        {
            get;
        }

        /// <summary>Attribute TopicName: The name of the MNS topic.</summary>
        [JsiiProperty(name: "attrTopicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTopicName
        {
            get;
        }

        /// <summary>Attribute TopicUrl: The URL of the topic.</summary>
        [JsiiProperty(name: "attrTopicUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTopicUrl
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.datasource.TopicProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ITopicProps Props
        {
            get;
        }

        /// <summary>Represents a `Topic`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITopic), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.ITopic")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ITopic
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The time when the topic was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastModifyTime: The time when the topic was last modified.</summary>
            [JsiiProperty(name: "attrLastModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastModifyTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.</summary>
            [JsiiProperty(name: "attrLoggingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoggingEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.</summary>
            [JsiiProperty(name: "attrMaxMessageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaxMessageSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MessageCount: The number of messages in the topic.</summary>
            [JsiiProperty(name: "attrMessageCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMessageCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MessageRetentionPeriod: The retention period of the message in the topic.</summary>
            [JsiiProperty(name: "attrMessageRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMessageRetentionPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TopicInnerUrl: The internal URL of the topic.</summary>
            [JsiiProperty(name: "attrTopicInnerUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTopicInnerUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TopicName: The name of the MNS topic.</summary>
            [JsiiProperty(name: "attrTopicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TopicUrl: The URL of the topic.</summary>
            [JsiiProperty(name: "attrTopicUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTopicUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.datasource.TopicProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ITopicProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ITopicProps>()!;
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
