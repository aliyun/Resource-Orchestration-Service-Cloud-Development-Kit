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
        [JsiiProperty(name: "accountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Network interface id
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NetworkInterfaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: permission: the permission
        /// </remarks>
        [JsiiProperty(name: "permission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Permission
        {
            get;
            set;
        }
    }
}
