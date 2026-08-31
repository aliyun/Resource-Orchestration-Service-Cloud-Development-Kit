using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `RosZoneRecord`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosZoneRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosZoneRecordProps")]
    public interface IRosZoneRecordProps
    {
        /// <remarks>
        /// <strong></strong>: ", not an empty
        /// string.
        ///
        /// <strong>Property</strong>: rr: The host record. A host record is the prefix of a domain name. Common host
        /// records include www,
        /// </remarks>
        [JsiiProperty(name: "rr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Rr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: status: The status of the DNS record. Valid values:
        /// - ENABLE: Enables DNS resolution.
        /// - DISABLE: Pauses DNS resolution.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Status
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the DNS record. The following types are supported:
        /// - A: Maps a domain name to an IPv4 address in dotted decimal notation.
        /// - AAAA: Maps a domain name to an IPv6 address.
        /// - CNAME: Maps a domain name to another domain name.
        /// - TXT: A text record. The text can be up to 255 characters in length. TXT records
        /// are often used for Sender Policy Framework (SPF) records to prevent spam.
        /// - MX: Maps a domain name to the domain name of a mail server.
        /// - PTR: Maps an IP address to a domain name.
        /// - SRV: Specifies the server for a specific service. The format is: Priority
        /// Weight Port Target. Separate each value with a space.
        /// > Before adding a PTR record, configure a reverse lookup zone. For more
        /// information, see [Reverse DNS lookups and PTR records]().
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: value: Record value
        /// </remarks>
        [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Value
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Zone Id
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: The priority of the MX record. A smaller value indicates a higher priority. Valid
        /// values: \[1, 99].
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

        /// <remarks>
        /// <strong>Property</strong>: ttl: The time to live (TTL). The unit is seconds (s). Valid values are 5, 30, 60, 3600
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

        /// <summary>Properties for defining a `RosZoneRecord`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosZoneRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosZoneRecordProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IRosZoneRecordProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong></strong>: ", not an empty
            /// string.
            ///
            /// <strong>Property</strong>: rr: The host record. A host record is the prefix of a domain name. Common host
            /// records include www,
            /// </remarks>
            [JsiiProperty(name: "rr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Rr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: status: The status of the DNS record. Valid values:
            /// - ENABLE: Enables DNS resolution.
            /// - DISABLE: Pauses DNS resolution.
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the DNS record. The following types are supported:
            /// - A: Maps a domain name to an IPv4 address in dotted decimal notation.
            /// - AAAA: Maps a domain name to an IPv6 address.
            /// - CNAME: Maps a domain name to another domain name.
            /// - TXT: A text record. The text can be up to 255 characters in length. TXT records
            /// are often used for Sender Policy Framework (SPF) records to prevent spam.
            /// - MX: Maps a domain name to the domain name of a mail server.
            /// - PTR: Maps an IP address to a domain name.
            /// - SRV: Specifies the server for a specific service. The format is: Priority
            /// Weight Port Target. Separate each value with a space.
            /// > Before adding a PTR record, configure a reverse lookup zone. For more
            /// information, see [Reverse DNS lookups and PTR records]().
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: Record value
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Value
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: Zone Id
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: The priority of the MX record. A smaller value indicates a higher priority. Valid
            /// values: \[1, 99].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ttl: The time to live (TTL). The unit is seconds (s). Valid values are 5, 30, 60, 3600
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
