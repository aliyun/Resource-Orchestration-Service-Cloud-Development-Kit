using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Properties for defining a `ClusterUserKubeconfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IClusterUserKubeconfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.ClusterUserKubeconfigProps")]
    public interface IClusterUserKubeconfigProps
    {
        /// <summary>Property clusterId: The ID of the ACK cluster.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network.</summary>
        /// <remarks>
        /// Valid values:
        /// true: obtains the credential that is used to connect to the cluster over the internal network.
        /// false: obtains the credential that is used to connect to the cluster over the Internet.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file.</summary>
        /// <remarks>
        /// Unit: minutes. Valid values: 15 to 4320.
        /// Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
        /// </remarks>
        [JsiiProperty(name: "temporaryDurationMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemporaryDurationMinutes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ClusterUserKubeconfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IClusterUserKubeconfigProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.ClusterUserKubeconfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterUserKubeconfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: The ID of the ACK cluster.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network.</summary>
            /// <remarks>
            /// Valid values:
            /// true: obtains the credential that is used to connect to the cluster over the internal network.
            /// false: obtains the credential that is used to connect to the cluster over the Internet.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file.</summary>
            /// <remarks>
            /// Unit: minutes. Valid values: 15 to 4320.
            /// Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "temporaryDurationMinutes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemporaryDurationMinutes
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
