using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::DeployGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.RosDeployGroupProps")]
    public class RosDeployGroupProps : AlibabaCloud.SDK.ROS.CDK.Edas.IRosDeployGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: Application ID
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AppId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Group name, maximum length of 64.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupName
        {
            get;
            set;
        }
    }
}
