using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datalakeformation
{
    /// <summary>Properties for defining a `Permissions`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPermissionsProps), fullyQualifiedName: "@alicloud/ros-cdk-datalakeformation.PermissionsProps")]
    public interface IPermissionsProps
    {
        /// <summary>Property catalogId: The catalog id.</summary>
        [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CatalogId
        {
            get;
        }

        /// <summary>Property permissions: The permissions list.</summary>
        [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-datalakeformation.RosPermissions.PermissionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Permissions
        {
            get;
        }

        /// <summary>Property refreshUserSync: Specifies whether to refresh user synchronization before creating permissions.</summary>
        /// <remarks>
        /// Newly created RAM users may not be immediately synchronized, requiring a refresh to ensure they are available. Set to true to enable user synchronization refresh, which may cause a 30-second wait. Set to false to skip the refresh and avoid the 30-second wait. Default value: false.
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

        /// <summary>Properties for defining a `Permissions`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPermissionsProps), fullyQualifiedName: "@alicloud/ros-cdk-datalakeformation.PermissionsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Datalakeformation.IPermissionsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property catalogId: The catalog id.</summary>
            [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CatalogId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property permissions: The permissions list.</summary>
            [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-datalakeformation.RosPermissions.PermissionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Permissions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property refreshUserSync: Specifies whether to refresh user synchronization before creating permissions.</summary>
            /// <remarks>
            /// Newly created RAM users may not be immediately synchronized, requiring a refresh to ensure they are available. Set to true to enable user synchronization refresh, which may cause a 30-second wait. Set to false to skip the refresh and avoid the 30-second wait. Default value: false.
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
