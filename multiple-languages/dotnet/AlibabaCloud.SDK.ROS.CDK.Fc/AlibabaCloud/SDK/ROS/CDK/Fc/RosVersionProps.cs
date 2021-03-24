using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Version`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosVersionProps")]
    public class RosVersionProps : AlibabaCloud.SDK.ROS.CDK.Fc.IRosVersionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServiceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Version description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }
    }
}
