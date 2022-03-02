using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EDAS::DeployGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-edas.DeployGroupProps")]
    public class DeployGroupProps : AlibabaCloud.SDK.ROS.CDK.Edas.IDeployGroupProps
    {
        /// <summary>Property appId: Application ID.</summary>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AppId
        {
            get;
            set;
        }

        /// <summary>Property groupName: Group name, maximum length of 64.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupName
        {
            get;
            set;
        }
    }
}
