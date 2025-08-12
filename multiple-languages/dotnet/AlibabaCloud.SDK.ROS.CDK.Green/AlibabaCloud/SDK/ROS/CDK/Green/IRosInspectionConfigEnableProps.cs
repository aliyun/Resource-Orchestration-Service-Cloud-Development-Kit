using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Green
{
    /// <summary>Properties for defining a `RosInspectionConfigEnable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInspectionConfigEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-green.RosInspectionConfigEnableProps")]
    public interface IRosInspectionConfigEnableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configType: The type of the configuration to be enabled for inspection.
        /// </remarks>
        [JsiiProperty(name: "configType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConfigType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceCode: The code of the service to be enabled for inspection.
        /// </remarks>
        [JsiiProperty(name: "serviceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceCode
        {
            get;
        }

        /// <summary>Properties for defining a `RosInspectionConfigEnable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInspectionConfigEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-green.RosInspectionConfigEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Green.IRosInspectionConfigEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: configType: The type of the configuration to be enabled for inspection.
            /// </remarks>
            [JsiiProperty(name: "configType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConfigType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceCode: The code of the service to be enabled for inspection.
            /// </remarks>
            [JsiiProperty(name: "serviceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceCode
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
