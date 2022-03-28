using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::QosAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosQosAssociationProps")]
    public class RosQosAssociationProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosQosAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: qosId: The instance ID of the QoS policy.
        /// </remarks>
        [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QosId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SmartAgId
        {
            get;
            set;
        }
    }
}
