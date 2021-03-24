using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfacePermission`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosNetworkInterfacePermissionProps")]
    public class RosNetworkInterfacePermissionProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosNetworkInterfacePermissionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountId: the account id
        /// </remarks>
        [JsiiProperty(name: "accountId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccountId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Network interface id
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NetworkInterfaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: permission: the permission
        /// </remarks>
        [JsiiProperty(name: "permission", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Permission
        {
            get;
            set;
        }
    }
}
