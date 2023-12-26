using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosNetworkInterfacePermission`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNetworkInterfacePermissionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosNetworkInterfacePermissionProps")]
    public interface IRosNetworkInterfacePermissionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountId: the account id
        /// </remarks>
        [JsiiProperty(name: "accountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Network interface id
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: permission: the permission
        /// </remarks>
        [JsiiProperty(name: "permission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Permission
        {
            get;
        }

        /// <summary>Properties for defining a `RosNetworkInterfacePermission`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNetworkInterfacePermissionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosNetworkInterfacePermissionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosNetworkInterfacePermissionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accountId: the account id
            /// </remarks>
            [JsiiProperty(name: "accountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceId: Network interface id
            /// </remarks>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: permission: the permission
            /// </remarks>
            [JsiiProperty(name: "permission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Permission
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
