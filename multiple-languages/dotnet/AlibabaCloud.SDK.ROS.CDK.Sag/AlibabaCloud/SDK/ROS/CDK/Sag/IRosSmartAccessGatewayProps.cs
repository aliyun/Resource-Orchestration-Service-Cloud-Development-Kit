using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::SmartAccessGateway`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSmartAccessGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosSmartAccessGatewayProps")]
    public interface IRosSmartAccessGatewayProps
    {
        /// <remarks>
        /// <strong>Property</strong>: buyerMessage: The remarks left by the buyer.
        /// </remarks>
        [JsiiProperty(name: "buyerMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BuyerMessage
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method of the SAG instance.
        /// Set the value to PREPAY, which specifies the subscription billing method.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChargeType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: hardWareSpec: The type of the SAG instance. Valid values:
        /// sag-100wm
        /// sag-1000
        /// sag-vcpe
        /// </remarks>
        [JsiiProperty(name: "hardWareSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HardWareSpec
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: haType: The deployment mode. Valid values:
        /// no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
        /// cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
        /// device and the other serves as a standby device. Only the active device is connected
        /// to Alibaba Cloud. If the active device is not working as expected, you must manually
        /// perform a switchover.
        /// warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
        /// Alibaba Cloud. If an active device is not working as expected, a failover is automatically
        /// performed.
        /// Note If you want to create an SAG vCPE instance, set the value to warm_backup.
        /// </remarks>
        [JsiiProperty(name: "haType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HaType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: maxBandWidth: The bandwidth of the SAG instance.
        /// If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
        /// If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
        /// If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "maxBandWidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MaxBandWidth
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period of the SAG instance. Unit: months.
        /// Valid values: 1 to 9, 12, 24, and 36.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Period
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverAddress: The detailed address of the recipient.
        /// </remarks>
        [JsiiProperty(name: "receiverAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReceiverAddress
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverCity: The city of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverCity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReceiverCity
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverCountry: The country of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverCountry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReceiverCountry
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverDistrict: The district of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverDistrict", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReceiverDistrict
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverEmail: The email address of the recipient.
        /// </remarks>
        [JsiiProperty(name: "receiverEmail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReceiverEmail
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverMobile: The mobile phone number of the recipient.
        /// </remarks>
        [JsiiProperty(name: "receiverMobile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReceiverMobile
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverName: The name of the recipient.
        /// </remarks>
        [JsiiProperty(name: "receiverName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReceiverName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverState: The province of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReceiverState
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverTown: The town of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverTown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReceiverTown
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverZip: The postcode of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverZip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReceiverZip
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: activate: Activate SAG or not. Default is False
        /// </remarks>
        [JsiiProperty(name: "activate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Activate
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
        /// true: yes
        /// false (default): no
        /// </remarks>
        [JsiiProperty(name: "alreadyHaveSag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlreadyHaveSag
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
        /// true: yes
        /// false: no
        /// If you set the parameter to false, go to Billing Management to complete the payment
        /// after you call this operation. After you complete the payment, the instance can be
        /// created.
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
        /// <strong>Property</strong>: cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
        /// do not overlap with each other.
        /// If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
        /// the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
        /// Protocol (DHCP) enabled.
        /// </remarks>
        [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CidrBlock
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the SAG instance.
        /// The description must be 2 to 256 characters in length, and can contain digits, periods
        /// (.), underscores (_), and hyphens (-). It must start with a letter.
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
        /// <strong>Property</strong>: name: The name of the SAG instance.
        /// The name must be 2 to 128 characters in length and can contain digits, periods (.),
        /// underscores (_), and hyphens (-). It must start with a letter.
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
        /// <strong>Property</strong>: receiverPhone: The landline phone number of the recipient.
        /// </remarks>
        [JsiiProperty(name: "receiverPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReceiverPhone
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
        /// static: static routing.
        /// dynamic: dynamic routing.
        /// </remarks>
        [JsiiProperty(name: "routingStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RoutingStrategy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
        /// than zero second.
        /// Unit: second.
        /// </remarks>
        [JsiiProperty(name: "securityLockThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityLockThreshold
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::SmartAccessGateway`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSmartAccessGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosSmartAccessGatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosSmartAccessGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: buyerMessage: The remarks left by the buyer.
            /// </remarks>
            [JsiiProperty(name: "buyerMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BuyerMessage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: chargeType: The billing method of the SAG instance.
            /// Set the value to PREPAY, which specifies the subscription billing method.
            /// </remarks>
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: hardWareSpec: The type of the SAG instance. Valid values:
            /// sag-100wm
            /// sag-1000
            /// sag-vcpe
            /// </remarks>
            [JsiiProperty(name: "hardWareSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HardWareSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: haType: The deployment mode. Valid values:
            /// no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
            /// cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
            /// device and the other serves as a standby device. Only the active device is connected
            /// to Alibaba Cloud. If the active device is not working as expected, you must manually
            /// perform a switchover.
            /// warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
            /// Alibaba Cloud. If an active device is not working as expected, a failover is automatically
            /// performed.
            /// Note If you want to create an SAG vCPE instance, set the value to warm_backup.
            /// </remarks>
            [JsiiProperty(name: "haType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HaType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: maxBandWidth: The bandwidth of the SAG instance.
            /// If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
            /// If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
            /// If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
            /// </remarks>
            [JsiiProperty(name: "maxBandWidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MaxBandWidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The subscription period of the SAG instance. Unit: months.
            /// Valid values: 1 to 9, 12, 24, and 36.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Period
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverAddress: The detailed address of the recipient.
            /// </remarks>
            [JsiiProperty(name: "receiverAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReceiverAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverCity: The city of the recipient address.
            /// </remarks>
            [JsiiProperty(name: "receiverCity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReceiverCity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverCountry: The country of the recipient address.
            /// </remarks>
            [JsiiProperty(name: "receiverCountry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReceiverCountry
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverDistrict: The district of the recipient address.
            /// </remarks>
            [JsiiProperty(name: "receiverDistrict", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReceiverDistrict
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverEmail: The email address of the recipient.
            /// </remarks>
            [JsiiProperty(name: "receiverEmail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReceiverEmail
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverMobile: The mobile phone number of the recipient.
            /// </remarks>
            [JsiiProperty(name: "receiverMobile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReceiverMobile
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverName: The name of the recipient.
            /// </remarks>
            [JsiiProperty(name: "receiverName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReceiverName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverState: The province of the recipient address.
            /// </remarks>
            [JsiiProperty(name: "receiverState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReceiverState
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverTown: The town of the recipient address.
            /// </remarks>
            [JsiiProperty(name: "receiverTown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReceiverTown
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverZip: The postcode of the recipient address.
            /// </remarks>
            [JsiiProperty(name: "receiverZip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReceiverZip
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: activate: Activate SAG or not. Default is False
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "activate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Activate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
            /// true: yes
            /// false (default): no
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alreadyHaveSag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlreadyHaveSag
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
            /// true: yes
            /// false: no
            /// If you set the parameter to false, go to Billing Management to complete the payment
            /// after you call this operation. After you complete the payment, the instance can be
            /// created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
            /// do not overlap with each other.
            /// If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
            /// the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
            /// Protocol (DHCP) enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the SAG instance.
            /// The description must be 2 to 256 characters in length, and can contain digits, periods
            /// (.), underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the SAG instance.
            /// The name must be 2 to 128 characters in length and can contain digits, periods (.),
            /// underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: receiverPhone: The landline phone number of the recipient.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "receiverPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReceiverPhone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
            /// static: static routing.
            /// dynamic: dynamic routing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routingStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RoutingStrategy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
            /// than zero second.
            /// Unit: second.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityLockThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityLockThreshold
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
