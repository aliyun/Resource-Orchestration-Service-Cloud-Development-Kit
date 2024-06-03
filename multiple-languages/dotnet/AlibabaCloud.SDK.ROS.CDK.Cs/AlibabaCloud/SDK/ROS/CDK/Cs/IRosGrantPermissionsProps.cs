using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `RosGrantPermissions`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosGrantPermissionsProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosGrantPermissionsProps")]
    public interface IRosGrantPermissionsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: permissions: The permissions that you want to grant to the RAM user.
        /// </remarks>
        [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosGrantPermissions.PermissionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Permissions
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: userId: The ID of the RAM user.
        /// </remarks>
        [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserId
        {
            get;
        }

        /// <summary>Properties for defining a `RosGrantPermissions`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-grantpermissions
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosGrantPermissionsProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosGrantPermissionsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IRosGrantPermissionsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: permissions: The permissions that you want to grant to the RAM user.
            /// </remarks>
            [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cs.RosGrantPermissions.PermissionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Permissions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: userId: The ID of the RAM user.
            /// </remarks>
            [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
