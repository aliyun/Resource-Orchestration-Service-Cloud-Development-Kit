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
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cxapi.RuntimeInfo")]
    public class RuntimeInfo : AlibabaCloud.SDK.ROS.CDK.Cxapi.IRuntimeInfo
    {
        /// <summary>The list of libraries loaded in the application, associated with their versions.</summary>
        [JsiiProperty(name: "libraries", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOverride: true)]
        public System.Collections.Generic.IDictionary<string, string> Libraries
        {
            get;
            set;
        }
    }
}
