using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `DomainRecord`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDomainRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.DomainRecordProps")]
    public interface IDomainRecordProps
    {
        /// <summary>Property domainName: Domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.</summary>
        [JsiiProperty(name: "rr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Rr
        {
            get;
        }

        /// <summary>Property type: Parse record type, see parsing record type format.</summary>
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

        /// <summary>Property line: Parse the line, the default is default.</summary>
        /// <remarks>
        /// See parsing line enumeration
        /// </remarks>
        [JsiiProperty(name: "line", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Line
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.</summary>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Priority
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
        [JsiiProperty(name: "ttl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ttl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DomainRecord`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDomainRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.DomainRecordProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IDomainRecordProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: Domain name.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.</summary>
            [JsiiProperty(name: "rr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Rr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: Parse record type, see parsing record type format.</summary>
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

            /// <summary>Property line: Parse the line, the default is default.</summary>
            /// <remarks>
            /// See parsing line enumeration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "line", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Line
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ttl: The resolution time is valid.</summary>
            /// <remarks>
            /// The default is 600 seconds (10 minutes). See the TTL definition.
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
