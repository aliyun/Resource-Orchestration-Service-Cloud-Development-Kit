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
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string FunctionName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: qualifier: Service's alias.
        /// Example : "LATEST"
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Qualifier
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServiceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: target: Number of provision
        /// </remarks>
        [JsiiProperty(name: "target", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Target
        {
            get;
            set;
        }
    }
}
