using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    /// <summary>Properties for defining a `ALIYUN::FOAS::Cluster`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-foas.ClusterProps")]
    public interface IClusterProps
    {
        /// <summary>Property clusterName: Cluster name.</summary>
        /// <remarks>
        /// It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterName
        {
            get;
        }

        /// <summary>Property description: Cluster description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property ossBucket: Bucket name in your OSS.</summary>
        [JsiiProperty(name: "ossBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OssBucket
        {
            get;
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property order: Order detail.</summary>
        /// <remarks>
        /// Only one of property Order or OrderId can be specified.
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

        /// <summary>Property orderId: Order Id.</summary>
        /// <remarks>
        /// Only one of property Order or OrderId can be specified.
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

        /// <summary>Properties for defining a `ALIYUN::FOAS::Cluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-foas.ClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Foas.IClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterName: Cluster name.</summary>
            /// <remarks>
            /// It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
            /// </remarks>
            [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Cluster description.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ossBucket: Bucket name in your OSS.</summary>
            [JsiiProperty(name: "ossBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OssBucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: VSwitch ID.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property order: Order detail.</summary>
            /// <remarks>
            /// Only one of property Order or OrderId can be specified.
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

            /// <summary>Property orderId: Order Id.</summary>
            /// <remarks>
            /// Only one of property Order or OrderId can be specified.
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
