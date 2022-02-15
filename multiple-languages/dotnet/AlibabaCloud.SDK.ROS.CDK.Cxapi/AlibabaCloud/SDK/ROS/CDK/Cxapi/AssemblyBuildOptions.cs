using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cxapi.AssemblyBuildOptions")]
    public class AssemblyBuildOptions : AlibabaCloud.SDK.ROS.CDK.Cxapi.IAssemblyBuildOptions
    {
        /// <summary>Include the specified runtime information (module versions) in manifest.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - if this option is not specified, runtime info will not be included
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "runtimeInfo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.RuntimeInfo\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Cxapi.IRuntimeInfo? RuntimeInfo
        {
            get;
            set;
        }
    }
}
