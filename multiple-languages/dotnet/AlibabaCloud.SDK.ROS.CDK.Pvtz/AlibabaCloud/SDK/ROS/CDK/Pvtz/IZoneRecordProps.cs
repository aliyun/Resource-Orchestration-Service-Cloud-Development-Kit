using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `ZoneRecord`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IZoneRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneRecordProps")]
    public interface IZoneRecordProps
    {
        /// <summary>Property rr: The host record.</summary>
        /// <remarks>
        /// A host record is the prefix of a domain name. Common host
        /// records include www, @, * (for wildcard DNS), and mail (for mailboxes).
        /// For example, to resolve @.example.com, set the host record to "@", not an empty
        /// string.
        /// </remarks>
        [JsiiProperty(name: "rr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Rr
        {
            get;
        }

        /// <summary>Property status: The status of the DNS record.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>ENABLE: Enables DNS resolution.</description>
        /// <description>DISABLE: Pauses DNS resolution.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Status
        {
            get;
        }

        /// <summary>Property type: The type of the DNS record.</summary>
        /// <remarks>
        /// The following types are supported:
        ///
        /// <list type="bullet">
        /// <description>A: Maps a domain name to an IPv4 address in dotted decimal notation.</description>
        /// <description>AAAA: Maps a domain name to an IPv6 address.</description>
        /// <description>CNAME: Maps a domain name to another domain name.</description>
        /// <description>TXT: A text record. The text can be up to 255 characters in length. TXT records
        /// are often used for Sender Policy Framework (SPF) records to prevent spam.</description>
        /// <description>MX: Maps a domain name to the domain name of a mail server.</description>
        /// <description>PTR: Maps an IP address to a domain name.</description>
        /// <description>SRV: Specifies the server for a specific service. The format is: Priority
        /// Weight Port Target. Separate each value with a space.</description>
        /// </list>
        ///
        ///     Before adding a PTR record, configure a reverse lookup zone. For more
        ///     information, see <a href="">Reverse DNS lookups and PTR records</a>.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property value: Record value.</summary>
        [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Value
        {
            get;
        }

        /// <summary>Property zoneId: Zone Id.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property priority: The priority of the MX record.</summary>
        /// <remarks>
        /// A smaller value indicates a higher priority. Valid
        /// values: [1, 99].
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ttl: The time to live (TTL).</summary>
        /// <remarks>
        /// The unit is seconds (s). Valid values are 5, 30, 60, 3600
        /// (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.
        /// </remarks>
        [JsiiProperty(name: "ttl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ttl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ZoneRecord`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IZoneRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneRecordProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IZoneRecordProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property rr: The host record.</summary>
            /// <remarks>
            /// A host record is the prefix of a domain name. Common host
            /// records include www, @, * (for wildcard DNS), and mail (for mailboxes).
            /// For example, to resolve @.example.com, set the host record to "@", not an empty
            /// string.
            /// </remarks>
            [JsiiProperty(name: "rr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Rr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property status: The status of the DNS record.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>ENABLE: Enables DNS resolution.</description>
            /// <description>DISABLE: Pauses DNS resolution.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: The type of the DNS record.</summary>
            /// <remarks>
            /// The following types are supported:
            ///
            /// <list type="bullet">
            /// <description>A: Maps a domain name to an IPv4 address in dotted decimal notation.</description>
            /// <description>AAAA: Maps a domain name to an IPv6 address.</description>
            /// <description>CNAME: Maps a domain name to another domain name.</description>
            /// <description>TXT: A text record. The text can be up to 255 characters in length. TXT records
            /// are often used for Sender Policy Framework (SPF) records to prevent spam.</description>
            /// <description>MX: Maps a domain name to the domain name of a mail server.</description>
            /// <description>PTR: Maps an IP address to a domain name.</description>
            /// <description>SRV: Specifies the server for a specific service. The format is: Priority
            /// Weight Port Target. Separate each value with a space.</description>
            /// </list>
            ///
            ///     Before adding a PTR record, configure a reverse lookup zone. For more
            ///     information, see <a href="">Reverse DNS lookups and PTR records</a>.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property value: Record value.</summary>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Value
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: Zone Id.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property priority: The priority of the MX record.</summary>
            /// <remarks>
            /// A smaller value indicates a higher priority. Valid
            /// values: [1, 99].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ttl: The time to live (TTL).</summary>
            /// <remarks>
            /// The unit is seconds (s). Valid values are 5, 30, 60, 3600
            /// (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ttl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ttl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
