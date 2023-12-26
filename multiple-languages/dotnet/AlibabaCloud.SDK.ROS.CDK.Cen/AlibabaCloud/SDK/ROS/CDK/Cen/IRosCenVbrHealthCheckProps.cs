using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosCenVbrHealthCheck`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCenVbrHealthCheckProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenVbrHealthCheckProps")]
    public interface IRosCenVbrHealthCheckProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
        /// </remarks>
        [JsiiProperty(name: "healthCheckTargetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HealthCheckTargetIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vbrInstanceId: The ID of the VBR instance.
        /// </remarks>
        [JsiiProperty(name: "vbrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VbrInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
        /// </remarks>
        [JsiiProperty(name: "vbrInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VbrInstanceRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
        /// </remarks>
        [JsiiProperty(name: "healthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckInterval
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0\/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0\/8, 192.168.0.0\/16, or 172.16.0.0\/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
        /// </remarks>
        [JsiiProperty(name: "healthCheckSourceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckSourceIp
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
        /// </remarks>
        [JsiiProperty(name: "healthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthyThreshold
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
        /// </remarks>
        [JsiiProperty(name: "vbrInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VbrInstanceOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCenVbrHealthCheck`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCenVbrHealthCheckProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenVbrHealthCheckProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenVbrHealthCheckProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckTargetIp: Specifies the destination IP address of the health check. The destination IP address is the IP address of the client-facing interface on the VBR instance.
            /// </remarks>
            [JsiiProperty(name: "healthCheckTargetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HealthCheckTargetIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vbrInstanceId: The ID of the VBR instance.
            /// </remarks>
            [JsiiProperty(name: "vbrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VbrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. You can call the DescribeRegionsoperation to query region IDs.
            /// </remarks>
            [JsiiProperty(name: "vbrInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VbrInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.  Default value: 2. Valid values: 2 to 3.  Unit: second.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.  Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0\/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0\/8, 192.168.0.0\/16, or 172.16.0.0\/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckSourceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckSourceIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthyThreshold: Specifies the number of probe packets to be sent during the health check.  Default value: 8. Valid values: 3 to 8.  Unit: packet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthyThreshold
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vbrInstanceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VbrInstanceOwnerId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
