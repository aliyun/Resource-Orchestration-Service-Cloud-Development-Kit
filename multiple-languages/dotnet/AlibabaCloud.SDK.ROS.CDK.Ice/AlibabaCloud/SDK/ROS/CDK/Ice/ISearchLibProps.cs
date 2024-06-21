using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    /// <summary>Properties for defining a `SearchLib`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISearchLibProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.SearchLibProps")]
    public interface ISearchLibProps
    {
        /// <summary>Property searchLibName: The name of the Search Lib.</summary>
        [JsiiProperty(name: "searchLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SearchLibName
        {
            get;
        }

        /// <summary>Properties for defining a `SearchLib`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISearchLibProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.SearchLibProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ice.ISearchLibProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property searchLibName: The name of the Search Lib.</summary>
            [JsiiProperty(name: "searchLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SearchLibName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
