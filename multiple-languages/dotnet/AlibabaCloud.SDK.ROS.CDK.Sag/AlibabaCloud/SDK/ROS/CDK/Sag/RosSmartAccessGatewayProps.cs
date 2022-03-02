using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::SmartAccessGateway`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosSmartAccessGatewayProps")]
    public class RosSmartAccessGatewayProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosSmartAccessGatewayProps
    {
        /// <remarks>
        /// <strong>Property</strong>: buyerMessage: The remarks left by the buyer.
        /// </remarks>
        [JsiiProperty(name: "buyerMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object BuyerMessage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method of the SAG instance.
        /// Set the value to PREPAY, which specifies the subscription billing method.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChargeType
        {
            get;
            set;
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
            get;
            set;
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
            get;
            set;
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
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period of the SAG instance. Unit: months.
        /// Valid values: 1 to 9, 12, 24, and 36.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverAddress: The detailed address of the recipient.
        /// </remarks>
        [JsiiProperty(name: "receiverAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverAddress
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverCity: The city of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverCity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverCity
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverCountry: The country of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverCountry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverCountry
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverDistrict: The district of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverDistrict", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverDistrict
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverEmail: The email address of the recipient.
        /// </remarks>
        [JsiiProperty(name: "receiverEmail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverEmail
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverMobile: The mobile phone number of the recipient.
        /// </remarks>
        [JsiiProperty(name: "receiverMobile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverMobile
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverName: The name of the recipient.
        /// </remarks>
        [JsiiProperty(name: "receiverName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverState: The province of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverState
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverTown: The town of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverTown", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverTown
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverZip: The postcode of the recipient address.
        /// </remarks>
        [JsiiProperty(name: "receiverZip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ReceiverZip
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: activate: Activate SAG or not. Default is False
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "activate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Activate
        {
            get;
            set;
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
            get;
            set;
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
            get;
            set;
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
            get;
            set;
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
            get;
            set;
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
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: receiverPhone: The landline phone number of the recipient.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "receiverPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ReceiverPhone
        {
            get;
            set;
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
            get;
            set;
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
            get;
            set;
        }
    }
}
