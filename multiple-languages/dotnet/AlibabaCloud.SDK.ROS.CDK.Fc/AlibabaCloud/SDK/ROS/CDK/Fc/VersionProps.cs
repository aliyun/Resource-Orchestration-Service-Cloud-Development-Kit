using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Version`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.VersionProps")]
    public class VersionProps : AlibabaCloud.SDK.ROS.CDK.Fc.IVersionProps
    {
        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServiceName
        {
            get;
            set;
        }

        /// <summary>Property description: Version description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }
    }
}
