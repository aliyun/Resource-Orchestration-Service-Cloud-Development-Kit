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
        [JsiiProperty(name: "accountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountId
        {
            get;
            set;
        }

        /// <summary>Property networkInterfaceId: Network interface id.</summary>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NetworkInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property permission: the permission.</summary>
        [JsiiProperty(name: "permission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Permission
        {
            get;
            set;
        }
    }
}
