using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::NatGateway`.</summary>
    [JsiiInterface(nativeType: typeof(INatGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NatGatewayProps")]
    public interface INatGatewayProps
    {
        /// <summary>Property vpcId: The VPC id to create NAT gateway.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
        string VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: The VSwitch id to create NAT gateway.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        string VSwitchId
        {
            get;
        }

        /// <summary>Property autoPay: Specifies whether to enable automatic payment.</summary>
        /// <remarks>
        /// Default is false.
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

        /// <summary>Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.</summary>
        /// <remarks>
        /// Default value is false.
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
        /// <remarks>
        /// Default to False.
        /// </remarks>
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the NAT gateway, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property duration: The subscription duration.</summary>
        /// <remarks>
        /// While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
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

        /// <summary>Property instanceChargeType: The billing method.</summary>
        /// <remarks>
        /// The default value is PostPaid (which means pay-as-you-go).
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: The billing method for the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:
        /// PayBySpec: billed on a pay-by-specification basis.
        /// PayByLcu: billed on a pay-by-LCU basis.
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiProperty(name: "natGatewayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NatGatewayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property natType: The type of the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:
        /// 
        /// <list type="bullet">
        /// <description>Enhanced: enhanced NAT gateway.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "natType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NatType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: Price cycle of the resource.</summary>
        /// <remarks>
        /// This property has no default value.
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

        /// <summary>Property spec: NAT gateway specification.</summary>
        /// <remarks>
        /// Now support 'Small|Middle|Large|XLarge.1'
        /// </remarks>
        [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Spec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to natgateway.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Properties for defining a `ALIYUN::VPC::NatGateway`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INatGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.NatGatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.INatGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The VPC id to create NAT gateway.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
            public string VpcId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vSwitchId: The VSwitch id to create NAT gateway.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            public string VSwitchId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property autoPay: Specifies whether to enable automatic payment.</summary>
            /// <remarks>
            /// Default is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.</summary>
            /// <remarks>
            /// Default value is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
            /// <remarks>
            /// Default to False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Description of the NAT gateway, [2, 256] characters.</summary>
            /// <remarks>
            /// Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property duration: The subscription duration.</summary>
            /// <remarks>
            /// While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Duration
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property instanceChargeType: The billing method.</summary>
            /// <remarks>
            /// The default value is PostPaid (which means pay-as-you-go).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property internetChargeType: The billing method for the NAT gateway.</summary>
            /// <remarks>
            /// Valid values:
            /// PayBySpec: billed on a pay-by-specification basis.
            /// PayByLcu: billed on a pay-by-LCU basis.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "natGatewayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NatGatewayName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property natType: The type of the NAT gateway.</summary>
            /// <remarks>
            /// Valid values:
            /// 
            /// <list type="bullet">
            /// <description>Enhanced: enhanced NAT gateway.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "natType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NatType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property pricingCycle: Price cycle of the resource.</summary>
            /// <remarks>
            /// This property has no default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PricingCycle
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property spec: NAT gateway specification.</summary>
            /// <remarks>
            /// Now support 'Small|Middle|Large|XLarge.1'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Spec
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to natgateway.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}
