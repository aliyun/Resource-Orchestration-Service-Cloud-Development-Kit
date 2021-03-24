using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::LogConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IRosLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosLogConfigProps")]
    public interface IRosLogConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: slsLogStore: Logstore name of SLS
        /// </remarks>
        [JsiiProperty(name: "slsLogStore", typeJson: "{\"primitive\":\"string\"}")]
        string SlsLogStore
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsProject: Project name of SLS
        /// </remarks>
        [JsiiProperty(name: "slsProject", typeJson: "{\"primitive\":\"string\"}")]
        string SlsProject
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::LogConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosLogConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosLogConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosLogConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: slsLogStore: Logstore name of SLS
            /// </remarks>
            [JsiiProperty(name: "slsLogStore", typeJson: "{\"primitive\":\"string\"}")]
            public string SlsLogStore
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: slsProject: Project name of SLS
            /// </remarks>
            [JsiiProperty(name: "slsProject", typeJson: "{\"primitive\":\"string\"}")]
            public string SlsProject
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
