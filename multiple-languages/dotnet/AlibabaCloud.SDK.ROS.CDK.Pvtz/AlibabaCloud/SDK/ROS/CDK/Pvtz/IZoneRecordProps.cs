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
        /// <summary>Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.</summary>
        [JsiiProperty(name: "rr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Rr
        {
            get;
        }

        /// <summary>Property status: Allowed values: [ENABLE, DISABLE].</summary>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Status
        {
            get;
        }

        /// <summary>Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.</summary>
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

        /// <summary>Property priority: MX record priority, value range [1,99].</summary>
        /// <remarks>
        /// Default to 10.
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

        /// <summary>Property ttl: Survival time, default is 60.</summary>
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

            /// <summary>Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.</summary>
            [JsiiProperty(name: "rr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Rr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property status: Allowed values: [ENABLE, DISABLE].</summary>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.</summary>
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

            /// <summary>Property priority: MX record priority, value range [1,99].</summary>
            /// <remarks>
            /// Default to 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ttl: Survival time, default is 60.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ttl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ttl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
