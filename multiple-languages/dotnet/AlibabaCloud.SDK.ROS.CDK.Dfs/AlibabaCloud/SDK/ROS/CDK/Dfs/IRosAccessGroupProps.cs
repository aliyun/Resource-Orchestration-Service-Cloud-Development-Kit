using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dfs
{
    /// <summary>Properties for defining a `RosAccessGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.RosAccessGroupProps")]
    public interface IRosAccessGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessGroupName: The Name of Access Group. The naming rules are as follows:
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the access_group.
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

        /// <remarks>
        /// <strong>Property</strong>: networkType: The NetworkType of Access Group. Valid values: VPC.
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

        /// <summary>Properties for defining a `RosAccessGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.RosAccessGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dfs.IRosAccessGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessGroupName: The Name of Access Group. The naming rules are as follows:
            /// The value contains 6 to 100 characters.
            /// Globally unique and cannot be an empty string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the access_group.
            /// The value contains 0 to 100 characters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: networkType: The NetworkType of Access Group. Valid values: VPC.
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
