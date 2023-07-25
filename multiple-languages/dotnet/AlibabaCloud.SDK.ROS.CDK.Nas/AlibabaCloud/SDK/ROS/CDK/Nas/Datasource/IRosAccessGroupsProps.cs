using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::NAS::AccessGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAccessGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.RosAccessGroupsProps")]
    public interface IRosAccessGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessGroupName: The name of the permission group.
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

        /// <summary>Properties for defining a `DATASOURCE::NAS::AccessGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.RosAccessGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IRosAccessGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessGroupName: The name of the permission group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessGroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
