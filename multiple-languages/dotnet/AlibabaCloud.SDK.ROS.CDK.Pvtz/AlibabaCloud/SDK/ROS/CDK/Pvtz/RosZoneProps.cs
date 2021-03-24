using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PVTZ::Zone`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-pvtz.RosZoneProps")]
    public class RosZoneProps : AlibabaCloud.SDK.ROS.CDK.Pvtz.IRosZoneProps
    {
        /// <remarks>
        /// <strong>Property</strong>: zoneName: Zone name
        /// </remarks>
        [JsiiProperty(name: "zoneName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ZoneName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyPattern: ZONE: completely hijack the entire zone.
        /// RECORD: Incomplete hijacking, recursive resolution agent.
        /// Default to ZONE.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyPattern", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProxyPattern
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Remark
        {
            get;
            set;
        }
    }
}
