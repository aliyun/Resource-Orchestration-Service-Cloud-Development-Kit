using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram.Datasource
{
    /// <summary>Properties for defining a `RosRoles`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRolesProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.RosRolesProps")]
    public interface IRosRolesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: roleName: Filter the results by a specific role name. Supports using * and ?  to fuzzy match.
        /// </remarks>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RoleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosRoles`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRolesProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.RosRolesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IRosRolesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: roleName: Filter the results by a specific role name. Supports using * and ?  to fuzzy match.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RoleName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
