using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::AssignIpv6Addresses`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosAssignIpv6AddressesProps")]
    public class RosAssignIpv6AddressesProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosAssignIpv6AddressesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Elastic network interface ID.
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NetworkInterfaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6AddressCount: IPv6 addresses specified number of randomly generated interfaces elasticity.
        /// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipv6AddressCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Ipv6AddressCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC. Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
        /// Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipv6Addresses", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Ipv6Addresses
        {
            get;
            set;
        }
    }
}
