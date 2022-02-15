using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::SerialNumberBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosSerialNumberBindingProps")]
    public class RosSerialNumberBindingProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosSerialNumberBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serialNumber: The serial number (SN) of the SAG device.
        /// </remarks>
        [JsiiProperty(name: "serialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SerialNumber
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: The ID of the SAG instance.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SmartAgId
        {
            get;
            set;
        }
    }
}
