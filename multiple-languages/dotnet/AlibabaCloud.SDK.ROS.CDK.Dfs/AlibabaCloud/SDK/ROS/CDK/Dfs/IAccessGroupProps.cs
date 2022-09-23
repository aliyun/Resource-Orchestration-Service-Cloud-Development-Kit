using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dfs
{
    /// <summary>Properties for defining a `ALIYUN::DFS::AccessGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.AccessGroupProps")]
    public interface IAccessGroupProps
    {
        /// <summary>Property accessGroupName: The Name of Access Group.</summary>
        /// <remarks>
        /// The naming rules are as follows:
        /// The value contains 6 to 100 characters.
        /// Globally unique and cannot be an empty string.
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the access_group.</summary>
        /// <remarks>
        /// The value contains 0 to 100 characters
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkType: The NetworkType of Access Group.</summary>
        /// <remarks>
        /// Valid values: VPC.
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DFS::AccessGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.AccessGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dfs.IAccessGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessGroupName: The Name of Access Group.</summary>
            /// <remarks>
            /// The naming rules are as follows:
            /// The value contains 6 to 100 characters.
            /// Globally unique and cannot be an empty string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the access_group.</summary>
            /// <remarks>
            /// The value contains 0 to 100 characters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkType: The NetworkType of Access Group.</summary>
            /// <remarks>
            /// Valid values: VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
