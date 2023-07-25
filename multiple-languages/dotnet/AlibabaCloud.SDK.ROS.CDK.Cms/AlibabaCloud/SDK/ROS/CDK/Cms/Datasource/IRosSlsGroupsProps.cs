using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CMS::SlsGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSlsGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.RosSlsGroupsProps")]
    public interface IRosSlsGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: slsGroupName: The name of the Logstore group.
        /// </remarks>
        [JsiiProperty(name: "slsGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CMS::SlsGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSlsGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.RosSlsGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IRosSlsGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: slsGroupName: The name of the Logstore group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsGroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
