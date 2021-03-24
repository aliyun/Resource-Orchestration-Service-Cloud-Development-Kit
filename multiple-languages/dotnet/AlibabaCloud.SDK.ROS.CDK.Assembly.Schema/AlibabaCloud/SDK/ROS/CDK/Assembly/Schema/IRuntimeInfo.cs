using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Information about the application's runtime components.</summary>
    [JsiiInterface(nativeType: typeof(IRuntimeInfo), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.RuntimeInfo")]
    public interface IRuntimeInfo
    {
        /// <summary>The list of libraries loaded in the application, associated with their versions.</summary>
        [JsiiProperty(name: "libraries", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}")]
        System.Collections.Generic.IDictionary<string, string> Libraries
        {
            get;
        }

        /// <summary>Information about the application's runtime components.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRuntimeInfo), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.RuntimeInfo")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IRuntimeInfo
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The list of libraries loaded in the application, associated with their versions.</summary>
            [JsiiProperty(name: "libraries", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}")]
            public System.Collections.Generic.IDictionary<string, string> Libraries
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>>()!;
            }
        }
    }
}
