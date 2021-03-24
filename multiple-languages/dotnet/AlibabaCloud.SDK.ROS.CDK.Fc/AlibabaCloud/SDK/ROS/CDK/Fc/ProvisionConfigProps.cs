using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::ProvisionConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.ProvisionConfigProps")]
    public class ProvisionConfigProps : AlibabaCloud.SDK.ROS.CDK.Fc.IProvisionConfigProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string FunctionName
        {
            get;
            set;
        }

        /// <summary>Property qualifier: Service's alias.</summary>
        /// <remarks>
        /// Example : "LATEST"
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Qualifier
        {
            get;
            set;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServiceName
        {
            get;
            set;
        }

        /// <summary>Property target: Number of provision.</summary>
        [JsiiProperty(name: "target", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Target
        {
            get;
            set;
        }
    }
}
