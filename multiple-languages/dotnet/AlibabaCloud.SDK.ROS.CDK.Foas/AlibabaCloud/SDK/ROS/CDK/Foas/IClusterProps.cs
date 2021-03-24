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
        [JsiiProperty(name: "clusterName", typeJson: "{\"primitive\":\"string\"}")]
        string ClusterName
        {
            get;
        }

        /// <summary>Property description: Cluster description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}")]
        string Description
        {
            get;
        }

        /// <summary>Property ossBucket: Bucket name in your OSS.</summary>
        [JsiiProperty(name: "ossBucket", typeJson: "{\"primitive\":\"string\"}")]
        string OssBucket
        {
            get;
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        string VSwitchId
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
        [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-foas.RosCluster.OrderProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
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
        [JsiiProperty(name: "orderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OrderId
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
            [JsiiProperty(name: "clusterName", typeJson: "{\"primitive\":\"string\"}")]
            public string ClusterName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Cluster description.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}")]
            public string Description
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property ossBucket: Bucket name in your OSS.</summary>
            [JsiiProperty(name: "ossBucket", typeJson: "{\"primitive\":\"string\"}")]
            public string OssBucket
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vSwitchId: VSwitch ID.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            public string VSwitchId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property order: Order detail.</summary>
            /// <remarks>
            /// Only one of property Order or OrderId can be specified.
            /// Order is not suggested.
            /// Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
            /// The order can not be cancelled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-foas.RosCluster.OrderProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
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
            [JsiiProperty(name: "orderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OrderId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
