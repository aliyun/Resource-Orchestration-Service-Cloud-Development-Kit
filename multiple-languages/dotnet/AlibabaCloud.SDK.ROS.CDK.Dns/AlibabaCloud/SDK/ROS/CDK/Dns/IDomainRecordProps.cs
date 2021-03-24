using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `ALIYUN::DNS::DomainRecord`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.DomainRecordProps")]
    public interface IDomainRecordProps
    {
        /// <summary>Property domainName: Domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        string DomainName
        {
            get;
        }

        /// <summary>Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.</summary>
        [JsiiProperty(name: "rr", typeJson: "{\"primitive\":\"string\"}")]
        string Rr
        {
            get;
        }

        /// <summary>Property type: Parse record type, see parsing record type format.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

        /// <summary>Property value: Record value.</summary>
        [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}")]
        string Value
        {
            get;
        }

        /// <summary>Property line: Parse the line, the default is default.</summary>
        /// <remarks>
        /// See parsing line enumeration
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

        /// <summary>Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.</summary>
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ttl: The resolution time is valid.</summary>
        /// <remarks>
        /// The default is 600 seconds (10 minutes). See the TTL definition.
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
        [JsiiTypeProxy(nativeType: typeof(IDomainRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.DomainRecordProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IDomainRecordProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: Domain name.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
            public string DomainName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.</summary>
            [JsiiProperty(name: "rr", typeJson: "{\"primitive\":\"string\"}")]
            public string Rr
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property type: Parse record type, see parsing record type format.</summary>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property value: Record value.</summary>
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}")]
            public string Value
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property line: Parse the line, the default is default.</summary>
            /// <remarks>
            /// See parsing line enumeration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "line", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Line
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Priority
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property ttl: The resolution time is valid.</summary>
            /// <remarks>
            /// The default is 600 seconds (10 minutes). See the TTL definition.
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
