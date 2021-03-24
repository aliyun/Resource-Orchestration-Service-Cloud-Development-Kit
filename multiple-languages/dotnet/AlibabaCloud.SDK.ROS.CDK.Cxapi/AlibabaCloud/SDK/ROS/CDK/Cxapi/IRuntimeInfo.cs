using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>(deprecated) Backwards compatibility for when 'RuntimeInfo'&#xD; was defined here.</summary>
    /// <remarks>
    /// This is necessary because its used as an input in the stable
    /// 
    /// <strong>Stability</strong>: Deprecated
    /// 
    /// <strong>See</strong>: core.ConstructNode.synth
    /// 
    /// <strong>Alicloud</strong>: /ros-cdk-core library.
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRuntimeInfo), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.RuntimeInfo")]
    [System.Obsolete("moved to package 'ros-assembly-schema'")]
    public interface IRuntimeInfo : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IRuntimeInfo
    {

        /// <summary>(deprecated) Backwards compatibility for when 'RuntimeInfo'&#xD; was defined here.</summary>
        /// <remarks>
        /// This is necessary because its used as an input in the stable
        /// 
        /// <strong>Stability</strong>: Deprecated
        /// 
        /// <strong>See</strong>: core.ConstructNode.synth
        /// 
        /// <strong>Alicloud</strong>: /ros-cdk-core library.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRuntimeInfo), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.RuntimeInfo")]
        [System.Obsolete("moved to package 'ros-assembly-schema'")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cxapi.IRuntimeInfo
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
