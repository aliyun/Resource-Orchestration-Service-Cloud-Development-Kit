using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Memcache
{
    /// <summary>Properties for defining a `ALIYUN::Memcache::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-memcache.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property autoRenew: Specifies whether to enable auto renewal.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// Note Default value: false.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenewPeriod: The period of the auto renewal.</summary>
        /// <remarks>
        /// Unit: months. Valid values:
        /// 1
        /// 2
        /// 3
        /// 6
        /// 12
        /// Note You must specify this parameter if the value of the AutoRenew parameter is true.
        /// </remarks>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoUseCoupon: Specifies whether to use a coupon.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// Note Default value: false.
        /// </remarks>
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoUseCoupon
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backupPolicy: Backup policy.</summary>
        [JsiiProperty(name: "backupPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-memcache.RosInstance.BackupPolicyProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property capacity: The storage capacity of the instance.</summary>
        /// <remarks>
        /// Unit: MB.
        /// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        /// the CreateInstance operation.
        /// </remarks>
        [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Capacity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: The billing method of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PrePaid: subscription.
        /// PostPaid: pay-as-you-go.
        /// Note Default value: PostPaid.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property config: The parameter configuration of the instance, in a JSON string.</summary>
        /// <remarks>
        /// For more information,
        /// see Set parameters.
        /// </remarks>
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Config
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property couponNo: The coupon number.</summary>
        /// <remarks>
        /// Default value: youhuiquan_promotion_option_id_for_blank.
        /// </remarks>
        [JsiiProperty(name: "couponNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CouponNo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceClass: The instance type.</summary>
        /// <remarks>
        /// For more information, see Instance types.
        /// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        /// the CreateInstance operation.
        /// </remarks>
        [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceName: The name of the instance.</summary>
        /// <remarks>
        /// The name can be 2 to 128 characters in length and must start
        /// with a letter. The following characters are not supported: at signs (@), forward slashes (/), colons (:), equal signs (=), double quotation marks
        /// ("), angle brackets (&lt;&gt;), braces ([]), curly brackets ({}) and spaces.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkType: The network type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// CLASSIC
        /// VPC
        /// Note Default value: CLASSIC.
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

        /// <summary>Property password: The password of the instance.</summary>
        /// <remarks>
        /// The password can be 8 to 32 characters in length and
        /// must contain at least three types of the following characters: uppercase letters,
        /// lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
        /// ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        /// hyphens (-), and equal signs (=).
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Password
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period.</summary>
        /// <remarks>
        /// You must specify this parameter if the value of the ChargeType
        /// parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
        /// and 36.
        /// Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddress: The internal IP address of the instance.</summary>
        /// <remarks>
        /// Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
        /// block of the VSwitch to which the instance belongs.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group ID.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.</summary>
        /// <remarks>
        /// If set to:
        ///
        /// <list type="bullet">
        /// <description>true: enables password free.</description>
        /// <description>false: disables password free.</description>
        /// </list>
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

        /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The ID of the zone in which the instance is created.</summary>
        /// <remarks>
        /// You can call the DescribeRegions operation to query the latest region list.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::Memcache::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-memcache.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Memcache.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property autoRenew: Specifies whether to enable auto renewal.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false
            /// Note Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriod: The period of the auto renewal.</summary>
            /// <remarks>
            /// Unit: months. Valid values:
            /// 1
            /// 2
            /// 3
            /// 6
            /// 12
            /// Note You must specify this parameter if the value of the AutoRenew parameter is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoUseCoupon: Specifies whether to use a coupon.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false
            /// Note Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoUseCoupon
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backupPolicy: Backup policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-memcache.RosInstance.BackupPolicyProperty\"}]}}", isOptional: true)]
            public object? BackupPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property capacity: The storage capacity of the instance.</summary>
            /// <remarks>
            /// Unit: MB.
            /// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
            /// the CreateInstance operation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Capacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: The billing method of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// PrePaid: subscription.
            /// PostPaid: pay-as-you-go.
            /// Note Default value: PostPaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property config: The parameter configuration of the instance, in a JSON string.</summary>
            /// <remarks>
            /// For more information,
            /// see Set parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Config
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property couponNo: The coupon number.</summary>
            /// <remarks>
            /// Default value: youhuiquan_promotion_option_id_for_blank.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "couponNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CouponNo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceClass: The instance type.</summary>
            /// <remarks>
            /// For more information, see Instance types.
            /// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
            /// the CreateInstance operation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceName: The name of the instance.</summary>
            /// <remarks>
            /// The name can be 2 to 128 characters in length and must start
            /// with a letter. The following characters are not supported: at signs (@), forward slashes (/), colons (:), equal signs (=), double quotation marks
            /// ("), angle brackets (&lt;&gt;), braces ([]), curly brackets ({}) and spaces.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkType: The network type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// CLASSIC
            /// VPC
            /// Note Default value: CLASSIC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property password: The password of the instance.</summary>
            /// <remarks>
            /// The password can be 8 to 32 characters in length and
            /// must contain at least three types of the following characters: uppercase letters,
            /// lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
            /// ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+),
            /// hyphens (-), and equal signs (=).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription period.</summary>
            /// <remarks>
            /// You must specify this parameter if the value of the ChargeType
            /// parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
            /// and 36.
            /// Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateIpAddress: The internal IP address of the instance.</summary>
            /// <remarks>
            /// Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
            /// block of the VSwitch to which the instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VPC.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.</summary>
            /// <remarks>
            /// If set to:
            ///
            /// <list type="bullet">
            /// <description>true: enables password free.</description>
            /// <description>false: disables password free.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcPasswordFree
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The ID of the zone in which the instance is created.</summary>
            /// <remarks>
            /// You can call the DescribeRegions operation to query the latest region list.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
