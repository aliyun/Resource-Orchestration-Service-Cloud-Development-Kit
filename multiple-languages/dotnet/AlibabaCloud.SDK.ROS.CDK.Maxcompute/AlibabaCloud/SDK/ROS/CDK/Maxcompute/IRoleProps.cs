using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Maxcompute
{
    /// <summary>Properties for defining a `Role`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RoleProps")]
    public interface IRoleProps
    {
        /// <summary>Property projectName: The name of the MaxCompute project.</summary>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Property roleName: The name of the project role.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RoleName
        {
            get;
        }

        /// <summary>Property type: Role types, MaxCompute provides administrator roles and resource roles.</summary>
        /// <remarks>
        /// Valid values:
        /// Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
        /// Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property acl: The access-control list (ACL), This parameter is not required if a policy is used.</summary>
        [JsiiProperty(name: "acl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosRole.AclProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Acl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policy: The document of the policy.</summary>
        /// <remarks>
        /// This parameter is not required if an access-control list (ACL) is used.
        /// </remarks>
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Role`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-maxcompute.RoleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Maxcompute.IRoleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property projectName: The name of the MaxCompute project.</summary>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property roleName: The name of the project role.</summary>
            [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: Role types, MaxCompute provides administrator roles and resource roles.</summary>
            /// <remarks>
            /// Valid values:
            /// Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
            /// Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property acl: The access-control list (ACL), This parameter is not required if a policy is used.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "acl", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-maxcompute.RosRole.AclProperty\"}]}}", isOptional: true)]
            public object? Acl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policy: The document of the policy.</summary>
            /// <remarks>
            /// This parameter is not required if an access-control list (ACL) is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Policy
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
