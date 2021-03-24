using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::ClusterMember`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosClusterMemberProps")]
    public class RosClusterMemberProps : AlibabaCloud.SDK.ROS.CDK.Edas.IRosClusterMemberProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster ID to import ECS instance
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceIds: ECS instance ID list to import.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
        public string[] InstanceIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: password: Password ECS hosts need to import (ECS settings can continue to use purchased)
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Password
        {
            get;
            set;
        }
    }
}
