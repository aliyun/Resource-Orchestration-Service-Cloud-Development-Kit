using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `RosSmartAccessGatewayBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSmartAccessGatewayBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosSmartAccessGatewayBindingProps")]
    public interface IRosSmartAccessGatewayBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ccnId: The ID of the CCN instance to bind.
        /// </remarks>
        [JsiiProperty(name: "ccnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CcnId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: The ID of the Smart Access Gateway instance.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `RosSmartAccessGatewayBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSmartAccessGatewayBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosSmartAccessGatewayBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosSmartAccessGatewayBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ccnId: The ID of the CCN instance to bind.
            /// </remarks>
            [JsiiProperty(name: "ccnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CcnId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: smartAgId: The ID of the Smart Access Gateway instance.
            /// </remarks>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SmartAgId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
