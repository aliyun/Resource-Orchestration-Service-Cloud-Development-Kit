using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Properties for defining a `RosDesktopGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktopgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDesktopGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.RosDesktopGroupProps")]
    public interface IRosDesktopGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bundleId: The ID of the desktop template.
        /// </remarks>
        [JsiiProperty(name: "bundleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BundleId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method of the cloud desktops in the desktop group.  Enumeration Value:
        /// PostPaid
        /// PrePaid
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChargeType
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
        /// <strong>Property</strong>: allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription. If you set the ChargeType parameter to PrePaid, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "allowAutoSetup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowAutoSetup
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go. If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
        /// </remarks>
        [JsiiProperty(name: "allowBufferCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowBufferCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: Specifies whether to enable automatic payment.
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
        /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto-renewal.
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
        /// <strong>Property</strong>: buyDesktopsCount: The number of cloud desktops that you want to purchase. Valid values: 0 to 200.
        /// </remarks>
        [JsiiProperty(name: "buyDesktopsCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BuyDesktopsCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: comments: The remarks on the desktop group.
        /// </remarks>
        [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Comments
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: connectDuration: The maximum period of time during which the session is connected. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
        /// </remarks>
        [JsiiProperty(name: "connectDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectDuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group. Default value: 1.
        /// </remarks>
        [JsiiProperty(name: "defaultInitDesktopCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultInitDesktopCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: desktopGroupName: The name of the desktop group.
        /// </remarks>
        [JsiiProperty(name: "desktopGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DesktopGroupName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: endUserIds: The end users that can use the desktop group.
        /// </remarks>
        [JsiiProperty(name: "endUserIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndUserIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupVersion: The desktop group version.
        /// </remarks>
        [JsiiProperty(name: "groupVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: idleDisconnectDuration: The maximum period of time for which a session remains idle. If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
        /// </remarks>
        [JsiiProperty(name: "idleDisconnectDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IdleDisconnectDuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop. Unit: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "keepDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeepDuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain. Valid values: 0 to 200.
        /// </remarks>
        [JsiiProperty(name: "maxDesktopsCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxDesktopsCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription. If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
        /// </remarks>
        [JsiiProperty(name: "minDesktopsCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinDesktopsCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period of the cloud desktops in the desktop group. The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
        /// Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
        /// Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5
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
        /// <strong>Property</strong>: periodUnit: Whether to open CA
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
        /// <strong>Property</strong>: resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
        /// </remarks>
        [JsiiProperty(name: "resetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResetType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: stopDuration: The period of time before the idle cloud desktop is stopped. When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "stopDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StopDuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: volumeEncryptionEnabled: Specifies whether to enable disk encryption.
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
        /// <strong>Property</strong>: volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
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

        /// <summary>Properties for defining a `RosDesktopGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktopgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDesktopGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.RosDesktopGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.IRosDesktopGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bundleId: The ID of the desktop template.
            /// </remarks>
            [JsiiProperty(name: "bundleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BundleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: chargeType: The billing method of the cloud desktops in the desktop group.  Enumeration Value:
            /// PostPaid
            /// PrePaid
            /// </remarks>
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChargeType
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
            /// <strong>Property</strong>: allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription. If you set the ChargeType parameter to PrePaid, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowAutoSetup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowAutoSetup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go. If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowBufferCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowBufferCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoPay: Specifies whether to enable automatic payment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto-renewal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: buyDesktopsCount: The number of cloud desktops that you want to purchase. Valid values: 0 to 200.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "buyDesktopsCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BuyDesktopsCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: comments: The remarks on the desktop group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comments
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: connectDuration: The maximum period of time during which the session is connected. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group. Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultInitDesktopCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultInitDesktopCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: desktopGroupName: The name of the desktop group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desktopGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DesktopGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endUserIds: The end users that can use the desktop group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endUserIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? EndUserIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupVersion: The desktop group version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: idleDisconnectDuration: The maximum period of time for which a session remains idle. If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "idleDisconnectDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IdleDisconnectDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop. Unit: milliseconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keepDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeepDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain. Valid values: 0 to 200.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxDesktopsCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxDesktopsCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription. If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minDesktopsCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinDesktopsCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The subscription period of the cloud desktops in the desktop group. The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
            /// Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
            /// Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: periodUnit: Whether to open CA
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResetType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: stopDuration: The period of time before the idle cloud desktop is stopped. When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stopDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StopDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: volumeEncryptionEnabled: Specifies whether to enable disk encryption.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volumeEncryptionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VolumeEncryptionEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "volumeEncryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VolumeEncryptionKey
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
