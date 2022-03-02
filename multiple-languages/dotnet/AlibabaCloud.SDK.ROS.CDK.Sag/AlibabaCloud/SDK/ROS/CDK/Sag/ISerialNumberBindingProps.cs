using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::SerialNumberBinding`.</summary>
    [JsiiInterface(nativeType: typeof(ISerialNumberBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.SerialNumberBindingProps")]
    public interface ISerialNumberBindingProps
    {
        /// <summary>Property serialNumber: The serial number (SN) of the SAG device.</summary>
        [JsiiProperty(name: "serialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SerialNumber
        {
            get;
        }

        /// <summary>Property smartAgId: The ID of the SAG instance.</summary>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::SerialNumberBinding`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISerialNumberBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.SerialNumberBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.ISerialNumberBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property serialNumber: The serial number (SN) of the SAG device.</summary>
            [JsiiProperty(name: "serialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SerialNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property smartAgId: The ID of the SAG instance.</summary>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SmartAgId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
