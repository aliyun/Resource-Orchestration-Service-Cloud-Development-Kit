using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`.</summary>
    [JsiiInterface(nativeType: typeof(ISmartAccessGatewayBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.SmartAccessGatewayBindingProps")]
    public interface ISmartAccessGatewayBindingProps
    {
        /// <summary>Property ccnId: The ID of the CCN instance to bind.</summary>
        [JsiiProperty(name: "ccnId", typeJson: "{\"primitive\":\"string\"}")]
        string CcnId
        {
            get;
        }

        /// <summary>Property smartAgId: The ID of the Smart Access Gateway instance.</summary>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"primitive\":\"string\"}")]
        string SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISmartAccessGatewayBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.SmartAccessGatewayBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.ISmartAccessGatewayBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ccnId: The ID of the CCN instance to bind.</summary>
            [JsiiProperty(name: "ccnId", typeJson: "{\"primitive\":\"string\"}")]
            public string CcnId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property smartAgId: The ID of the Smart Access Gateway instance.</summary>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"primitive\":\"string\"}")]
            public string SmartAgId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
