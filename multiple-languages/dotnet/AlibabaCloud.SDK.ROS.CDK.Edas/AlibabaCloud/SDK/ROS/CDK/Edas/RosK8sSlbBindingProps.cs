using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::K8sSlbBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sSlbBindingProps")]
    public class RosK8sSlbBindingProps : AlibabaCloud.SDK.ROS.CDK.Edas.IRosK8sSlbBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: The ID of the application.
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AppId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterId: The ID of the cluster.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: servicePortInfos: The information about the ports.
        /// </remarks>
        [JsiiProperty(name: "servicePortInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-edas.RosK8sSlbBinding.ServicePortInfosProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object ServicePortInfos
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the SLB instance. Valid values: internet and intranet.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Type
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the load balancer instance. If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LoadBalancerId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduler: The scheduling algorithm. Valid values:
        /// wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
        /// rr: Requests are distributed to backend servers in sequence.
        /// Default value: rr
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Scheduler
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: specification: The specification of the load balancer instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "specification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Specification
        {
            get;
            set;
        }
    }
}
