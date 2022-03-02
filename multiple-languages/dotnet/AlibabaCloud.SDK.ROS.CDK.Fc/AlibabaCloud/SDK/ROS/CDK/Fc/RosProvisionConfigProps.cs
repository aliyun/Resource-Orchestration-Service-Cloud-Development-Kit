using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::ProvisionConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosProvisionConfigProps")]
    public class RosProvisionConfigProps : AlibabaCloud.SDK.ROS.CDK.Fc.IRosProvisionConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: functionName: Function name
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object FunctionName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: qualifier: Service's alias.
        /// Example : "LATEST"
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Qualifier
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ServiceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: target: Number of provision
        /// </remarks>
        [JsiiProperty(name: "target", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Target
        {
            get;
            set;
        }
    }
}
