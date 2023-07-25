using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::RAM::Roles`.</summary>
    [JsiiInterface(nativeType: typeof(IRolesProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.RolesProps")]
    public interface IRolesProps
    {
        /// <summary>Property roleName: Filter the results by a specific role name.</summary>
        /// <remarks>
        /// Supports using * and ?  to fuzzy match.
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

        /// <summary>Properties for defining a `DATASOURCE::RAM::Roles`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRolesProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.RolesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IRolesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property roleName: Filter the results by a specific role name.</summary>
            /// <remarks>
            /// Supports using * and ?  to fuzzy match.
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
