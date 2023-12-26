using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    /// <summary>Properties for defining a `RosCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-cluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-foas.RosClusterProps")]
    public interface IRosClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Cluster description.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ossBucket: Bucket name in your OSS.
        /// </remarks>
        [JsiiProperty(name: "ossBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OssBucket
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitch ID.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: order: Order detail. Only one of property Order or OrderId can be specified.
        /// Order is not suggested.
        /// Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        /// The order can not be cancelled.
        /// </remarks>
        [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-foas.RosCluster.OrderProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Order
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: orderId: Order Id. Only one of property Order or OrderId can be specified.
        /// OrderId is suggested.
        /// </remarks>
        [JsiiProperty(name: "orderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OrderId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-cluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-foas.RosClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Foas.IRosClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
            /// </remarks>
            [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Cluster description.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossBucket: Bucket name in your OSS.
            /// </remarks>
            [JsiiProperty(name: "ossBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OssBucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: VSwitch ID.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: order: Order detail. Only one of property Order or OrderId can be specified.
            /// Order is not suggested.
            /// Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
            /// The order can not be cancelled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-foas.RosCluster.OrderProperty\"}]}}", isOptional: true)]
            public object? Order
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: orderId: Order Id. Only one of property Order or OrderId can be specified.
            /// OrderId is suggested.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "orderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OrderId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
