using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::SerialNumberBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.SerialNumberBindingProps")]
    public class SerialNumberBindingProps : AlibabaCloud.SDK.ROS.CDK.Sag.ISerialNumberBindingProps
    {
        /// <summary>Property serialNumber: The serial number (SN) of the SAG device.</summary>
        [JsiiProperty(name: "serialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SerialNumber
        {
            get;
            set;
        }

        /// <summary>Property smartAgId: The ID of the SAG instance.</summary>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SmartAgId
        {
            get;
            set;
        }
    }
}
