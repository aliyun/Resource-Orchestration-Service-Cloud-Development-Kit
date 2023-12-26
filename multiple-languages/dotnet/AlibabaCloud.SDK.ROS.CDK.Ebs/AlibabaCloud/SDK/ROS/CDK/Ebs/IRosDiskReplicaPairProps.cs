using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs
{
    /// <summary>Properties for defining a `RosDiskReplicaPair`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDiskReplicaPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.RosDiskReplicaPairProps")]
    public interface IRosDiskReplicaPairProps
    {
        /// <remarks>
        /// <strong>Property</strong>: destinationDiskId: The ID of the standby disk.
        /// </remarks>
        [JsiiProperty(name: "destinationDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationDiskId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationRegionId: The ID of the region to which the disaster recovery site belongs.
        /// </remarks>
        [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
        /// </remarks>
        [JsiiProperty(name: "destinationZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskId: The ID of the primary disk.
        /// </remarks>
        [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DiskId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceZoneId: The ID of the zone to which the production site belongs.
        /// </remarks>
        [JsiiProperty(name: "sourceZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps. Value range:
        /// - 10240 Kbps: equal to 10 Mbps.
        /// - 20480 Kbps: equal to 20 Mbps.
        /// - 51200 Kbps: equal to 50 Mbps.
        /// - 102400 Kbps: equal to 100 Mbps.
        /// Default value: 10240.
        /// This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the asynchronous replication relationship. 2 to 256 English or Chinese characters in length and cannot start with' http:\/\/ 'or' https.
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
        /// <strong>Property</strong>: diskReplicaPairName: The name of the asynchronous replication relationship. The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:\/\/ or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
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

        /// <remarks>
        /// <strong>Property</strong>: paymentType: The payment type of the resource
        /// </remarks>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PaymentType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The purchase duration of the asynchronous replication relationship. This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
        /// - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
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
        /// <strong>Property</strong>: periodUnit: The unit of the purchase time of the asynchronous replication relationship. Value range:
        /// - Month.Default value: Month.
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
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rpo: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
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

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags of disk replica pair.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ebs.RosDiskReplicaPair.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ebs.RosDiskReplicaPair.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDiskReplicaPair`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDiskReplicaPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.RosDiskReplicaPairProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.IRosDiskReplicaPairProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationDiskId: The ID of the standby disk.
            /// </remarks>
            [JsiiProperty(name: "destinationDiskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationDiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationRegionId: The ID of the region to which the disaster recovery site belongs.
            /// </remarks>
            [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
            /// </remarks>
            [JsiiProperty(name: "destinationZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskId: The ID of the primary disk.
            /// </remarks>
            [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DiskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceZoneId: The ID of the zone to which the production site belongs.
            /// </remarks>
            [JsiiProperty(name: "sourceZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: The bandwidth for asynchronous data replication between cloud disks. The unit is Kbps. Value range:
            /// - 10240 Kbps: equal to 10 Mbps.
            /// - 20480 Kbps: equal to 20 Mbps.
            /// - 51200 Kbps: equal to 50 Mbps.
            /// - 102400 Kbps: equal to 100 Mbps.
            /// Default value: 10240.
            /// This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the asynchronous replication relationship. 2 to 256 English or Chinese characters in length and cannot start with' http:\/\/ 'or' https.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: diskReplicaPairName: The name of the asynchronous replication relationship. The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:\/\/ or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskReplicaPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskReplicaPairName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: paymentType: The payment type of the resource
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PaymentType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The purchase duration of the asynchronous replication relationship. This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
            /// - When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: periodUnit: The unit of the purchase time of the asynchronous replication relationship. Value range:
            /// - Month.Default value: Month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rpo: The RPO value set by the consistency group in seconds. Currently only 900 seconds are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rpo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Rpo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags of disk replica pair.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ebs.RosDiskReplicaPair.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ebs.RosDiskReplicaPair.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ebs.RosDiskReplicaPair.ITagsProperty[]?>();
            }
        }
    }
}
