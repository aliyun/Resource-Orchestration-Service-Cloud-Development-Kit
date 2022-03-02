using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::SmartAccessGateway`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.SmartAccessGatewayProps")]
    public class SmartAccessGatewayProps : AlibabaCloud.SDK.ROS.CDK.Sag.ISmartAccessGatewayProps
    {
        /// <summary>Property buyerMessage: The remarks left by the buyer.</summary>
        [JsiiProperty(name: "buyerMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object BuyerMessage
        {
            get;
            set;
        }

        /// <summary>Property chargeType: The billing method of the SAG instance.</summary>
        /// <remarks>
        /// Set the value to PREPAY, which specifies the subscription billing method.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChargeType
        {
            get;
            set;
        }

        /// <summary>Property hardWareSpec: The type of the SAG instance.</summary>
        /// <remarks>
        /// Valid values:
        /// sag-100wm
        /// sag-1000
        /// sag-vcpe
        /// </remarks>
        [JsiiProperty(name: "hardWareSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object HardWareSpec
        {
            get;
            set;
        }

        /// <summary>Property haType: The deployment mode.</summary>
        /// <remarks>
        /// Valid values:
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
            get;
            set;
        }

        /// <summary>Property maxBandWidth: The bandwidth of the SAG instance.</summary>
        /// <remarks>
        /// If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
        /// If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
        /// If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "maxBandWidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object MaxBandWidth
        {
            get;
            set;
        }

        /// <summary>Property period: The subscription period of the SAG instance.</summary>
        /// <remarks>
        /// Unit: months.
        /// Valid values: 1 to 9, 12, 24, and 36.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Period
        {
            get;
            set;
        }

        /// <summary>Property receiverAddress: The detailed address of the recipient.</summary>
        [JsiiProperty(name: "receiverAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverAddress
        {
            get;
            set;
        }

        /// <summary>Property receiverCity: The city of the recipient address.</summary>
        [JsiiProperty(name: "receiverCity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverCity
        {
            get;
            set;
        }

        /// <summary>Property receiverCountry: The country of the recipient address.</summary>
        [JsiiProperty(name: "receiverCountry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverCountry
        {
            get;
            set;
        }

        /// <summary>Property receiverDistrict: The district of the recipient address.</summary>
        [JsiiProperty(name: "receiverDistrict", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverDistrict
        {
            get;
            set;
        }

        /// <summary>Property receiverEmail: The email address of the recipient.</summary>
        [JsiiProperty(name: "receiverEmail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverEmail
        {
            get;
            set;
        }

        /// <summary>Property receiverMobile: The mobile phone number of the recipient.</summary>
        [JsiiProperty(name: "receiverMobile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverMobile
        {
            get;
            set;
        }

        /// <summary>Property receiverName: The name of the recipient.</summary>
        [JsiiProperty(name: "receiverName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverName
        {
            get;
            set;
        }

        /// <summary>Property receiverState: The province of the recipient address.</summary>
        [JsiiProperty(name: "receiverState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverState
        {
            get;
            set;
        }

        /// <summary>Property receiverTown: The town of the recipient address.</summary>
        [JsiiProperty(name: "receiverTown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverTown
        {
            get;
            set;
        }

        /// <summary>Property receiverZip: The postcode of the recipient address.</summary>
        [JsiiProperty(name: "receiverZip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverZip
        {
            get;
            set;
        }

        /// <summary>Property activate: Activate SAG or not.</summary>
        /// <remarks>
        /// Default is False
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "activate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Activate
        {
            get;
            set;
        }

        /// <summary>Property alreadyHaveSag: Specifies whether you already have an SAG device.</summary>
        /// <remarks>
        /// Valid values:
        /// true: yes
        /// false (default): no
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "alreadyHaveSag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AlreadyHaveSag
        {
            get;
            set;
        }

        /// <summary>Property autoPay: Specifies whether to enable auto-payment for the instance.</summary>
        /// <remarks>
        /// Valid values:
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
            get;
            set;
        }

        /// <summary>Property cidrBlock: The CIDR blocks of terminals in the private network.</summary>
        /// <remarks>
        /// Make sure that the CIDR blocks
        /// do not overlap with each other.
        /// If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
        /// the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
        /// Protocol (DHCP) enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CidrBlock
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the SAG instance.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length, and can contain digits, periods
        /// (.), underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the SAG instance.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can contain digits, periods (.),
        /// underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <summary>Property receiverPhone: The landline phone number of the recipient.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "receiverPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ReceiverPhone
        {
            get;
            set;
        }

        /// <summary>Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.</summary>
        /// <remarks>
        /// static: static routing.
        /// dynamic: dynamic routing.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "routingStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RoutingStrategy
        {
            get;
            set;
        }

        /// <summary>Property securityLockThreshold: The time that a disconnected SAG device remain locked.</summary>
        /// <remarks>
        /// The time must be no shorter
        /// than zero second.
        /// Unit: second.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityLockThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SecurityLockThreshold
        {
            get;
            set;
        }
    }
}
