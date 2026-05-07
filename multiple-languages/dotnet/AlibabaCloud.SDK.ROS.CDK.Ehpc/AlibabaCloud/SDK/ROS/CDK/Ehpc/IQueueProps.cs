using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    /// <summary>Properties for defining a `Queue`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-queue
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.QueueProps")]
    public interface IQueueProps
    {
        /// <summary>Property clusterId: The cluster ID.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property computeNodes: The hardware configurations of the compute nodes in the queue.</summary>
        /// <remarks>
        /// Valid values of N: 1 to 10.
        /// </remarks>
        [JsiiProperty(name: "computeNodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosQueue.ComputeNodesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ComputeNodes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableScaleIn: Specifies whether to enable auto scale-in for the queue.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true</description>
        /// <description>false.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "enableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableScaleIn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableScaleOut: Specifies whether to enable auto scale-out for the queue.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true</description>
        /// <description>false.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "enableScaleOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableScaleOut
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hostnamePrefix: The hostname prefix of the added compute nodes.</summary>
        [JsiiProperty(name: "hostnamePrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostnamePrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hostnameSuffix: The hostname suffix of the compute nodes in the queue.</summary>
        [JsiiProperty(name: "hostnameSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostnameSuffix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property initialCount: The initial number of compute nodes in the queue.</summary>
        [JsiiProperty(name: "initialCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InitialCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property interConnect: The type of the network for interconnecting compute nodes in the queue.</summary>
        [JsiiProperty(name: "interConnect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InterConnect
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxCount: The maximum number of compute nodes that the queue can contain.</summary>
        [JsiiProperty(name: "maxCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property minCount: The minimum number of compute nodes that the queue must contain.</summary>
        [JsiiProperty(name: "minCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property queueName: The queue name.</summary>
        [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueueName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchIds: The VSwitches available for use by compute nodes in the queue.</summary>
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Queue`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-queue
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IQueueProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.QueueProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.IQueueProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: The cluster ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property computeNodes: The hardware configurations of the compute nodes in the queue.</summary>
            /// <remarks>
            /// Valid values of N: 1 to 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "computeNodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosQueue.ComputeNodesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ComputeNodes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableScaleIn: Specifies whether to enable auto scale-in for the queue.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true</description>
            /// <description>false.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableScaleIn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableScaleIn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableScaleOut: Specifies whether to enable auto scale-out for the queue.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true</description>
            /// <description>false.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableScaleOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableScaleOut
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hostnamePrefix: The hostname prefix of the added compute nodes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hostnamePrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostnamePrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hostnameSuffix: The hostname suffix of the compute nodes in the queue.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hostnameSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostnameSuffix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property initialCount: The initial number of compute nodes in the queue.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "initialCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InitialCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property interConnect: The type of the network for interconnecting compute nodes in the queue.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "interConnect", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InterConnect
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxCount: The maximum number of compute nodes that the queue can contain.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maxCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minCount: The minimum number of compute nodes that the queue must contain.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "minCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property queueName: The queue name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchIds: The VSwitches available for use by compute nodes in the queue.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VSwitchIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
