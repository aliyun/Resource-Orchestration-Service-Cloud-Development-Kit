using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `ALIYUN::SAE::SlbBinding`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosSlbBindingProps")]
    public interface IRosSlbBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: Successful application deployment target ID
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"primitive\":\"string\"}")]
        string AppId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        /// </remarks>
        [JsiiProperty(name: "internet", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Internet
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        /// </remarks>
        [JsiiProperty(name: "internetSlbId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InternetSlbId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        /// </remarks>
        [JsiiProperty(name: "intranet", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Intranet
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        /// </remarks>
        [JsiiProperty(name: "intranetSlbId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? IntranetSlbId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SAE::SlbBinding`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosSlbBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.IRosSlbBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appId: Successful application deployment target ID
            /// </remarks>
            [JsiiProperty(name: "appId", typeJson: "{\"primitive\":\"string\"}")]
            public string AppId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internet", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Internet
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetSlbId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetSlbId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "intranet", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Intranet
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "intranetSlbId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? IntranetSlbId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
