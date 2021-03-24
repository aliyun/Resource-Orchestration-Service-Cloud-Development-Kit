using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Represents a missing piece of context.</summary>
    [JsiiInterface(nativeType: typeof(IMissingContext), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.MissingContext")]
    public interface IMissingContext
    {
        /// <summary>The missing context key.</summary>
        [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
        string Key
        {
            get;
        }

        /// <summary>A set of provider-specific options.</summary>
        [JsiiProperty(name: "props", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AmiContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AvailabilityZonesContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.VpcContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery\"}]}}")]
        object Props
        {
            get;
        }

        /// <summary>The provider from which we expect this context key to be obtained.</summary>
        [JsiiProperty(name: "provider", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ContextProvider\"}")]
        AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ContextProvider Provider
        {
            get;
        }

        /// <summary>Represents a missing piece of context.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMissingContext), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.MissingContext")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMissingContext
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The missing context key.</summary>
            [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}")]
            public string Key
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>A set of provider-specific options.</summary>
            [JsiiProperty(name: "props", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AmiContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AvailabilityZonesContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.VpcContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery\"}]}}")]
            public object Props
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>The provider from which we expect this context key to be obtained.</summary>
            [JsiiProperty(name: "provider", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ContextProvider\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ContextProvider Provider
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ContextProvider>()!;
            }
        }
    }
}
