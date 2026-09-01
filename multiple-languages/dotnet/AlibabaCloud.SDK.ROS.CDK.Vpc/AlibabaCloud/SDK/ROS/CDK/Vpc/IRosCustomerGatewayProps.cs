using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosCustomerGateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosCustomerGatewayProps")]
    public interface IRosCustomerGatewayProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ipAddress: The static IP address of the gateway device in the data center.
        /// *   If you want to create a public IPsec-VPN connection, enter a public IP
        /// address.
        /// *   If you want to create a private IPsec-VPN connection, enter a private IP
        /// address.
        /// You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection
        /// cannot be established:
        /// *   100.64.0.0~100.127.255.255
        /// *   127.0.0.0~127.255.255.255
        /// *   169.254.0.0~169.254.255.255
        /// *   224.0.0.0~239.255.255.255
        /// *   255.0.0.0~255.255.255.255
        /// </remarks>
        [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpAddress
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: asn: The autonomous system number (ASN) of the gateway device in your data center.
        /// This parameter is required If you want to use Border Gateway Protocol (BGP) for
        /// the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
        /// Asn is a 4-byte number. You can enter it in two segments and separate the first
        /// 16 bits from the following 16 bits with a period (.). Enter the number in each
        /// segment in decimal format.
        /// For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by
        /// using the following formula: 123 × 65536 + 456 = 8061384.
        /// > - We recommend that you use a private ASN to establish BGP connections to
        /// the cloud platform. For information about the range of private ASNs, see the relevant
        /// documentation.
        /// > - 45104 is a unique identifier assigned by IANA to the cloud platform. It is used to
        /// identify the cloud platform during route selection and data transmission over the
        /// Internet.
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the customer gateway.
        /// The description must be 1 to 100 characters in length, and cannot start with
        /// `http:\/\/` or `https:\/\/`.
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

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the customer gateway.
        /// The name must be 1 to 100 characters in length, and cannot start with `http:\/\/`
        /// or `https:\/\/`.
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the user gateway belongs.
        ///
        /// - You can call the ListResourceGroups interface to query the resource group ID.
        /// - If you do not specify a resource group, the user gateway will belong to the default resource group after creation.
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

        /// <summary>Properties for defining a `RosCustomerGateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCustomerGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosCustomerGatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosCustomerGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ipAddress: The static IP address of the gateway device in the data center.
            /// *   If you want to create a public IPsec-VPN connection, enter a public IP
            /// address.
            /// *   If you want to create a private IPsec-VPN connection, enter a private IP
            /// address.
            /// You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection
            /// cannot be established:
            /// *   100.64.0.0~100.127.255.255
            /// *   127.0.0.0~127.255.255.255
            /// *   169.254.0.0~169.254.255.255
            /// *   224.0.0.0~239.255.255.255
            /// *   255.0.0.0~255.255.255.255
            /// </remarks>
            [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: asn: The autonomous system number (ASN) of the gateway device in your data center.
            /// This parameter is required If you want to use Border Gateway Protocol (BGP) for
            /// the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
            /// Asn is a 4-byte number. You can enter it in two segments and separate the first
            /// 16 bits from the following 16 bits with a period (.). Enter the number in each
            /// segment in decimal format.
            /// For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by
            /// using the following formula: 123 × 65536 + 456 = 8061384.
            /// > - We recommend that you use a private ASN to establish BGP connections to
            /// the cloud platform. For information about the range of private ASNs, see the relevant
            /// documentation.
            /// > - 45104 is a unique identifier assigned by IANA to the cloud platform. It is used to
            /// identify the cloud platform during route selection and data transmission over the
            /// Internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "asn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Asn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the customer gateway.
            /// The description must be 1 to 100 characters in length, and cannot start with
            /// `http:\/\/` or `https:\/\/`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the customer gateway.
            /// The name must be 1 to 100 characters in length, and cannot start with `http:\/\/`
            /// or `https:\/\/`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the user gateway belongs.
            ///
            /// - You can call the ListResourceGroups interface to query the resource group ID.
            /// - If you do not specify a resource group, the user gateway will belong to the default resource group after creation.
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
