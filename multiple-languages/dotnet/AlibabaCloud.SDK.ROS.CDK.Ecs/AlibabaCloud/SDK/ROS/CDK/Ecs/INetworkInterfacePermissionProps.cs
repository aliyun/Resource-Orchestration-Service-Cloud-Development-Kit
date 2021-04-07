using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfacePermission`.</summary>
    [JsiiInterface(nativeType: typeof(INetworkInterfacePermissionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.NetworkInterfacePermissionProps")]
    public interface INetworkInterfacePermissionProps
    {
        /// <summary>Property accountId: the account id.</summary>
        [JsiiProperty(name: "accountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountId
        {
            get;
        }

        /// <summary>Property networkInterfaceId: Network interface id.</summary>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkInterfaceId
        {
            get;
        }

        /// <summary>Property permission: the permission.</summary>
        [JsiiProperty(name: "permission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Permission
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfacePermission`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INetworkInterfacePermissionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.NetworkInterfacePermissionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfacePermissionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountId: the account id.</summary>
            [JsiiProperty(name: "accountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property networkInterfaceId: Network interface id.</summary>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property permission: the permission.</summary>
            [JsiiProperty(name: "permission", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Permission
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
