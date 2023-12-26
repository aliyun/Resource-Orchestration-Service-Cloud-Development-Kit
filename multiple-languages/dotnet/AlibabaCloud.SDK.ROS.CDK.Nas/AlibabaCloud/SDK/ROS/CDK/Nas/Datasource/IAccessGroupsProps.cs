using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas.Datasource
{
    /// <summary>Properties for defining a `AccessGroups`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccessGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.AccessGroupsProps")]
    public interface IAccessGroupsProps
    {
        /// <summary>Property accessGroupName: The name of the permission group.</summary>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AccessGroups`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccessGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.AccessGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IAccessGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessGroupName: The name of the permission group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessGroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
