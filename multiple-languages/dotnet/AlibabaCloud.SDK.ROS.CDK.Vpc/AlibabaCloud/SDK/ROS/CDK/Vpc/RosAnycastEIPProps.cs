using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::AnycastEIP`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosAnycastEIPProps")]
    public class RosAnycastEIPProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosAnycastEIPProps
    {
        /// <remarks>
        /// <strong>Property</strong>: description: Anycast EIP instance description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceChargeType: Anycast EIP instance charge type
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Anycast EIP instance access public network billing method
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InternetChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Anycast EIP instance name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceLocation: Anycast EIP instance access area
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceLocation", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ServiceLocation
        {
            get;
            set;
        }
    }
}
