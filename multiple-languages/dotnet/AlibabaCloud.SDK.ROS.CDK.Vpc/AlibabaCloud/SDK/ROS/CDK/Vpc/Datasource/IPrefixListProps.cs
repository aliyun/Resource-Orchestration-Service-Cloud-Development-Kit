using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `PrefixList`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPrefixListProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.PrefixListProps")]
    public interface IPrefixListProps
    {
        /// <summary>Property prefixListId: The ID of the query Prefix List.</summary>
        [JsiiProperty(name: "prefixListId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrefixListId
        {
            get;
        }

        /// <summary>Properties for defining a `PrefixList`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPrefixListProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.PrefixListProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IPrefixListProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property prefixListId: The ID of the query Prefix List.</summary>
            [JsiiProperty(name: "prefixListId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrefixListId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
