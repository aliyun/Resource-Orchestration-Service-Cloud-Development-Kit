using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `ALIYUN::PVTZ::ZoneRecord`.</summary>
    [JsiiInterface(nativeType: typeof(IRosZoneRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosZoneRecordProps")]
    public interface IRosZoneRecordProps
    {
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
        /// <strong>Property</strong>: status: Allowed values: [ENABLE, DISABLE]
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}")]
        string Status
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
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
        /// <strong>Property</strong>: zoneId: Zone Id
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: MX record priority, value range [1,99]. Default to 10.
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
        /// <strong>Property</strong>: ttl: Survival time, default is 60
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

        /// <summary>Properties for defining a `ALIYUN::PVTZ::ZoneRecord`.</summary>
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
            [JsiiProperty(name: "rr", typeJson: "{\"primitive\":\"string\"}")]
            public string Rr
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: status: Allowed values: [ENABLE, DISABLE]
            /// </remarks>
            [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}")]
            public string Status
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
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
            /// <strong>Property</strong>: zoneId: Zone Id
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: MX record priority, value range [1,99]. Default to 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Priority
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ttl: Survival time, default is 60
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
