using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Memcache
{
    /// <summary>Properties for defining a `ALIYUN::Memcache::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-memcache.RosInstanceProps")]
    public class RosInstanceProps : AlibabaCloud.SDK.ROS.CDK.Memcache.IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto renewal. Valid values:
        /// true
        /// false
        /// Note Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoRenew
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenewPeriod: The period of the auto renewal. Unit: months. Valid values:
        /// 1
        /// 2
        /// 3
        /// 6
        /// 12
        /// Note You must specify this parameter if the value of the AutoRenew parameter is true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoRenewPeriod
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoUseCoupon: Specifies whether to use a coupon. Valid values:
        /// true
        /// false
        /// Note Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoUseCoupon
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupPolicy: Backup policy
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-memcache.RosInstance.BackupPolicyProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? BackupPolicy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: capacity: The storage capacity of the instance. Unit: MB.
        /// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        /// the CreateInstance operation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "capacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Capacity
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method of the instance. Valid values:
        /// PrePaid: subscription.
        /// PostPaid: pay-as-you-go.
        /// Note Default value: PostPaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: config: The parameter configuration of the instance, in a JSON string. For more information,
        /// see Set parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "config", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Config
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "couponNo", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CouponNo
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceClass: The instance type. For more information, see Instance types.
        /// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        /// the CreateInstance operation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceClass", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceClass
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong></strong>: ), forward slashes (/), colons (:), equal signs (=), double quotation marks
        /// ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
        /// 
        /// <strong>Property</strong>: instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
        /// with a letter. The following characters are not supported: at signs (
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkType: The network type of the instance. Valid values:
        /// CLASSIC
        /// VPC
        /// Note Default value: CLASSIC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NetworkType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong></strong>: ), number signs (#), dollar signs ($), percent signs (%), carets (^),
        /// ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        /// hyphens (-), and equal signs (=).
        /// 
        /// <strong>Property</strong>: password: The password of the instance. The password can be 8 to 32 characters in length and
        /// must contain at least three types of the following characters: uppercase letters,
        /// lowercase letters, digits, and special characters. Special characters include ! at signs (
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Password
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period. You must specify this parameter if the value of the ChargeType
        /// parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
        /// and 36.
        /// Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddress: The internal IP address of the instance.
        /// Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
        /// block of the VSwitch to which the instance belongs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrivateIpAddress
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
        /// - true: enables password free.
        /// - false: disables password free.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VpcPasswordFree
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}
