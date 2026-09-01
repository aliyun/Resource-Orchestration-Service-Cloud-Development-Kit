using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds
{
    /// <summary>Properties for defining a `RosDrdsInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDrdsInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.RosDrdsInstanceProps")]
    public interface IRosDrdsInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: description: Specifies the description of the instance. The description must meet the
        /// following requirements:
        /// *   The description cannot contain the prefix http:\/\/ or https:\/\/.
        /// *   The description must start with a letter or a Chinese character, and can
        /// contain uppercase and lowercase letters, Chinese characters, digits, underscores
        /// (_), and hyphens (-).
        /// *   The description must be 2 to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceSeries: Specifies the instance type of the instance. Valid values:
        /// *   drds.sn2.4c16g: The instance is of the Starter Edition.
        /// *   drds.sn2.8c32g: The instance is of the Standard Edition
        /// *   drds.sn2.16c64g: The instance is of the Enterprise Edition.
        /// </remarks>
        [JsiiProperty(name: "instanceSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceSeries
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: Specifies the billing method of the instance. Valid values:
        /// *   drdsPre: The instance uses the subscription billing method.
        /// *   drdsPost: The instance uses the pay-as-you-go billing method.
        /// *   drdsRo: By default, the pay-as-you-go billing method is used when you create
        /// read-only instances.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: specification: Specifies the specification code of the instance. The value consists of the
        /// instance type and the specified instance specification. For example, you can set
        /// the value to drds.sn2.4c16g.8c32g.
        /// </remarks>
        [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Specification
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Specifies the type of the instance. Set the value to PRIVATE. The value PRIVATE
        /// specifies that the instance is a dedicated instance.
        /// >  You can also set the value to 1 to specify that the instance is a dedicated
        /// instance.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Duration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: isAutoRenew: Specifies whether to enable automatic renewal. Valid values:
        /// *   true: If the PricingCycle parameter is set to month, the subscription is
        /// automatically renewed for one month. If the PricingCycle parameter is set to
        /// year, the subscription is automatically renewed for one year.
        /// *   false: The auto-renewal feature is disabled for the instance.
        /// >  This parameter only takes effect when the PayType parameter is set to drdsPre.
        /// </remarks>
        [JsiiProperty(name: "isAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsAutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mySqlVersion: Specifies the MySQL version that is supported by the instance. Valid values:
        /// *   5: The instance is fully compatible with MySQL 5.x. This value is the default
        /// value.
        /// *   8: The instance is fully compatible with MySQL 8.0.
        /// >  This parameter only takes effect when you create a primary instance. By
        /// default, the MySQL version of the read-only instance is the same as that of the
        /// primary instance.
        /// </remarks>
        [JsiiProperty(name: "mySqlVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MySqlVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: Specifies the unit of the subscription duration of the subscription instance.
        /// Valid values:
        /// *   year: The unit of the subscription duration is year.
        /// *   month: The unit of the subscription duration is month.
        /// >  This parameter is required if you set the PayType parameter to drdsPre.
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
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
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-drds.RosDrdsInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Drds.RosDrdsInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
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

        /// <remarks>
        /// <strong>Property</strong>: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
        /// </remarks>
        [JsiiProperty(name: "vswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VswitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDrdsInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDrdsInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.RosDrdsInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.IRosDrdsInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Specifies the description of the instance. The description must meet the
            /// following requirements:
            /// *   The description cannot contain the prefix http:\/\/ or https:\/\/.
            /// *   The description must start with a letter or a Chinese character, and can
            /// contain uppercase and lowercase letters, Chinese characters, digits, underscores
            /// (_), and hyphens (-).
            /// *   The description must be 2 to 256 characters in length.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceSeries: Specifies the instance type of the instance. Valid values:
            /// *   drds.sn2.4c16g: The instance is of the Starter Edition.
            /// *   drds.sn2.8c32g: The instance is of the Standard Edition
            /// *   drds.sn2.16c64g: The instance is of the Enterprise Edition.
            /// </remarks>
            [JsiiProperty(name: "instanceSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceSeries
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: Specifies the billing method of the instance. Valid values:
            /// *   drdsPre: The instance uses the subscription billing method.
            /// *   drdsPost: The instance uses the pay-as-you-go billing method.
            /// *   drdsRo: By default, the pay-as-you-go billing method is used when you create
            /// read-only instances.
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: specification: Specifies the specification code of the instance. The value consists of the
            /// instance type and the specified instance specification. For example, you can set
            /// the value to drds.sn2.4c16g.8c32g.
            /// </remarks>
            [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Specification
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Specifies the type of the instance. Set the value to PRIVATE. The value PRIVATE
            /// specifies that the instance is a dedicated instance.
            /// >  You can also set the value to 1 to specify that the instance is a dedicated
            /// instance.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isAutoRenew: Specifies whether to enable automatic renewal. Valid values:
            /// *   true: If the PricingCycle parameter is set to month, the subscription is
            /// automatically renewed for one month. If the PricingCycle parameter is set to
            /// year, the subscription is automatically renewed for one year.
            /// *   false: The auto-renewal feature is disabled for the instance.
            /// >  This parameter only takes effect when the PayType parameter is set to drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsAutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mySqlVersion: Specifies the MySQL version that is supported by the instance. Valid values:
            /// *   5: The instance is fully compatible with MySQL 5.x. This value is the default
            /// value.
            /// *   8: The instance is fully compatible with MySQL 8.0.
            /// >  This parameter only takes effect when you create a primary instance. By
            /// default, the MySQL version of the read-only instance is the same as that of the
            /// primary instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mySqlVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MySqlVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pricingCycle: Specifies the unit of the subscription duration of the subscription instance.
            /// Valid values:
            /// *   year: The unit of the subscription duration is year.
            /// *   month: The unit of the subscription duration is month.
            /// >  This parameter is required if you set the PayType parameter to drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-drds.RosDrdsInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Drds.RosDrdsInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Drds.RosDrdsInstance.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VswitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
