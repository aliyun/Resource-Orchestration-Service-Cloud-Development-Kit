using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::VSwitch`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.VSwitchProps")]
    public class VSwitchProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IVSwitchProps
    {
        /// <summary>Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.</summary>
        [JsiiProperty(name: "cidrBlock", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CidrBlock
        {
            get;
            set;
        }

        /// <summary>Property vpcId: VPC id to create vswtich.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VpcId
        {
            get;
            set;
        }

        /// <summary>Property zoneId: The availability zone in which the VSwitch will be created.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ZoneId
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the VSwitch, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment.</summary>
        /// <remarks>
        /// Value: 0-255 (decimal).
        /// The IPv6 segment mask of the switch defaults to 64 bits.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Ipv6CidrBlock
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to vswitch.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchName
        {
            get;
            set;
        }
    }
}
