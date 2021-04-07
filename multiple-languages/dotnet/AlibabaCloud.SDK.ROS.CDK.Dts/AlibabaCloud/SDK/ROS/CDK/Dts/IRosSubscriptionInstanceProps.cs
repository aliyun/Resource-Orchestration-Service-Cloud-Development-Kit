using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSubscriptionInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps")]
    public interface IRosSubscriptionInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configuration: Subscription configuration.
        /// </remarks>
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionInstance.ConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Configuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle. Default: MySQL.
        /// </remarks>
        [JsiiProperty(name: "sourceEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceEndpointInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSubscriptionInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IRosSubscriptionInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: configuration: Subscription configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionInstance.ConfigurationProperty\"}]}}", isOptional: true)]
            public object? Configuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle. Default: MySQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceEndpointInstanceType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
