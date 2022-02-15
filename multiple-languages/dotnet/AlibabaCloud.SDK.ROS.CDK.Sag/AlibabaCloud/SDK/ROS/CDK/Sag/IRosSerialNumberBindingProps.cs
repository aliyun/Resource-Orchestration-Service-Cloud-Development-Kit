using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `ALIYUN::SAG::SerialNumberBinding`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSerialNumberBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosSerialNumberBindingProps")]
    public interface IRosSerialNumberBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serialNumber: The serial number (SN) of the SAG device.
        /// </remarks>
        [JsiiProperty(name: "serialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SerialNumber
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: The ID of the SAG instance.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SmartAgId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SAG::SerialNumberBinding`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSerialNumberBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosSerialNumberBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosSerialNumberBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: serialNumber: The serial number (SN) of the SAG device.
            /// </remarks>
            [JsiiProperty(name: "serialNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SerialNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: smartAgId: The ID of the SAG instance.
            /// </remarks>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SmartAgId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
