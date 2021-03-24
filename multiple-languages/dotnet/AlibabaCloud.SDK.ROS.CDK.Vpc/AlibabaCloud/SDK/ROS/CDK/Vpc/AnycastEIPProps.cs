using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::AnycastEIP`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.AnycastEIPProps")]
    public class AnycastEIPProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IAnycastEIPProps
    {
        /// <summary>Property description: Anycast EIP instance description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property instanceChargeType: Anycast EIP instance charge type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceChargeType
        {
            get;
            set;
        }

        /// <summary>Property internetChargeType: Anycast EIP instance access public network billing method.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InternetChargeType
        {
            get;
            set;
        }

        /// <summary>Property name: Anycast EIP instance name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <summary>Property serviceLocation: Anycast EIP instance access area.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "serviceLocation", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ServiceLocation
        {
            get;
            set;
        }
    }
}
