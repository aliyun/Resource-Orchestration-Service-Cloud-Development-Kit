using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PVTZ::Zone`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-pvtz.ZoneProps")]
    public class ZoneProps : AlibabaCloud.SDK.ROS.CDK.Pvtz.IZoneProps
    {
        /// <summary>Property zoneName: Zone name.</summary>
        [JsiiProperty(name: "zoneName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ZoneName
        {
            get;
            set;
        }

        /// <summary>Property proxyPattern: ZONE: completely hijack the entire zone.</summary>
        /// <remarks>
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

        /// <summary>Property remark: 50 characters at most.</summary>
        /// <remarks>
        /// It can only contain numbers, Chinese, English and special characters: "_-,.，。".
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
