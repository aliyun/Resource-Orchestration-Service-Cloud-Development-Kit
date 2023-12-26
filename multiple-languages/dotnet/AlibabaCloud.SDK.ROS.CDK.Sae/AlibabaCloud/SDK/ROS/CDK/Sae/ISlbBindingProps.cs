using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `SlbBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.SlbBindingProps")]
    public interface ISlbBindingProps
    {
        /// <summary>Property appId: Successful application deployment target ID.</summary>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AppId
        {
            get;
        }

        /// <summary>Property internet: Binding public SLB.</summary>
        /// <remarks>
        /// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        /// </remarks>
        [JsiiProperty(name: "internet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Internet
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples.</summary>
        [JsiiProperty(name: "internetSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetSlbId
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
        [JsiiProperty(name: "intranet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Intranet
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples.</summary>
        [JsiiProperty(name: "intranetSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IntranetSlbId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SlbBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISlbBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.SlbBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.ISlbBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property appId: Successful application deployment target ID.</summary>
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property internet: Binding public SLB.</summary>
            /// <remarks>
            /// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Internet
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "internetSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetSlbId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property intranet: Bind private SLB.</summary>
            /// <remarks>
            /// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "intranet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Intranet
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "intranetSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IntranetSlbId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
