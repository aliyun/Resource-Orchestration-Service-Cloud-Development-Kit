using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `ALIYUN::PVTZ::Zone`.</summary>
    [JsiiInterface(nativeType: typeof(IRosZoneProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosZoneProps")]
    public interface IRosZoneProps
    {
        /// <remarks>
        /// <strong>Property</strong>: zoneName: Zone name
        /// </remarks>
        [JsiiProperty(name: "zoneName", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyPattern: ZONE: completely hijack the entire zone.
        /// RECORD: Incomplete hijacking, recursive resolution agent.
        /// Default to ZONE.
        /// </remarks>
        [JsiiProperty(name: "proxyPattern", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProxyPattern
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::PVTZ::Zone`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosZoneProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosZoneProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IRosZoneProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneName: Zone name
            /// </remarks>
            [JsiiProperty(name: "zoneName", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyPattern: ZONE: completely hijack the entire zone.
            /// RECORD: Incomplete hijacking, recursive resolution agent.
            /// Default to ZONE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyPattern", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProxyPattern
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Remark
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
