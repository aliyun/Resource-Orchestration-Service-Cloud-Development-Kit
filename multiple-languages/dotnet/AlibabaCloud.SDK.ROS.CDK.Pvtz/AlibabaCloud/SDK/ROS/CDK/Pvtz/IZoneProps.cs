using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `ALIYUN::PVTZ::Zone`.</summary>
    [JsiiInterface(nativeType: typeof(IZoneProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneProps")]
    public interface IZoneProps
    {
        /// <summary>Property zoneName: Zone name.</summary>
        [JsiiProperty(name: "zoneName", typeJson: "{\"primitive\":\"string\"}")]
        string ZoneName
        {
            get;
        }

        /// <summary>Property proxyPattern: ZONE: completely hijack the entire zone.</summary>
        /// <remarks>
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

        /// <summary>Property remark: 50 characters at most.</summary>
        /// <remarks>
        /// It can only contain numbers, Chinese, English and special characters: "_-,.，。".
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
        [JsiiTypeProxy(nativeType: typeof(IZoneProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IZoneProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property zoneName: Zone name.</summary>
            [JsiiProperty(name: "zoneName", typeJson: "{\"primitive\":\"string\"}")]
            public string ZoneName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property proxyPattern: ZONE: completely hijack the entire zone.</summary>
            /// <remarks>
            /// RECORD: Incomplete hijacking, recursive resolution agent.
            /// Default to ZONE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyPattern", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProxyPattern
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property remark: 50 characters at most.</summary>
            /// <remarks>
            /// It can only contain numbers, Chinese, English and special characters: "_-,.，。".
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
