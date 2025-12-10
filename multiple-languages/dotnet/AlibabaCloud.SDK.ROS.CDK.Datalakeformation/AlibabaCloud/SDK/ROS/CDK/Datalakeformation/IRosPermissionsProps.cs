using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datalakeformation
{
    /// <summary>Properties for defining a `RosPermissions`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPermissionsProps), fullyQualifiedName: "@alicloud/ros-cdk-datalakeformation.RosPermissionsProps")]
    public interface IRosPermissionsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: catalogId: The catalog id.
        /// </remarks>
        [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CatalogId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: permissions: The permissions list.
        /// </remarks>
        [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-datalakeformation.RosPermissions.PermissionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Permissions
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: refreshUserSync: Specifies whether to refresh user synchronization before creating permissions. Newly created RAM users may not be immediately synchronized, requiring a refresh to ensure they are available. Set to true to enable user synchronization refresh, which may cause a 30-second wait. Set to false to skip the refresh and avoid the 30-second wait. Default value: false.
        /// </remarks>
        [JsiiProperty(name: "refreshUserSync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshUserSync
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPermissions`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPermissionsProps), fullyQualifiedName: "@alicloud/ros-cdk-datalakeformation.RosPermissionsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Datalakeformation.IRosPermissionsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: catalogId: The catalog id.
            /// </remarks>
            [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CatalogId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: permissions: The permissions list.
            /// </remarks>
            [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-datalakeformation.RosPermissions.PermissionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Permissions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: refreshUserSync: Specifies whether to refresh user synchronization before creating permissions. Newly created RAM users may not be immediately synchronized, requiring a refresh to ensure they are available. Set to true to enable user synchronization refresh, which may cause a 30-second wait. Set to false to skip the refresh and avoid the 30-second wait. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshUserSync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshUserSync
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
