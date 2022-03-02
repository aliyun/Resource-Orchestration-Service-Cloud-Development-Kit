using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::BackendServerAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.BackendServerAttachmentProps")]
    public class BackendServerAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Slb.IBackendServerAttachmentProps
    {
        /// <summary>Property loadBalancerId: The id of load balancer.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LoadBalancerId
        {
            get;
            set;
        }

        /// <summary>Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "backendServerList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? BackendServerList
        {
            get;
            set;
        }

        /// <summary>Property backendServers: The list of ECS instance, which will attached to load balancer.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerAttachment.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? BackendServers
        {
            get;
            set;
        }

        /// <summary>Property backendServerWeightList: The comma delimited weight list.</summary>
        /// <remarks>
        /// If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backendServerWeightList", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? BackendServerWeightList
        {
            get;
            set;
        }
    }
}
