using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosVpnGateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpngateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpnGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnGatewayProps")]
    public interface IRosVpnGatewayProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
        /// Value: 5|10|20|50|100|200.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bandwidth
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC ID to which the VPN gateway belongs.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
        /// true: Automatically pays the bill for the VPN gateway.
        /// false: Does not automatically pay the bill for the VPN gateway.
        /// Default true.
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the VPN gateway.
        /// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:\/\/ or https:\/\/.
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
        /// <strong>Property</strong>: disasterRecoveryVSwitchId: The second vSwitch with which you want to associate the VPN gateway.
        /// If you call this operation in a region that supports the dual-tunnel mode, this parameter is required.
        /// You need to specify two vSwitches in different zones from the VPC associated with the VPN gateway to implement disaster recovery across zones.
        /// For a region that supports only one zone, disaster recovery across zones is not supported. We recommend that you specify two vSwitches in the zone to implement high availability. You can specify the same vSwitch.
        /// For more information about the regions and zones that support the dual-tunnel mode, see Upgrade a VPN gateway to enable the dual-tunnel mode.
        /// </remarks>
        [JsiiProperty(name: "disasterRecoveryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisasterRecoveryVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
        /// True (default): Enables the IPsec-VPN feature.
        /// False: The IPsec-VPN function is not enabled.
        /// </remarks>
        [JsiiProperty(name: "enableIpsec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableIpsec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
        /// True: Enable SSL-VPN.
        /// False (default): Does not enable SSL-VPN.
        /// </remarks>
        [JsiiProperty(name: "enableSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSsl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceChargeType: Accounting type of the VPN gateway, the value is:
        /// PREPAY, POSTPAY
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
        /// The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:\/\/ or https:\/\/.
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
        /// <strong>Property</strong>: networkType: The network type of the VPN gateway. Valid values: public|private
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Purchase time, value: 1~9|12|24|36.
        /// When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sslConnections: The maximum number of clients allowed to connect at the same time.
        /// </remarks>
        [JsiiProperty(name: "sslConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SslConnections
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnGateway.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnGateway.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpnType: VPN gateway type.
        /// </remarks>
        [JsiiProperty(name: "vpnType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpnType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVpnGateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpngateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpnGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnGatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpnGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
            /// Value: 5|10|20|50|100|200.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: VPC ID to which the VPN gateway belongs.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
            /// true: Automatically pays the bill for the VPN gateway.
            /// false: Does not automatically pay the bill for the VPN gateway.
            /// Default true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the VPN gateway.
            /// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: disasterRecoveryVSwitchId: The second vSwitch with which you want to associate the VPN gateway.
            /// If you call this operation in a region that supports the dual-tunnel mode, this parameter is required.
            /// You need to specify two vSwitches in different zones from the VPC associated with the VPN gateway to implement disaster recovery across zones.
            /// For a region that supports only one zone, disaster recovery across zones is not supported. We recommend that you specify two vSwitches in the zone to implement high availability. You can specify the same vSwitch.
            /// For more information about the regions and zones that support the dual-tunnel mode, see Upgrade a VPN gateway to enable the dual-tunnel mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disasterRecoveryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisasterRecoveryVSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
            /// True (default): Enables the IPsec-VPN feature.
            /// False: The IPsec-VPN function is not enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableIpsec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableIpsec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
            /// True: Enable SSL-VPN.
            /// False (default): Does not enable SSL-VPN.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSsl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceChargeType: Accounting type of the VPN gateway, the value is:
            /// PREPAY, POSTPAY
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
            /// The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: networkType: The network type of the VPN gateway. Valid values: public|private
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: Purchase time, value: 1~9|12|24|36.
            /// When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sslConnections: The maximum number of clients allowed to connect at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sslConnections", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SslConnections
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnGateway.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnGateway.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnGateway.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpnType: VPN gateway type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpnType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpnType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
