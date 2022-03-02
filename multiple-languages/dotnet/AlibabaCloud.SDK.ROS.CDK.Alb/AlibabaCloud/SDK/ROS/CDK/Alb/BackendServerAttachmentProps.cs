using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ALB::BackendServerAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.BackendServerAttachmentProps")]
    public class BackendServerAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Alb.IBackendServerAttachmentProps
    {
        /// <summary>Property serverGroupId: The ID of the server group.</summary>
        [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ServerGroupId
        {
            get;
            set;
        }

        /// <summary>Property servers: The backend servers that you want to add to the server group.</summary>
        /// <remarks>
        /// You can specify up to
        /// 40 servers in each call.
        /// </remarks>
        [JsiiProperty(name: "servers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosBackendServerAttachment.ServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object Servers
        {
            get;
            set;
        }
    }
}
