using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::K8sCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosK8sClusterProps")]
    public class RosK8sClusterProps : AlibabaCloud.SDK.ROS.CDK.Edas.IRosK8sClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: csClusterId: The ID of the CS cluster.
        /// </remarks>
        [JsiiProperty(name: "csClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CsClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAsm: Whether enable ASM.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableAsm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EnableAsm
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NamespaceId
        {
            get;
            set;
        }
    }
}
