using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::GrantInstanceToCen`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.GrantInstanceToCenProps")]
    public class GrantInstanceToCenProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IGrantInstanceToCenProps
    {
        /// <summary>Property cenId: The ID of the CEN instance to be authorized.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CenId
        {
            get;
            set;
        }

        /// <summary>Property cenOwnerId: The UID of the account to which the target CEN instance belongs.</summary>
        [JsiiProperty(name: "cenOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CenOwnerId
        {
            get;
            set;
        }

        /// <summary>Property instanceId: The ID of the network instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceId
        {
            get;
            set;
        }

        /// <summary>Property instanceType: The type of the network instance.</summary>
        /// <remarks>
        /// Valid values:
        /// VPC: Virtual Private Cloud (VPC).
        /// VBR: Virtual Border Router (VBR).
        /// CCN: Cloud Connect Network (CCN).
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceType
        {
            get;
            set;
        }
    }
}
