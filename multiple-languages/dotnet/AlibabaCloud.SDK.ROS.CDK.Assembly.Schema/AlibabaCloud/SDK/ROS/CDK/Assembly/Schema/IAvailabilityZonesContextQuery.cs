using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Query to availability zone context provider.</summary>
    [JsiiInterface(nativeType: typeof(IAvailabilityZonesContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AvailabilityZonesContextQuery")]
    public interface IAvailabilityZonesContextQuery
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

        /// <summary>Query to availability zone context provider.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAvailabilityZonesContextQuery), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AvailabilityZonesContextQuery")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAvailabilityZonesContextQuery
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
        }
    }
}
