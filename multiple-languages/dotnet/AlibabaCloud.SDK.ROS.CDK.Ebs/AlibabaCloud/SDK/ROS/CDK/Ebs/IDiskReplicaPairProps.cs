using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs
{
    /// <summary>Properties for defining a `DiskReplicaPair`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDiskReplicaPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.DiskReplicaPairProps")]
    public interface IDiskReplicaPairProps
    {
        /// <summary>Property destinationDiskId: The ID of the standby disk.</summary>
        [JsiiProperty(name: "destinationDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationDiskId
        {
            get;
        }

        /// <summary>Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.</summary>
        [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationRegionId
        {
            get;
        }

        /// <summary>Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.</summary>
        [JsiiProperty(name: "destinationZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationZoneId
        {
            get;
        }

        /// <summary>Property diskId: The ID of the primary disk.</summary>
        [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DiskId
        {
            get;
        }

        /// <summary>Property sourceZoneId: The ID of the zone to which the production site belongs.</summary>
        [JsiiProperty(name: "sourceZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceZoneId
        {
            get;
        }

        /// <summary>Property bandwidth: The bandwidth for asynchronous data replication between cloud disks.</summary>
        /// <remarks>
        /// The unit is Kbps. Value range:
        ///
        /// <list type="bullet">
        /// <description>10240 Kbps: equal to 10 Mbps.</description>
        /// <description>20480 Kbps: equal to 20 Mbps.</description>
        /// <description>51200 Kbps: equal to 50 Mbps.</description>
        /// <description>102400 Kbps: equal to 100 Mbps.
        /// Default value: 10240.
        /// This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the asynchronous replication relationship.</summary>
        /// <remarks>
        /// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
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

        /// <summary>Property diskReplicaPairName: The name of the asynchronous replication relationship.</summary>
        /// <remarks>
        /// The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
        /// </remarks>
        [JsiiProperty(name: "diskReplicaPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskReplicaPairName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property paymentType: The payment type of the resource.</summary>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PaymentType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The purchase duration of the asynchronous replication relationship.</summary>
        /// <remarks>
        /// This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
        ///
        /// <list type="bullet">
        /// <description>When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.</description>
        /// </list>
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

        /// <summary>Property periodUnit: The unit of the purchase time of the asynchronous replication relationship.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description>Month.Default value: Month.</description>
        /// </list>
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

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rpo: The RPO value set by the consistency group in seconds.</summary>
        /// <remarks>
        /// Currently only 900 seconds are supported.
        /// </remarks>
        [JsiiProperty(name: "rpo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Rpo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of disk replica pair.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ebs.RosDiskReplicaPair.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ebs.RosDiskReplicaPair.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DiskReplicaPair`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDiskReplicaPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.DiskReplicaPairProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaPairProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property destinationDiskId: The ID of the standby disk.</summary>
            [JsiiProperty(name: "destinationDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationDiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.</summary>
            [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.</summary>
            [JsiiProperty(name: "destinationZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property diskId: The ID of the primary disk.</summary>
            [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceZoneId: The ID of the zone to which the production site belongs.</summary>
            [JsiiProperty(name: "sourceZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bandwidth: The bandwidth for asynchronous data replication between cloud disks.</summary>
            /// <remarks>
            /// The unit is Kbps. Value range:
            ///
            /// <list type="bullet">
            /// <description>10240 Kbps: equal to 10 Mbps.</description>
            /// <description>20480 Kbps: equal to 20 Mbps.</description>
            /// <description>51200 Kbps: equal to 50 Mbps.</description>
            /// <description>102400 Kbps: equal to 100 Mbps.
            /// Default value: 10240.
            /// This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the asynchronous replication relationship.</summary>
            /// <remarks>
            /// 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskReplicaPairName: The name of the asynchronous replication relationship.</summary>
            /// <remarks>
            /// The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskReplicaPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskReplicaPairName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property paymentType: The payment type of the resource.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PaymentType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The purchase duration of the asynchronous replication relationship.</summary>
            /// <remarks>
            /// This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
            ///
            /// <list type="bullet">
            /// <description>When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The unit of the purchase time of the asynchronous replication relationship.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description>Month.Default value: Month.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rpo: The RPO value set by the consistency group in seconds.</summary>
            /// <remarks>
            /// Currently only 900 seconds are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rpo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Rpo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of disk replica pair.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ebs.RosDiskReplicaPair.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ebs.RosDiskReplicaPair.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ebs.RosDiskReplicaPair.ITagsProperty[]?>();
            }
        }
    }
}
