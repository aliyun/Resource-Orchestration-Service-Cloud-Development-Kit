using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfacePermission`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.NetworkInterfacePermissionProps")]
    public class NetworkInterfacePermissionProps : AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfacePermissionProps
    {
        /// <summary>Property accountId: the account id.</summary>
        [JsiiProperty(name: "accountId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccountId
        {
            get;
            set;
        }

        /// <summary>Property networkInterfaceId: Network interface id.</summary>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NetworkInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property permission: the permission.</summary>
        [JsiiProperty(name: "permission", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Permission
        {
            get;
            set;
        }
    }
}
