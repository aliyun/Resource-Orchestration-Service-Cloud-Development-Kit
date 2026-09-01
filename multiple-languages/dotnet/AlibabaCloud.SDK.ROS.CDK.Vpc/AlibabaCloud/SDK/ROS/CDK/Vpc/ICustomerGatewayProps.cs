using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `CustomerGateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CustomerGatewayProps")]
    public interface ICustomerGatewayProps
    {
        /// <summary>Property ipAddress: The static IP address of the gateway device in the data center.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>If you want to create a public IPsec-VPN connection, enter a public IP
        /// address.</description>
        /// <description>If you want to create a private IPsec-VPN connection, enter a private IP
        /// address.
        /// You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection
        /// cannot be established:</description>
        /// <description>100.64.0.0~100.127.255.255</description>
        /// <description>127.0.0.0~127.255.255.255</description>
        /// <description>169.254.0.0~169.254.255.255</description>
        /// <description>224.0.0.0~239.255.255.255</description>
        /// <description>255.0.0.0~255.255.255.255</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpAddress
        {
            get;
        }

        /// <summary>Property asn: The autonomous system number (ASN) of the gateway device in your data center.</summary>
        /// <remarks>
        /// This parameter is required If you want to use Border Gateway Protocol (BGP) for
        /// the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
        /// Asn is a 4-byte number. You can enter it in two segments and separate the first
        /// 16 bits from the following 16 bits with a period (.). Enter the number in each
        /// segment in decimal format.
        /// For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by
        /// using the following formula: 123 × 65536 + 456 = 8061384.
        ///
        ///     <list type="bullet">
        ///     <description>We recommend that you use a private ASN to establish BGP connections to
        ///     the cloud platform. For information about the range of private ASNs, see the relevant
        ///     documentation.</description>
        ///     <description>45104 is a unique identifier assigned by IANA to the cloud platform. It is used to
        ///     identify the cloud platform during route selection and data transmission over the
        ///     Internet.</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "asn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Asn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the customer gateway.</summary>
        /// <remarks>
        /// The description must be 1 to 100 characters in length, and cannot start with
        /// <c>http:\/\/</c> or <c>https:\/\/</c>.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the customer gateway.</summary>
        /// <remarks>
        /// The name must be 1 to 100 characters in length, and cannot start with <c>http:\/\/</c>
        /// or <c>https:\/\/</c>.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the user gateway belongs.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>You can call the ListResourceGroups interface to query the resource group ID.</description>
        /// <description>If you do not specify a resource group, the user gateway will belong to the default resource group after creation.</description>
        /// </list>
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

        /// <summary>Properties for defining a `CustomerGateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.CustomerGatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ICustomerGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipAddress: The static IP address of the gateway device in the data center.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>If you want to create a public IPsec-VPN connection, enter a public IP
            /// address.</description>
            /// <description>If you want to create a private IPsec-VPN connection, enter a private IP
            /// address.
            /// You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection
            /// cannot be established:</description>
            /// <description>100.64.0.0~100.127.255.255</description>
            /// <description>127.0.0.0~127.255.255.255</description>
            /// <description>169.254.0.0~169.254.255.255</description>
            /// <description>224.0.0.0~239.255.255.255</description>
            /// <description>255.0.0.0~255.255.255.255</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property asn: The autonomous system number (ASN) of the gateway device in your data center.</summary>
            /// <remarks>
            /// This parameter is required If you want to use Border Gateway Protocol (BGP) for
            /// the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
            /// Asn is a 4-byte number. You can enter it in two segments and separate the first
            /// 16 bits from the following 16 bits with a period (.). Enter the number in each
            /// segment in decimal format.
            /// For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by
            /// using the following formula: 123 × 65536 + 456 = 8061384.
            ///
            ///     <list type="bullet">
            ///     <description>We recommend that you use a private ASN to establish BGP connections to
            ///     the cloud platform. For information about the range of private ASNs, see the relevant
            ///     documentation.</description>
            ///     <description>45104 is a unique identifier assigned by IANA to the cloud platform. It is used to
            ///     identify the cloud platform during route selection and data transmission over the
            ///     Internet.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "asn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Asn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the customer gateway.</summary>
            /// <remarks>
            /// The description must be 1 to 100 characters in length, and cannot start with
            /// <c>http:\/\/</c> or <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the customer gateway.</summary>
            /// <remarks>
            /// The name must be 1 to 100 characters in length, and cannot start with <c>http:\/\/</c>
            /// or <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the user gateway belongs.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>You can call the ListResourceGroups interface to query the resource group ID.</description>
            /// <description>If you do not specify a resource group, the user gateway will belong to the default resource group after creation.</description>
            /// </list>
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
