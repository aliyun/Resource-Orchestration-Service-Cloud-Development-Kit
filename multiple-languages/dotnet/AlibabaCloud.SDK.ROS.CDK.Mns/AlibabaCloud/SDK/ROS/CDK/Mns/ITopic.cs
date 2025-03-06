using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns
{
    /// <summary>Represents a `Topic`.</summary>
    [JsiiInterface(nativeType: typeof(ITopic), fullyQualifiedName: "@alicloud/ros-cdk-mns.ITopic")]
    public interface ITopic : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName.</summary>
        [JsiiProperty(name: "attrArnWithSlash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArnWithSlash
        {
            get;
        }

        /// <summary>Attribute TopicName: Topic name.</summary>
        [JsiiProperty(name: "attrTopicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTopicName
        {
            get;
        }

        /// <summary>Attribute TopicUrl: URL of created topic.</summary>
        [JsiiProperty(name: "attrTopicUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTopicUrl
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.TopicProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mns.ITopicProps Props
        {
            get;
        }

        /// <summary>Represents a `Topic`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITopic), fullyQualifiedName: "@alicloud/ros-cdk-mns.ITopic")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.ITopic
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName.</summary>
            [JsiiProperty(name: "attrArnWithSlash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArnWithSlash
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TopicName: Topic name.</summary>
            [JsiiProperty(name: "attrTopicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TopicUrl: URL of created topic.</summary>
            [JsiiProperty(name: "attrTopicUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTopicUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.TopicProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mns.ITopicProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mns.ITopicProps>()!;
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
