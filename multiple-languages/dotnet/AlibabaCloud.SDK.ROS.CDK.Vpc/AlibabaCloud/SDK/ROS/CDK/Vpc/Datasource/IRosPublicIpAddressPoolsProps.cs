using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::PublicIpAddressPools`.</summary>
    [JsiiInterface(nativeType: typeof(IRosPublicIpAddressPoolsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosPublicIpAddressPoolsProps")]
    public interface IRosPublicIpAddressPoolsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: isp: The line type. Valid values:
        /// BGP (default): BGP (Multi-ISP) lines
        /// BGP_PRO: BGP (Multi-ISP) Pro lines
        /// For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
        /// If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
        /// ChinaTelecom: China Telecom
        /// ChinaUnicom: China Unicom
        /// ChinaMobile: China Mobile
        /// ChinaTelecom_L2: China Telecom L2
        /// ChinaUnicom_L2: China Unicom L2
        /// ChinaMobile_L2: China Mobile L2
        /// If your services are deployed in China East 1 Finance,
        /// this parameter is required and you must set the value to BGP_FinanceCloud.
        /// </remarks>
        [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Isp
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: publicIpAddressPoolName: The name of the IP address pool.
        /// This parameter is optional. The name must be 1 to 128 characters in length,
        /// and can contain digits, periods (.), underscores (_), and hyphens (-).
        /// The name must start with a letter but cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "publicIpAddressPoolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PublicIpAddressPoolName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the IP address pool belongs.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::PublicIpAddressPools`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosPublicIpAddressPoolsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosPublicIpAddressPoolsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosPublicIpAddressPoolsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: isp: The line type. Valid values:
            /// BGP (default): BGP (Multi-ISP) lines
            /// BGP_PRO: BGP (Multi-ISP) Pro lines
            /// For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
            /// If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
            /// ChinaTelecom: China Telecom
            /// ChinaUnicom: China Unicom
            /// ChinaMobile: China Mobile
            /// ChinaTelecom_L2: China Telecom L2
            /// ChinaUnicom_L2: China Unicom L2
            /// ChinaMobile_L2: China Mobile L2
            /// If your services are deployed in China East 1 Finance,
            /// this parameter is required and you must set the value to BGP_FinanceCloud.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Isp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: publicIpAddressPoolName: The name of the IP address pool.
            /// This parameter is optional. The name must be 1 to 128 characters in length,
            /// and can contain digits, periods (.), underscores (_), and hyphens (-).
            /// The name must start with a letter but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicIpAddressPoolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PublicIpAddressPoolName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the IP address pool belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
