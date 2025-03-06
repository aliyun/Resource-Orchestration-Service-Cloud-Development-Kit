using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Represents a `Queues`.</summary>
    [JsiiInterface(nativeType: typeof(IQueues), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.IQueues")]
    public interface IQueues : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute QueueNames: The list of queue names.</summary>
        [JsiiProperty(name: "attrQueueNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueNames
        {
            get;
        }

        /// <summary>Attribute Queues: The list of queues.</summary>
        [JsiiProperty(name: "attrQueues", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueues
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.datasource.QueuesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IQueuesProps Props
        {
            get;
        }

        /// <summary>Represents a `Queues`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IQueues), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.IQueues")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IQueues
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute QueueNames: The list of queue names.</summary>
            [JsiiProperty(name: "attrQueueNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Queues: The list of queues.</summary>
            [JsiiProperty(name: "attrQueues", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueues
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mns.datasource.QueuesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IQueuesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IQueuesProps>()!;
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
