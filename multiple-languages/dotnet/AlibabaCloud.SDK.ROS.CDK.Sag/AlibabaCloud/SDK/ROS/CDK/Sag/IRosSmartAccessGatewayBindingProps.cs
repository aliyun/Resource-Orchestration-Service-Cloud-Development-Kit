using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSmartAccessGatewayBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosSmartAccessGatewayBindingProps")]
    public interface IRosSmartAccessGatewayBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ccnId: The ID of the CCN instance to bind.
        /// </remarks>
        [JsiiProperty(name: "ccnId", typeJson: "{\"primitive\":\"string\"}")]
        string CcnId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: The ID of the Smart Access Gateway instance.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"primitive\":\"string\"}")]
        string SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSmartAccessGatewayBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosSmartAccessGatewayBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosSmartAccessGatewayBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ccnId: The ID of the CCN instance to bind.
            /// </remarks>
            [JsiiProperty(name: "ccnId", typeJson: "{\"primitive\":\"string\"}")]
            public string CcnId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: smartAgId: The ID of the Smart Access Gateway instance.
            /// </remarks>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"primitive\":\"string\"}")]
            public string SmartAgId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
