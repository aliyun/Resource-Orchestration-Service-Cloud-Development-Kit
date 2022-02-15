using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::GrantInstanceToCen`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosGrantInstanceToCenProps")]
    public class RosGrantInstanceToCenProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosGrantInstanceToCenProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance to be authorized.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CenId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenOwnerId: The UID of the account to which the target CEN instance belongs.
        /// </remarks>
        [JsiiProperty(name: "cenOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CenOwnerId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the network instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the network instance. Valid values:
        /// VPC: Virtual Private Cloud (VPC).
        /// VBR: Virtual Border Router (VBR).
        /// CCN: Cloud Connect Network (CCN).
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceType
        {
            get;
            set;
        }
    }
}
