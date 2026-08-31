using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds
{
    /// <summary>Properties for defining a `DrdsInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDrdsInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.DrdsInstanceProps")]
    public interface IDrdsInstanceProps
    {
        /// <summary>Property description: Specifies the description of the instance.</summary>
        /// <remarks>
        /// The description must meet the
        /// following requirements:
        ///
        /// <list type="bullet">
        /// <description>The description cannot contain the prefix http:// or https://.</description>
        /// <description>The description must start with a letter or a Chinese character, and can
        /// contain uppercase and lowercase letters, Chinese characters, digits, underscores
        /// (_), and hyphens (-).</description>
        /// <description>The description must be 2 to 256 characters in length.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property instanceSeries: Specifies the instance type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>drds.sn2.4c16g: The instance is of the Starter Edition.</description>
        /// <description>drds.sn2.8c32g: The instance is of the Standard Edition</description>
        /// <description>drds.sn2.16c64g: The instance is of the Enterprise Edition.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "instanceSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceSeries
        {
            get;
        }

        /// <summary>Property payType: Specifies the billing method of the instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>drdsPre: The instance uses the subscription billing method.</description>
        /// <description>drdsPost: The instance uses the pay-as-you-go billing method.</description>
        /// <description>drdsRo: By default, the pay-as-you-go billing method is used when you create
        /// read-only instances.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property specification: Specifies the specification code of the instance.</summary>
        /// <remarks>
        /// The value consists of the
        /// instance type and the specified instance specification. For example, you can set
        /// the value to drds.sn2.4c16g.8c32g.
        /// </remarks>
        [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Specification
        {
            get;
        }

        /// <summary>Property type: Specifies the type of the instance.</summary>
        /// <remarks>
        /// Set the value to PRIVATE. The value PRIVATE
        /// specifies that the instance is a dedicated instance.
        ///
        ///     You can also set the value to 1 to specify that the instance is a dedicated
        ///     instance.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property duration: The number of cycles ordered.</summary>
        /// <remarks>
        /// When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
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

        /// <summary>Property isAutoRenew: Specifies whether to enable automatic renewal.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: If the PricingCycle parameter is set to month, the subscription is
        /// automatically renewed for one month. If the PricingCycle parameter is set to
        /// year, the subscription is automatically renewed for one year.</description>
        /// <description>false: The auto-renewal feature is disabled for the instance.</description>
        /// </list>
        ///
        ///     This parameter only takes effect when the PayType parameter is set to drdsPre.
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

        /// <summary>Property mySqlVersion: Specifies the MySQL version that is supported by the instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>5: The instance is fully compatible with MySQL 5.x. This value is the default
        /// value.</description>
        /// <description>8: The instance is fully compatible with MySQL 8.0.</description>
        /// </list>
        ///
        ///     This parameter only takes effect when you create a primary instance. By
        ///     default, the MySQL version of the read-only instance is the same as that of the
        ///     primary instance.
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

        /// <summary>Property pricingCycle: Specifies the unit of the subscription duration of the subscription instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>year: The unit of the subscription duration is year.</description>
        /// <description>month: The unit of the subscription duration is month.</description>
        /// </list>
        ///
        ///     This parameter is required if you set the PayType parameter to drdsPre.
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

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.</summary>
        [JsiiProperty(name: "vswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VswitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DrdsInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDrdsInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.DrdsInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.IDrdsInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property description: Specifies the description of the instance.</summary>
            /// <remarks>
            /// The description must meet the
            /// following requirements:
            ///
            /// <list type="bullet">
            /// <description>The description cannot contain the prefix http:// or https://.</description>
            /// <description>The description must start with a letter or a Chinese character, and can
            /// contain uppercase and lowercase letters, Chinese characters, digits, underscores
            /// (_), and hyphens (-).</description>
            /// <description>The description must be 2 to 256 characters in length.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceSeries: Specifies the instance type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>drds.sn2.4c16g: The instance is of the Starter Edition.</description>
            /// <description>drds.sn2.8c32g: The instance is of the Standard Edition</description>
            /// <description>drds.sn2.16c64g: The instance is of the Enterprise Edition.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "instanceSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceSeries
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property payType: Specifies the billing method of the instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>drdsPre: The instance uses the subscription billing method.</description>
            /// <description>drdsPost: The instance uses the pay-as-you-go billing method.</description>
            /// <description>drdsRo: By default, the pay-as-you-go billing method is used when you create
            /// read-only instances.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property specification: Specifies the specification code of the instance.</summary>
            /// <remarks>
            /// The value consists of the
            /// instance type and the specified instance specification. For example, you can set
            /// the value to drds.sn2.4c16g.8c32g.
            /// </remarks>
            [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Specification
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: Specifies the type of the instance.</summary>
            /// <remarks>
            /// Set the value to PRIVATE. The value PRIVATE
            /// specifies that the instance is a dedicated instance.
            ///
            ///     You can also set the value to 1 to specify that the instance is a dedicated
            ///     instance.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property duration: The number of cycles ordered.</summary>
            /// <remarks>
            /// When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Duration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isAutoRenew: Specifies whether to enable automatic renewal.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: If the PricingCycle parameter is set to month, the subscription is
            /// automatically renewed for one month. If the PricingCycle parameter is set to
            /// year, the subscription is automatically renewed for one year.</description>
            /// <description>false: The auto-renewal feature is disabled for the instance.</description>
            /// </list>
            ///
            ///     This parameter only takes effect when the PayType parameter is set to drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsAutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mySqlVersion: Specifies the MySQL version that is supported by the instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>5: The instance is fully compatible with MySQL 5.x. This value is the default
            /// value.</description>
            /// <description>8: The instance is fully compatible with MySQL 8.0.</description>
            /// </list>
            ///
            ///     This parameter only takes effect when you create a primary instance. By
            ///     default, the MySQL version of the read-only instance is the same as that of the
            ///     primary instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mySqlVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MySqlVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: Specifies the unit of the subscription duration of the subscription instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>year: The unit of the subscription duration is year.</description>
            /// <description>month: The unit of the subscription duration is month.</description>
            /// </list>
            ///
            ///     This parameter is required if you set the PayType parameter to drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
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

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-drds.RosDrdsInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Drds.RosDrdsInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Drds.RosDrdsInstance.ITagsProperty[]?>();
            }

            /// <summary>Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VswitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
