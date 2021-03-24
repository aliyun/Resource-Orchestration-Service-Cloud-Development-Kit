using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PVTZ::ZoneRecord`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-pvtz.ZoneRecordProps")]
    public class ZoneRecordProps : AlibabaCloud.SDK.ROS.CDK.Pvtz.IZoneRecordProps
    {
        /// <summary>Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.</summary>
        [JsiiProperty(name: "rr", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Rr
        {
            get;
            set;
        }

        /// <summary>Property status: Allowed values: [ENABLE, DISABLE].</summary>
        [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Status
        {
            get;
            set;
        }

        /// <summary>Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Type
        {
            get;
            set;
        }

        /// <summary>Property value: Record value.</summary>
        [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Value
        {
            get;
            set;
        }

        /// <summary>Property zoneId: Zone Id.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ZoneId
        {
            get;
            set;
        }

        /// <summary>Property priority: MX record priority, value range [1,99].</summary>
        /// <remarks>
        /// Default to 10.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Priority
        {
            get;
            set;
        }

        /// <summary>Property ttl: Survival time, default is 60.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ttl", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Ttl
        {
            get;
            set;
        }
    }
}
