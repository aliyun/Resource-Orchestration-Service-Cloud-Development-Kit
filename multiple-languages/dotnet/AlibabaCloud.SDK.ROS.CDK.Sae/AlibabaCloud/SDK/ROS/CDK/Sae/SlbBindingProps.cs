using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAE::SlbBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.SlbBindingProps")]
    public class SlbBindingProps : AlibabaCloud.SDK.ROS.CDK.Sae.ISlbBindingProps
    {
        /// <summary>Property appId: Successful application deployment target ID.</summary>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AppId
        {
            get;
            set;
        }

        /// <summary>Property internet: Binding public SLB.</summary>
        /// <remarks>
        /// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Internet
        {
            get;
            set;
        }

        /// <summary>Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "internetSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetSlbId
        {
            get;
            set;
        }

        /// <summary>Property intranet: Bind private SLB.</summary>
        /// <remarks>
        /// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Intranet
        {
            get;
            set;
        }

        /// <summary>Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "intranetSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IntranetSlbId
        {
            get;
            set;
        }
    }
}
