using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    /// <summary>Represents a `Queue`.</summary>
    [JsiiInterface(nativeType: typeof(IQueue), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.IQueue")]
    public interface IQueue : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ComputeNodes: The hardware configurations of the compute nodes in the queue.</summary>
        [JsiiProperty(name: "attrComputeNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrComputeNodes
        {
            get;
        }

        /// <summary>Attribute CreateTime: Queue creation time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute EnableScaleIn: Specifies whether to enable auto scale-in for the queue.</summary>
        [JsiiProperty(name: "attrEnableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableScaleIn
        {
            get;
        }

        /// <summary>Attribute EnableScaleOut: Specifies whether to enable auto scale-out for the queue.</summary>
        [JsiiProperty(name: "attrEnableScaleOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnableScaleOut
        {
            get;
        }

        /// <summary>Attribute HostnamePrefix: The hostname prefix of the added compute nodes.</summary>
        [JsiiProperty(name: "attrHostnamePrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostnamePrefix
        {
            get;
        }

        /// <summary>Attribute HostnameSuffix: The hostname suffix of the compute nodes in the queue.</summary>
        [JsiiProperty(name: "attrHostnameSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHostnameSuffix
        {
            get;
        }

        /// <summary>Attribute InitialCount: The initial number of compute nodes in the queue.</summary>
        [JsiiProperty(name: "attrInitialCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInitialCount
        {
            get;
        }

        /// <summary>Attribute InterConnect: The type of the network for interconnecting compute nodes in the queue.</summary>
        [JsiiProperty(name: "attrInterConnect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInterConnect
        {
            get;
        }

        /// <summary>Attribute MaxCount: The maximum number of compute nodes that the queue can contain.</summary>
        [JsiiProperty(name: "attrMaxCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaxCount
        {
            get;
        }

        /// <summary>Attribute MinCount: The minimum number of compute nodes that the queue must contain.</summary>
        [JsiiProperty(name: "attrMinCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMinCount
        {
            get;
        }

        /// <summary>Attribute QueueName: The queue name.</summary>
        [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueName
        {
            get;
        }

        /// <summary>Attribute UpdateTime: Queue update time.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        /// <summary>Attribute VSwitchIds: The VSwitches available for use by compute nodes in the queue.</summary>
        [JsiiProperty(name: "attrVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ehpc.QueueProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ehpc.IQueueProps Props
        {
            get;
        }

        /// <summary>Represents a `Queue`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IQueue), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.IQueue")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.IQueue
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ComputeNodes: The hardware configurations of the compute nodes in the queue.</summary>
            [JsiiProperty(name: "attrComputeNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrComputeNodes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Queue creation time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableScaleIn: Specifies whether to enable auto scale-in for the queue.</summary>
            [JsiiProperty(name: "attrEnableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableScaleIn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnableScaleOut: Specifies whether to enable auto scale-out for the queue.</summary>
            [JsiiProperty(name: "attrEnableScaleOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnableScaleOut
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostnamePrefix: The hostname prefix of the added compute nodes.</summary>
            [JsiiProperty(name: "attrHostnamePrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostnamePrefix
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HostnameSuffix: The hostname suffix of the compute nodes in the queue.</summary>
            [JsiiProperty(name: "attrHostnameSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHostnameSuffix
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InitialCount: The initial number of compute nodes in the queue.</summary>
            [JsiiProperty(name: "attrInitialCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInitialCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InterConnect: The type of the network for interconnecting compute nodes in the queue.</summary>
            [JsiiProperty(name: "attrInterConnect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInterConnect
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaxCount: The maximum number of compute nodes that the queue can contain.</summary>
            [JsiiProperty(name: "attrMaxCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaxCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MinCount: The minimum number of compute nodes that the queue must contain.</summary>
            [JsiiProperty(name: "attrMinCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMinCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueName: The queue name.</summary>
            [JsiiProperty(name: "attrQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: Queue update time.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchIds: The VSwitches available for use by compute nodes in the queue.</summary>
            [JsiiProperty(name: "attrVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ehpc.QueueProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ehpc.IQueueProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ehpc.IQueueProps>()!;
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
