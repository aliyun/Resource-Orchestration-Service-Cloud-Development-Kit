using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ElasticityAssurance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IElasticityAssuranceProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ElasticityAssuranceProps")]
    public interface IElasticityAssuranceProps
    {
        /// <summary>Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.</summary>
        /// <remarks>
        /// Valid values: 1 to 1000.
        /// </remarks>
        [JsiiProperty(name: "instanceAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceAmount
        {
            get;
        }

        /// <summary>Property instanceTypes: Instance type.</summary>
        /// <remarks>
        /// Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
        /// </remarks>
        [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object InstanceTypes
        {
            get;
        }

        /// <summary>Property zoneId: The zone ID of the elasticity assurance.</summary>
        /// <remarks>
        /// Currently, an elasticity assurance can be used to reserve resources within a single zone.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property autoRenew: Specifies whether to enable auto-renewal for the elasticity assurance.</summary>
        /// <remarks>
        /// Valid
        /// values:
        ///
        /// <list type="bullet">
        /// <description>true</description>
        /// <description>false
        /// Default value: false.</description>
        /// </list>
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

        /// <summary>Property autoRenewPeriod: The auto-renewal period.</summary>
        /// <remarks>
        /// Unit: month. Valid values: 1, 2, 3, 6, 12, 24, and 36.
        ///
        /// <list type="bullet">
        /// <description>Default value when <c>PeriodUnit</c> is set to Month: 1.</description>
        /// <description>Default value when <c>PeriodUnit</c> is set to Year: 12.</description>
        /// </list>
        ///
        ///     If you set <c>AutoRenew</c> to <c>true</c>, you must specify this parameter.
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

        /// <summary>Property description: The description of the elasticity assurance.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        /// This parameter is empty by default.
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

        /// <summary>Property instanceCpuCoreCount: &gt; This parameter is no longer used.</summary>
        [JsiiProperty(name: "instanceCpuCoreCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceCpuCoreCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The validity period of the elasticity assurance.</summary>
        /// <remarks>
        /// The unit of the validity period
        /// is determined by the value of <c>PeriodUnit</c>. Specifies whether to check the image
        /// used by the instance supports hot migration. Valid values:
        ///
        /// <list type="bullet">
        /// <description>When the value of <c>PeriodUnit</c> is <c>Month</c>, the valid values are 1, 2, 3, 4, 5,
        /// 6, 7, 8, and 9.</description>
        /// <description>When the value of <c>PeriodUnit</c> is <c>Year</c>, the valid values are 1, 2, 3, 4, and</description>
        /// </list>
        ///
        /// <list type="number">
        /// <description></description>
        /// </list>
        ///
        /// <list type="bullet">
        /// <description>When the value of <c>PeriodUnit</c> is <c>Day</c>, the valid values are 1 to 365.
        /// Default value: 1</description>
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

        /// <summary>Property periodUnit: The unit of the validity period of the elasticity assurance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Month</description>
        /// <description>Year</description>
        /// <description>Day
        /// **
        /// Note If you set <c>PeriodUnit</c> to <c>Day</c>, you must specify RecurrenceRules to create
        /// a time-segmented elasticity assurance.
        /// Default value: Year.</description>
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

        /// <summary>Property privatePoolOptions:.</summary>
        [JsiiProperty(name: "privatePoolOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosElasticityAssurance.PrivatePoolOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivatePoolOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property recurrenceRules: The assurance schedules based on which the capacity reservation takes effect.</summary>
        /// <remarks>
        ///     Time-segmented elasticity assurances are available only in specific regions and
        ///     to specific users. To use time-segmented elasticity assurances, submit a ticket.
        /// </remarks>
        [JsiiProperty(name: "recurrenceRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosElasticityAssurance.RecurrenceRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RecurrenceRules
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property startTime: The time when the elasticity assurance takes effect.</summary>
        /// <remarks>
        /// The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
        /// </remarks>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags:.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosElasticityAssurance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosElasticityAssurance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ElasticityAssurance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IElasticityAssuranceProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ElasticityAssuranceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IElasticityAssuranceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.</summary>
            /// <remarks>
            /// Valid values: 1 to 1000.
            /// </remarks>
            [JsiiProperty(name: "instanceAmount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceAmount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceTypes: Instance type.</summary>
            /// <remarks>
            /// Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
            /// </remarks>
            [JsiiProperty(name: "instanceTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object InstanceTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: The zone ID of the elasticity assurance.</summary>
            /// <remarks>
            /// Currently, an elasticity assurance can be used to reserve resources within a single zone.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoRenew: Specifies whether to enable auto-renewal for the elasticity assurance.</summary>
            /// <remarks>
            /// Valid
            /// values:
            ///
            /// <list type="bullet">
            /// <description>true</description>
            /// <description>false
            /// Default value: false.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenewPeriod: The auto-renewal period.</summary>
            /// <remarks>
            /// Unit: month. Valid values: 1, 2, 3, 6, 12, 24, and 36.
            ///
            /// <list type="bullet">
            /// <description>Default value when <c>PeriodUnit</c> is set to Month: 1.</description>
            /// <description>Default value when <c>PeriodUnit</c> is set to Year: 12.</description>
            /// </list>
            ///
            ///     If you set <c>AutoRenew</c> to <c>true</c>, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the elasticity assurance.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length and cannot start with http:// or https://.
            /// This parameter is empty by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceCpuCoreCount: &gt; This parameter is no longer used.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceCpuCoreCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceCpuCoreCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The validity period of the elasticity assurance.</summary>
            /// <remarks>
            /// The unit of the validity period
            /// is determined by the value of <c>PeriodUnit</c>. Specifies whether to check the image
            /// used by the instance supports hot migration. Valid values:
            ///
            /// <list type="bullet">
            /// <description>When the value of <c>PeriodUnit</c> is <c>Month</c>, the valid values are 1, 2, 3, 4, 5,
            /// 6, 7, 8, and 9.</description>
            /// <description>When the value of <c>PeriodUnit</c> is <c>Year</c>, the valid values are 1, 2, 3, 4, and</description>
            /// </list>
            ///
            /// <list type="number">
            /// <description></description>
            /// </list>
            ///
            /// <list type="bullet">
            /// <description>When the value of <c>PeriodUnit</c> is <c>Day</c>, the valid values are 1 to 365.
            /// Default value: 1</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The unit of the validity period of the elasticity assurance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Month</description>
            /// <description>Year</description>
            /// <description>Day
            /// **
            /// Note If you set <c>PeriodUnit</c> to <c>Day</c>, you must specify RecurrenceRules to create
            /// a time-segmented elasticity assurance.
            /// Default value: Year.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privatePoolOptions:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privatePoolOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosElasticityAssurance.PrivatePoolOptionsProperty\"}]}}", isOptional: true)]
            public object? PrivatePoolOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property recurrenceRules: The assurance schedules based on which the capacity reservation takes effect.</summary>
            /// <remarks>
            ///     Time-segmented elasticity assurances are available only in specific regions and
            ///     to specific users. To use time-segmented elasticity assurances, submit a ticket.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recurrenceRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosElasticityAssurance.RecurrenceRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RecurrenceRules
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property startTime: The time when the elasticity assurance takes effect.</summary>
            /// <remarks>
            /// The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosElasticityAssurance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosElasticityAssurance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosElasticityAssurance.ITagsProperty[]?>();
            }
        }
    }
}
