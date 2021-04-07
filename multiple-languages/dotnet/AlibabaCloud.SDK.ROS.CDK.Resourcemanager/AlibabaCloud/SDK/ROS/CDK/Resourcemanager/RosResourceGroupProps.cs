using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ResourceGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosResourceGroupProps")]
    public class RosResourceGroupProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosResourceGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: displayName: The display name of the resource group
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DisplayName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The unique identifier of the resource group
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Name
        {
            get;
            set;
        }
    }
}
