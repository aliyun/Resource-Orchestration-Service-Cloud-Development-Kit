using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Properties for defining a `ALIYUN::ECD::Desktops`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDesktopsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.RosDesktopsProps")]
    public interface IRosDesktopsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bundleId: The ID of the cloud desktop template.
        /// </remarks>
        [JsiiProperty(name: "bundleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BundleId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: officeSiteId: The ID of the workspace.
        /// </remarks>
        [JsiiProperty(name: "officeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OfficeSiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyGroupId: The ID of the policy.
        /// </remarks>
        [JsiiProperty(name: "policyGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
        /// value: 1.
        /// </remarks>
        [JsiiProperty(name: "amount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Amount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: Specifies whether to enable automatic payment. Valid values:
        /// true: enables automatic payment. You must make sure that your Alibaba Cloud account
        /// has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
        /// abnormal orders are generated.
        /// false: disables automatic payment. In this case, an order is generated, and no payment
        /// is automatically made. You can log on to the EDS console and complete the payment
        /// based on the order ID on the Orders page.
        /// Default value: true.
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
        /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter takes
        /// effect only when the ChargeType parameter is set to PrePaid.
        /// Valid values:
        /// true: enables auto-renewal. The renewal duration is the same as the subscription duration
        /// that you specified for the Period parameter when you purchased the cloud desktop.
        /// false: does not enable auto-renewal.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method of the cloud desktop. Valid values:
        /// PostPaid: pay-as-you-go
        /// PrePaid: subscription
        /// Default value: PostPaid.
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

        /// <remarks>
        /// <strong>Property</strong>: desktopName: The name of the cloud desktop.
        /// </remarks>
        [JsiiProperty(name: "desktopName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DesktopName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
        /// create multiple cloud desktops at a time.
        /// True: automatically adds a suffix.
        /// False: does not add a suffix.
        /// </remarks>
        [JsiiProperty(name: "desktopNameSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DesktopNameSuffix
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: directoryId: This parameter is not open for use.
        /// </remarks>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DirectoryId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
        /// During the same period, only one user can use the desktop.
        /// If EndUserId is not set, the created cloud desktop will not be assigned to any user.
        /// </remarks>
        [JsiiProperty(name: "endUserId", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndUserId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: desktop group ID。
        /// Note that the desktop group function is currently in the invitation test.
        /// If you want to experience it, please submit a work order application.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: hostname: The custom hostname that you specify for the cloud desktop. You can only specify the
        /// hostname of a Windows cloud desktop in the workspace of the enterprise AD account
        /// type.
        /// The hostname must meet the following requirements:
        /// The hostname must be 2 to 15 characters in length.
        /// The hostname can contain letters, digits, and hyphens (-). It cannot start or end
        /// with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
        /// If you create multiple cloud desktops, you can specify the names of the cloud desktops
        /// in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
        /// the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
        /// name_prefix: the prefix of the hostname.
        /// [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
        /// 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
        /// 6.
        /// name_suffix: the suffix of the hostname.
        /// </remarks>
        [JsiiProperty(name: "hostname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Hostname
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
        /// If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
        /// If periodUnit is year, the valid range is 1 to 5
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
        /// <strong>Property</strong>: periodUnit: The unit of the subscription duration. Valid values:
        /// Month
        /// Year
        /// Default value: Month.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: promotionId: promotion id.
        /// </remarks>
        [JsiiProperty(name: "promotionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PromotionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: The list of desktops tags in the form of key/value pairs.
        /// You can define a maximum of 20 tags for each desktops.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecd.RosDesktops.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecd.RosDesktops.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: userAssignMode: The assignment mode of the cloud desktop. Default value: ALL.
        /// ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
        /// assigned to each regular user that you specify.
        /// PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
        /// are evenly assigned to all regular users that you specify. In this case, you must
        /// make sure that the value of the Amount parameter can be divided by the N value of
        /// the EndUserId.N parameter that you specify.
        /// Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
        /// not assigned to regular users.
        /// </remarks>
        [JsiiProperty(name: "userAssignMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserAssignMode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: userName: This parameter is not open for use.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeEncryptionEnabled: Whether to enable disk encryption.
        /// </remarks>
        [JsiiProperty(name: "volumeEncryptionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VolumeEncryptionEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
        /// </remarks>
        [JsiiProperty(name: "volumeEncryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VolumeEncryptionKey
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: This parameter is not open for use.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECD::Desktops`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDesktopsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.RosDesktopsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.IRosDesktopsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bundleId: The ID of the cloud desktop template.
            /// </remarks>
            [JsiiProperty(name: "bundleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BundleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: officeSiteId: The ID of the workspace.
            /// </remarks>
            [JsiiProperty(name: "officeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OfficeSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyGroupId: The ID of the policy.
            /// </remarks>
            [JsiiProperty(name: "policyGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
            /// value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "amount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Amount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoPay: Specifies whether to enable automatic payment. Valid values:
            /// true: enables automatic payment. You must make sure that your Alibaba Cloud account
            /// has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
            /// abnormal orders are generated.
            /// false: disables automatic payment. In this case, an order is generated, and no payment
            /// is automatically made. You can log on to the EDS console and complete the payment
            /// based on the order ID on the Orders page.
            /// Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter takes
            /// effect only when the ChargeType parameter is set to PrePaid.
            /// Valid values:
            /// true: enables auto-renewal. The renewal duration is the same as the subscription duration
            /// that you specified for the Period parameter when you purchased the cloud desktop.
            /// false: does not enable auto-renewal.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: chargeType: The billing method of the cloud desktop. Valid values:
            /// PostPaid: pay-as-you-go
            /// PrePaid: subscription
            /// Default value: PostPaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: desktopName: The name of the cloud desktop.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desktopName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DesktopName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
            /// create multiple cloud desktops at a time.
            /// True: automatically adds a suffix.
            /// False: does not add a suffix.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desktopNameSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DesktopNameSuffix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: directoryId: This parameter is not open for use.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DirectoryId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
            /// During the same period, only one user can use the desktop.
            /// If EndUserId is not set, the created cloud desktop will not be assigned to any user.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endUserId", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndUserId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: desktop group ID。
            /// Note that the desktop group function is currently in the invitation test.
            /// If you want to experience it, please submit a work order application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hostname: The custom hostname that you specify for the cloud desktop. You can only specify the
            /// hostname of a Windows cloud desktop in the workspace of the enterprise AD account
            /// type.
            /// The hostname must meet the following requirements:
            /// The hostname must be 2 to 15 characters in length.
            /// The hostname can contain letters, digits, and hyphens (-). It cannot start or end
            /// with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
            /// If you create multiple cloud desktops, you can specify the names of the cloud desktops
            /// in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
            /// the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
            /// name_prefix: the prefix of the hostname.
            /// [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
            /// 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
            /// 6.
            /// name_suffix: the suffix of the hostname.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Hostname
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
            /// If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
            /// If periodUnit is year, the valid range is 1 to 5
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: periodUnit: The unit of the subscription duration. Valid values:
            /// Month
            /// Year
            /// Default value: Month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: promotionId: promotion id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "promotionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PromotionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: The list of desktops tags in the form of key/value pairs.
            /// You can define a maximum of 20 tags for each desktops.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecd.RosDesktops.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecd.RosDesktops.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecd.RosDesktops.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userAssignMode: The assignment mode of the cloud desktop. Default value: ALL.
            /// ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
            /// assigned to each regular user that you specify.
            /// PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
            /// are evenly assigned to all regular users that you specify. In this case, you must
            /// make sure that the value of the Amount parameter can be divided by the N value of
            /// the EndUserId.N parameter that you specify.
            /// Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
            /// not assigned to regular users.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userAssignMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserAssignMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: This parameter is not open for use.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: volumeEncryptionEnabled: Whether to enable disk encryption.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volumeEncryptionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VolumeEncryptionEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volumeEncryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VolumeEncryptionKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: This parameter is not open for use.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
