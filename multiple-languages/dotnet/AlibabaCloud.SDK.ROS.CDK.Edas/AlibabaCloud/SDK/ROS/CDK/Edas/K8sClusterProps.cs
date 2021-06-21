using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::K8sCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.K8sClusterProps")]
    public class K8sClusterProps : AlibabaCloud.SDK.ROS.CDK.Edas.IK8sClusterProps
    {
        /// <summary>Property csClusterId: The ID of the CS cluster.</summary>
        [JsiiProperty(name: "csClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CsClusterId
        {
            get;
            set;
        }

        /// <summary>Property enableAsm: Whether enable ASM.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "enableAsm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableAsm
        {
            get;
            set;
        }

        /// <summary>Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NamespaceId
        {
            get;
            set;
        }
    }
}
