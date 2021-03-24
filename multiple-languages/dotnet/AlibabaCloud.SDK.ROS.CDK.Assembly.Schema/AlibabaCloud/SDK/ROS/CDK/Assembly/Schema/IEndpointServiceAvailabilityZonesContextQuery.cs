using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Query to endpoint service context provider.</summary>
    [JsiiInterface(nativeType: typeof(IEndpointServiceAvailabilityZonesContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery")]
    public interface IEndpointServiceAvailabilityZonesContextQuery
    {
        /// <summary>Query account.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        string Account
        {
            get;
        }

        /// <summary>Query region.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        string Region
        {
            get;
        }

        /// <summary>Query service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
        {
            get;
        }

        /// <summary>Query to endpoint service context provider.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEndpointServiceAvailabilityZonesContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IEndpointServiceAvailabilityZonesContextQuery
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Query account.</summary>
            [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
            public string Account
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Query region.</summary>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            public string Region
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Query service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
