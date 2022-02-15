using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Information about the application's runtime components.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.RuntimeInfo")]
    public class RuntimeInfo : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IRuntimeInfo
    {
        /// <summary>The list of libraries loaded in the application, associated with their versions.</summary>
        [JsiiProperty(name: "libraries", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}")]
        public System.Collections.Generic.IDictionary<string, string> Libraries
        {
            get;
            set;
        }
    }
}
