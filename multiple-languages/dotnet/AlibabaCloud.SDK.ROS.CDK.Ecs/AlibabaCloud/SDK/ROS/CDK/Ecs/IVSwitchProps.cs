using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::VSwitch`.</summary>
    [JsiiInterface(nativeType: typeof(IVSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.VSwitchProps")]
    public interface IVSwitchProps
    {
        /// <summary>Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.</summary>
        [JsiiProperty(name: "cidrBlock", typeJson: "{\"primitive\":\"string\"}")]
        string CidrBlock
        {
            get;
        }

        /// <summary>Property vpcId: VPC id to create vswtich.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
        string VpcId
        {
            get;
        }

        /// <summary>Property zoneId: The availability zone in which the VSwitch will be created.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneId
        {
            get;
        }

        /// <summary>Property description: Description of the VSwitch, [2, 256] characters.</summary>
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

        /// <summary>Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment.</summary>
        /// <remarks>
        /// Value: 0-255 (decimal).
        /// The IPv6 segment mask of the switch defaults to 64 bits.
        /// </remarks>
        [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Ipv6CidrBlock
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to vswitch.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiProperty(name: "vSwitchName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::VSwitch`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.VSwitchProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IVSwitchProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.</summary>
            [JsiiProperty(name: "cidrBlock", typeJson: "{\"primitive\":\"string\"}")]
            public string CidrBlock
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vpcId: VPC id to create vswtich.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}")]
            public string VpcId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property zoneId: The availability zone in which the VSwitch will be created.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Description of the VSwitch, [2, 256] characters.</summary>
            /// <remarks>
            /// Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment.</summary>
            /// <remarks>
            /// Value: 0-255 (decimal).
            /// The IPv6 segment mask of the switch defaults to 64 bits.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Ipv6CidrBlock
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property tags: Tags to attach to vswitch.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
