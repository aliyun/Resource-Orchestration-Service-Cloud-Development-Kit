using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `GrantPermissions`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGrantPermissionsProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.GrantPermissionsProps")]
    public interface IGrantPermissionsProps
    {
        /// <summary>Property permissions: The permissions that you want to grant to the RAM user.</summary>
        [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosGrantPermissions.PermissionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Permissions
        {
            get;
        }

        /// <summary>Property userId: The ID of the RAM user.</summary>
        [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserId
        {
            get;
        }

        /// <summary>Properties for defining a `GrantPermissions`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGrantPermissionsProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.GrantPermissionsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IGrantPermissionsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property permissions: The permissions that you want to grant to the RAM user.</summary>
            [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosGrantPermissions.PermissionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Permissions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userId: The ID of the RAM user.</summary>
            [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
