using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::ProvisionConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IRosProvisionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosProvisionConfigProps")]
    public interface IRosProvisionConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: functionName: Function name
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
        string FunctionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: qualifier: Service's alias.
        /// Example : "LATEST"
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}")]
        string Qualifier
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: target: Number of provision
        /// </remarks>
        [JsiiProperty(name: "target", typeJson: "{\"primitive\":\"number\"}")]
        double Target
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::FC::ProvisionConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosProvisionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosProvisionConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IRosProvisionConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: functionName: Function name
            /// </remarks>
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
            public string FunctionName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: qualifier: Service's alias.
            /// Example : "LATEST"
            /// </remarks>
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}")]
            public string Qualifier
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Service name
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: target: Number of provision
            /// </remarks>
            [JsiiProperty(name: "target", typeJson: "{\"primitive\":\"number\"}")]
            public double Target
            {
                get => GetInstanceProperty<double>()!;
            }
        }
    }
}
