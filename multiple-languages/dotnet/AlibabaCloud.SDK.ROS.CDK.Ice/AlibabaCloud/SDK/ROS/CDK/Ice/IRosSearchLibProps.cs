using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    /// <summary>Properties for defining a `RosSearchLib`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSearchLibProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.RosSearchLibProps")]
    public interface IRosSearchLibProps
    {
        /// <remarks>
        /// <strong>Property</strong>: searchLibName: The name of the Search Lib.
        /// </remarks>
        [JsiiProperty(name: "searchLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SearchLibName
        {
            get;
        }

        /// <summary>Properties for defining a `RosSearchLib`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSearchLibProps), fullyQualifiedName: "@alicloud/ros-cdk-ice.RosSearchLibProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ice.IRosSearchLibProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: searchLibName: The name of the Search Lib.
            /// </remarks>
            [JsiiProperty(name: "searchLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SearchLibName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
