using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::NAS::AccessGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.RosAccessGroupProps")]
    public class RosAccessGroupProps : AlibabaCloud.SDK.ROS.CDK.Nas.IRosAccessGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessGroupName: Permission group name
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccessGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessGroupType: Permission group type, including the Vpc and Classic types
        /// </remarks>
        [JsiiProperty(name: "accessGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccessGroupType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Permission group description. It is the same as the permission group name by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
