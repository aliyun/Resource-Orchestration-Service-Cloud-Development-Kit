using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `RosLogConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-logconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosLogConfigProps")]
    public interface IRosLogConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: slsLogStore: Logstore name of SLS
        /// </remarks>
        [JsiiProperty(name: "slsLogStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsLogStore
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsProject: Project name of SLS
        /// </remarks>
        [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsProject
        {
            get;
        }

        /// <summary>Properties for defining a `RosLogConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-logconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosLogConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosLogConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: slsLogStore: Logstore name of SLS
            /// </remarks>
            [JsiiProperty(name: "slsLogStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsLogStore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: slsProject: Project name of SLS
            /// </remarks>
            [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsProject
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
