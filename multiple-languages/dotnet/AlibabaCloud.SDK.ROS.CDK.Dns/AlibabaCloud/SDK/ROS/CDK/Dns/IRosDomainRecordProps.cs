using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `ALIYUN::DNS::DomainRecord`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDomainRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosDomainRecordProps")]
    public interface IRosDomainRecordProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: Domain name
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        string DomainName
        {
            get;
        }

        /// <remarks>
        /// <strong></strong>: " instead of empty
        /// 
        /// <strong>Property</strong>: rr: Host record, if you want to resolve
        /// </remarks>
        [JsiiProperty(name: "rr", typeJson: "{\"primitive\":\"string\"}")]
        string Rr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Parse record type, see parsing record type format
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: value: Record value
        /// </remarks>
        [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}")]
        string Value
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: line: Parse the line, the default is default. See parsing line enumeration
        /// </remarks>
        [JsiiProperty(name: "line", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Line
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Priority
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
        /// </remarks>
        [JsiiProperty(name: "ttl", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Ttl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DNS::DomainRecord`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosDomainRecordProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRosDomainRecordProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: Domain name
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
            public string DomainName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong></strong>: " instead of empty
            /// 
            /// <strong>Property</strong>: rr: Host record, if you want to resolve
            /// </remarks>
            [JsiiProperty(name: "rr", typeJson: "{\"primitive\":\"string\"}")]
            public string Rr
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Parse record type, see parsing record type format
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: Record value
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}")]
            public string Value
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: line: Parse the line, the default is default. See parsing line enumeration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "line", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Line
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Priority
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ttl", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Ttl
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
