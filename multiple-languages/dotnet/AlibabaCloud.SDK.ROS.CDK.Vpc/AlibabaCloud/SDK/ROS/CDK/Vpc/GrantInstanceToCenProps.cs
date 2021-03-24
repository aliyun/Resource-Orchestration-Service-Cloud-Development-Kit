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
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenId
        {
            get;
            set;
        }

        /// <summary>Property cenOwnerId: The UID of the account to which the target CEN instance belongs.</summary>
        [JsiiProperty(name: "cenOwnerId", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double CenOwnerId
        {
            get;
            set;
        }

        /// <summary>Property instanceId: The ID of the network instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
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
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceType
        {
            get;
            set;
        }
    }
}
