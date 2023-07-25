using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CMS::SlsGroups`.</summary>
    [JsiiInterface(nativeType: typeof(ISlsGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.SlsGroupsProps")]
    public interface ISlsGroupsProps
    {
        /// <summary>Property slsGroupName: The name of the Logstore group.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(ISlsGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.SlsGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.ISlsGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property slsGroupName: The name of the Logstore group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slsGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsGroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
