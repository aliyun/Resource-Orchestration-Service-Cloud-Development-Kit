using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `ALIYUN::PVTZ::ZoneRecord`.</summary>
    [JsiiInterface(nativeType: typeof(IZoneRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneRecordProps")]
    public interface IZoneRecordProps
    {
        /// <summary>Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.</summary>
        [JsiiProperty(name: "rr", typeJson: "{\"primitive\":\"string\"}")]
        string Rr
        {
            get;
        }

        /// <summary>Property status: Allowed values: [ENABLE, DISABLE].</summary>
        [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}")]
        string Status
        {
            get;
        }

        /// <summary>Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.</summary>
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

        /// <summary>Property zoneId: Zone Id.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneId
        {
            get;
        }

        /// <summary>Property priority: MX record priority, value range [1,99].</summary>
        /// <remarks>
        /// Default to 10.
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

        /// <summary>Property ttl: Survival time, default is 60.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IZoneRecordProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneRecordProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IZoneRecordProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.</summary>
            [JsiiProperty(name: "rr", typeJson: "{\"primitive\":\"string\"}")]
            public string Rr
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property status: Allowed values: [ENABLE, DISABLE].</summary>
            [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}")]
            public string Status
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.</summary>
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

            /// <summary>Property zoneId: Zone Id.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property priority: MX record priority, value range [1,99].</summary>
            /// <remarks>
            /// Default to 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Priority
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property ttl: Survival time, default is 60.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ttl", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Ttl
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
