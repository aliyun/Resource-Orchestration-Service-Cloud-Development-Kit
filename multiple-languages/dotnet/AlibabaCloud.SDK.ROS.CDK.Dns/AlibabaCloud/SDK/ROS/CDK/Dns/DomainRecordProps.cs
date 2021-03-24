using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DNS::DomainRecord`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dns.DomainRecordProps")]
    public class DomainRecordProps : AlibabaCloud.SDK.ROS.CDK.Dns.IDomainRecordProps
    {
        /// <summary>Property domainName: Domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DomainName
        {
            get;
            set;
        }

        /// <summary>Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.</summary>
        [JsiiProperty(name: "rr", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Rr
        {
            get;
            set;
        }

        /// <summary>Property type: Parse record type, see parsing record type format.</summary>
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

        /// <summary>Property line: Parse the line, the default is default.</summary>
        /// <remarks>
        /// See parsing line enumeration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "line", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Line
        {
            get;
            set;
        }

        /// <summary>Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Priority
        {
            get;
            set;
        }

        /// <summary>Property ttl: The resolution time is valid.</summary>
        /// <remarks>
        /// The default is 600 seconds (10 minutes). See the TTL definition.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ttl", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Ttl
        {
            get;
            set;
        }
    }
}
