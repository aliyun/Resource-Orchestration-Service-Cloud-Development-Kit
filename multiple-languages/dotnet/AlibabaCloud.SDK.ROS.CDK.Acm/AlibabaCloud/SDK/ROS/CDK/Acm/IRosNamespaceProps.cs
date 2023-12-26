using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm
{
    /// <summary>Properties for defining a `RosNamespace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-namespace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-acm.RosNamespaceProps")]
    public interface IRosNamespaceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: Namespace name
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Properties for defining a `RosNamespace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-namespace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-acm.RosNamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acm.IRosNamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Namespace name
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
