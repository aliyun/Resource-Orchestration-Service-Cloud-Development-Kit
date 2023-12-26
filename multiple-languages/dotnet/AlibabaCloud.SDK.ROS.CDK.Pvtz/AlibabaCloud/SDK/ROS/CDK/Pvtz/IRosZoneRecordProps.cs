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
        /// <strong>Property</strong>: status: Allowed values: [ENABLE, DISABLE]
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Status
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
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
        /// <strong>Property</strong>: priority: MX record priority, value range [1,99]. Default to 10.
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
        /// <strong>Property</strong>: ttl: Survival time, default is 60
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
            /// <strong>Property</strong>: status: Allowed values: [ENABLE, DISABLE]
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Status
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
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
            /// <strong>Property</strong>: priority: MX record priority, value range [1,99]. Default to 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ttl: Survival time, default is 60
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
