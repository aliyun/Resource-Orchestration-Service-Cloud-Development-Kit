using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Memcache
{
    /// <summary>Properties for defining a `ALIYUN::Memcache::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-memcache.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto renewal. Valid values:
        /// true
        /// false
        /// Note Default value: false.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoRenew
        {
            get
            {
                return null;
            }
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
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoUseCoupon: Specifies whether to use a coupon. Valid values:
        /// true
        /// false
        /// Note Default value: false.
        /// </remarks>
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoUseCoupon
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: backupPolicy: Backup policy
        /// </remarks>
        [JsiiProperty(name: "backupPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-memcache.RosInstance.BackupPolicyProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupPolicy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: capacity: The storage capacity of the instance. Unit: MB.
        /// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        /// the CreateInstance operation.
        /// </remarks>
        [JsiiProperty(name: "capacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Capacity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method of the instance. Valid values:
        /// PrePaid: subscription.
        /// PostPaid: pay-as-you-go.
        /// Note Default value: PostPaid.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: config: The parameter configuration of the instance, in a JSON string. For more information,
        /// see Set parameters.
        /// </remarks>
        [JsiiProperty(name: "config", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Config
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
        /// </remarks>
        [JsiiProperty(name: "couponNo", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CouponNo
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceClass: The instance type. For more information, see Instance types.
        /// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        /// the CreateInstance operation.
        /// </remarks>
        [JsiiProperty(name: "instanceClass", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceClass
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong></strong>: ), forward slashes (/), colons (:), equal signs (=), double quotation marks
        /// ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
        /// 
        /// <strong>Property</strong>: instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
        /// with a letter. The following characters are not supported: at signs (
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: networkType: The network type of the instance. Valid values:
        /// CLASSIC
        /// VPC
        /// Note Default value: CLASSIC.
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NetworkType
        {
            get
            {
                return null;
            }
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
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Password
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period. You must specify this parameter if the value of the ChargeType
        /// parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
        /// and 36.
        /// Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddress: The internal IP address of the instance.
        /// Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
        /// block of the VSwitch to which the instance belongs.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group ID.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
        /// - true: enables password free.
        /// - false: disables password free.
        /// </remarks>
        [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcPasswordFree
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::Memcache::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-memcache.RosInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Memcache.IRosInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto renewal. Valid values:
            /// true
            /// false
            /// Note Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoRenew
            {
                get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoRenewPeriod
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoUseCoupon: Specifies whether to use a coupon. Valid values:
            /// true
            /// false
            /// Note Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoUseCoupon
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: backupPolicy: Backup policy
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-memcache.RosInstance.BackupPolicyProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: capacity: The storage capacity of the instance. Unit: MB.
            /// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
            /// the CreateInstance operation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "capacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Capacity
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: chargeType: The billing method of the instance. Valid values:
            /// PrePaid: subscription.
            /// PostPaid: pay-as-you-go.
            /// Note Default value: PostPaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: config: The parameter configuration of the instance, in a JSON string. For more information,
            /// see Set parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Config
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "couponNo", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CouponNo
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceClass: The instance type. For more information, see Instance types.
            /// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
            /// the CreateInstance operation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceClass", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceClass
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong></strong>: ), forward slashes (/), colons (:), equal signs (=), double quotation marks
            /// ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
            /// 
            /// <strong>Property</strong>: instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
            /// with a letter. The following characters are not supported: at signs (
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: networkType: The network type of the instance. Valid values:
            /// CLASSIC
            /// VPC
            /// Note Default value: CLASSIC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NetworkType
            {
                get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Password
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The subscription period. You must specify this parameter if the value of the ChargeType
            /// parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
            /// and 36.
            /// Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Period
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: privateIpAddress: The internal IP address of the instance.
            /// Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
            /// block of the VSwitch to which the instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PrivateIpAddress
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
            /// - true: enables password free.
            /// - false: disables password free.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcPasswordFree
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ZoneId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
