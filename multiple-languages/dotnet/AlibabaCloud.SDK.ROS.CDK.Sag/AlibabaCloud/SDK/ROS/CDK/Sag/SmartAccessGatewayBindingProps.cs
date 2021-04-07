using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.SmartAccessGatewayBindingProps")]
    public class SmartAccessGatewayBindingProps : AlibabaCloud.SDK.ROS.CDK.Sag.ISmartAccessGatewayBindingProps
    {
        /// <summary>Property ccnId: The ID of the CCN instance to bind.</summary>
        [JsiiProperty(name: "ccnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CcnId
        {
            get;
            set;
        }

        /// <summary>Property smartAgId: The ID of the Smart Access Gateway instance.</summary>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SmartAgId
        {
            get;
            set;
        }
    }
}
