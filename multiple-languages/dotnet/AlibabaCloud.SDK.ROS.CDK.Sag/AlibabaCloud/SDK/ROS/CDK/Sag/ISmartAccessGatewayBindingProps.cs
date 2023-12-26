using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `SmartAccessGatewayBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISmartAccessGatewayBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.SmartAccessGatewayBindingProps")]
    public interface ISmartAccessGatewayBindingProps
    {
        /// <summary>Property ccnId: The ID of the CCN instance to bind.</summary>
        [JsiiProperty(name: "ccnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CcnId
        {
            get;
        }

        /// <summary>Property smartAgId: The ID of the Smart Access Gateway instance.</summary>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `SmartAccessGatewayBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISmartAccessGatewayBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.SmartAccessGatewayBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.ISmartAccessGatewayBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ccnId: The ID of the CCN instance to bind.</summary>
            [JsiiProperty(name: "ccnId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CcnId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property smartAgId: The ID of the Smart Access Gateway instance.</summary>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SmartAgId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
