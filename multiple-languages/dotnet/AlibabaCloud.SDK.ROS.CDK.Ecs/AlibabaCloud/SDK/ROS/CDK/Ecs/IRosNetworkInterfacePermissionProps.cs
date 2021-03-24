using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfacePermission`.</summary>
    [JsiiInterface(nativeType: typeof(IRosNetworkInterfacePermissionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosNetworkInterfacePermissionProps")]
    public interface IRosNetworkInterfacePermissionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountId: the account id
        /// </remarks>
        [JsiiProperty(name: "accountId", typeJson: "{\"primitive\":\"string\"}")]
        string AccountId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Network interface id
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string NetworkInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: permission: the permission
        /// </remarks>
        [JsiiProperty(name: "permission", typeJson: "{\"primitive\":\"string\"}")]
        string Permission
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfacePermission`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosNetworkInterfacePermissionProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosNetworkInterfacePermissionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosNetworkInterfacePermissionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accountId: the account id
            /// </remarks>
            [JsiiProperty(name: "accountId", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceId: Network interface id
            /// </remarks>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string NetworkInterfaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: permission: the permission
            /// </remarks>
            [JsiiProperty(name: "permission", typeJson: "{\"primitive\":\"string\"}")]
            public string Permission
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
