using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `DedicatedHost`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDedicatedHostProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DedicatedHostProps")]
    public interface IDedicatedHostProps
    {
        /// <summary>Property dedicatedHostType: The dedicated host type.</summary>
        /// <remarks>
        /// You can call the <a href="">DescribeDedicatedHostTypes</a>
        /// operation to query the most recent list of dedicated host types.
        /// </remarks>
        [JsiiProperty(name: "dedicatedHostType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DedicatedHostType
        {
            get;
        }

        /// <summary>Property actionOnMaintenance: The policy for migrating the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Migrate: The instances are migrated to another physical machine and then
        /// restarted.
        /// If cloud disks are attached to the dedicated host, the default value is Migrate.</description>
        /// <description>Stop: The instances are stopped. If the dedicated host cannot be repaired, the
        /// instances are migrated to another physical machine and then restarted.
        /// If local disks are attached to the dedicated host, the default value is Stop.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "actionOnMaintenance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ActionOnMaintenance
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment.</summary>
        /// <remarks>
        /// If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
        /// </remarks>
        [JsiiProperty(name: "autoPlacement", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPlacement
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoReleaseTime: The time when to automatically release the dedicated host.</summary>
        /// <remarks>
        /// Specify the time in
        /// the <c>ISO 8601</c> standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in
        /// UTC.
        ///
        ///
        ///
        /// <list type="bullet">
        /// <description>It must be at least half an hour later than the current time.</description>
        /// <description>It must be at most three years later than the current time.</description>
        /// <description>If the value of seconds (ss) is not 00, it is automatically set to 00.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "autoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoReleaseTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Whether renew the fee automatically?</summary>
        /// <remarks>
        /// When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
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

        /// <summary>Property autoRenewPeriod: The time period of auto renew.</summary>
        /// <remarks>
        /// When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
        /// </remarks>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid.</summary>
        /// <remarks>
        /// If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
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

        /// <summary>Property cpuOverCommitRatio: The CPU overcommit ratio.</summary>
        /// <remarks>
        /// You can configure CPU overcommit ratios only for the
        /// following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.
        /// The CPU overcommit ratio affects the number of available vCPUs on a dedicated
        /// host. You can use the following formula to calculate the number of available
        /// vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU
        /// cores * 2 * CPU overcommit ratio. For example, the number of physical CPU cores
        /// on each g6s dedicated host is 52. If you set the CPU overcommit ratio of a g6s
        /// dedicated host to 4, the number of available vCPUs on the dedicated host is 416.
        /// For scenarios that have minimal requirements on CPU stability or where CPU load
        /// is not heavy, such as development and test environments, you can increase the
        /// number of available vCPUs on a dedicated host by increasing the CPU overcommit
        /// ratio. This way, you can deploy more ECS instances of the same specifications on
        /// the dedicated host and reduce the unit deployment cost.
        /// </remarks>
        [JsiiProperty(name: "cpuOverCommitRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CpuOverCommitRatio
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostClusterId: The ID of the dedicated host cluster.</summary>
        [JsiiProperty(name: "dedicatedHostClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostName: The name of the dedicated host.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length
        /// and can contain letters and digits. The name can contain colons (:), underscores
        /// (_), periods (.), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "dedicatedHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the dedicated host.</summary>
        /// <remarks>
        /// The description must be 2 to 256
        /// characters in length and cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
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

        /// <summary>Property minQuantity: The minimum number of dedicated hosts to create.</summary>
        /// <remarks>
        /// Valid values: 1 to 100.
        ///
        ///     If the number of available dedicated hosts is less than the minimum number of
        ///     dedicated hosts to create, the dedicated hosts fail to be created.
        /// </remarks>
        [JsiiProperty(name: "minQuantity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinQuantity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host.</summary>
        /// <remarks>
        /// Unit: seconds. Valid values: 15 to 310.
        /// </remarks>
        [JsiiProperty(name: "networkAttributesSlbUdpTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkAttributesSlbUdpTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host.</summary>
        /// <remarks>
        /// Unit: seconds. Valid values: 15 to 310.
        /// </remarks>
        [JsiiProperty(name: "networkAttributesUdpTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkAttributesUdpTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
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

        /// <summary>Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year.</summary>
        /// <remarks>
        /// Default value is Month.
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

        /// <summary>Property quantity: The number of dedicated hosts that you want to create.</summary>
        /// <remarks>
        /// Valid values: 1 to 100.Default value: 1.
        /// </remarks>
        [JsiiProperty(name: "quantity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Quantity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to DedicatedHost.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosDedicatedHost.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosDedicatedHost.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The ID of the zone in which to create the dedicated host.</summary>
        /// <remarks>
        /// This parameter is empty by default. If you do not specify a zone, the system
        /// selects a zone.
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

        /// <summary>Properties for defining a `DedicatedHost`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHostProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.DedicatedHostProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IDedicatedHostProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dedicatedHostType: The dedicated host type.</summary>
            /// <remarks>
            /// You can call the <a href="">DescribeDedicatedHostTypes</a>
            /// operation to query the most recent list of dedicated host types.
            /// </remarks>
            [JsiiProperty(name: "dedicatedHostType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DedicatedHostType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property actionOnMaintenance: The policy for migrating the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Migrate: The instances are migrated to another physical machine and then
            /// restarted.
            /// If cloud disks are attached to the dedicated host, the default value is Migrate.</description>
            /// <description>Stop: The instances are stopped. If the dedicated host cannot be repaired, the
            /// instances are migrated to another physical machine and then restarted.
            /// If local disks are attached to the dedicated host, the default value is Stop.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "actionOnMaintenance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ActionOnMaintenance
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment.</summary>
            /// <remarks>
            /// If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPlacement", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPlacement
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoReleaseTime: The time when to automatically release the dedicated host.</summary>
            /// <remarks>
            /// Specify the time in
            /// the <c>ISO 8601</c> standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in
            /// UTC.
            ///
            ///
            ///
            /// <list type="bullet">
            /// <description>It must be at least half an hour later than the current time.</description>
            /// <description>It must be at most three years later than the current time.</description>
            /// <description>If the value of seconds (ss) is not 00, it is automatically set to 00.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoReleaseTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoReleaseTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Whether renew the fee automatically?</summary>
            /// <remarks>
            /// When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriod: The time period of auto renew.</summary>
            /// <remarks>
            /// When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid.</summary>
            /// <remarks>
            /// If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpuOverCommitRatio: The CPU overcommit ratio.</summary>
            /// <remarks>
            /// You can configure CPU overcommit ratios only for the
            /// following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.
            /// The CPU overcommit ratio affects the number of available vCPUs on a dedicated
            /// host. You can use the following formula to calculate the number of available
            /// vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU
            /// cores * 2 * CPU overcommit ratio. For example, the number of physical CPU cores
            /// on each g6s dedicated host is 52. If you set the CPU overcommit ratio of a g6s
            /// dedicated host to 4, the number of available vCPUs on the dedicated host is 416.
            /// For scenarios that have minimal requirements on CPU stability or where CPU load
            /// is not heavy, such as development and test environments, you can increase the
            /// number of available vCPUs on a dedicated host by increasing the CPU overcommit
            /// ratio. This way, you can deploy more ECS instances of the same specifications on
            /// the dedicated host and reduce the unit deployment cost.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpuOverCommitRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CpuOverCommitRatio
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostClusterId: The ID of the dedicated host cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostName: The name of the dedicated host.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length
            /// and can contain letters and digits. The name can contain colons (:), underscores
            /// (_), periods (.), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the dedicated host.</summary>
            /// <remarks>
            /// The description must be 2 to 256
            /// characters in length and cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minQuantity: The minimum number of dedicated hosts to create.</summary>
            /// <remarks>
            /// Valid values: 1 to 100.
            ///
            ///     If the number of available dedicated hosts is less than the minimum number of
            ///     dedicated hosts to create, the dedicated hosts fail to be created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minQuantity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinQuantity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host.</summary>
            /// <remarks>
            /// Unit: seconds. Valid values: 15 to 310.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkAttributesSlbUdpTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkAttributesSlbUdpTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host.</summary>
            /// <remarks>
            /// Unit: seconds. Valid values: 15 to 310.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkAttributesUdpTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkAttributesUdpTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: Prepaid time period.</summary>
            /// <remarks>
            /// Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year.</summary>
            /// <remarks>
            /// Default value is Month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property quantity: The number of dedicated hosts that you want to create.</summary>
            /// <remarks>
            /// Valid values: 1 to 100.Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "quantity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Quantity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to DedicatedHost.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosDedicatedHost.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosDedicatedHost.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosDedicatedHost.ITagsProperty[]?>();
            }

            /// <summary>Property zoneId: The ID of the zone in which to create the dedicated host.</summary>
            /// <remarks>
            /// This parameter is empty by default. If you do not specify a zone, the system
            /// selects a zone.
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
