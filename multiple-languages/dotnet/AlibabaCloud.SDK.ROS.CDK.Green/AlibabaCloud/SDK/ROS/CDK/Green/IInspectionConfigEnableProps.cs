using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Green
{
    /// <summary>Properties for defining a `InspectionConfigEnable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInspectionConfigEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-green.InspectionConfigEnableProps")]
    public interface IInspectionConfigEnableProps
    {
        /// <summary>Property configType: The type of the configuration to be enabled for inspection.</summary>
        [JsiiProperty(name: "configType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConfigType
        {
            get;
        }

        /// <summary>Property serviceCode: The code of the service to be enabled for inspection.</summary>
        [JsiiProperty(name: "serviceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceCode
        {
            get;
        }

        /// <summary>Properties for defining a `InspectionConfigEnable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInspectionConfigEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-green.InspectionConfigEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Green.IInspectionConfigEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property configType: The type of the configuration to be enabled for inspection.</summary>
            [JsiiProperty(name: "configType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConfigType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceCode: The code of the service to be enabled for inspection.</summary>
            [JsiiProperty(name: "serviceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceCode
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
