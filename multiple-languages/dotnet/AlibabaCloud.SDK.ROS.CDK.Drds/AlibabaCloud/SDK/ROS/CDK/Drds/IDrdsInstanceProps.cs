using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds
{
    /// <summary>Properties for defining a `ALIYUN::DRDS::DrdsInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IDrdsInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.DrdsInstanceProps")]
    public interface IDrdsInstanceProps
    {
        /// <summary>Property description: Description of the DRDS instance, 2-128 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}")]
        string Description
        {
            get;
        }

        /// <summary>Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.</summary>
        [JsiiProperty(name: "instanceSeries", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceSeries
        {
            get;
        }

        /// <summary>Property payType: For the type of payment, see "Payment Type Parameter Table".</summary>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}")]
        string PayType
        {
            get;
        }

        /// <summary>Property quantity: Purchase quantity.</summary>
        [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}")]
        double Quantity
        {
            get;
        }

        /// <summary>Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.</summary>
        [JsiiProperty(name: "specification", typeJson: "{\"primitive\":\"string\"}")]
        string Specification
        {
            get;
        }

        /// <summary>Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

        /// <summary>Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneId
        {
            get;
        }

        /// <summary>Property duration: The number of cycles ordered.</summary>
        /// <remarks>
        /// When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Duration
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
        [JsiiProperty(name: "mySqlVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MySqlVersion
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
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PricingCycle
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.</summary>
        [JsiiProperty(name: "vswitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VswitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DRDS::DrdsInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDrdsInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.DrdsInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.IDrdsInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property description: Description of the DRDS instance, 2-128 characters.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}")]
            public string Description
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.</summary>
            [JsiiProperty(name: "instanceSeries", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceSeries
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property payType: For the type of payment, see "Payment Type Parameter Table".</summary>
            [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}")]
            public string PayType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property quantity: Purchase quantity.</summary>
            [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}")]
            public double Quantity
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.</summary>
            [JsiiProperty(name: "specification", typeJson: "{\"primitive\":\"string\"}")]
            public string Specification
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.</summary>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property duration: The number of cycles ordered.</summary>
            /// <remarks>
            /// When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Duration
            {
                get => GetInstanceProperty<double?>();
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
            [JsiiProperty(name: "mySqlVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MySqlVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property pricingCycle: The unit of the order period, year: year, month: month.</summary>
            /// <remarks>
            /// The parameter takes effect when the payment type is drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PricingCycle
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vswitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VswitchId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
