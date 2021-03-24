using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `ALIYUN::SAE::SlbBinding`.</summary>
    [JsiiInterface(nativeType: typeof(ISlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.SlbBindingProps")]
    public interface ISlbBindingProps
    {
        /// <summary>Property appId: Successful application deployment target ID.</summary>
        [JsiiProperty(name: "appId", typeJson: "{\"primitive\":\"string\"}")]
        string AppId
        {
            get;
        }

        /// <summary>Property internet: Binding public SLB.</summary>
        /// <remarks>
        /// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
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

        /// <summary>Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples.</summary>
        [JsiiProperty(name: "internetSlbId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InternetSlbId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property intranet: Bind private SLB.</summary>
        /// <remarks>
        /// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
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

        /// <summary>Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(ISlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.SlbBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.ISlbBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appId: Successful application deployment target ID.</summary>
            [JsiiProperty(name: "appId", typeJson: "{\"primitive\":\"string\"}")]
            public string AppId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property internet: Binding public SLB.</summary>
            /// <remarks>
            /// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internet", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Internet
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "internetSlbId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetSlbId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property intranet: Bind private SLB.</summary>
            /// <remarks>
            /// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "intranet", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Intranet
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "intranetSlbId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? IntranetSlbId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
