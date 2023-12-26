using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `RosDomainRecord`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDomainRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosDomainRecordProps")]
    public interface IRosDomainRecordProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: Domain name
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <remarks>
        /// <strong></strong>: " instead of empty
        ///
        /// <strong>Property</strong>: rr: Host record, if you want to resolve
        /// </remarks>
        [JsiiProperty(name: "rr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Rr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Parse record type, see parsing record type format
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
        /// <strong>Property</strong>: line: Parse the line, the default is default. See parsing line enumeration
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

        /// <remarks>
        /// <strong>Property</strong>: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
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
        /// <strong>Property</strong>: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
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

        /// <summary>Properties for defining a `RosDomainRecord`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosDomainRecordProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRosDomainRecordProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: Domain name
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong></strong>: " instead of empty
            ///
            /// <strong>Property</strong>: rr: Host record, if you want to resolve
            /// </remarks>
            [JsiiProperty(name: "rr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Rr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Parse record type, see parsing record type format
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
            /// <strong>Property</strong>: line: Parse the line, the default is default. See parsing line enumeration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "line", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Line
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ttl: The resolution time is valid. The default is 600 seconds (10 minutes). See the TTL definition.
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
