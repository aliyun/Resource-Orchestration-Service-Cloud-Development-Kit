using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAE::SlbBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.RosSlbBindingProps")]
    public class RosSlbBindingProps : AlibabaCloud.SDK.ROS.CDK.Sae.IRosSlbBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: Successful application deployment target ID
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AppId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internet: Binding public SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internet", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Internet
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetSlbId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InternetSlbId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: intranet: Bind private SLB. For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranet", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Intranet
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "intranetSlbId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? IntranetSlbId
        {
            get;
            set;
        }
    }
}
