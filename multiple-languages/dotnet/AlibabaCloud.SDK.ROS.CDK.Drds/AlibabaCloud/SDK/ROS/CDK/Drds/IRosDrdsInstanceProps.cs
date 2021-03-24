using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds
{
    /// <summary>Properties for defining a `ALIYUN::DRDS::DrdsInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDrdsInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.RosDrdsInstanceProps")]
    public interface IRosDrdsInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: description: Description of the DRDS instance, 2-128 characters
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}")]
        string Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
        /// </remarks>
        [JsiiProperty(name: "instanceSeries", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceSeries
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: For the type of payment, see "Payment Type Parameter Table"
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}")]
        string PayType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: quantity: Purchase quantity
        /// </remarks>
        [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}")]
        double Quantity
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
        /// </remarks>
        [JsiiProperty(name: "specification", typeJson: "{\"primitive\":\"string\"}")]
        string Specification
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
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

        /// <remarks>
        /// <strong>Property</strong>: isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
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
        /// <strong>Property</strong>: mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
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

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
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

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosDrdsInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.RosDrdsInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.IRosDrdsInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the DRDS instance, 2-128 characters
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}")]
            public string Description
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
            /// </remarks>
            [JsiiProperty(name: "instanceSeries", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceSeries
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: For the type of payment, see "Payment Type Parameter Table"
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}")]
            public string PayType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: quantity: Purchase quantity
            /// </remarks>
            [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}")]
            public double Quantity
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
            /// </remarks>
            [JsiiProperty(name: "specification", typeJson: "{\"primitive\":\"string\"}")]
            public string Specification
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Duration
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isAutoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsAutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mySqlVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MySqlVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PricingCycle
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vswitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VswitchId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
