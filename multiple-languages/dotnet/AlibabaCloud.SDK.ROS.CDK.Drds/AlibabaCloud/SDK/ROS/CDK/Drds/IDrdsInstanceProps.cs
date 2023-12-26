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
        /// <summary>Property description: Description of the DRDS instance, 2-128 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.</summary>
        [JsiiProperty(name: "instanceSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceSeries
        {
            get;
        }

        /// <summary>Property payType: For the type of payment, see "Payment Type Parameter Table".</summary>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.</summary>
        [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Specification
        {
            get;
        }

        /// <summary>Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.</summary>
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

        /// <summary>Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year.</summary>
        /// <remarks>
        /// The parameter takes effect when the payment type is drdsPre.
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

        /// <summary>Property mySqlVersion: The MySQL protocol version supported by DRDS.</summary>
        /// <remarks>
        /// Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
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

        /// <summary>Property pricingCycle: The unit of the order period, year: year, month: month.</summary>
        /// <remarks>
        /// The parameter takes effect when the payment type is drdsPre.
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

            /// <summary>Property description: Description of the DRDS instance, 2-128 characters.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.</summary>
            [JsiiProperty(name: "instanceSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceSeries
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property payType: For the type of payment, see "Payment Type Parameter Table".</summary>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.</summary>
            [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Specification
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.</summary>
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

            /// <summary>Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year.</summary>
            /// <remarks>
            /// The parameter takes effect when the payment type is drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsAutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mySqlVersion: The MySQL protocol version supported by DRDS.</summary>
            /// <remarks>
            /// Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mySqlVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MySqlVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: The unit of the order period, year: year, month: month.</summary>
            /// <remarks>
            /// The parameter takes effect when the payment type is drdsPre.
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
